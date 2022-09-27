import styled from 'styled-components';
export const TransactionRowTr = styled.tr`
  text-align: center;

  font-size: 16px;
  font-weight: 500;

  &:nth-child(2n) {
    background-color: rgb(241, 188, 90);
  }

  td {
    padding: 10px 30px;
    color: grey;
    text-transform: capitalize;
  }
`;
