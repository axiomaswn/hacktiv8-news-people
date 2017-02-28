import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import {List, Search} from './index.jsx'

export class Home extends Component {
  constructor () {
    super()
    this.state = {
      datas: [],
      searchKeyword: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentWillMount() {
    const appThis = this
    fetch('http://hn.algolia.com/api/v1/search?query=react')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
    setTimeout(() => {
      appThis.setState({
      datas: data.hits
    })}, 0)
    });
  }

  handleChange (e) {
    this.setState({
      searchKeyword: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hacktiv8 News</h2>
        </div>
        <h3>Search</h3>
        <Search handles={this.handleChange} />
        <List datas={this.state.datas.filter(data => {
            return data.title.toLowerCase().indexOf(this.state.searchKeyword.toLowerCase()) !== -1
          })
        } />
      </div>
    )
  }
}
