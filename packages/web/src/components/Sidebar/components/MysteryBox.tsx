import { Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import cartImg from '@app/assets/img/353439_basket_purse_shopping_cart_ecommerce_icon.png';
import boxImg from '@app/assets/img/2559831_box_media_network_social_icon.png';
import burnImg from '@app/assets/img/Layer2.png';
import mysteryImg from '@app/assets/img/MysteryBox.png';

interface MysteryBoxProps {
  isDisabled: boolean;
}

const MysteryBox: React.FC<MysteryBoxProps> = ({ isDisabled }) => (
  <Flex
    padding="12px 24px"
    direction="row"
    gap={6}
    boxShadow="0px 2px 2px -2px rgba(255,255,255,0.15)"
  >
    <Image src={mysteryImg} alt="" layout="fixed" />
    <Flex width="214px" direction="column" justifyContent="center" gap={2}>
      <Button
        leftIcon={
          <Image
            src={boxImg}
            alt=""
            style={{ filter: `${isDisabled ? 'grayscale(100%)' : 'none'}` }}
          />
        }
        variant="outline"
        size="xs"
        borderColor={isDisabled ? 'disabled' : 'secondary.500'}
        gap={1}
        isDisabled={isDisabled}
      >
        <Text fontSize="sm" fontWeight="medium">
          Open
        </Text>
        <Text fontSize="sm" fontWeight="bold">
          Mystery Boxes
        </Text>
      </Button>
      <Flex gap={2}>
        <Button
          leftIcon={
            <Image
              src={cartImg}
              alt=""
              style={{ filter: `${isDisabled ? 'grayscale(100%)' : 'none'}` }}
            />
          }
          variant="outline"
          size="xs"
          flex="1"
          fontWeight="medium"
          isDisabled={isDisabled}
        >
          <Text fontSize="sm" fontWeight="medium">
            Craft
          </Text>
        </Button>
        <Button
          leftIcon={
            <Image
              src={burnImg}
              alt=""
              style={{ filter: `${isDisabled ? 'grayscale(100%)' : 'none'}` }}
            />
          }
          variant="outline"
          size="xs"
          flex="1"
          fontWeight="medium"
          isDisabled={isDisabled}
        >
          <Text fontSize="sm" fontWeight="medium">
            Burn
          </Text>
        </Button>
      </Flex>
    </Flex>
  </Flex>
);

export default MysteryBox;
