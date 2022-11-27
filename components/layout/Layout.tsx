import Sidebar from "./sidebar/Sidebar";
import React, { ReactNode } from "react";
import styles from "./Layout.module.scss";

type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
