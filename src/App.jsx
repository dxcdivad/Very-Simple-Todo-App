import React, { Component } from 'react';
import AddArea from './AddArea'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      text: '',
      priority: '1',
      editEnabled: false,
      todoList: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleAddTodo() {
    const todoAdd = {
      count: this.state.count,
      text: this.state.text,
      priority: this.state.priority,
      editEnabled: this.state.editEnabled
    };

    const newList = this.state.todoList.slice();

    newList.push(todoAdd);

    this.setState({
      todoList: newList,
      count: this.state.count + 1
    });
  }

  handleDelete(count) {
    const toDeleteList = [...this.state.todoList];
    
    var newIndex = toDeleteList.findIndex(singleTodo => singleTodo.count == count);
    toDeleteList.splice(newIndex, 1);
    
    this.setState({ todoList: toDeleteList });
  }

  handleEdit(count) {
    const toEditList = [...this.state.todoList];

    var newIndex = toEditList.findIndex(singleTodo => singleTodo.count == count);
    toEditList.splice(newIndex, 1, singleTodo)
  }

  render() {
    return (
      <div className='container'>
        <h1>Very Simple Todo App</h1>
        <h4>Track all of the things</h4>
        <hr />
        <div className="col-lg-4">
          <div className="panel panel-default">
            <div className="panel-heading">
              Add New Todo
            </div>
            <div className="panel-body">
              <div className="form-group">
                <label>I want to..</label>
                <textarea
                  name="text"
                  className="create-todo-text"
                  value={this.state.text}
                  onChange={this.handleChange}>
                </textarea>
              </div>
              <div className="form-group">
                <label>How much of a priority is this?</label>
                <br />
                <select
                  name="priority"
                  className="create-todo-priority"
                  value={this.state.priority}
                  onChange={this.handleChange}>
                  <option value="1">Low</option>
                  <option value="2">Medium</option>
                  <option value="3">High</option>
                </select>
              </div>
              <div className="form-group">
                <button
                  name="submit"
                  className="create-todo btn btn-success btn-block"
                  onClick={this.handleAddTodo}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="panel panel-default">
            <div className="panel-heading">
              View Todos
            </div>
            <div className="list-group">
              {this.state.todoList.map(list =>
                <AddArea list={list}
                  key={list.count}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}
                  handleChange={this.handleChange}
                />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
