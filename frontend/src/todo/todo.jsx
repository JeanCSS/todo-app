import React, { Component } from "react";
import axios from "axios";
import PageHeader from "../tempate/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
const URL = "http://localhost:3002/api/todos";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", list: [] };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.handlelist();
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description }).then(resp => this.handlelist());
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
    console.log(this.state.description);
  }

  handleDelete(todo) {
    axios.delete(`${URL}/${todo._id}`).then(resp => this.handlelist());
  }

  handlelist() {
    axios
      .get(`${URL}?sort=-createAt`)
      .then(resp =>
        this.setState({ ...this.state, description: "", list: resp.data })
      );

    console.log(this.state.list);
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas " small="Cadastro" />
        <div className="row">
          <TodoForm
            value={this.state.description}
            handleAdd={this.handleAdd}
            handleChange={this.handleChange}
          />
        </div>
        <div className="row">
          <TodoList list={this.state.list} handleDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default Todo;
