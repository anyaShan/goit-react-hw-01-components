import PropTypes from 'prop-types';
import { Description } from 'components/Profile/Description/Description';
import { StatsList } from 'components/Profile/Stats/StatsList';
import { ProfileCard } from 'components/Profile/Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <StatsList
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </ProfileCard>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }),
};
