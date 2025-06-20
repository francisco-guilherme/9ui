import { motion } from "framer-motion";
import { Wand2Icon } from "lucide-react";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { ThemeSettings } from "@/config/theme";

import { CustomizeDialog } from "./customize-dialog";
import { CustomizePanel } from "./customize-panel";

interface CustomizeThemeProps {
  theme: ThemeSettings;
  setTheme: (theme: ThemeSettings) => void;
}

export const CustomizeTheme = ({ theme, setTheme }: CustomizeThemeProps) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [copyDialogOpen, setCopyDialogOpen] = useState(false);

  useOnClickOutside(ref, () => setOpen(false));

  const handleCopy = () => {
    setOpen(false);
    setCopyDialogOpen(true);
  };

  return (
    <>
      <div className="fixed bottom-6 left-1/2 z-10 flex w-full -translate-x-1/2 items-end justify-center">
        <motion.button
          layoutId="wrapper"
          onClick={() => setOpen(true)}
          className="h-9 rounded-md border bg-background px-4 text-sm font-medium shadow-sm"
          aria-label="Customize theme settings"
        >
          <motion.span layoutId="title" className="flex items-center">
            <Wand2Icon
              className="mr-2 size-4"
              aria-hidden="true"
              focusable="false"
            />
            Customize
          </motion.span>
        </motion.button>

        <CustomizePanel
          ref={ref}
          open={open}
          theme={theme}
          setTheme={setTheme}
          onCopy={handleCopy}
        />
      </div>

      <CustomizeDialog
        open={copyDialogOpen}
        onOpenChange={setCopyDialogOpen}
        theme={theme}
      />
    </>
  );
};
