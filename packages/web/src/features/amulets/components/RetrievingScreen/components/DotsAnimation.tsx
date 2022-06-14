import { keyframes } from '@chakra-ui/react';

export const dotAnim = {
  styles: {
    dot1: {
      width: '10px',
      height: '10px',
      backgroundColor: '#fff',
      color: '#fff',
      display: ' inline-block',
      margin: '0 2px',
    },
    dot2: {
      width: '10px',
      height: '10px',
      backgroundColor: '#fff',
      color: '#fff',
      display: 'inline-block',
      margin: '0 2px',
    },

    dot3: {
      width: '10px',
      height: '10px',
      backgroundColor: '#fff',
      display: 'inline-block',
      margin: '0 2px',
    },
  },
  keyframes: {
    keyframe1: keyframes`
        0% {
          transform: scale(1, 1);
        }
        25% {
          transform: scale(1, 1.5);
        }
        50% {
          transform: scale(1, 0.67);
        }
        75% {
          transform: scale(1, 1);
        }
        100% {
          transform: scale(1, 1);
        }
      `,
    keyframe2: keyframes`
   0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1, 1.5);
    }
    75% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  `,
    keyframe3: keyframes`
   0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1, 0.67);
    }
    75% {
      transform: scale(1, 1.5);
    }
    100% {
      transform: scale(1, 1);
    }
  `,
  },
};
