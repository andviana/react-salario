import React, { Component } from 'react';
import css from './progessBarSalary.module.css';
import Bar from './Bar';
import { round } from '../../helper/salary';

export default class ProgressBarSalary extends Component {
  render() {
    const { fullSalary } = this.props;
    const { baseINSS, discountINSS, discountIRPF, netSalary } = fullSalary;

    const valueDiscountINSS = discountINSS
      ? round((discountINSS / baseINSS) * 100)
      : 0;
    const valueDiscountIRPF = discountIRPF
      ? round((discountIRPF / baseINSS) * 100)
      : 0;
    const valueNetSalary = netSalary ? round((netSalary / baseINSS) * 100) : 0;

    return (
      <div className={css.flexRow}>
        <Bar value={valueDiscountINSS} color="#e67e22" />
        <Bar value={valueDiscountIRPF} color="#c0392b" />
        <Bar value={valueNetSalary} color="#16a085" />
      </div>
    );
  }
}
