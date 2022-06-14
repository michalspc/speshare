import { Box } from '@chakra-ui/react';

type SidebarProps = {
  children: React.ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => (
  <Box
    w="438px"
    minHeight="calc(100vh - 112px)"
    backgroundImage="linear-gradient(#10111F, #0F0F20)"
  >
    <Box
      w="inherit"
      h="full"
      overflow="auto"
      css={{
        '&::-ms-overflow-style': 'none',
        '&::scrollbar-width': 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {children}
    </Box>
  </Box>
);
