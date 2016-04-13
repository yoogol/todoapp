import React from 'react';
import {Link} from 'react-router';
import Container from './Container';
import ActionMenu from '../components/ActionMenu';
import Filter from '../components/Filter';
import AjaxHelpers from '../utils/AjaxHelpers'


const Home = React.createClass({
  getInitialState: function() {
    return {
      currentScreen: 'Todos',
      todosToDisplay: [],
      todosFromDB: [],
      newTask: '',
      deletedTask: '',
      todoToEdit: '',
    }
  },
  componentDidMount: function() {
    AjaxHelpers.getAllToDos().then(function(response) {
      this.setState({
        todosFromDB: response.data.todos,
        todosToDisplay: response.data.todos
      })
    }.bind(this));
  },
  searchHandler: function(e) {
    if (e.charCode == 13) {
      this.setState({
        currentScreen: 'Todos'
      });
      if (e.target.value === '') {
        this.componentDidMount();
      } else {
        let searchedTask = e.target.value.toLowerCase();
        console.log(searchedTask);
        console.log(this.state.todosFromDB);
        let found = this.state.todosFromDB.filter(function(obj) {
          let taskWords = obj.content.toLowerCase().split(" ");
          console.log(taskWords);
          let searchWords = searchedTask.split(' ');
          console.log(searchWords);
          for (var i = 0; i < searchWords.length; i++) {
            if (taskWords.indexOf(searchWords[i]) > -1) {
              return obj;
            };
            }
          });
        console.log('found' + found);
        if (found == '') {
          console.log("nothing found")
          this.setState({
            todosToDisplay: [{"content": "Nothing found"}]
          })
        } else {
          this.setState({
            todosToDisplay: found
          })
        }

      }
      e.target.value = '';
    }
  },
  quickAddHandler: function(e) {
      if (e.charCode == 13 && e.target.value !== '') {
        this.setState({
          currentScreen: 'Todos'
        });
        let newTask = e.target.value
        AjaxHelpers.quickToDoAdd(newTask).then(function(response) {
          console.log(response);
          this.setState({
            newTask: newTask,
          });
          this.componentDidMount();
        }.bind(this));
        e.target.value = '';
      }
  },
  addNewFormHandler: function () {
    console.log("add new clicked");
    this.setState({
      currentScreen: 'Add',
      todoToEdit: ''
    })
  },
  editFormHandler: function (e) {
    console.log("edit clicked");
    let todoToEdit = this.state.todosFromDB.filter((todo) => {
      if (e.target.value == todo.content) {
        return todo
      }
    });
    console.log(todoToEdit[0]);
    this.setState({
      currentScreen: 'Edit',
      todoToEdit: todoToEdit[0]
    })
  },
  deleteTodoHandler: function (e) {
    console.log(e.target.value);
    let deletedTask = e.target.value;
    AjaxHelpers.deleteToDo(e.target.value).then(function(response) {
      console.log(response);
      this.setState({
        deletedTask: deletedTask,
      });
      this.componentDidMount();
    }.bind(this));
  },
  returnHomeHandler: function() {
    this.setState({
      currentScreen: 'Todos'
    });
    this.componentDidMount();
  },
  render: function() {
    return (
      <div style={appStyle}>
        <Filter />
        <Container currentScreen={this.state.currentScreen} todosToDisplay={this.state.todosToDisplay}
        returnHomeHandler={this.returnHomeHandler}
        editFormHandler={this.editFormHandler}
        todoToEdit={this.state.todoToEdit}
        deleteTodoHandler={this.deleteTodoHandler}
        />
      </div>
    )
  }
});

let appStyle = {
  maxWidth: '90%',
  margin: 'auto',
  fontFamily: 'sans-serif'
};


export default Home;
