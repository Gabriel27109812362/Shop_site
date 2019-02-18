import React, {Component} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

const GlobalStyle = createGlobalStyle`

  body{
      font-family: "Catamaran", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #000;
      margin: 0;
      background-color: #eee;
      text-align: left;
}
`;

class App extends Component {
   render() {
      return (
         <>
            <GlobalStyle/>
            <Header/>
           {/*<Router>*/}
               {/*<div>*/}
                  {/*<Route path='/' component={Home}/>*/}
                  {/*<Route path='/catalog' component={Catalog}/>*/}
                  {/*<Route path='/about' component={About}/>*/}
               {/*</div>*/}
            {/*</Router>*/}
            {/*<Footer/>*/}
         </>
      );
   }
}

export default App;
