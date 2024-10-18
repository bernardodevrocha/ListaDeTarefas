import React, { Component } from 'react';

// Form
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

import './main.css';

export default class Main extends Component{
  state = {
    novaTarefa: '',
    tarefas: [
    ]
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if(tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];


    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
    })
}

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value
    })
  }

  handleEdit = (e, index) => {
    console.log('Edit', index);
  }

  handleDelete = (e, index) => {
    console.log('Delete', index);
  }

  render() {
    const { novaTarefa, tarefas } = this.state;

    return(
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#" onSubmit={this.handleSubmit} className="form">
          <input type="text" onChange={this.handleChange} value={novaTarefa}/>
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li>{tarefa}
            <div>
              <FaEdit onClick={(e) => this.handleEdit(e, index)} className="edit"/>
              <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className="delete"/>
            </div>
            </li>
          ))}
        </ul>

      </div>
    )
  }
}
