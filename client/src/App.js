import React, { useEffect} from 'react';
import { Provider } from "react-redux";
import store from "./store";
import AppNavbar from './components/AppNavbar'
import Todo from './components/Todo'
import { loadUser} from './store/actions/authActions'

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
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
