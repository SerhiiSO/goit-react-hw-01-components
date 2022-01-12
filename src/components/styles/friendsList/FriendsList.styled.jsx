import styled from "styled-components";

export const Friendlisted = styled.ul`
  margin: 30px auto;
  width: 400px;
  background-color: inherit;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid rgba(15, 209, 148, 0.4);
  border-radius: 5px;
  padding: 10px;
  background-color: white;
`;

export const StatusOn = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
  margin-right: 20px;
`;

export const StatusOff = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  margin-right: 20px;
`;

export const Name = styled.p`
  padding-left: 20px;
`;
