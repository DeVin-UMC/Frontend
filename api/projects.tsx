import { httpClient } from "./client/httpClient";

export const fetchProjects = {
  paging: async () => await httpClient.get("/projects"), // 프로젝트 페이징
};
