import React, { Component } from 'react';
import Palette from './Palette.js'
import './App.css';

// TODO:
//  - Add scroll or some scroll intuition assist
//  - Add some background animation? for the aestheticssss
class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      scrollPos: 0,
    };
  }


  componentDidMount() {
    window.addEventListener('wheel', (event) => this.handleScroll(event));
  };


  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll);
  };


  handleScroll(event) {
    setTimeout( () => {
      if (event.deltaY > 0) {
        // SCROLLING DOWN
        console.log("DOWN");
        document.getElementById('titleCard').style.top = "-100%";
      } else if (event.deltaY < 0) {
        // SCROLLING UP
        console.log("UP");
        document.getElementById('titleCard').style.top = "0";
      }
    }, 450);

  };


  render() {
    return (
      <div className="movingPalettes">
        <div className="titleCard__background" id="titleCard">
          <h1 className="titleCard__title">Moving Palettes</h1>
          <p className="titleCard__subtitle">palettes made from gifs and cinemagraphs</p>
        </div>
        <Palette/>
      </div>
    );
  }


}


export default App;
