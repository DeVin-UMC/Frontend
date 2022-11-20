import "./Sidebar.scss";
import SidebarRow from "./row/SidebarRow";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="logo">
        <Link href="/">
          <Image src="/icons/LG.svg" width={25} height={25} alt="icon" />
        </Link>
      </div>
      <ul className="menu-list">
        <Link href="/">
          <SidebarRow src="/icons/CL_MBL.svg" />
        </Link>
        <Link href="/">
          <SidebarRow src="/icons/CL_Q.svg" />
        </Link>
        <Link href="/">
          <SidebarRow src="/icons/CL_S.svg" />
        </Link>
        <Link href="/projects">
          <SidebarRow src="/icons/CL_P.svg" />
        </Link>
      </ul>
    </nav>
  );
}
