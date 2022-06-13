import React from "react";
import Container from "../common/Container";
import Dashboard from "./Dashboard";

export default function Wrapper() {
  return <Container content={<Dashboard />} />;
}
