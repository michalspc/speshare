import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface NotificationProps {
  id: string;
  message: string;
  isRead: boolean;
}

const NotifyMessage: React.FC<NotificationProps> = ({ id, message, isRead }) => (
  <Flex
    key={id}
    padding="12px 24px"
    height="71px"
    width="316px"
    border="1px solid"
    borderColor="primary.500"
    borderRadius="15px"
    backdropFilter="blur(7px)"
    gap={6}
    alignItems="center"
    opacity={isRead ? '0.8' : '1'}
  >
    <Box height="21px" width="21px" backgroundColor="gray.300" borderRadius="50%" flexShrink={0} />
    <Text>{message}</Text>
  </Flex>
);

export default NotifyMessage;
