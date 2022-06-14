import { Box, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import backgroundImg from '@app/assets/img/RetrieveAmuletBackground.png';
import { Header } from '@app/components/Header';
import { APoints, LevelInfo, MineralResources, WalletNav } from '@app/components/Header/components';
import {
  GeneratorTrading,
  MysteryBox,
  NavigationMenu,
  OpenWallet,
  Points,
} from '@app/components/Sidebar/components';
import { mockAPoints, mockLevel, mockPoints, mockResources } from '@app/mock';
import { Sidebar } from '../Sidebar';

export const Layout: React.FC = ({ children }) => (
  <Box
    minHeight="100vh"
    backgroundImage={backgroundImg.src}
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundColor="rgb(6, 6, 22)"
  >
    <Box>
      <Header>
        <Flex justifyContent="space-between" alignItems="center" marginLeft={8} width="full">
          <LevelInfo
            level={mockLevel.level}
            rank={mockLevel.rank}
            currentPoints={mockLevel.currentPoints}
            nextLevelPoints={mockLevel.nextLevelPoints}
          />
          <Flex gap={6}>
            <Button isDisabled size="lg">
              Marketplace
            </Button>
            <Flex gap={1}>
              <APoints amount={mockAPoints.amount} />
              <MineralResources
                resource1={mockResources.resource1}
                resource2={mockResources.resource2}
                resource3={mockResources.resource3}
              />
            </Flex>
          </Flex>
          <Box>
            <WalletNav />
          </Box>
        </Flex>
      </Header>
      <Flex>
        <Sidebar>
          <MysteryBox isDisabled />
          <NavigationMenu />
          <GeneratorTrading isDisabled />
          <Points points1={mockPoints.points1} points2={mockPoints.points2} isDisabled />
          <OpenWallet isDisabled />
        </Sidebar>
        {children}
      </Flex>
    </Box>
  </Box>
);
