import PropTypes from 'prop-types';
import { TransactionList } from './TransactionList/TransactionList';
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
      <TransactionList items={items} />
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
