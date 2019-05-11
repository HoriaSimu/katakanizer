import React from 'react';
import UserInput from './UserInput';
import AppOutput from './AppOutput';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h2>The Katakanizer</h2>
        <UserInput />
        <AppOutput />
      </div>
    );
  }
};

export default App;
