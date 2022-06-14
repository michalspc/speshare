import { Center, Container, Flex } from '@chakra-ui/react';

export const Retrieve: React.FC = ({ children }) => (
  <Center width="full" height="auto">
    <Container
      maxWidth="1407px"
      maxHeight="935px"
      height="full"
      backgroundColor="rgb(4, 4, 22, 0.3)"
      borderRadius="25px 25px 0 0"
    >
      <Flex justifyContent="center" height="full">
        <Flex placeContent="center" flexDirection="column" maxWidth="1193px" gap={24}>
          <Flex
            direction="row"
            flexWrap="wrap"
            justifyContent="space-between"
            height="full"
            alignContent="space-around"
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Container>
  </Center>
);
