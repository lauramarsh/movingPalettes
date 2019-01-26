import React, { Component } from 'react';
import SideBar from './SideBar.js';
import Easel from './Easel.js';
import './App.css';


class Palette extends Component {


  render() {
    return (
      <div className='palette'>
        <SideBar/>
        <Easel gifTitle=""/>
      </div>
    );
  }


}

export default Palette;
