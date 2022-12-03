import SidebarRow from "./row/SidebarRow";
import Image from "next/image";
import Link from "next/link";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/icons/LG.svg" width={25} height={25} alt="icon" />
        </Link>
      </div>
      <ul className={styles.menu_list}>
        <Link href="/profile">
          <SidebarRow src="/icons/CL_MBL.svg" />
        </Link>
        <Link href="/qna">
          <SidebarRow src="/icons/CL_Q.svg" />
        </Link>
        <Link href="/study">
          <SidebarRow src="/icons/CL_S.svg" />
        </Link>
        <Link href="/project">
          <SidebarRow src="/icons/CL_P.svg" />
        </Link>
      </ul>
    </nav>
  );
}
