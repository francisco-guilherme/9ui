import {
  CodeBar,
  CodeBarButton,
  CodeBarGroup,
  CodeBarInput,
  CodeBarSeparator,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownTrigger,
  Input,
  InputIcon,
  Toggle,
  ToggleGroup,
} from "@9ui/ui";
import {
  LayoutGridIcon,
  LayoutListIcon,
  MoreHorizontalIcon,
  SearchIcon,
  ShareIcon,
} from "lucide-react";

export default function CodeBarFileExplorerDemo() {
  return (
    <CodeBar>
      <ToggleGroup className="border-none bg-transparent p-0">
        <CodeBarButton
          size="icon"
          render={
            <Toggle aria-label="Grid view" value="grid-view">
              <LayoutGridIcon className="size-4" />
            </Toggle>
          }
        />
        <CodeBarButton
          size="icon"
          render={
            <Toggle aria-label="List view" value="list-view">
              <LayoutListIcon className="size-4" />
            </Toggle>
          }
        />
      </ToggleGroup>

      <CodeBarSeparator />

      <CodeBarGroup>
        <CodeBarButton size="icon">
          <ShareIcon className="size-4" />
        </CodeBarButton>
        <Dropdown>
          <CodeBarButton size="icon" render={<DropdownTrigger />}>
            <MoreHorizontalIcon className="size-4" />
          </CodeBarButton>
          <DropdownContent>
            <DropdownItem>New File</DropdownItem>
            <DropdownItem>New Folder</DropdownItem>
            <DropdownSeparator />
            <DropdownItem>Open in New Tab</DropdownItem>
            <DropdownItem>Get Info</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </CodeBarGroup>
      <CodeBarSeparator />

      <CodeBarInput
        render={
          <Input placeholder="Search">
            <InputIcon side="leading">
              <SearchIcon className="size-4" />
            </InputIcon>
          </Input>
        }
      />
    </CodeBar>
  );
}
