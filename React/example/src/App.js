/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { Component } from "react";

import './estilo.css';
import {Post} from "./components/Post"

class TodoApp extends Component {
  constructor(tareas) {
    super(tareas);
    this.state = {
      tasks: [],
      newTask: ""
    }
  }


  InputChange = (e) => {
    this.setState({ newTask: e.target.value })
  }

  addTask = () => {
    if (this.state.newTask.trim !== '') {
      const newTaskObj = { text: this.state.newTask, completed: false };
      const updateTasks = [...this.state.tasks, newTaskObj];
      this.setState({
        tasks: updateTasks,
        newTask: ""
      });
    }
  }

  completedTask = (index) => {
    const updateTasks = [...this.state.tasks];
    updateTasks[index].completed = true;
    this.setState({
      tasks: updateTasks
    });
  }

  deleteTasks = (index) => {
    const updateTasks = [...this.state.tasks];
    updateTasks.splice(index, 1);
    this.setState({ tasks: updateTasks })
  }

  render() {
    return (
      <div className="todo-app">
        <h1>Lista de Tareas</h1>
        <div className="input-container">
          <input
            type="text"
            value={this.state.newTask}
            onChange={this.handleInputChange}
            placeholder="Nueva tarea"
          />
          <button onClick={this.addTask}>Agregar</button>
        </div>
        <ul className="task-list">
          {this.state.tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'completed' : ''}>
              {task.completed ? '✅ ' : ''}
              {task.text}
              {!task.completed && (
                <button className="complete-button" onClick={() => this.completeTask(index)}>Completar</button>
              )}
              <button className="delete-button" onClick={() => this.deleteTask(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


export default TodoApp;