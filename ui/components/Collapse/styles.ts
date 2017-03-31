import styled from 'styled-components';
import { media } from 'ui/styles/utils';

const CollapseContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  ${media.md``}
`;

export default CollapseContainer;
