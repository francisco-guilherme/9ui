import {
  EmojiPicker,
  EmojiPickerContent,
  EmojiPickerEmpty,
  EmojiPickerList,
  EmojiPickerLoading,
  EmojiPickerSearch,
} from "@9ui/ui";
import { toast } from "sonner";

export default function EmojiPickerDemo() {
  return (
    <EmojiPicker
      onEmojiSelect={({ emoji, label }) => {
        toast.custom(() => (
          <p className="flex items-center gap-2 text-sm">
            <span className="text-lg">{emoji}</span>
            {label}
          </p>
        ));
      }}
    >
      <EmojiPickerSearch />
      <EmojiPickerContent>
        <EmojiPickerLoading />
        <EmojiPickerEmpty>No results</EmojiPickerEmpty>
        <EmojiPickerList />
      </EmojiPickerContent>
    </EmojiPicker>
  );
}
