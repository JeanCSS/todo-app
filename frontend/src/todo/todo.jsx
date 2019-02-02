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
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.handlelist();
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description }).then(resp => this.handlelist());
  }
  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }
  handleClear() {
    this.handlelist();
  }
  handleSearch() {
    this.handlelist(this.state.description);
  }
  handleDelete(todo) {
    axios
      .delete(`${URL}/${todo._id}`)
      .then(resp => this.handlelist(this.state.description));
  }
  handleMarkAsDone(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(resp => this.handlelist(this.state.description));
  }
  handleMarkAsPending(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(resp => this.handlelist(this.state.description));
  }
  handlelist(description = "") {
    const search = description ? `&description__regex=/${description}/` : "";
    axios
      .get(`${URL}?sort=-createAt${search}`)
      .then(resp =>
        this.setState({ ...this.state, description, list: resp.data })
      );
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
            handleSearch={this.handleSearch}
            handleClear={this.handleClear}
          />
        </div>
        <div className="row">
          <TodoList
            list={this.state.list}
            handleDelete={this.handleDelete}
            handleMarkAsDone={this.handleMarkAsDone}
            handleMarkAsPending={this.handleMarkAsPending}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
