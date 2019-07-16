import React, { Component } from 'react';
import axios from "axios";
import TableRow from "./TableRow"
// import { faDove } from '@fortawesome/free-solid-svg-icons';

class Manage extends Component {
  state = {
    tableau: []
  }

  getArticles = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/articles`).then(res => {
      this.setState({ tableau: res.data })
    }).catch(err => { console.log(err) })
  }

  componentDidMount = () => {
    this.getArticles()
  }

  deleteOne = (id, index) => {
    const temporaryArr = [...this.state.tableau]
    console.log(temporaryArr)
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/api/articles/${id}`)
      .then(delet => {
        this.getArticles()
      })
      .catch(err => { console.log(err) })
  }


  render() {
    console.log(this.state.tableau)
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Text</th>
            <th>Higlhight</th>
          </tr>
        </thead>
        <tbody>
          {this.state.tableau.map((row, i) => {
            return (


              <TableRow key={i} index={i} title={row.title} highlight={row.highLight} text={row.text} id={row._id} deleteOne={this.deleteOne} />

            )
          })}

        </tbody>
      </table>
    )

  }
}

export default Manage;