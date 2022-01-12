import styled from "styled-components";

export const TransactionTable = styled.table`
  color: gray;
  width: 600px;
  margin: 0px auto;
  border-radius: 5px;
`;

export const Transactionhead = styled.thead`
  background-color: rgba(16, 128, 176, 0.7);
  color: white;
  height: 40px;
  text-transform: uppercase;
`;

export const TransactionRow = styled.tr`
  text-align: center;
  background-color: white;

  :nth-child(even) {
    background-color: rgba(166, 166, 166, 0.5);
  }
`;

export const TransactionData = styled.td`
  padding: 12px;

  ::first-letter {
    text-transform: capitalize;
  }
`;
