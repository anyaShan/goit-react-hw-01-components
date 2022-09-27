import PropTypes from 'prop-types';
import { StatList } from 'components/Statistics/StatList/StatList';
import {
  StatisticsCard,
  Percentage,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <StatisticsCard>
      {{ title } && <Percentage>{title}</Percentage>}

      <StatList stats={data} />
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.shape({
    title: PropTypes.string,
    data: PropTypes.array.isRequired,
  }),
};
