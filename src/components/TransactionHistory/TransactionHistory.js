import {
  TransactionTable,
  TransactionHead,
  TransactionTh,
} from './TransactionHistory.styled.js';
export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionHead>
        <tr>
          <TransactionTh>Type</TransactionTh>
          <TransactionTh>Amount</TransactionTh>
          <TransactionTh>Currency</TransactionTh>
        </tr>
      </TransactionHead>

      <tbody>
        <tr>
          <td>{items.type}</td>
          <td>{items.amount}</td>
          <td>{items.currency}</td>
        </tr>

        <tr>
          <td>{items.type}</td>
          <td>{items.amount}</td>
          <td>{items.currency}</td>
        </tr>
      </tbody>
    </TransactionTable>
  );
};
