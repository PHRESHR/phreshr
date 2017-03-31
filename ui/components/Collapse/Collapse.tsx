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
  const { title, children, toggleCollapsed, collapsed } = props;
  return (
    <div>
      <a href="javascript:void(e)" onClick={toggleCollapsed}>
        { title }
      </a>
      { !collapsed ?
        (
          <div>
            {children}
          </div>
        ) : null
      }
    </div>
  );
}

const propTypes = {
  title: React.PropTypes.string.isRequired,
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
