import PropTypes from 'prop-types';
import { Description } from 'components/Profile/Description/Description';
import { StatsList } from 'components/Profile/Stats/StatsList';
import { ProfileCard } from 'components/Profile/Profile.styled';

export const Profile = ({ user }) => {
  return (
    <ProfileCard>
      <Description user={user} />
      <StatsList stats={user.stats} />
    </ProfileCard>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};
