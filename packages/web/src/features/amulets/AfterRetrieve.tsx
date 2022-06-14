import { Button, Center, Container, Divider, Flex, Text } from '@chakra-ui/react';

export const AfterRetrieve: React.FC = () => (
  <Center width="full" height="auto">
    <Container
      maxWidth="1407px"
      maxHeight="935px"
      height="full"
      backgroundColor="rgb(4, 4, 22, 0.3)"
      borderRadius="25px 25px 0 0"
    >
      <Flex
        height="full"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={16}
      >
        <Flex
          flexDirection="column"
          maxWidth="903px"
          alignItems="center"
          textAlign="center"
          gap={8}
        >
          <Text fontSize="3xl" fontWeight="extrabold" lineHeight="35px" textTransform="uppercase">
            SPACE CARTELS
          </Text>
          <Text fontSize="100px" fontWeight="bold" lineHeight="100px">
            Congratulations!
          </Text>
          <Divider borderColor="secondary.500" width="82px" borderWidth="1px" />
          <Text fontSize="25px" fontWeight="medium">
            You have successfully retrieved your Amulets!
          </Text>
        </Flex>
        <Flex gap={4}>
          <Button variant="solid" size="lg">
            <Text>Retrieve more</Text>
          </Button>
          <Button variant="outline" size="lg" borderRadius="10px">
            <Text>Go to inventory</Text>
          </Button>
        </Flex>
      </Flex>
    </Container>
  </Center>
);
