import { AccordionButton, AccordionItem, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ringsImg from '@app/assets/img/216715_rings_icon.png';
import rotateImg from '@app/assets/img/8111414_rotateleft_back_arrow_left_previous_icon.png';
import backpackImg from '@app/assets/img/9109828_backpack_f_icon.png';

const NavigationItem: React.FC = () => (
  <>
    <AccordionItem border="none" zIndex={99}>
      {({ isExpanded }) => (
        <Link href="/">
          <AccordionButton _focus={{ outline: 'none' }}>
            <Image src={backpackImg} alt="" />
            <Box flex="1" textAlign="left" marginLeft="36px">
              <Text fontSize="lg" fontWeight={isExpanded ? 'bold' : 'semibold'}>
                Character
              </Text>
            </Box>
          </AccordionButton>
        </Link>
      )}
    </AccordionItem>
    <AccordionItem border="none" zIndex={99}>
      {({ isExpanded }) => (
        <Link href="/retrieve-amulets">
          <AccordionButton _focus={{ outline: 'none' }}>
            <Image src={rotateImg} alt="" />
            <Box flex="1" textAlign="left" marginLeft="36px">
              <Text fontSize="lg" fontWeight={isExpanded ? 'bold' : 'semibold'}>
                Retrieve Amulet
              </Text>
            </Box>
          </AccordionButton>
        </Link>
      )}
    </AccordionItem>
    <AccordionItem border="none" zIndex={99}>
      {({ isExpanded }) => (
        <Link href="/">
          <AccordionButton _focus={{ outline: 'none' }}>
            <Image src={ringsImg} alt="" />
            <Box flex="1" textAlign="left" marginLeft="36px">
              <Text fontSize="lg" fontWeight={isExpanded ? 'bold' : 'semibold'}>
                Mint Rings
              </Text>
            </Box>
          </AccordionButton>
        </Link>
      )}
    </AccordionItem>
  </>
);

export default NavigationItem;
