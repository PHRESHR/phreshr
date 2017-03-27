import styled from 'styled-components';
import Container from 'ui/styles/Container';
import { media } from 'ui/styles/utils';

const Grid = styled(Container)`
  .item {
    flex: 0 0 100%;

    ${media.md`
      flex: 0 0 calc(100% / 2);
    `}

    ${media.lg`
      flex: 0 0 calc(100% / 3);
    `}

    ${media.xl`
      flex: 0 0 calc(100% / 4);
    `}
  }
`;

export default Grid;
