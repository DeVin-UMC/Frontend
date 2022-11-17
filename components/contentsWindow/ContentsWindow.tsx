import Image from "next/image";
import styles from "./contentsWindow.module.scss";
import classNames from "classNames/bind";

type Props = {
  title: string;
  children: React.ReactNode;
};

const cx = classNames.bind(styles);

const ContentsWindow = ({ title, children }: Props) => {
  return (
    <div className={cx("container")}>
      <Image className={cx("title")} src={title} alt="project title" width={230} height={70} />
      <div className={cx("grid-line", "top")} />
      <div className={cx("grid-line", "first")} />
      <div className={cx("grid-line", "second")} />
      <div className={cx("window")} />
      <div className={cx("contents", "first")}>test1</div>
      <div className={cx("contents", "second")}>test2</div>
      <div className={cx("contents", "third")}>test3</div>
    </div>
  );
};

export default ContentsWindow;
