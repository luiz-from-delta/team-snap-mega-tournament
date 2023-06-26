import React from "react";

import { connect } from "react-redux";
import { selectTeams } from "../../../redux-cruft/selectors/teams";
import { getTeams } from "../../../redux-cruft/actions/getTeams";

import { MainPageLayout } from "../../layouts/MainPageLayout";

import { BreadcrumbPaths } from "../../atoms/Breadcrumb/types";
import { TeamsPageProps } from "./types";

import { Card } from "../../atoms/Card";
import { FlexBox } from "../../atoms/FlexBox";
import { useTheme } from "styled-components";
import { SmileySticker } from "phosphor-react";
import { GridBox } from "../../atoms/GridBox";

const breadcrumbPaths: BreadcrumbPaths = [
  { href: "/", label: "Dashboard" },
  { href: "/teams", label: "Teams" },
];

export const TeamsPageComponent: React.FC<TeamsPageProps> = ({
  getTeams,
  teams,
}) => {
  const theme = useTheme();

  React.useEffect(() => {
    getTeams();
  }, []);

  return (
    <MainPageLayout breadcrumbProps={{ paths: breadcrumbPaths }}>
      <GridBox cols={4} gap="1.5rem" align="stretch" minWidth={258}>
        {teams?.map((team) => (
          <Card key={team.id} padding="20px 24px" style={{ fontSize: 14 }}>
            <FlexBox direction="column" gap="1rem">
              <SmileySticker
                color={theme?.colors.primary}
                weight="light"
                size={32}
              />
              <FlexBox direction="column" gap="0.25rem">
                <span>
                  Team: <strong>{team.name}</strong>
                </span>
                <span>
                  Captain:{" "}
                  <strong>
                    {team.captain_first_name} {team.captain_last_name}
                  </strong>
                </span>
              </FlexBox>
            </FlexBox>
          </Card>
        ))}
      </GridBox>
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
