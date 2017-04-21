import styled from 'styled-components';
import { aspectRatio, media } from 'ui/styles/utils';

export const AspectRatio16x9 = styled.div`
  ${ aspectRatio(16, 9) }
`;

export const AspectRatio5x2 = styled.div`
  ${ aspectRatio(4, 3) }
  ${media.md`
    ${ aspectRatio(5, 2) }
  `}
`;

export const AspectRatio4x3 = styled.div`
  ${ aspectRatio(4, 3) }
`;

export const AspectRatio2x3 = styled.div`
  ${ aspectRatio(2, 3) }
`;

