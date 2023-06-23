import React, { Fragment } from "react";

import { BreadcrumbProps } from "./types";
import { CaretRight } from "phosphor-react";
import * as sc from "./styled";

import { Link } from "react-router-dom";

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ paths }) => {
  return (
    <sc.Breadcrumb>
      {paths.map((path, index) => {
        return (
          <Fragment key={path.href}>
            {index !== 0 && <CaretRight />}
            <li>
              <Link to={path.href}>{path.label}</Link>
            </li>
          </Fragment>
        );
      })}
    </sc.Breadcrumb>
  );
};
