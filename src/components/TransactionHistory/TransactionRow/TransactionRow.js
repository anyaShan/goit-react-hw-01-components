import PropTypes from 'prop-types';
import { TransactionRowTr } from './TransactionRow.styled';
export const TransactionRow = ({ item: { type, amount, currency, id } }) => {
  return (
    <TransactionRowTr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransactionRowTr>
  );
};

TransactionRow.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
