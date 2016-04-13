import React, { PropTypes } from 'react';

let headStyle = {
  padding: 5,
  position: 'fixed',
  top: 100,
  background: 'lightblue',
  height: 20,
  width: '90%',
  zIndex: 50
};
let divStyle = {
  postion: 'relative',
  marginTop: 150
};
let todoLineStyle = {
  borderBottom: '1px solid lightgrey',
  padding: 5,
  position: 'relative',
};
let todoContentStyle = {
  position: 'absolute',
  left: 30
};
let todoEditButton = {
  position: 'absolute',
  left: "90%"
};
let importanceStyle = {
  fontColor: 'lightgrey',
  position: 'absolute',
  left: "40%"
};
let timeStyle = {
  fontColor: 'lightgrey',
  position: 'absolute',
  left: "50%"
};
let dueDateStyle= {
  fontColor: 'lightgrey',
  position: 'absolute',
  left: "60%"
}

const TodosContainer = React.createClass ({
  render: function() {
    return (
      <div>
        <div style={headStyle}>
          <span style={todoContentStyle}>Todo</span>
          <span style={importanceStyle}>I</span>
          <span style={timeStyle}>T</span>
          <span style={dueDateStyle}>Due</span>

          <span style={todoEditButton}>Edit</span>
        </div>
        <div style={divStyle}>
        {
          this.props.todosToDisplay.map((todo) => {
          return <div key={todo._id} style={todoLineStyle}>
            <button></button>
            <span style={todoContentStyle}>{todo.content}</span>
            <button style={todoEditButton} onClick={this.props.editFormHandler} value={todo.content}>Edit</button>

            <span style={importanceStyle}>{todo.importance} </span>
            <span style={timeStyle}>{todo.timeNeeded}</span>
            <span style={dueDateStyle}>{todo.dateDue}</span>
          </div>
        })
      }
      </div>
      </div>
    )
  }
})

export default TodosContainer;
