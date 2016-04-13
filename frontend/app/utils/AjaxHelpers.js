import axios from 'axios';

const AjaxHelpers = {
  getAllToDos: function() {
    return axios.get('http://localhost:3000/api/todos');
  },
  quickToDoAdd: function(data) {
    console.log("data", data);
    let object = {
      content: data,
      dateCreated: new Date(),
    };
    return axios.post('http://localhost:3000/api/todos/new', object);
  },
  completeToDoAdd: function(data) {
    console.log('data', data);
    return axios.post('http://localhost:3000/api/todos/new', data);
  },
  editToDo: function(newTodo, oldTodo) {
    console.log("newTodo", newTodo);
    console.log("oldTodo", oldTodo)
    // let oldTodo = data.oldName;
    // let newTodo = {
    //   content: data.newName
    // };
    return axios.put('http://localhost:3000/api/todos/'+ oldTodo, newTodo);
  },
  deleteToDo: function(data) {
    console.log("data", data);
    return axios.delete('http://localhost:3000/api/todos/delete/' + data);
  }

}

export default AjaxHelpers;
