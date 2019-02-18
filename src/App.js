import React, {Component} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header';

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
            <Router>
               <div>
                  <Route path='/home' component = />
                  <Route path='/catalog'/>
                  <Route path='/about'/>
               </div>
            </Router>


         </>
      );
   }
}

export default App;
