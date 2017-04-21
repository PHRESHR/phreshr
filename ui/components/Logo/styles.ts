import styled from 'styled-components';
import { media } from 'ui/styles/utils';

const Branding = styled.div`
  width: 250px;
  ${media.md`
    width: 300px;
  `}
`;

export default Branding;
