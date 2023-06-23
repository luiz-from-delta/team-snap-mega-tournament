import React from "react";

import { connect } from "react-redux";
import { selectTeams } from "../../../redux-cruft/selectors/teams";
import { getTeams } from "../../../redux-cruft/actions/getTeams";

import { MainPageLayout } from "../../layouts/MainPageLayout";

import { BreadcrumbPaths } from "../../atoms/Breadcrumb/types";
import { TeamsPageProps } from "./types";
import TeamCard from "../../TeamCard";

const breadcrumbPaths: BreadcrumbPaths = [
  { href: "/", label: "Dashboard" },
  { href: "/teams", label: "Teams" },
];

export const TeamsPageComponent: React.FC<TeamsPageProps> = ({
  getTeams,
  teams,
}) => {
  const [cards, setCards] = React.useState<any>([]);

  React.useEffect(() => {
    getTeams();
  }, []);

  React.useEffect(() => {
    setCards([]);
  }, [teams]);

  React.useEffect(() => {
    teams?.forEach((team) => {
      setCards([...cards, <TeamCard teamName={team.teamName} />]);
    });
  }, [teams]);

  return (
    <MainPageLayout breadcrumbProps={{ paths: breadcrumbPaths }}>
      {cards}
    </MainPageLayout>
  );
};

const mapDispatchToProps = {
  getTeams,
};

const mapStateToProps = (state: any) => ({
  teams: selectTeams(state),
});

export const TeamsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsPageComponent);
