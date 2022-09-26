import { Description } from 'components/Profile/Description/Description';
import { StatsList } from 'components/Profile/Stats/StatsList';

export const Profile = ({ user }) => {
  return (
    <div class="profile">
      <Description user={user} />
      <StatsList user={user} />
    </div>
  );
};
