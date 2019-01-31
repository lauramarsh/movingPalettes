import React, { Component } from 'react';
import './App.css';


class GifNav extends Component {


  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, fileName) {
    this.props.handleChange(fileName);
  }


  render() {
    const data = this.props.items;
    const gifTitle = this.props.currentGif;
    const palItems = data.map(
      (item) => {
        return (item.fileName === gifTitle) ?
          <li className='gifNav__button--left'>
            <div
              className='gifNav__button'
              value={item.fileName}
              style={{
                      backgroundColor: item.colors['c1'],
                      borderStyle: 'inset',
                      cursor: 'default',
                    }}
            />
          </li>
        :
          <li>
            <div
              className='gifNav__button'
              onClick={(e) => this.handleChange(e, item.fileName)}
              value={item.fileName}
              style={{backgroundColor: item.colors['c1']}}
            />
          </li>
      }
    );

    return (
      <ul className='gifNav'>
        {palItems}
      </ul>
    );
  }


}


export default GifNav;
