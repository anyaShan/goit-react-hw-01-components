import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: 25px;

  border-radius: 5px;
  overflow: auto;
  background-color: rgb(243, 240, 240);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const TransactionHead = styled.thead`
  background-color: rgb(52, 162, 212);
`;

export const TransactionTh = styled.th`
  padding: 15px 30px;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: 700;
`;
