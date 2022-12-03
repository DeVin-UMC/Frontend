import React from "react";
import styles from "./Typography.module.scss";
import cn from "classNames";

// Defining the HTML tag that the component will support
const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
};

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subheading1" | "subheading2" | "body1" | "body2";
type Color = "primary" | "secondary" | "error";

type Props = {
  variant: Variant;
  color?: Color;
  children: React.ReactNode;
};

const Typography = ({ variant, color, children, ...props }: Props) => {
  const Component = variant ? variantsMapping[variant] : "p";

  // Type assertion: tell the compiler that the variable is a valid HTML tag
  const Tag = Component as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(styles.typography, {
        [styles[`typography--variant-${variant}`]]: variant,
        [styles[`typography--color-${color}`]]: color,
      })}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Typography;
