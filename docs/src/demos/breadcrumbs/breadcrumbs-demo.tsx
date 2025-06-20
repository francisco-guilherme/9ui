import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@9ui/ui";
import { EllipsisIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function BreadcrumbsDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <EllipsisIcon />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link to="/docs/components">Components</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem active>Breadcrumbs</BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
