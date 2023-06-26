import React from "react";

import { Header } from "../../atoms/Header";

import { MainPageLayoutProps } from "./types";
import { TournamentTitle } from "../../atoms/TournamentTitle";
import { Button } from "../../atoms/Button";
import { Plus, UsersFour } from "phosphor-react";
import { FlexBox } from "../../atoms/FlexBox";
import { Breadcrumb } from "../../atoms/Breadcrumb";
import { Link } from "react-router-dom";

export const MainPageLayout: React.FC<MainPageLayoutProps> = ({
  breadcrumbProps,
  children,
}) => {
  return (
    <main style={{ paddingBottom: 50 }}>
      <Header />
      <FlexBox
        as="section"
        direction="column"
        container={{
          isCentered: true,
          maxWidth: 1200,
        }}
      >
        <FlexBox
          justify="between"
          align="center"
          width="full"
          style={{ marginBottom: 85 }}
        >
          <FlexBox direction="column" gap="1rem">
            <TournamentTitle />
            <Breadcrumb {...breadcrumbProps} />
          </FlexBox>
          <FlexBox gap="1rem">
            <Link to="/teams">
              <Button icon={<UsersFour size={18} />}>View Teams</Button>
            </Link>
            <Link to="/join">
              <Button icon={<Plus size={18} />}>Register Teams</Button>
            </Link>
          </FlexBox>
        </FlexBox>
        {children}
      </FlexBox>
    </main>
  );
};
