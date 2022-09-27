import styled from 'styled-components';

export const FriendCard = styled.li`
  display: flex;
  margin-bottom: 10px;
  padding: 15px;
  gap: 15px;
  align-items: center;
  border-radius: 5px;

  background-color: rgb(243, 240, 240);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    return status ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  border-radius: 5px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
