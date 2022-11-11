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
        <SidebarRow src="/icons/CL_MBL.svg" title="Profile" />
        <SidebarRow src="/icons/CL_Q.svg" title="Q&A" />
        <SidebarRow src="/icons/CL_S.svg" title="Study" />
        <Link href="/projects">
          <SidebarRow src="/icons/CL_P.svg" title="Project" />
        </Link>
      </ul>
    </nav>
  );
}
