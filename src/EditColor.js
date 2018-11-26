import React, { Component } from 'react';

class EditColor extends Component {
  constructor(props) {
    super(props);
    this.onChangeEdit = this.onChangeEdit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    var text = this.refs.text.value;

    if (!text.match(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i)) {
      alert("Wrong hex code!");
      return;
    }

    if (this.props.isEdit) {
      var updateColor = {
        id: this.props.isEdit,
        text: text
      };
      this.props.onColorUpdate(updateColor);
    } else {
      this.props.onColorAdd(text);
    }
  }
  onChangeEdit(e) {
    this.props.changeTextEdit(e.target.value);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            <p>Enter your Hex code</p>
            <input
              type="text"
              placeholder="#24d7c1"
              ref="text"
              value={this.props.text}
              onChange={this.onChangeEdit}
            />
            <button type="submit" value="submit">Add</button>
          </label>
        </form>
      </div>
    );
  }
}

export default EditColor