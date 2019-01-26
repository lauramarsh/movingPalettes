import React, { Component } from 'react';
// import gifData from './GifData.js';
import './App.css';


class Easel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifTitle: this.props.gifTitle,
    }
  }


  render() {
    return (
      <div className='easel'>
        <img
          src={'/' + this.state.gifTitle + '.gif'}
          className='easel__canvas'
          alt={this.state.gifTitle}
        />
      </div>
    );
  }


}


export default Easel;
