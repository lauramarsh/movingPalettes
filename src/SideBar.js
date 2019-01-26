import React, { Component } from 'react';
import gifData from './GifData.js';
import GifNav from './GifNav.js';
import './App.css';


class SideBar extends Component {


  render() {
    return (
      <div className='sideBar'>
        <GifNav items={gifData}/>
      </div>
    );
  }


}


export default SideBar;
