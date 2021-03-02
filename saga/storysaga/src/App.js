import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import AddSnip from './components/AddSnip';
import ShowStoryList from './components/ShowStoryList';
//import ShowBookDetails from './components/ShowBookDetails';
//import UpdateBookInfo from './components/UpdateBookInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowStoryList} />
		   <Route exact path='/add-snip' component={AddSnip} />
		  
         
        </div>
      </Router>
    );
  }
}

export default App;