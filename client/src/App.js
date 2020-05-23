import React from 'react';
import 'bootswatch/dist/slate/bootstrap.min.css';
import './App.css';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <main className="App">
      <Navbar/>
      <div className="container pt-5">
        <HomePage/>
      </div>
    </main>
  );
}

export default App;
