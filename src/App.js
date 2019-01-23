import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WindowChat from './WindowChat';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];

class App extends Component {

  state = {
    messages: messages
  }

  sendMessage = (msg) => {
    this.setState(oldState => ({
      messages: [...oldState.messages, msg],
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map((user, index) => (
            <WindowChat key={user.username} user={user} sendMessage={this.sendMessage} listMsg={this.state.messages} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
