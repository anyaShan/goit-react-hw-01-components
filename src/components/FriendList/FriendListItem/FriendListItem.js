import PropTypes from 'prop-types';
import { FriendCard, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <FriendCard key={id}>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width={48} />
      <Name>{name}</Name>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
