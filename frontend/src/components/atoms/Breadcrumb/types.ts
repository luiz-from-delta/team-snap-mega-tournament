export type BreadcrumbPath = {
  href: string;
  label: string;
};

export type BreadcrumbPaths = BreadcrumbPath[];

export type BreadcrumbProps = {
  paths: BreadcrumbPaths;
};
