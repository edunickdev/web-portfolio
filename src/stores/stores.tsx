import { create } from "zustand";
import menuInterface from "../data/interfaces/generalInterfaces";
import { Project, Projects, ProjectsActions } from "./store_types";
import axios from "axios";

export const useNavMenu = create<menuInterface>((set) => ({
  title: "",
  route: "",
  changeTitle: (menu: string) => set({ title: menu }),
  changeRoute: (route: string) => set({ route: route }),
}));

export const useProjects = create<Projects & ProjectsActions>((set, get) => ({
  projects: [],
  platzi_courses: [],
  apiKey: "",
  baseUrl: "https://ecrprojects.cdn.prismic.io/api/v2",
  loading: false,
  fetchProjects: async () => {
    const currentKey = get().apiKey;

    const response = await axios.get(
      `${get().baseUrl}/documents/search?ref=${currentKey}`
    );

    const filteredProjects = response.data.results.filter(
      (project: { type: string }) => project.type === "project"
    );

    const filteredCourses = response.data.results.filter(
      (project: { type: string }) => project.type === "platzicourses"
    );

    const courses = filteredCourses.map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (course: any) => {
        const newCourse = {
          id_course: course.id,
          title: course.data.title_course[0].text,
          image_url: course.data.logo_course.url,
          alt_data: course.data.alt_data[0].text,
        };
        return newCourse;
      }
    );

    const projects = filteredProjects.map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (project: any) => {
        const techs = [];
        for (let i = 1; i < 7; i++) {
          if (project.data.technologies[0][`tech${i}`][0] === undefined) {
            break;
          } else {
            techs.push(project.data.technologies[0][`tech${i}`][0].text);
          }
        }

        const newProject: Project = {
          id_project: project.id,
          title: project.data.title[0].text,
          link_repo: project.data.link_repo.url,
          main_image: project.data.main_image.url,
          other_images: [
            project.data.other_images[0].first_img.url,
            project.data.other_images[0].second_image.url,
            project.data.other_images[0].third_image.url,
          ],
          technologies: techs,
          name: project.data.title[0].text,
          description: project.data.desciption[0].text,
        };

        return newProject;
      }
    );

    set({ platzi_courses: courses });
    set({ projects });
    set({ loading: true });
  },
  fetchAPIKey: () => {
    axios
      .get(`${get().baseUrl}`)
      .then((response) => {
        set({ apiKey: response.data.refs[0].ref });
      })
      .catch((error) => {
        console.error(error);
      });
  },
}));
