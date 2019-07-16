import React, { Component } from "react";
import axios from "axios";



class TableRow extends Component {

  render() {
    const { text, title, highlight, deleteOne, id, index } = this.props
    return (
      <tr>
        <td>{title}</td>
        <td>{text}</td>
        <td>{highlight}</td>
        <td onClick={() => deleteOne(id, index)}>Delete</td>
        <td>Edit</td>
      </tr>
    )
  }

}

export default TableRow;
