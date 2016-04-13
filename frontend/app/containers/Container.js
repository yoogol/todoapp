import React from 'react';
import TodosContainer from './TodosContainer';
import AddContainer from './AddContainer';
import EditContainer from './EditContainer';

const Container = React.createClass ({

  render: function() {
    if (this.props.currentScreen == 'Todos') {
      return (
        <TodosContainer todosToDisplay={this.props.todosToDisplay}
        editFormHandler={this.props.editFormHandler} deleteTodoHandler={this.props.deleteTodoHandler}
        />
      )
    } else if (this.props.currentScreen == 'Edit'){
      return (
        <AddContainer returnHomeHandler={this.props.returnHomeHandler}
        todoToEdit={this.props.todoToEdit}
        typeOfForm={this.props.currentScreen}
        deleteTodoHandler={this.props.deleteTodoHandler}
        />
      )
    } else if (this.props.currentScreen == "Add"){
      return (
        <AddContainer returnHomeHandler={this.props.returnHomeHandler}
        todoToEdit={this.props.todoToEdit}
        typeOfForm={this.props.currentScreen}/>
      )
    }
  }
});

export default Container;
