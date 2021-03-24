import React from 'react';
import './App.css';
import Home from './containers/Home/Home';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import MyPosts from './containers/MyPosts/MyPosts.js';
import NewPost from './containers/NewPost/NewPost'

function App() {
  return (
    <Router>
      <div className="App">
        
        <Route path="/" exact component={Home} />
        <Route path="/mypost" component={MyPosts} />   
        <Route path="/newpost" component={NewPost} />    
        <Redirect from = '/' to = '/' />  
      </div>
    </Router>
  );
}

export default App;
