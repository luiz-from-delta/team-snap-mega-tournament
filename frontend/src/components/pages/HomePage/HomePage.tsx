import React from "react";

import { MainPageLayout } from "../../layouts/MainPageLayout";

import { BreadcrumbPaths } from "../../atoms/Breadcrumb/types";
import { HomeBanner } from "../../molecules/HomeBanner";

const breadcrumbPaths: BreadcrumbPaths = [{ href: "/", label: "Dashboard" }];

export const HomePage: React.FC = () => {
  return (
    <MainPageLayout breadcrumbProps={{ paths: breadcrumbPaths }}>
      <HomeBanner />
    </MainPageLayout>
  );
};
