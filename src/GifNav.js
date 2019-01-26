import React, { Component } from 'react';
import './App.css';


class GifNav extends Component {


  render() {
    const data = this.props.items;
    const palItems = data.map(
      (item) =>
        <li>
          <div
            className='gifNav__button'
            key={item.fileName}
            style={{backgroundColor: item.c1}}
          />
        </li>
    );

    return (
      <ul className='gifNav'>
        {palItems}
      </ul>
    );
  }


}


export default GifNav;
