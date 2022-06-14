import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import epicAmuletImg from '@app/assets/img/epic_alpha.png';
import mythicAmuletImg from '@app/assets/img/mythic_alpha.png';
import rareAmuletImg from '@app/assets/img/rare_alpha.png';

export const Options: React.FC = () => (
  <Flex justifyContent="space-between">
    <Flex flexDirection="column" width="30%">
      <Box border="1px solid gray" borderRadius="25px">
        <Image src={rareAmuletImg} alt="" />
      </Box>
      <Flex justifyContent="center" marginTop="-23px">
        <Flex
          width="60%"
          height="46px"
          border="1px solid gray"
          borderRadius="50px"
          background="#060616"
          justifyContent="center"
        >
          <Text fontSize="larger" fontWeight="semibold" alignSelf="center">
            Rare Amulet
          </Text>
        </Flex>
      </Flex>
    </Flex>
    <Flex flexDirection="column" width="30%">
      <Box border="1px solid gray" borderRadius="25px">
        <Image src={mythicAmuletImg} alt="" />
      </Box>
      <Flex justifyContent="center" marginTop="-23px">
        <Flex
          width="60%"
          height="46px"
          border="1px solid gray"
          borderRadius="50px"
          background="#060616"
          justifyContent="center"
        >
          <Text fontSize="larger" fontWeight="semibold" alignSelf="center">
            Mythic Amulet
          </Text>
        </Flex>
      </Flex>
    </Flex>
    <Flex flexDirection="column" width="30%">
      <Box border="1px solid gray" borderRadius="25px">
        <Image src={epicAmuletImg} alt="" />
      </Box>
      <Flex justifyContent="center" marginTop="-23px">
        <Flex
          width="60%"
          height="46px"
          border="1px solid gray"
          borderRadius="50px"
          background="#060616"
          justifyContent="center"
        >
          <Text fontSize="larger" fontWeight="semibold" alignSelf="center">
            Epic Amulet
          </Text>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);
