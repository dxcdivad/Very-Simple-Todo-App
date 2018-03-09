import React from 'react';


export default class AddArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.list;

    this.getPriority = this.getPriority.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate= this.handleUpdate.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  getPriority() {
    if (this.state.priority === '3') {
      return 'list-group-item-danger';
    }
    if (this.state.priority === '2') {
      return 'list-group-item-warning';
    }
    if (this.state.priority === '1') {
      return 'list-group-item-info';
    }
  }

  handleDelete() {
    this.props.handleDelete(this.state.count);
  }

  handleEdit() {
      this.setState({ editEnabled: true });
    }  

  handleUpdate() {
    const update = this.state;
    update.editEnabled = false;
    this.setState({ update });
  }

  render() {
    if (this.state.editEnabled === true) {
      return(
      <div className={'list-group-item ' + this.getPriority()} role="alert">
          <div className="panel-group">
            <label>Description</label>
            <textarea
              name="text"
              className="update-todo-text"
              value={this.state.text}
              onChange={this.handleChange}
              ></textarea>
          </div>
          <div className="panel-group">
            <label>Priority</label>
            <br />
            <select
              name="priority"
              className="update-todo-priority"
              value={this.state.priority}
              onChange={this.handleChange}
              >
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </select>
          </div>
          <div className="panel-group">
            <button
              name="submit"
              className="update-todo btn btn-success"
              onClick={this.handleUpdate}
              >Save</button>
          </div>
      </div>
      );
    } 
    
    return (
      <div className={'list-group-item ' + this.getPriority()} role="alert">
          <input
            type='checkbox'
          />
          {this.state.text}
          <a
            name='delete'
            className='delete-todo glyphicon glyphicon-trash pull-right'
            onClick={this.handleDelete}
          >
          </a>
          <a
            name='edit'
            className='edit-todo glyphicon glyphicon-edit pull-right'
            onClick={this.handleEdit}>
          </a>
        </div>
        )
      }
    }
