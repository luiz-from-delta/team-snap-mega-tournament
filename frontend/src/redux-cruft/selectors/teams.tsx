import { Teams } from "../../api.types";

export const selectTeams = (state: { teams: Teams }) => {
  return state.teams || [];
};
