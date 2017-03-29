import styled from 'styled-components';
import { media } from 'ui/styles/utils';
import GridItem from 'ui/styles/GridItem';

const CardEntry = styled(GridItem)`
  ${media.md`
  `}

  ${media.lg`
  `}

  ${media.xl`
  `}
`;

export default CardEntry;
