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
  baseUrl: string;
  loading: boolean;
}

export interface ProjectsActions {
  fetchProjects: () => void;
  fetchAPIKey: () => void;
}
