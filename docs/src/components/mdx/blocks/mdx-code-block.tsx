import * as React from "react";

import { CodeBlock } from "../code/code-block";
import { CommandBlock } from "./command-block";

interface MDXCodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  __title__?: string;
  __rawString__?: string;
  __lang__?: string;
  __unwrapCode__?: string;
  __isCommand__?: boolean;
  __npmCommand__?: string;
  __yarnCommand__?: string;
  __pnpmCommand__?: string;
  __bunCommand__?: string;

  "data-title"?: string;
  "data-code"?: string;
  "data-language"?: string;

  children?: React.ReactNode;
}

export const MDXCodeBlock = ({
  __title__,
  __rawString__,
  __lang__,
  __unwrapCode__,
  __isCommand__,
  __npmCommand__,
  __yarnCommand__,
  __pnpmCommand__,
  __bunCommand__,
  "data-title": dataTitle,
  "data-code": dataCode,
  "data-language": dataLanguage,
  children,
  ...props
}: MDXCodeBlockProps) => {
  const title = __title__ ?? dataTitle;
  const content = __rawString__ ?? dataCode ?? "";
  const language = __lang__ ?? dataLanguage;

  const hasCommandProps =
    !!__npmCommand__ ||
    !!__yarnCommand__ ||
    !!__pnpmCommand__ ||
    !!__bunCommand__;

  const commandRegex =
    /(npm (install|add)|yarn (add|dlx)|pnpm (add|dlx)|bun (add|x)|npx)/;

  const isCommand =
    __isCommand__ || hasCommandProps || commandRegex.test(content);

  if (__unwrapCode__ === "true") {
    return <pre {...props}>{children}</pre>;
  }

  if (isCommand) {
    return (
      <CommandBlock
        npmCommand={
          __npmCommand__ || (content.includes("npm") ? content : undefined)
        }
        yarnCommand={__yarnCommand__}
        pnpmCommand={__pnpmCommand__}
        bunCommand={__bunCommand__}
      />
    );
  }

  if (title) {
    return (
      <CodeBlock content={content} title={title} language={language}>
        <pre {...props}>{children}</pre>
      </CodeBlock>
    );
  }

  return <pre {...props}>{children}</pre>;
};
