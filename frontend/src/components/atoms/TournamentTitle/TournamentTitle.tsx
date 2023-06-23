import React from "react";

import * as sc from "./styled";

import { Trophy } from "phosphor-react";

export const TournamentTitle: React.FC = () => {
  return (
    <sc.Title>
      <Trophy /> TeamSnap Mega Tournament
    </sc.Title>
  );
};
