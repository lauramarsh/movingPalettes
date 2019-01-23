import React, { Component } from 'react';
import Palette from './Palette.js'
import './App.css';


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      scrollPos: 0,
    };
  }


  componentDidMount() {
    window.addEventListener('scroll', (event) => this.handleScroll(event));
  };


  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };


  handleScroll(event) {
    if ((document.body.getBoundingClientRect()).top < this.state.scrollPos) {
      // SCROLLING DOWN
      console.log("down");
      document.getElementById('titleCard').style.top = "-100%";
    } else {
      // SCROLLING UP
      console.log("up");
      document.getElementById('titleCard').style.top = "0";
    }
    this.setState({scrollPos: (document.body.getBoundingClientRect()).top});
  };


  render() {
    return (
      <div className="titleCard">
        <div className="titleCard__background" id="titleCard">
          <h1 className="titleCard__title">Moving Palettes</h1>
          <p className="titleCard__subtitle">palettes that move.</p>
        </div>
        <Palette/>
      </div>
    );
  }

  
}


export default App;
