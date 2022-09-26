import { Description } from 'components/Profile/Description/Description';
import { StatsList } from 'components/Profile/Stats/StatsList';
import { ProfileCard } from 'components/Profile/Profile.styled';

export const Profile = ({ user }) => {
  return (
    <ProfileCard class="profile">
      <Description user={user} />
      <StatsList user={user} />
    </ProfileCard>
  );
};
