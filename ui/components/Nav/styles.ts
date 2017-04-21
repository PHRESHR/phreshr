import styled from 'styled-components';
import { media } from 'ui/styles/utils';
import { variables } from 'ui/styles/variables';

const {
  color,
} = variables;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 5px;
  ${media.md`padding: 0 10px;`}
  ${media.xl`padding: 0 20px;`}

  a {
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    padding: .625rem;

    &.active {
      background-color: ${color.phreshrYellow};
      color: #111;
      text-decoration: none;
    }

    &:hover {
      text-decoration: none;
    }
  }
`;

export default Navigation;
