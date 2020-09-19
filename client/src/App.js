import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import store from "./store";
import AppNavbar from './components/layout/AppNavbar'
import Home from './components/layout/Home'
import { loadUser } from './store/actions/authActions'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
