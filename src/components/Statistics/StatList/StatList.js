import PropTypes from 'prop-types';
import {
  List,
  Item,
  Label,
  Percentage,
} from 'components/Statistics/StatList/StatList.styled';
export const StatList = ({ stats }) => {
  return (
    <List>
      {stats.map(({ id, label, percentage }) => (
        <Item key={id} length={stats.length}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Item>
      ))}
    </List>
  );
};

StatList.propTypes = {
  stats: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
