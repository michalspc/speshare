import { Modal as ChakraModal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import React from 'react';

interface ModalProps {
  [key: string]: any;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  overlayProps,
  ...other
}): JSX.Element => (
  <ChakraModal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay bgColor="rgba(14, 14, 51, 0.72)" {...overlayProps} />
    <ModalContent {...other} boxShadow="0px 0px 24px rgba(0, 0, 0, 0.48)">
      <ModalBody p="0">{children}</ModalBody>
    </ModalContent>
  </ChakraModal>
);
