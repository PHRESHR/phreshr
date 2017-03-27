import styled from 'styled-components';
import Container from 'ui/styles/Container';
import { media } from 'ui/styles/utils';

const Canvas = styled(Container)`
  flex-direction: column;
  height: 100%;
  padding-top: 3.75rem;
  ${media.md`
    padding-top: 5rem;
  `}
`;

export default Canvas;
