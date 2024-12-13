export interface Project {
  id_project: string;
  title: string;
  link_repo: string;
  main_image: string;
  other_images: string[];
  technologies: string[];
  name: string;
  description: string;
  deploy?: string;
  learned?: string;
  strength?: string;
  status?: string;
}

export interface Projects {
  apiKey: string;
  projects: Project[];
  selected_project: number;
  platzi_courses: PlatziCourses[];
  other_courses: PlatziCourses[];
  baseUrl: string;
  loading: boolean;
}

export interface ProjectsActions {
  fetchProjects: () => void;
  fetchAPIKey: () => void;
  selectProject: (index: number) => void;
}

export interface PlatziCourses {
  id_course: string;
  title: string;
  image_url: string;
  alt_data: string;
}
