import {
  Box,
  Flex,
  VStack,
  IconButton,
  Text,
  Checkbox,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
type Props = {};

interface RecordType {
  key: string;
  title: string;
  description: string;
}

const mockData: RecordType[] = Array.from({ length: 10 }).map((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));

const initialTargetKeys = mockData
  .filter((item) => Number(item.key) > 6)
  .map((item) => item.key);

export const Transfer = (props: Props) => {
  const {} = props;

  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const TransferBoxLeft = () => (
    <Box border="1px solid" borderColor="grey" rounded="lg">
      <Box p={1} borderBottom="1px solid" borderColor="grey">
        <HStack>
          <Checkbox
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
            onChange={(e) =>
              setCheckedItems([e.target.checked, e.target.checked])
            }
          />

          <Text>{targetKeys.length} Items</Text>
          <Text>Title</Text>
        </HStack>
      </Box>
      <Box p={1}>
        <VStack>
          {targetKeys.map((item) => {
            return <Checkbox>{item}</Checkbox>;
          })}
        </VStack>
      </Box>
    </Box>
  );

  return (
    <Flex gap={2} alignItems="center" flexWrap="wrap">
      <TransferBoxLeft />

      <VStack>
        <IconButton
          aria-label="Move to right"
          icon={<FiChevronRight />}
          size="xs"
        />
        <IconButton
          aria-label="Move to left"
          icon={<FiChevronLeft />}
          size="xs"
        />
      </VStack>
      <TransferBoxLeft />
    </Flex>
  );
};
