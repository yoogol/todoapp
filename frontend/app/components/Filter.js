import React from 'react';

let filterStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  position: 'fixed',
  top: 0,
  background: 'purple',
  padding: 10,
  zIndex: 20,
  width: '90%',
  height: 40
};

let buttonStyle = {
  marginTop: 5,
  height: 30,
  background: 'indigo',
  color: 'white'
}

const Filter = React.createClass ({
  render: function() {
    return (
      <div style={filterStyle}>
        <button style={buttonStyle}>Smart filter</button>
        <button style={buttonStyle}>Today</button>
        <button style={buttonStyle}>Tomorrow</button>
        <button style={buttonStyle}>Overdue</button>
        <button style={buttonStyle}>Sort by time</button>
        <button style={buttonStyle}>Sort by importance</button>

      </div>
    )
  }
})

export default Filter;
