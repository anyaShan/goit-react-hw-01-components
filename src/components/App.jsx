import { Profile } from 'components/Profile/Profile';
import user from '../user.json';

export const App = () => {
  return (
    <Profile user={user} />
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
