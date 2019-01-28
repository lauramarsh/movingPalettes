import React, { Component } from 'react';
// import gifData from './GifData.js';
import ColorCollection from './ColorCollection.js';
import './App.css';


class Easel extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }


  render() {
    return (
      <div className='easel'>
        <img
          src={'/' + this.props.gifTitle + '.gif'}
          className='easel__canvas'
          alt={this.props.gifTitle}
        />
        <ColorCollection gifTitle={this.props.gifTitle}/>
      </div>
    );
  }


}


export default Easel;
