import { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@nui/core";

interface BreadcrumbItemType {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItemType[];
  className?: string;
}

export const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {
  if (!items?.length) return null;

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {items.map((breadcrumb, index) => {
          const isLast = index === items.length - 1;

          return (
            <Fragment key={breadcrumb.path}>
              <BreadcrumbItem>
                <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
