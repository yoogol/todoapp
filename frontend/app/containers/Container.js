import React from 'react';
import TodosContainer from './TodosContainer';
import AddContainer from './AddContainer';

import ActionMenu from '../components/ActionMenu';

const Container = React.createClass ({

  render: function() {
    if (this.props.currentScreen == 'Todos') {
      return (
        <div style={containerStyle}>
        <ActionMenu searchHandler={this.props.searchHandler} quickAddHandler={this.props.quickAddHandler}
         addNewFormHandler={this.props.addNewFormHandler}/>
        <TodosContainer todosToDisplay={this.props.todosToDisplay}
        editFormHandler={this.props.editFormHandler} deleteTodoHandler={this.props.deleteTodoHandler}
        />
      </div>
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

let containerStyle = {

}

export default Container;
