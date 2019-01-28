import React, { Component } from 'react';
// import gifData from './GifData.js';
import ColorCollection from './ColorCollection.js';
import './App.css';


class Easel extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='easel'>
        <div className='easel__canvas'>
          <img
            src={'/' + this.props.gifTitle + '.gif'}
            className='easel__canvas__img'
            alt={this.props.gifTitle}
          />
          <ColorCollection
            gifTitle={this.props.gifTitle}
            gifColors={this.props.gifColors}
          />
        </div>
      </div>
    );
  }


}


export default Easel;
