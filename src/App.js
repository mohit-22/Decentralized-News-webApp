import logo from './logo.svg';
import './App.css';
 import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import Page from './componentweather/Page';
import City from './componentweather/City';
import Geocoding from './componentweather/Geocoding';
import Login from './components/Login';
// import WalletProvider from './components/WalletContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
 
 export default class App extends Component {
  apiKey = "01fd01b0251641deaadbf281956fb02e"
  constructor(){
    super()
    this.state = {
        mode: "dark"
    }
  }
  togglemode = ()=>{
    if(this.state.mode!=="light"){
      this.setState({mode: "light"});
      document.body.style.backgroundColor = "grey"
    }
    else{
      this.setState({mode: "dark"});
      document.body.style.backgroundColor = "white"
    }
  }
  state = {
    progress: 10
  }
  setProgress = (progress) => {
    this.setState({progress : progress})
  }
   render() {
     return (
      <Router>
         <Navbar togglemode={this.togglemode} mode={this.state.mode}/>
         <LoadingBar
        color="#f11946"
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
          <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="us" category="general" />}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="us" category="business" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="us" category="entertainment" />}></Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="us" category="general"  />}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="us" category="health"  />}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="us" category="science"  />}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="us" category="sports"  />}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} country="us" category="technology"  />}></Route>
          <Route exact path="/City" element={<City/>}></Route>
          <Route exact path="/Login" element={<Login/>}></Route>
          </Routes>
       </Router>
     )
   }
 }
 

