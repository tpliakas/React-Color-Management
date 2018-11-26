import React, { Component } from 'react';
import ListColors from './ListColors';
import EditColor from './EditColor';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleEditColor = this.handleEditColor.bind(this);
    this.handleChangeTextEdit = this.handleChangeTextEdit.bind(this);
    this.handleColorAdd = this.handleColorAdd.bind(this);
    this.handleColorUpdate = this.handleColorUpdate.bind(this);
    this.handleDeleteColor = this.handleDeleteColor.bind(this);
    this.state = {
      text: "",
      isEdit: 0,
      colors: []
    };
  }

  handleEditColor(item) {
    this.setState({
      text: item.text,
      isEdit: item.id
    });
  }

  handleChangeTextEdit(text) {
    this.setState({ text: text });
  }

  handleColorAdd(text) {
    var newText = {
      id: this.state.colors.length + 1,
      text: text
    };
    this.setState({
      colors: this.state.colors.concat(newText),
      text: ""
    });
  }

  handleColorUpdate(color) {
    var colors = this.state.colors;
    for (var i = 0; i < colors.length; i++) {
      if (colors[i].id === color.id) {
        colors.splice(i, 1);
      }
    }

    colors.push(color);
    this.setState({
      colors: colors,
      text: "",
      isEdit: 0
    });
  }

  handleDeleteColor(item) {
    var colors = this.state.colors;
    var filteredColors = colors.filter(function (color) {
      return (color.id !== item.id)
    });

    this.setState({
      colors: filteredColors
    });


    // this.setState({
    //   text: item.text,
    //   isEdit: item.id
    // });
  }

  render() {
    return (
      <div>
        <EditColor
          onColorAdd={this.handleColorAdd}
          {...this.state}
          changeTextEdit={this.handleChangeTextEdit}
          onColorUpdate={this.handleColorUpdate}
        />
        <ListColors
          colors={this.state.colors}
          editColor={this.handleEditColor}
          deleteColor={this.handleDeleteColor}
        />
      </div>
    );
  }
}
// class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       colors: [],
//       value: ''
//     };

//     this.addColor = this.addColor.bind(this);
//     this.deleteColor = this.deleteColor.bind(this);
//     // this.onChangeEdit = this.onChangeEdit.bind(this);
//   }

//   addColor(c) {
//     // check for valid hex code with regex
//     if (this.state.value.match(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i)) {
//       console.log('Hex ok');
//       var newColor = {
//         text: this.state.value,
//         key: Date.now(),
//       };

//       this.setState((prevState) => {
//         return {
//           colors: prevState.colors.concat(newColor)
//         };
//       });
//     } else {
//       console.log('Hex NOT ok');
//     }

//     this.setState({
//       color: ""
//     });

//     c.preventDefault();
//   }

//   deleteColor(key) {
//     var filteredColors = this.state.colors.filter(function (color) {
//       return (color.key !== key)
//     });

//     this.setState({
//       colors: filteredColors
//     });
//   }

//   handleChange(event) {
//     console.log(event);
//     this.setState({
//       value: event.target.value
//     })
//   }

//   render() {
//     return (
//       <div className="color-management">
//         <div className="header">
//           <form onSubmit={this.addColor}>
//             <label>
//               <p>Enter your Hex code</p>
//               <input value={this.state.value}
//                 onChange={this.handleChange.bind(this)}
//                 placeholder="#000000"
//                 name="color" />
//             </label>
//             <button type="submit">Add</button>
//           </form>
//         </div>
//         <ColorsList entries={this.state.colors}
//           delete={this.deleteColor}
//           change={this.handleChange} />
//       </div>
//     );
//   }
// }

export default App;
