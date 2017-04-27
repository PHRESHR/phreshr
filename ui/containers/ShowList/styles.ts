import styled from 'styled-components';
import Container from 'ui/styles/Container';
import { media } from 'ui/styles/utils';

const ShowContainer = styled(Container)`
  flex-direction: row;
  flex-wrap: wrap;
  ${media.md`
  `}
`;

export default ShowContainer;
