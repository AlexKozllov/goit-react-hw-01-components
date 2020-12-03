import React from "react";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  if (items.length === 0) {
    return null;
  }
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, index) => {
          let tdSyle = index % 2 ? s.tdGray : s.tdWhite;
          return (
            <tr key={id} className={tdSyle}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
