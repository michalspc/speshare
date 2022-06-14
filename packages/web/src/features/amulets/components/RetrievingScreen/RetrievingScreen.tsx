import { Box, Flex, Text, usePrefersReducedMotion } from '@chakra-ui/react';
import retrievingImg from '@app/assets/img/315_00_21.png';
import { dotAnim } from './components/DotsAnimation';

export const RetrievingScreen: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation1 = prefersReducedMotion
    ? undefined
    : `${dotAnim.keyframes.keyframe1} infinite 1s linear`;
  const animation2 = prefersReducedMotion
    ? undefined
    : `${dotAnim.keyframes.keyframe2} infinite 1s linear`;
  const animation3 = prefersReducedMotion
    ? undefined
    : `${dotAnim.keyframes.keyframe3} infinite 1s linear`;
  return (
    <Box
      height="100vh"
      w="100vw"
      position="fixed"
      mixBlendMode="lighten"
      left="0"
      top="0"
      backgroundImage={retrievingImg.src}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Flex
        width="full"
        height="full"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text fontSize="70px" fontWeight="bold">
          Retrieving
          <Text style={dotAnim.styles.dot1} animation={animation1} />
          <Text style={dotAnim.styles.dot2} animation={animation2} />
          <Text style={dotAnim.styles.dot3} animation={animation3} />
        </Text>
        <Text fontSize="xl" fontWeight="extrabold">
          SPACE CARTELS
        </Text>
      </Flex>
    </Box>
  );
};
