import * as React from 'react';
import * as PropTypes from 'prop-types';
import { compose, pure, setPropTypes, withHandlers, withState } from 'recompose';
import * as anime from 'animejs';
import CollapseContainer from './styles';

interface Props {
  title;
  children;
  togglePanel;
  iscollapsed;
}

function Collapse(props: Props) {
  const { children, togglePanel, iscollapsed } = props;

  // const triangleAnim = anime({
  //   targets: triangle,
  //   translateX: xOff - triangleOff / 2,
  //   elasticity: animElasticity,
  //   duration: animDuration
  // });
  return (
    <CollapseContainer>
      <button onClick={togglePanel}>
        { !iscollapsed
          ? <svg className="icon icon--cross"><use xlinkHref="#icon-cross" /></svg>
          : <svg className="icon icon--menu"><use xlinkHref="#icon-menu" /></svg> }
      </button>
      { !iscollapsed ?
        (
          <div className="collapse-inner">
            {children}
          </div>
        ) : null
      }
    </CollapseContainer>
  );
}

export default compose(
  withState('iscollapsed', 'setState', true),
  withHandlers({
    togglePanel: ({ setState }) => event => {
      event.preventDefault();
      setState(view => !view);
    },
  }),
  pure,
)(Collapse);
