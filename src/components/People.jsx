import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import {ListName} from './index.jsx'

export class People extends Component {
  constructor () {
    super()
    this.state = {
      datas: ''
    }
  }
  componentWillMount() {
    console.log('will');
    const appThis = this
    fetch('http://swapi.co/api/people/?page=1')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
    console.log(data);

      appThis.setState({
      datas: data.results
    })


    });
  }

  render() {
    console.log('render people');
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Star Wars Peoples</h2>
        </div>
        <ListName datas={this.state.datas} />
      </div>
    )
  }
}
