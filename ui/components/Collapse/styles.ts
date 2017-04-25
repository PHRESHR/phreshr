import styled from 'styled-components';
import { media } from 'ui/styles/utils';

const CollapseContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  width: 100%;
  z-index: 1;

  button {
    position: absolute;
    right: 5rem;
    bottom: 5rem;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  .icon {
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 auto;
    fill: #fff;
  }
  .collapse-inner {
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.75);
  }
  ${media.md``}
`;

export default CollapseContainer;
