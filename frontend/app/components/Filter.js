import React from 'react';

let filterStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  position: 'fixed',
  top: 60,
  background: 'white',
  padding: 10,
  zIndex: 20,
  width: '90%',
  height: 20
};

const Filter = React.createClass ({
  render: function() {
    return (
      <div style={filterStyle}>
        <button>Smart filter</button>
        <button>Today</button>
        <button>Tomorrow</button>
        <button>Overdue</button>
        <button>Sort by time</button>
        <button>Sort by importance</button>

      </div>
    )
  }
})

export default Filter;
