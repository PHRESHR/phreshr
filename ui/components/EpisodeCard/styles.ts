import styled from 'styled-components';
import { media } from 'ui/styles/utils';
import Container from 'ui/styles/Container';
import GridItem from 'ui/styles/GridItem';

export const CardInfo = styled.section`
  header {
    padding-top: .5rem;
    padding-bottom: .5rem;
  }
  .episode-details {
    background-color: #111;
    padding: 2.5rem 0;
    position: relative;
  }
  header,
  .episode-details .inner {
    padding: ${props => props.padding ? props.padding :  '0 .375rem'};
    ${media.sm`
      padding: ${props => props.padding ? props.padding :  '0 .5rem'};
    `}
    ${media.md`
      padding: ${props => props.padding ? props.padding :  '0 2.5rem'};
    `}
    ${media.xl`
      padding: ${props => props.padding ? props.padding :  '0 5rem'};
    `}
  }
  ${media.md`
  `}
`;

export const CardEntry = styled(GridItem)`
  ${media.md`
  `}

  ${media.lg`
  `}

  ${media.xl`
  `}
`;

export default CardEntry;
