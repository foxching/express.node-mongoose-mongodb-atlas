import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import AppNavbar from './components/AppNavbar'
import Todo from './components/Todo'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
