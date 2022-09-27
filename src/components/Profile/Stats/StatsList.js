import PropTypes from 'prop-types';
import {
  StatsWrapper,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from 'components/Profile/Stats/StatsList.styled';
export const StatsList = ({ user: { stats } }) => {
  return (
    <StatsWrapper>
      <StatsItem>
        <StatsLabel>Followers</StatsLabel>
        <StatsQuantity>{stats.followers}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Views</StatsLabel>
        <StatsQuantity>{stats.views}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Likes</StatsLabel>
        <StatsQuantity>{stats.likes}</StatsQuantity>
      </StatsItem>
    </StatsWrapper>
  );
};

StatsList.propTypes = {
  user: PropTypes.shape({
    stats: PropTypes.object.isRequired,
  }),
};
