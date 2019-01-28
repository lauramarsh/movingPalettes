import React, { Component } from 'react';
import GifNav from './GifNav.js';
import './App.css';

// TODO: Begin implementing nav logic,
// moving state up the chain and into easel
// to present accurate gif upon nav onclick selection
class SideBar extends Component {


  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.state = {
    //   currentGif: this.props.currentGif
    // };
  }


  handleChange(gifTitle) {
    this.props.handleChange(gifTitle);
  }


  render() {
    return (
      <div className='sideBar'>
        <GifNav
          items={this.props.gifData}
          currentGif={this.props.currentGif}
          handleChange={this.handleChange}
        />
      </div>
    );
  }


}


export default SideBar;
