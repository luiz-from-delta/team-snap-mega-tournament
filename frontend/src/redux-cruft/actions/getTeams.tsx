import API from "../../api";
import { update } from "./update";

import { Teams } from "../../api.types";

export const getTeams = (_params: any) => {
  return async (dispatch: any): Promise<void> => {
    const { teams } = await API.getData("teams");
    dispatch(update({ key: "teams", value: teams as Teams }));
  };
};
