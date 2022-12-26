import { Center } from "@chakra-ui/react";
import { Transfer } from "../components/transfer";

type Props = {};

export const Home = (props: Props) => {
  return (
    <Center h="100vh">
      <Transfer />
    </Center>
  );
};
