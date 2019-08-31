import React from 'react';
import uniqueID from '../util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "", 
      done: "",
      id: 0
    };

  }

  handleTitle(e) {
    this.setState({title: e.target.title});
  }

  handleBody(e) {
   this.setState({Body: e.target.body});
  }

  handleDone(e) {
    this.setState({Done: e.target.done});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState({
      title: "",
      body: "",
      done: ""
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Add Todo</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              onChange={this.handleTitle}
              type="text"
              value={this.state.title}
            />
          </label>
          <label>
            Body:
            <input
              onChange={this.handleBody}
              type="text"
              value={this.state.body}
            />
          </label>
          <label>
            Done:
            <input
              onChange={this.handleDone}
              type="text"
              value={this.state.done}
            />
          </label>
          <input type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }
}
