import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@9ui/ui";
import { Fragment } from "react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {
  if (!items?.length) return null;

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {items.map((breadcrumb, index) => (
          <Fragment key={breadcrumb.path}>
            <BreadcrumbItem active={index === items.length - 1}>
              <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
