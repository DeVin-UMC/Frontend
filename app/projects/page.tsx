"use client";

import { useQuery } from "@tanstack/react-query";
import ContentsWindow from "components/contentsWindow/ContentsWindow";
import { fetchProjects } from "../../api/projects";
import styles from "./page.module.scss";

const Projects = () => {
  const { data } = useQuery(["projects"], fetchProjects.paging);
  console.log(data);
  return (
    <>
      <ContentsWindow title="/titles/PROJECT.svg">test</ContentsWindow>
    </>
  );
};

export default Projects;
