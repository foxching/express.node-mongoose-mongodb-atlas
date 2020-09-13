import React from 'react';
import AppNavbar from './components/AppNavbar'
import Todo from './components/Todo'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Todo />
    </div>
  );
}

export default App;
