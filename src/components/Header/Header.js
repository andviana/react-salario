import React, { Component } from 'react';
import InputReadOnly from '../InputReadOnly/InputReadOnly';
import css from './header.module.css';
import { toCurrency, round } from '../../helper/salary';

export default class Header extends Component {
  render() {
    const { fullSalary } = this.props;
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = fullSalary;

    const valueBaseINSS = baseINSS ? toCurrency(baseINSS) : toCurrency(0);
    const valueDiscountINSS = discountINSS
      ? `${toCurrency(discountINSS)} (${round(
          (discountINSS / baseINSS) * 100
        )}%)`
      : `${toCurrency(0)} (0%)`;
    const valueBaseIRPF = baseIRPF ? toCurrency(baseIRPF) : toCurrency(0);
    const valueDiscountIRPF = discountIRPF
      ? `${toCurrency(discountIRPF)} (${round(
          (discountIRPF / baseINSS) * 100
        )}%)`
      : `${toCurrency(0)} (0%)`;
    const valueNetSalary = netSalary
      ? `${toCurrency(netSalary)} (${round((netSalary / baseINSS) * 100)}%)`
      : `${toCurrency(0)} (0%)`;
    return (
      <div className={css.flexRow}>
        <InputReadOnly
          className={css.inputHeader}
          label="base INSS"
          value={valueBaseINSS}
        />
        <InputReadOnly
          className={css.inputHeader}
          label="Desconto INSS"
          color="#e67e22"
          value={valueDiscountINSS}
        />
        <InputReadOnly
          className={css.inputHeader}
          label="base IRPF"
          value={valueBaseIRPF}
        />
        <InputReadOnly
          className={css.inputHeader}
          label="Desconto IRPF"
          color="#c0392b"
          value={valueDiscountIRPF}
        />
        <InputReadOnly
          className={css.inputHeader}
          label="Salário líquido"
          color="#16a085"
          value={valueNetSalary}
        />
      </div>
    );
  }
}
