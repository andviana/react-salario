import React, { Component } from 'react';
import Header from './components/Header/Header';
import ProgressBarSalary from './components/ProgressBarSalary/ProgressBarSalary';
import InputFullSalary from './components/InputFullSalary/InputFullSalary';
import { calculateSalaryFrom } from './helper/salary';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fullSalary: [],
      value: 0,
    };
  }
  componentDidMount() {
    const value = 1000;
    const fullSalary = calculateSalaryFrom(1000);
    this.setState({ fullSalary, value });
  }
  handleChangeSalary = (value) => {
    const fullSalary = calculateSalaryFrom(value);
    this.setState({ fullSalary, value });
  };
  render() {
    const { value, fullSalary } = this.state;
    return (
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>React Salário</h1>
        <InputFullSalary
          value={value}
          onChangeInput={this.handleChangeSalary}
        />
        <Header fullSalary={fullSalary} />
        <ProgressBarSalary fullSalary={fullSalary} />
      </div>
    );
  }
}
