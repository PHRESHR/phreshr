import styled from 'styled-components';
import { media } from 'ui/styles/utils';
import GridItem from 'ui/styles/GridItem';

export const CardInfo = styled.div`
  width: 100%;
  
  .show-marquee {
    display: flex;
    flex-direction: column;
    ${media.md`
      flex-direction: row;
    `}
    .media {
      display: flex;
      flex: 0 0  100%;
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
      font-size: 1.5rem;
      ${media.md`
        font-size: 3.5rem;
      `}
    }
  }
`;

export const ShowEntry = styled(GridItem)`
  flex: 0 0 calc(100% / 2 - 4px);
  width: calc(100% / 2 - 4px);

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

export default ShowEntry;
