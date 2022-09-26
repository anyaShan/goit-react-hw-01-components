import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50px;

  padding: 15px;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  margin-bottom: 5px;
  font-size: 12px;
  color: white;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
