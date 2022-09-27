import PropTypes from 'prop-types';

import { TransactionRow } from 'components/TransactionHistory/TransactionRow/TransactionRow';
import { List } from './TransactionList.styled';

export const TransactionList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <TransactionRow key={item.id} item={item} />
      ))}
    </List>
  );
};

TransactionList.propTypes = {
  items: PropTypes.array.isRequired,
};
