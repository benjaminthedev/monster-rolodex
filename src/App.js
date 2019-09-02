import React, { Component } from 'react'
import './App.css'

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [
        {
          id: '1',
          name: 'Monster One',
        },
        {
          id: '2',
          name: 'Monster Two'
        },
        {
          id: '3',
          name: 'Monster Three'
        },
        {
          id: '4',
          name: 'Monster Four'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
       {this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1> )}
      </div>  
    )
  }
}

export default App;