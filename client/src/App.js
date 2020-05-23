import React from 'react';
import 'bootswatch/dist/slate/bootstrap.min.css';
import './App.css';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import {HashRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (<HashRouter>
            <Navbar/>
            <main className="container pt-5">
              <Switch>
                <Route path='/products/:id' component={ProductPage}/>
                <Route path='/products' component={ProductsPage}/>
                <Route path='/' component={HomePage}/>
              </Switch>
            </main>
          </HashRouter>);
}

export default App;