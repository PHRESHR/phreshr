import * as React from 'react';
import { compose, pure, setPropTypes, withHandlers, withState } from 'recompose';
import CollapseContainer from './styles';

interface Props {
  title;
  children;
  toggleCollapsed;
  collapsed;
}

function Collapse(props: Props) {
  const { children, toggleCollapsed, collapsed } = props;
  return (
    <CollapseContainer>
      <button onClick={toggleCollapsed}>
        { !collapsed
          ? <svg className="icon icon--cross"><use xlinkHref="#icon-cross" /></svg>
          : <svg className="icon icon--menu"><use xlinkHref="#icon-menu" /></svg> }
      </button>
      { !collapsed ?
        (
          <div className="collapse-inner">
            {children}
          </div>
        ) : null
      }
    </CollapseContainer>
  );
}

const propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default compose(
  withState('collapsed', 'setCollapsed', true),
  withHandlers({
    toggleCollapsed: ({ setCollapsed }) => e => {
      e.preventDefault();
      setCollapsed(v => !v);
    },
  }),
  setPropTypes(propTypes),
  pure,
)(Collapse);
