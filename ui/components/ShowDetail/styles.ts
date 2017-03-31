import styled from 'styled-components';
import Container from 'ui/styles/Container';
import { media } from 'ui/styles/utils';

export const ShowLede = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  padding-bottom: .5rem;
  ${media.md`
    padding-bottom: 2.5rem;
  `}
`;

export const ShowHub = styled(Container)`
  ${media.md`
  `}
`;

export const DetailContainer = styled(Container)`
  flex-direction: row;
  ${media.md`
  `}

  h2 {
    font-size: 1.2rem;
    ${media.md`
      font-size: 1.5rem;
    `}
  }
`;
