import styled from 'styled-components';
import Container from 'ui/styles/Container';
import { media } from 'ui/styles/utils';

export const PlayerHub = styled.div`

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
`;

export const DetailContainer = styled(Container)`
  .episode-item {
    margin-right: 0;

    ${media.md`
      margin-right: ${props => props.itemMargin};
    `}
  }
`;
