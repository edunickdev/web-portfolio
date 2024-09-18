export interface Project {
  id_project: string;
  title: string;
  link_repo: string;
  main_image: string;
  other_images: string[];
  technologies: string[];
  name: string;
  description: string;
}

export interface Projects {
  apiKey: string;
  projects: Project[];
  platzi_courses: PlatziCourses[];
  other_courses: PlatziCourses[];
  baseUrl: string;
  loading: boolean;
}

export interface ProjectsActions {
  fetchProjects: () => void;
  fetchAPIKey: () => void;
}

export interface PlatziCourses {
  id_course: string;
  title: string;
  image_url: string;
  alt_data: string;
}
