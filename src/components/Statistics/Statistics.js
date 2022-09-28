import PropTypes from 'prop-types';
import { StatList } from 'components/Statistics/StatList/StatList';
import { StatisticsCard, Title } from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <StatisticsCard>
      {title && <Title>{title}</Title>}

      <StatList stats={data} />
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
