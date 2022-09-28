import PropTypes from 'prop-types';
import {
  StatsWrapper,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from 'components/Profile/Stats/StatsList.styled';
export const StatsList = ({ followers, views, likes }) => {
  return (
    <StatsWrapper>
      <StatsItem>
        <StatsLabel>Followers</StatsLabel>
        <StatsQuantity>{followers}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Views</StatsLabel>
        <StatsQuantity>{views}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Likes</StatsLabel>
        <StatsQuantity>{likes}</StatsQuantity>
      </StatsItem>
    </StatsWrapper>
  );
};

StatsList.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
