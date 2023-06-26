import React from "react";

import * as sc from "./styled";

import teamSnapLogo from "../../../assets/teamsnap.png";

export const Header: React.FC<{}> = () => {
  return (
    <sc.Header>
      <div>
        <img src={teamSnapLogo} width={130} />
      </div>
    </sc.Header>
  );
};
