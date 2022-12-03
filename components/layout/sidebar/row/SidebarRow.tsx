import Image from "next/image";
import styles from "./SidebarRow.module.scss";

type Props = {
  src: string;
};

export default function SidebarRow({ src }: Props) {
  return (
    <div className={styles.menu}>
      <Image src={src} alt="icon" width="25" height="25" />
    </div>
  );
}
