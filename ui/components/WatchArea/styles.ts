import styled from 'styled-components';
import Container from 'ui/styles/Container';
import { media } from 'ui/styles/utils';

export const WatchContainer = styled.section`
  .player-container {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
  }
  ${media.md`
  `}
`;

export const WatchArea = styled.section`
  .player-container {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
  }
  ${media.md`
  `}
`;
