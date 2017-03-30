import styled from 'styled-components';
import { media } from 'ui/styles/utils';

const GridItem = styled.article`
  flex: 0 0 100%;
  padding-bottom: 1rem;
  margin-right: ${props => props.itemMargin};

  ${media.md`
    flex: 0 0 calc(100% / 2 - 0.25);
  `}

  ${media.lg`
    flex: 0 0 calc(100% / 3 - 0.5rem);
  `}

  ${media.xl`
    flex: 0 0 calc(100% / 4 - 0.5rem);
  `}

  h1 {
    font-size: 1.2rem;
    ${media.md`
      font-size: 1.5rem;
    `}
  }
`;

export default GridItem;
