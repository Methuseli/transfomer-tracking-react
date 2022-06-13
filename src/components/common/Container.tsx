import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

type Props = {
  content: React.ReactNode;
};

export default function Container({ content }: Props) {
  return (
    <>
      <SideBar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <NavBar />
        <>{content}</>
      </main>
    </>
  );
}
