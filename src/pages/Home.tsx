import { Center } from "@chakra-ui/react";
import { useState } from "react";
import { Transfer } from "../components/transfer";
import { RecordType } from "../components/transfer/useTransfer";

import { v4 } from "uuid";
import { faker } from "@faker-js/faker";
import { DarkSwicher } from "../components/DarkSwitcher";
export const Home = () => {
  const originalData: RecordType[] = [
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
  ];

  const [dataSource, setDataSource] = useState(originalData);

  return (
    <>
      <DarkSwicher />
      <Center h="90vh">
        <Transfer dataSource={dataSource} setDataSource={setDataSource} />
      </Center>
    </>
  );
};
