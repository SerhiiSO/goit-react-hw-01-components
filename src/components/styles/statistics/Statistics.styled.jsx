import styled from "styled-components";
import RandomHexColor from "../../statistics/Hex";

export const Statistics = styled.section`
  width: 60vw;
  margin: auto;
  border: 1px solid rgba(166, 166, 166, 0.3);
  border-radius: 5px;
  background-color: white;
`;

export const Title = styled.h2`
  text-align: center;
  color: #6a6a6a;
  background: inherit;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  width: 30%;
  height: 80px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${RandomHexColor};
  border-radius: 1px;
  margin: 2px;
`;

export const Percentage = styled.span`
  font-weight: 500;
  font-size: 20px;
`;
