import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/js/materialize'
import 'materialize-css/dist/css/materialize.min.css';
import TodoInput from '../components/TodoInput';
import TodoBody from '../components/TodoBody';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: "",
      todos: []
    }
  }
  inputChangeHandler = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }

  doneCheckHandler = (index, event) => {
    let updatedTodos = this.state.todos;
    updatedTodos[index].done = event.target.checked;
    this.setState({
      todos: updatedTodos
    })
  }

  formSubmitHanler = (e) => {
    e.preventDefault();
      let todoList = this.state.todos;
      todoList.push({
        todoText: this.state.inputText,
        done: false
      })
      this.setState({
        inputText: "",
        todos: todoList.reverse()
      })
  }

  todoDeleteHandler = (index) => {
    let updatedTodos = this.state.todos;
    updatedTodos.splice(index, 1);
    this.setState({
      todos: updatedTodos
    })
  }

  todoEditHandler = (index, text) => {
    let updatedTodos = this.state.todos;
    updatedTodos[0].todoText = text;
    this.setState({
      todos: updatedTodos
    })
  }

  render(){
    return(
      <div className="container">
        <TodoInput todoText={this.state.inputText} inputChange={this.inputChangeHandler} formSubmit={this.formSubmitHanler}></TodoInput>
        <TodoBody todoList={this.state.todos} doneCheckHandler={this.doneCheckHandler} todoDeleteHandler={this.todoDeleteHandler} todoEditHandler={this.todoEditHandler}></TodoBody>
      </div>
    )
  }
}

export default App;
