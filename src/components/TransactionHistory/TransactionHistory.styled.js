import styled from 'styled-components';

export const TransactionTable = styled.table`
  min-width: 400px;
  border-radius: 5px;
  overflow: auto;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
`;

export const TransactionHead = styled.thead`
  background-color: rgb(52, 162, 212);
`;

export const TransactionTh = styled.th`
  padding: 15px;
  text-align: center;
  color: white;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
`;
