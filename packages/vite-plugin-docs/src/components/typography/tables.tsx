import * as React from "react";
import { cn, Separator } from "@nui/core";

export const Tables = {
  table: ({
    className,
    ...props
  }: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-hidden rounded-lg border">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  thead: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className={cn("border-b bg-muted/40", className)} {...props} />
  ),
  tbody: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className={cn("divide-y divide-muted", className)} {...props} />
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn("", className)} {...props} />
  ),
  th: ({
    className,
    ...props
  }: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      className={cn("p-4 text-left text-sm font-semibold", className)}
      {...props}
    />
  ),
  td: ({
    className,
    ...props
  }: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
    <td
      className={cn("p-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  ),
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <Separator className={cn("my-8", className)} {...props} />
  ),
};
