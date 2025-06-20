import { PreviewBlock, PreviewBlockProps } from "./preview-block";

export const Preview = (props: Omit<PreviewBlockProps, "mode">) => (
  <PreviewBlock {...props} mode="preview" />
);

export const Source = (props: Omit<PreviewBlockProps, "mode">) => (
  <PreviewBlock {...props} mode="source" />
);

export const PreviewModes = {
  Preview,
  Source,
};
