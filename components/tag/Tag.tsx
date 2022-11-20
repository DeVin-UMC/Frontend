import { useState, CSSProperties } from "react";
import classNames from "classNames/bind";
import styles from "./Tag.module.scss";

type Props = {
  children: string;
};

const cx = classNames.bind(styles);

// 텍스트 길이 측정 함수
const getTextWidth = (text: string, font: string): string => {
  const canvas = document.createElement("canvas");
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const context = canvas.getContext("2d")!;
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width.toString();
};

const Tag = ({ children }: Props) => {
  const [click, setClick] = useState(false);

  const tagWidth = getTextWidth(children, "normal 12pt D2Coding") + "px";

  // 인라인 스타일을 통해 width를 텍스트 길이에 따라 가변적으로 조절
  const inlineStyle: CSSProperties = {
    width: tagWidth,
  };

  return (
    <div
      className={click ? cx("tag", "clicked") : cx("tag")}
      style={inlineStyle}
      onClick={(e) => {
        e.preventDefault();
        setClick(click ? false : true);
      }}
    >
      {children}
    </div>
  );
};

export default Tag;
