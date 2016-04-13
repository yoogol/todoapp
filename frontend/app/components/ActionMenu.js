import React from 'react';


let actionMenuStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'fixed',
  top: 0,
  zIndex: 20,
  width: '90%',
  background: 'purple',
  height: 40,
  padding: 10
};


let boxStyle = {
  textAlign: 'center',
  width: 300,
  height: 30
};

let buttonStyle = {
  textAlign: 'center',
  height: 35,
  marginRight: 35,
};

const ActionMenu = React.createClass ({
  render: function() {
    return (
      <div style={actionMenuStyle}>
        <SearchTodo searchHandler={this.props.searchHandler}/>
        <QuickAddBox quickAddHandler={this.props.quickAddHandler}/>
        <AddNewButton
        addNewFormHandler={this.props.addNewFormHandler}/>
      </div>
    )
  }
})

const SearchTodo = React.createClass ({
  render: function() {
    return (
      <div>
        <input
          style={boxStyle}
          type='text'
          placeholder='search todos'
          onKeyPress={this.props.searchHandler}
          />
      </div>
    )
  }
});

// const AddNewTodo = React.createClass ({
//   render: function() {
//     return (
//       <div>
//         <AddNewButton AddNewFormHandler={this.props.addNewFormHandler}/>
//         <QuickAddBox quickAddHandler={this.props.quickAddHandler}/>
//       </div>
//     )
//   }
// });


const AddNewButton = React.createClass ({
  render: function() {
    return (
      <button
        style={buttonStyle}
        type="button"
        onClick={this.props.addNewFormHandler}>Add new todo</button>
    )
  }
});

const QuickAddBox = React.createClass ({
  render: function() {
    return (
      <input
        style={boxStyle}
        type='text'
        placeholder='quick add'
        onKeyPress={this.props.quickAddHandler}
        />
    )
  }
})


export default ActionMenu;
