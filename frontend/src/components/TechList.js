import React, { Component } from 'react'

import TechItem from './TechItem'

class TechList extends Component {
  state = {
    newTech: '',
    techs: ['Node.js', 'ReactJs', 'React Native'],
  }

  handleInputeChange = (e) => {
    const inputValue = e.target.value

    this.setState({ newTech: inputValue })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newTech = this.state.newTech

    this.setState({
      techs: [...this.state.techs, newTech],
      newTech: '',
    })
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter((t) => t !== tech) })
  }

  render() {
    console.log(this.state)

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map((tech) => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type='text'
          placeholder='new tech'
          autoFocus
          onChange={this.handleInputeChange}
          value={this.state.newTech}
        />
        <button type='submit'>Add new tech</button>
      </form>
    )
  }
}

export default TechList
