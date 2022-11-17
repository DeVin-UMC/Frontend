import "./Sidebar.scss";
import SidebarRow from "./row/SidebarRow";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="logo">
        <Image src="/icons/LG.svg" width={25} height={25} alt="icon" />
      </div>
      <ul className="menu-list">
        <SidebarRow src="/icons/CL_MBL.svg" />
        <SidebarRow src="/icons/CL_Q.svg" />
        <SidebarRow src="/icons/CL_S.svg" />
        <Link href="/projects">
          <SidebarRow src="/icons/CL_P.svg" />
        </Link>
      </ul>
    </nav>
  );
}
