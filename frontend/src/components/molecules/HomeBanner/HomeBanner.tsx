import React from "react";
import { Link } from "react-router-dom";

import { Banner } from "./styled";

import { Button } from "../../atoms/Button";
import { FlexBox } from "../../atoms/FlexBox";
import { Card } from "../../atoms/Card";

import { FlagBanner } from "phosphor-react";
import { useTheme } from "styled-components";

export const HomeBanner: React.FC = () => {
  const theme = useTheme();

  return (
    <Banner>
      <Card>
        <FlexBox direction="column" gap="1.5rem" align="center" width="250px">
          <FlagBanner size={32} color={theme?.colors.primary} weight="thin" />
          <h2>
            Registration for the <strong>TeamSnap Mega Tournament</strong> is
            now open!
          </h2>
          <Link to="/join">
            <Button>Register your team</Button>
          </Link>
        </FlexBox>
      </Card>
    </Banner>
  );
};
