import styled from 'styled-components';
import { transparentize } from 'polished';
import { media } from 'ui/styles/utils';
import { variables } from 'ui/styles/variables';

const {
  color,
} = variables;

const Toolbar = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background-image: linear-gradient(to bottom,${color.transDark} 1%,${color.transLight});
  width: 100%;
  height: 3.75rem;
  padding: 0.3125rem;
  z-index: 999;
  ${media.md`
    height: 5rem;
  `}
`;

export default Toolbar;
