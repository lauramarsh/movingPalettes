import React, { Component } from 'react';
import SideBar from './SideBar.js';
import Easel from './Easel.js';
import './App.css';


class Palette extends Component {


  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      currentGif: "Arctic"
    };
  }

  handleChange(fileName) {
    this.setState({currentGif: fileName});
  }

  render() {
    return (
      <div className='palette'>
        <SideBar
          currentGif={this.state.currentGif}
          handleChange={this.handleChange}
        />
        <Easel gifTitle={this.state.currentGif}/>
      </div>
    );
  }


}

export default Palette;
