import React, { FormEvent, useCallback } from "react";

import { MainPageLayout } from "../../layouts/MainPageLayout";

import { BreadcrumbPaths } from "../../atoms/Breadcrumb/types";

import { JoinPageProps } from "./types";

import { FormField } from "../../atoms/FormField";
import { FlexBox } from "../../atoms/FlexBox";
import { Button } from "../../atoms/Button";
import { ArrowCounterClockwise, PaperPlaneRight } from "phosphor-react";

import { connect } from "react-redux";
import { submitTeam } from "../../../redux-cruft/actions/submitTeam";

const breadcrumbPaths: BreadcrumbPaths = [
  { href: "/", label: "Dashboard" },
  { href: "/join", label: "Register" },
];

export const JoinPageComponent: React.FC<JoinPageProps> = ({ submitTeam }) => {
  const [teamName, setTeamName] = React.useState("");

  const [captainFirstName, setCaptainFirstName] = React.useState("");
  const [captainLastName, setCaptainLastName] = React.useState("");

  const handleChangeTeamName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const teamName = event.target.value;
    setTeamName(teamName);
  };

  const handleChangeCaptainFirstName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const captainFirstName = event.target.value;
    setCaptainFirstName(captainFirstName);
  };

  const handleChangeCaptainLastName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const captainLastName = event.target.value;
    setCaptainLastName(captainLastName);
  };

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      submitTeam({
        name: teamName,
        captain_first_name: captainFirstName,
        captain_last_name: captainLastName,
      });
    },
    [teamName, captainFirstName, captainLastName]
  );

  return (
    <MainPageLayout breadcrumbProps={{ paths: breadcrumbPaths }}>
      <form onSubmit={handleSubmit}>
        <FlexBox direction="column" gap="2rem" width="full">
          <FormField
            label="Team Name"
            name="team-name"
            placeholder="Type the team name"
            value={teamName}
            onChange={handleChangeTeamName}
          />
          <FlexBox gap="1.5rem" width="full">
            <FormField
              label="Captain's First Name"
              name="captain-first-name"
              placeholder="Type the captain's first name"
              value={captainFirstName}
              onChange={handleChangeCaptainFirstName}
            />
            <FormField
              label="Captain's Last Name"
              name="captain-last-name"
              placeholder="Type the captain's last name"
              value={captainLastName}
              onChange={handleChangeCaptainLastName}
            />
          </FlexBox>
          <FlexBox gap="1.5rem">
            <Button icon={<PaperPlaneRight size={18} type="submit" />}>
              Register
            </Button>
            <Button icon={<ArrowCounterClockwise size={18} type="reset" />}>
              Reset Form
            </Button>
          </FlexBox>
        </FlexBox>
      </form>
    </MainPageLayout>
  );
};

const mapDispatchToProps = {
  submitTeam,
};

export const JoinPage = connect(null, mapDispatchToProps)(JoinPageComponent);
