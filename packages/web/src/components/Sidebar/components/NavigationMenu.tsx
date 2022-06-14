import { Accordion, Box } from '@chakra-ui/react';
import React from 'react';
import NavigationItem from './components/NavigationItem';

const NavigationMenu: React.FC = () => (
  <Box padding="24px" boxShadow="0px 2px 2px -2px rgba(255,255,255,0.15)" maxHeight="554px">
    <Box paddingRight="20px">
      <Accordion
        paddingRight="20px"
        display="flex"
        flexDirection="column"
        gap={2}
        overflow="auto"
        maxHeight="520px"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px;',
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 5px gray;',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#5C40DD',
            borderRadius: '10px',
          },
        }}
      >
        <NavigationItem />
      </Accordion>
    </Box>
  </Box>
);

export default NavigationMenu;
