import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import { Route, BrowserRouter } from 'react-router-dom';
import Expenses from './pages/Expenses/Expenses';
function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <Expenses></Expenses>
    </>
  );
}

export default App;
