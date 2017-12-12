import React, { Component } from 'react'
import axios from 'axios'

import './App.css'

class App extends Component {

  constructor () {
    super()
    this.state = {
      username: '',
      name: '',
      avatar_url: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('Click')
    axios.get('https://api.github.com/users/poitras')
      .then(response => {
        console.log('>>>>', response);
        this.setState({
          username: response.data.login,
          name: response.data.name,
          avatar_url: response.data.avatar_url
        })
      })
  }

  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>
          Click Me
        </button>
        {this.state.username ? <p>username: {this.state.username}</p> : null}
        {this.state.name ? <p>name: {this.state.name}</p> : null}
        {this.state.avatar_url ? <img src={this.state.avatar_url} alt="avatar" height="100" width="100" /> : null}
      </div>
    )
  }
}

export default App