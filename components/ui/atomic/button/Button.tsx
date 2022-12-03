import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.scss";

const buttonStyles = cva(styles.base, {
  variants: {
    intent: {
      primary: styles.primary,
      secondary: styles.secondary,
      basic: styles.basic,
      danger: styles.danger,
      tag: styles.tag,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "small",
  },
});
type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    content: string;
  };

const Button = ({ className, intent, size, content, ...props }: Props) => {
  return (
    <button className={buttonStyles({ className, intent, size })} {...props}>
      {content}
    </button>
  );
};

export default Button;
