import React, { Component } from 'react';
import css from './inputFullSalary.module.css';

export default class InputFullSalary extends Component {
  handleChangeInput = (event) => {
    const { onChangeInput } = this.props;
    const value = event.target.value;
    onChangeInput(value);
  };
  render() {
    const { value } = this.props;
    return (
      <div className={css.inputFullSalary}>
        <label>Salário Bruto</label>
        <input type="number" value={value} onChange={this.handleChangeInput} />
      </div>
    );
  }
}
