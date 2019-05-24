import React from 'react';
import UserInput from './UserInput';
import AppOutput from './AppOutput';
import './App.css';

class App extends React.Component {
  state = {
    currentText: ""
  };

  updateInputText = (text) => {
    this.setState({ currentText: text });
  };

  render() {
    return (
      <div className="ui container">
        <h1>The Katakanizer</h1>
        <UserInput updateInputText={this.updateInputText}/>
        <AppOutput currentText={this.state.currentText}/>
      </div>
    );
  }
};

export default App;
