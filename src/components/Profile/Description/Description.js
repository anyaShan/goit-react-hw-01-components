import {
  DescriptionInfo,
  UserImg,
  UserName,
  UserTag,
  UserLocation,
} from 'components/Profile/Description/Description.styled';

export const Description = ({ user }) => {
  const { username, tag, location, avatar } = user;
  return (
    <DescriptionInfo>
      <UserImg src={avatar} alt="User avatar" width={130} />
      <UserName>{username}</UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </DescriptionInfo>
  );
};
