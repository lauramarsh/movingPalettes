import React, { Component } from 'react';
import SideBar from './SideBar.js';
import Easel from './Easel.js';
import gifData from './GifData.js';
import './App.css';


class Palette extends Component {
  // holds all the state and logic for palette display

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    var curGifTitle = "Arctic"; // default gif
    var curGifColors = this.getDisplayColors(curGifTitle);

    this.state = {
      currentGif: curGifTitle,
      currentColors: curGifColors,
    };
  }


  getDisplayColors(newGifTitle) {
    var curGifColors;
    for (var d in gifData) {
      if (gifData[d].fileName === newGifTitle) {
        curGifColors = gifData[d].colors;
      }
    }
    return curGifColors;
  }


  handleChange(newGifTitle) {
    this.setState({
      currentGif: newGifTitle,
      currentColors: this.getDisplayColors(newGifTitle),
    });
  }


  render() {
    return (
      <div className='palette'>
        <SideBar
          gifData={gifData}
          currentGif={this.state.currentGif}
          handleChange={this.handleChange}
        />
        <Easel
          gifTitle={this.state.currentGif}
          gifColors={this.state.currentColors}
        />
      </div>
    );
  }


}

export default Palette;
