import * as React from "react";

import { CodeBlock } from "./code/code-block";
import { Callouts } from "./docs/callouts";
import { Installation } from "./docs/installation";
import { Step, Steps } from "./docs/steps";
import { Preview, Source } from "./preview/preview-modes";
import { Headings } from "./typography/headings";
import { Lists } from "./typography/lists";
import { Tables } from "./typography/tables";
import { Text } from "./typography/text";

interface MDXComponents {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.FC<any> | MDXComponents;
}

export const mdxComponents: MDXComponents = {
  // Typography
  ...Headings,
  ...Text,
  ...Lists,
  ...Tables,

  // Code Blocks
  pre: CodeBlock,

  // Component Blocks
  Preview,
  Source,
  Installation,

  // Documentation
  Step,
  Steps,

  ...Callouts,
};
