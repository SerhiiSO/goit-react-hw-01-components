import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 400px;
  background-color: white;
  border: 1px solid rgba(87, 122, 92, 0.4);
  border-radius: 5px;
  box-shadow: rgb(34 60 80 / 20%) 2px 4px 8px 2px;
  margin-bottom: 50px;
`;

export const Description = styled.div`
  display: block;
  margin: auto;
`;

export const Avatar = styled.img`
  display: flex;
  width: 40%;
  height: 40%;
  border-radius: 50%;
  border: 1px solid rgba(87, 122, 92, 0.4);
  margin: auto;
  margin-top: 40px;
`;

export const UserName = styled.p`
  text-align: center;
  margin: 0;
  margin-top: 25px;
  font-weight: bold;
  color: #000;
  font-size: 20px;
`;

export const UserData = styled.p`
  text-align: center;
  margin: 0;
  margin-top: 10px;
  font-weight: normal;
  font-size: 16px;
  color: #a6a6a6;
`;

export const UserStats = styled.ul`
  display: flex;
  align-items: center;
  background-color: rgba(166, 166, 166, 0.1);
  margin-top: 20px;
`;

export const Label = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(33.33%);
  padding: 30px;
  font-size: 16px;
  color: #a6a6a6;
  border-right: 1px solid rgba(87, 122, 92, 0.4);
  border-top: 1px solid rgba(87, 122, 92, 0.4);
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;
