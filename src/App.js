import React, {Component, Fragment} from 'react';
import './App.scss';

import {Header} from './components/Header/Header';

class App extends Component {

  constructor() {
    super();

    this.data = [
      {
        name: "Peter",
        age: 54
      },
      {
        name: "Jovan",
        age: 30
      },
      {
        name: "Josh",
        age: 33
      }
    ];
  }

  printSomething = (text) => {
    console.log(text);
  }

  render() {
      return (
        <Fragment>
          <Header gray />
        </Fragment>
      )
  }
}

export default App;
