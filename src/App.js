import React,{Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Route from 'react-router-dom/Route';

const User=()=>{
  return (<h1> Welcome User </h1>)
}

class App extends Component {
  
  render() { 
    return (  
      <Router>
      <div className="App">
      <Route path="/" exact render={
        ()=>{
          return (<h1>Hello</h1>);
        }
        }/>

      <Route path="/about/" strict render={
        ()=>{
          return (<h1>Hello about</h1>);
        }
        }/>

<Route path="/user" strict component={User}/>

      </div>
      </Router>
    );
  }
}
 


export default App;
