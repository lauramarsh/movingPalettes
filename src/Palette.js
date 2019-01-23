import React, { Component } from 'react';
import SideBar from './SideBar.js';
import './App.css';


class Palette extends Component {


  render() {
    return (
      <div className='palette'>
        <SideBar/>
        <div className='easel'>

        </div>
      </div>
    );
  }


}

export default Palette;
