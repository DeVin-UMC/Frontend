import "../styles/globals.css";
import React from "react";
import ReactQueryWrapper from "./ReactQueryWrapper";
import Sidebar from "../components/sidebar/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko-KR">
      <head>
        <title>Devin</title>
        <meta name="description" content="Developer community Devin" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body style={{ display: 'flex' }}>
        <Sidebar />
        <ReactQueryWrapper>{children}</ReactQueryWrapper>
      </body>
    </html>
  );
}
