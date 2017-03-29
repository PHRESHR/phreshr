import styled from 'styled-components';
import Container from 'ui/styles/Container';
import { media } from 'ui/styles/utils';

export const ShowLede = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  padding-bottom: 5rem;
  .show-view {
    width: 100%;
  }
  .show-marquee {
    display: flex;
    .media {
      display: flex;
      flex: 0 0  55%;
      ${media.md`
        flex: 0 0  60%;
      `}
    }
  }
  .show-image {
    display: flex;
  }

  .show-info {
    padding: 0 0.5rem;
    ${media.md`
      padding: 0 2rem;
    `}

    h1 {
      font-size: 2rem;
      ${media.md`
        font-size: 3.5rem;
      `}
    }
  }
  ${media.md`
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
`;
