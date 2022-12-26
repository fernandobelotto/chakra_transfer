import { ChakraProvider } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { v4 } from "uuid";
import { Transfer } from "./index";
import { RecordType } from "./useTransfer";

export default {
  title: "Transfer",
  component: Transfer,
} as ComponentMeta<typeof Transfer>;

export const Basic: ComponentStory<typeof Transfer> = () => {
  const originalData: RecordType[] = [
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.fullName(), group: "left" },
    { key: v4(), content: faker.name.fullName(), group: "left" },
    { key: v4(), content: faker.name.fullName(), group: "left" },
    { key: v4(), content: faker.name.fullName(), group: "left" },
    { key: v4(), content: faker.name.fullName(), group: "left" },
    { key: v4(), content: faker.name.fullName(), group: "left" },
  ];

  const [dataSource, setDataSource] = useState(originalData);

  return (
    <ChakraProvider>
      <Transfer dataSource={dataSource} setDataSource={setDataSource} />
    </ChakraProvider>
  )
};
