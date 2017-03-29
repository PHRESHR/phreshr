import styled from 'styled-components';
import Container from 'ui/styles/Container';
import { media } from 'ui/styles/utils';

export const PlayerHub = styled.div`
  .watch-area {
    padding: 1.875rem 0;

    ${media.md``}
  }

  .player-container {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    background-color: #111;
    max-width: 87.5rem;
    margin-left: auto;
    margin-right: auto;
  }

  .maintain-ratio:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 56.25%;
  }

  #player {
    width: 100%;
    height: 100%;
  }

  .episode-info header,
  .episode-details .inner {
    max-width: 87.5rem;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
    ${media.md`
      padding: 0;
    `}
  }

  .episode-details {
    background-color: #eee;
    padding: 2.5rem 0;
    position: relative;
  }
`;

export const DetailContainer = styled(Container)`
  ${media.md`
  `}
`;
