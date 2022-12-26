import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";

type Props = {};

// TODO: Add dropdown menu
export const DropdownMenu = (props: Props) => {
  return (
    <Menu>
      <MenuButton size="xs" as={IconButton} icon={<FiMoreVertical />} />
      <MenuList>
        <MenuItem>Select all data</MenuItem>
        <MenuItem>Invert current selection</MenuItem>
      </MenuList>
    </Menu>
  );
};
