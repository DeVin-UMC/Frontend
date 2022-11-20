import Image from "next/image";
import classNames from "classNames/bind";
import styles from "./contentsWindow.module.scss";
import Tag from "components/tag/Tag";

type Props = {
  title: string;
  children: React.ReactNode;
};

const cx = classNames.bind(styles);

const ContentsWindow = ({ title, children }: Props) => {
  return (
    <div className={cx("container")}>
      <div className={cx("window")} />
      <div className={cx("grid-line", "top")}>
        <Image className={cx("title")} src={title} alt="title" layout="fill" />
        <div className={cx("new-post")}>
          <p className={cx("row")}>
            <Image src="/icons/CL_PL.svg" alt="plus" width={20} height={20} />
            &nbsp;새로운 글쓰기
          </p>
        </div>
      </div>
      <div className={cx("grid-line", "center")} />
      <div className={cx("grid-line", "first")} />
      <div className={cx("grid-line", "second")} />
      <div className={cx("grid-line", "third")} />
      <div className={cx("grid-line", "fourth")}>
        <div className={cx("tag-container")}>
          <Tag>태그 테스트</Tag>
          <Tag>여러개 테스트</Tag>
          <Tag>여러개 테스트2</Tag>
          <Tag>여러개 테스트3</Tag>
        </div>
      </div>
    </div>
  );
};

export default ContentsWindow;
