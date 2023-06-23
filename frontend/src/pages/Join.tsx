import React from "react";
import { JoinPage } from "../components/pages/JoinPage";

const Join: React.FC<{ baseurl: string }> = ({ baseurl }) => {
  return <JoinPage baseurl={baseurl} />;
};

export default Join;
