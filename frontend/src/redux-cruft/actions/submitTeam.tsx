import { update } from "./update";
import API from "../../api";
import { Team, Teams } from "../../api.types";

type Params = {
  name: string;
  captain_first_name: string;
  captain_last_name: string;
};

export const submitTeam = (params: Params) => {
  return async (dispatch: any, getTeams: () => { teams: Teams }) => {
    const { teams } = getTeams();
    const { team } = await API.postData("teams", params);
    dispatch(update({ key: "teams", value: [...teams, team as Team] }));
  };
};
