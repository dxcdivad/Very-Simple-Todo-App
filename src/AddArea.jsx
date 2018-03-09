import React from 'react';


export default class AddArea extends React.Component{
  constructor(props){
    super(props);

    
    this.handleChange = this.handleChange.bind(this);
    this.getPriority = this.getPriority.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })  
  }

  getPriority() {
    if (this.props.list.priority === '3') {
      return 'list-group-item-danger';
    }
    if (this.props.list.priority === '2') {
      return 'list-group-item-warning';
    }
    if (this.props.list.priority === '1') {
      return 'list-group-item-info';
    }
  }

  handleDelete() {
    this.props.handleDelete(this.props.list.count);
  }


  render() {

    return (
      <div className={'list-group-item ' + this.getPriority()} role="alert">
        <input
        type='checkbox'
        />
        {this.props.list.text}
        <a
          name='delete'
          className='delete-todo glyphicon glyphicon-trash pull-right'
          onClick={this.handleDelete}
          >
        </a>
        <a
          name='edit'
          className='edit-todo glyphicon glyphicon-edit pull-right'>
        </a>
      </div>
      )
    }
}