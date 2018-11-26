import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class ListColors extends Component {
  editColor(item) {
    this.props.editColor(item);
  }

  deleteColor(item) {
    this.props.deleteColor(item);
  }

  render() {
    let colors = this.props.colors;
    return (
      <div className="colors-wrapper">
        <ul className="list">
          <FlipMove>
            {colors.map(item => (
              <li key={item.id}
                style={{ backgroundColor: item.text }}>
                <span className="list-color" onClick={this.editColor.bind(this, item)}>{item.text}</span>
                <span className="delete" onClick={() => { this.deleteColor(item) }}>x</span>
              </li>
            ))}
          </FlipMove>
        </ul>
      </div>
    );
  }
}

export default ListColors;