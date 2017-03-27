import styled from 'styled-components';
import { media } from 'ui/styles/utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: ${props => props.wrap && 'wrap'};
  justify-content: ${props => props.justify};
  width: 100%;
  margin: 0 auto;
  padding: .25rem;

  ${media.sm`
    padding: .375rem;
  `}

  ${media.md`
    flex-direction: ${props => props.column ? 'column' : 'row'};
    padding: ${props => props.padding};
  `}

  .item {
    flex: 0 0 100%;
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
  }
`;

export default Container;
