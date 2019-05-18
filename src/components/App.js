import React from 'react';
import UserInput from './UserInput';
import AppOutput from './AppOutput';

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
        <h2>The Katakanizer</h2>
        <UserInput updateInputText={this.updateInputText}/>
        <AppOutput currentText={this.state.currentText}/>
      </div>
    );
  }
};

export default App;
