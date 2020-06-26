import React, { Component } from 'react';
import css from './inputReadOnly.module.css';

export default class InputReadOnly extends Component {
  render() {
    const { color, value, label } = this.props;
    return (
      <div className={css.flexColumn}>
        <label>{label}</label>
        <input
          className={css.input}
          disabled
          type="text"
          value={value}
          style={{ color: color }}
        />
      </div>
    );
  }
}
