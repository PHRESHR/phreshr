import styled from 'styled-components';
import { media } from 'ui/styles/utils';

const CardEntry = styled.article`
  flex: 0 0 100%;

  ${media.md`
    flex: 0 0 calc(100% / 2 - 4px);
  `}

  ${media.lg`
    flex: 0 0 calc(100% / 3 - 8px);
  `}

  ${media.xl`
    flex: 0 0 calc(100% / 4 - 8px);
  `}
`;

export default CardEntry;
