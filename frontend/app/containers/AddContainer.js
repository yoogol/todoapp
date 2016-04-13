import React, { PropTypes } from 'react';
import AjaxHelpers from '../utils/AjaxHelpers';

const AddContainer = React.createClass ({
  getInitialState: function() {
    return {
      oldToDoContent: this.props.todoToEdit.content,
      todoId: this.props.todoToEdit._id || '',
      content: this.props.todoToEdit.content || '',
      timeNeeded: this.props.todoToEdit.timeNeeded || "",
      dateCreated: this.props.todoToEdit.dateCreated || "",
      calendarApp: this.props.todoToEdit.calendarApp || "",
      dateDue: this.props.todoToEdit.dateDue || "",
      bestBy: this.props.todoToEdit.bestBy || "",
      importance: this.props.todoToEdit.importance || 0,
      category: this.props.todoToEdit.category || "",
      typeOfForm: this.props.typeOfForm,
      deleteButton: ''
    }
  },
  handleContentChange: function(e) {
    this.setState({content: e.target.value})
  },
  handleTimeNeededChange: function(e) {
    this.setState({timeNeeded: e.target.value})
  },
  handleCalendarAppChange: function(e) {
    this.setState({calendarApp: e.target.value})
  },
  handleDateDueChange: function(e) {
    this.setState({dateDue: e.target.value})
  },
  handleBestByChange: function(e) {
    this.setState({bestBy: e.target.value})
  },
  handleImportanceChange: function(e) {
    this.setState({importance: e.target.value})
  },
  handleCategoryChange: function(e) {
    this.setState({category: e.target.value})
  },
  displayDelete: function() {
    if (this.state.typeOfForm == 'Edit') {
      return <button onClick={this.props.deleteTodoHandler} value={this.state.todoId}>Delete</button>
          }
  },
  displayTitle: function() {
    if (this.state.typeOfForm == 'Edit') {
      return <h4>Editing existing task...</h4>
    } else if (this.state.typeOfForm == 'Add') {
      return <h4>Adding new task...</h4>
    }
  },
  handleSubmit: function(e) {
    e.preventDefault();
    let newTodo = {
      content: this.state.content,
      timeNeeded: this.state.timeNeeded,
      dateCreated: this.state.dateCreated,
      calendarApp: this.state.calendarApp,
      dateDue: this.state.dateDue,
      bestBy: this.state.bestBy,
      importance: this.state.importance,
      category: this.state.category
    };
    if (!newTodo.content) {
      return
    } else if (this.state.typeOfForm == 'Add') {
      AjaxHelpers.completeToDoAdd(newTodo).then(function(response) {
        console.log(response);
        this.setState ({
          content: "",
          timeNeeded: "",
          dateCreated: '',
          calendarApp: '',
          dateDue: '',
          bestBy: '',
          importance: 0,
          category: '',
        });
        this.props.returnHomeHandler();
      }.bind(this));
    } else if (this.state.typeOfForm == 'Edit'){
      AjaxHelpers.editToDo(newTodo, this.state.oldToDoContent).then(function(response) {
        console.log(response);
        this.setState ({
          content: "",
          timeNeeded: "",
          dateCreated: '',
          calendarApp: '',
          dateDue: '',
          bestBy: '',
          importance: 0,
          category: '',
        });
        this.props.returnHomeHandler();
      }.bind(this))
    };
  },
  render: function() {
    return (
      <div style={mainDivStyle}>
      <div style={divStyle}>
        {this.displayTitle()}
        <input type="submit" />
        <button type="button" onClick={this.props.returnHomeHandler}>Cancel</button>
        {this.displayDelete()}
        <form onSubmit={this.handleSubmit} style={formStyle}>
            <label>What do you need to do?</label>
            <br />
            <input
              style={formStyle}
              type='text'
              placeholder='short description'
              value={this.state.content}
              onChange={this.handleContentChange}
              />
            <br />
            <label>How long will it take?</label>
            <br />
            <input
              style={formStyle}
              type='text'
              placeholder='# of minutes'
              value={this.state.timeNeeded}
              onChange={this.handleTimeNeededChange}
              />
            <br />
            <label>Is this a calendar appointment?</label>
            <br />
              <input
                style={formStyle}
                type='text'
                placeholder='YES or NO'
                value={this.state.calendarApp}
                onChange={this.handleCalendarAppChange}
                />
            <br />
            <label>Due date</label>
            <br />
              <input
                style={formStyle}
                type='date'
                placeholder='pick a date'
                value={this.state.dateDue}
                onChange={this.handleDateDueChange}
                />
            <br />
            <label>Best by date</label>
            <br />
              <input
                style={formStyle}
                type='date'
                placeholder='pick a date'
                value={this.state.bestBy}
                onChange={this.handleBestByChange}
                />
            <br />
            <label>Importance (1-10)</label>
            <br />
            <input
              style={formStyle}
              type='number'
              value={this.state.importance}
              onChange={this.handleImportanceChange}
                />
            <br />
            <input type="submit" />
            <button type="button" onClick={this.props.returnHomeHandler}>Cancel</button>
            {this.displayDelete()}
        </form>

      </div>
      <div style={secondDivStyle}><h6>Searching tasks already in your todo...</h6></div>
      </div>
    )
  }
})

let formStyle = {
    width: '90%',
    height: 20,
    padding: 5,
    margin: '10px auto 10px auto',
    fontSize: 14,
    marginBottom: 20,
};

let divStyle ={
  width: '60%',
  fontSize: 16,
  marginTop: 70,
  minHeight: 600,
  background: 'lightgrey',
  textAlign: 'center',
  padding: 5
};

let secondDivStyle = {
  width: '40%',
  marginTop: 70,
  textAlign: 'center',
  padding: 5,
};

let mainDivStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}

export default AddContainer;
