import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ShowStoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snips: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/all')
      .then(res => {
        this.setState({
          snips: res.data
		 
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };


  render() {
    const snips = this.state.snips;
    console.log("PrintBook: " + snips);
    let storyList;

    if(!snips) {
      storyList = "there is no snip record!";
	  console.log("no sips");
    } else {
		
      storyList = snips.map((item) =>
       <h3>
	   
	   {item.story}
	   </h3>
	  
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Books List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/add-snip" className="btn btn-outline-warning float-right">
                + Add New Snip
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {storyList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowStoryList;