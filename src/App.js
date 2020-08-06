import React from 'react';
import './App.scss';
import './Tasks/TaskController'
import TaskController from './Tasks/TaskController';

function App() {
  return (
    <div className="App">
      <h1 className="App__Title">Things to do</h1>
      <TaskController />
    </div>
  );
}

export default App;
