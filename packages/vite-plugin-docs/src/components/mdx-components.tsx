import type { MDXComponents } from "mdx/types";

import { CodeBlock } from "./code/code-block";
import { CodePreview } from "./code/code-preview";
import { Callouts } from "./content/callouts";
import { Installation } from "./content/installation";
import { Step, Steps } from "./content/steps";
import { Headings } from "./typography/headings";
import { Lists } from "./typography/lists";
import { Tables } from "./typography/tables";
import { Text } from "./typography/text";

export const mdxComponents: MDXComponents = {
  // Typography
  ...Headings,
  ...Text,
  ...Lists,
  ...Tables,

  // Code Blocks
  pre: CodeBlock,

  // Component Blocks
  Preview: CodePreview,
  Installation,

  // Documentation
  Step,
  Steps,

  ...Callouts,
};
