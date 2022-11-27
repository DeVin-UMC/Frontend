import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../../api/projects";
import ContentsWindow from "../../components/contentsWindow/ContentsWindow";

const Projects = () => {
  const { data } = useQuery(["project"], fetchProjects.paging);
  return (
    <>
      <ContentsWindow title="/titles/PROJECT.svg">test</ContentsWindow>
    </>
  );
};

export default Projects;
