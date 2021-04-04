import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './Container/About'
import Home from './Container/Home'
import Keranjang from './Container/Keranjang'
import Produk from './Container/Produk';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App(){
  return (
    <Router>
      <div >
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/home">UTS Shop</a>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/home" class ="nav-item nav-link">Home</Link>
                <Link to="/produk" class ="nav-item nav-link" >Produk</Link>
                <Link to="/keranjang" class ="nav-item nav-link">Keranjang</Link>
                <Link to="/about" class ="nav-item nav-link">About</Link>
              </div>
            </div>
          </div>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path ="/home">
            <Home />
          </Route>
          <Route path ="/produk">
            <Produk />
          </Route>
          <Route path ="/keranjang">
            <Keranjang />
          </Route> 
          <Route path ="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;