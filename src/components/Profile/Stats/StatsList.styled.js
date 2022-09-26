import styled from 'styled-components';

export const StatsWrapper = styled.ul`
  display: flex;

  justify-content: space-around;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: calc(100% / 3);
  padding: 20px;
  background-color: rgb(197, 194, 194);
  border: 1px solid rgb(168, 166, 166);
`;

export const StatsLabel = styled.span`
  margin-bottom: 5px;
  font-size: 12px;
  color: grey;
`;

export const StatsQuantity = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
