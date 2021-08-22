import React from 'react';

const Sort = ({ children, by }) => {
  if (!by) {
    return children;
  } else if (by === 'asc') {
    return React.Children.toArray(children).sort((a, b) => a.key.localeCompare(b.key));
  } else if (by === 'desc') {
    return React.Children.toArray(children)
      .sort((a, b) => a.key.localeCompare(b.key))
      .reverse();
  }
};

export default Sort;
