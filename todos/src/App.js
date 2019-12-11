import React from 'react';
import logo from './logo.svg';
import Todo from './Todo.jsx';
import BoxOfTodos from './BoxOfTodos.jsx';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

import './App.css';


function App() {
  return (
    <div>
      <BoxOfTodos />
      <ToastContainer />
    </div>
  );
}

export default App;
