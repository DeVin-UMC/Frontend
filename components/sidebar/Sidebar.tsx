import "./Sidebar.scss";
import SidebarRow from "./row/SidebarRow";
import Image from "next/image";

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
        <SidebarRow src="/icons/CL_P.svg" title="Project" />
      </ul>
    </nav>
  );
}
