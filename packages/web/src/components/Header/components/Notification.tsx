import { Box, Center, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import img from '@app/assets/img/4781824_alarm_alert_attention_bell_clock_icon.png';
import { NotifyMessage } from './components';

interface NotificationsProps {
  notifications: {
    id: string;
    message: string;
    isRead: boolean;
  }[];
  isDisabled?: boolean;
}

const Notification: React.FC<NotificationsProps> = ({ notifications, isDisabled }) => {
  notifications.sort((a, b) => Number(a.isRead) - Number(b.isRead));
  const notificationsLength = notifications.length;
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <Center
      bg="transparent"
      height="49px"
      width="fit-content"
      padding="0px 6px 0px 6px"
      border="1px solid"
      borderColor={isDisabled ? 'disabled' : 'secondary.500'}
      borderRadius="lg"
      pos="relative"
      cursor="pointer"
      onClick={() => setShowNotifications(!showNotifications)}
    >
      <Box
        position="absolute"
        borderRadius="full"
        fontSize="8px"
        padding="0px 5px 2px 5px"
        transform="translate(-50%, -50%)"
        bg={isDisabled ? 'disabled' : 'linear-gradient(134deg, #B100FF 0%, #282FE5 100%)'}
        left="0"
      >
        <Text>{notificationsLength}</Text>
      </Box>
      <Image src={img} alt="" style={{ filter: `${isDisabled ? 'brightness(30%)' : 'none'}` }} />
      {showNotifications && (
        <Flex position="absolute" top="70px" left="0" flexDirection="column" gap={2}>
          {notifications.map((notification) => (
            <NotifyMessage
              key={notification.id}
              id={notification.id}
              message={notification.message}
              isRead={notification.isRead}
            />
          ))}
        </Flex>
      )}
    </Center>
  );
};

export default Notification;
