import Image from "next/image";
import classNames from "classNames/bind";
import styles from "./contentsWindow.module.scss";
import Tag from "components/tag/Tag";

const Projects = () => {
  return (
    <div>
      <div>
        {/* <Image /> */}
        <h4>제목</h4>
        <p>내용</p>
      </div>
      <div>
        <Tag>태그</Tag>
      </div>
    </div>
  );
};

export default Projects;
