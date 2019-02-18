import React, {Component} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Catamaran:400,100,300');
  
  body{
      font-family: "Catamaran", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #000;
      margin: 0;
      background-color: #eee;
      text-align: left;
}
`;
const Container = styled.div`
width: 970px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

class App extends Component {
   render() {
      return (
         <>
            <GlobalStyle/>
            <Header/>
            <Container>
               <Router>
                  <Switch>
                     <Route path='/catalog' component={Catalog}/>
                     <Route path='/about' component={About}/>
                     <Route path='/' component={Home}/>
                  </Switch>
               </Router>
            </Container>
            <Footer/>
         </>
      );
   }
}

export default App;
