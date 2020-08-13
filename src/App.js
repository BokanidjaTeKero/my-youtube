import React, {Component, Fragment} from 'react';
import './App.scss';

import {Header} from './components/Header/Header';
// import {Cards} from './components/Cards/Cards';

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
          <Header gray search onPrint={(text) => this.printSomething(text)} />
          {/* <Cards data={this.data} /> */}
        </Fragment>
      )
  }
}

export default App;
