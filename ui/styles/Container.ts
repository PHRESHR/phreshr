import styled from 'styled-components';
import { media } from 'ui/styles/utils';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify};
  flex-wrap: wrap;
  width: 100%;
  max-width: ${props => props.maxWidth};
  margin: 0 auto;
  padding: ${props => props.padding ? props.padding :  '.375rem'};

  ${media.sm`
    padding: ${props => props.padding ? props.padding :  '.5rem'};
  `}

  ${media.md`
    flex-direction: ${props => props.column ? 'column' : 'row'};
    flex-wrap: ${props => props.wrap && 'wrap'};
    padding: ${props => props.padding ? props.padding :  '2.5rem'};
  `}

  ${media.lg`
    flex-direction: ${props => props.column ? 'column' : 'row'};
    padding: ${props => props.padding ? props.padding :  '2.5rem 5rem'};
  `}

  .header {
    flex: 0 0 100%;
  }

  .item {
    margin-right: ${props => props.itemMargin};
    &:last-child {
      margin-right: 0;
    }
  }
`;

export default Container;
