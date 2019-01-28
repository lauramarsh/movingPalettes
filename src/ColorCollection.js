import React, { Component } from 'react';
import './App.css';


class ColorCollection extends Component {


  constructor(props) {
    super(props);

    this.state = {
      colorDisplayNum: 7, // total number of display colors
      colorTotalNum: 12, // total number of colors in gifdata
      // currentTitle: gifTitle,
      // currentColors: curGifColors,
    };
  }


  getDisplayColors() {
    // extract the hexes from the appropriate random colors
    var displayColors = Array(this.state.colorDisplayNum);
    var randomsIterator = this.getRandomNums().values();

    displayColors = displayColors.fill().map(
      (v, i) => {
        var curRandomColor = this.props.gifColors[
          'c' + randomsIterator.next().value.toString()
        ];
        return curRandomColor;
      }
    );
    return displayColors;
  }


  getRandomNums() {
    var usedNums = new Set();
    var i;

    for (i = 0; i < this.state.colorDisplayNum; i++) {
      var randomNum;
      while (randomNum == null || usedNums.has(randomNum)) {
        randomNum = Math.floor(Math.random() * this.state.colorTotalNum) + 1;
      }
      usedNums.add(randomNum);
    }

    return usedNums;
  }


  render() {
    const displayColors = this.getDisplayColors();
    const colorItems = displayColors.map(
      (item) =>
        <div
          className="colors__color"
          style={{backgroundColor: item,}}
        />
    );

    return (
      <div className="colors">
        {colorItems}
      </div>
    );
  }

}


export default ColorCollection;
