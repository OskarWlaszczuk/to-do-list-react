import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  padding: 0px;
`;

export const ButtonsBar = styled.div`
  text-align: center;
  justify-content: center;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 5px;
`;

export const ButtonsBarItem = styled.button`
  font-weight: bold;
  font-size:larger;
  border:none;
  background-color:transparent;
  text-align: center;
  border-radius: 5px;
  transition: 0.3s;

  &:hover{
    background-color: #8080805e;
    font-weight: bold;
  };

  &:disabled {
    color: #44545a82;

    &:hover{
      background-color: transparent;
    };
  };
  
  ${({ $activated }) => $activated && css`
    background-color: #8080805e;
  `}
`;

export const Item = styled.li`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: 45px 1fr 45px;
  margin-bottom: 10px;
  border-bottom: 3px solid rgba(144, 141, 141, 0.742);
  transition: background 0.3s, padding 0.3s, font-size 0.3s;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileM}px) {
    grid-template-columns: 40px 1fr 40px;
  };
`;

export const Button = styled.button`
  border: none;
  color: white;
  padding: 10px;
  border-radius: 3px;
  background-color: crimson;
  align-self: center;
  min-height: 45px;
  font-size: small;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileM}px) {
    min-height: 40px;
    font-size: x-small;
  };

  &:hover {
    background-color: rgb(241, 40, 80);
  };
`;

export const ToggleDoneButton = styled(Button)`
  background: green;
  border: none;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileM}px) {
    min-height: 40px;
    font-size: x-small;
  };

  &:hover {
    background: rgb(6, 147, 6);
  };
`;

export const Content = styled.p`
  text-align: center;
  transition:0.5s;
  padding: 10px;
  margin: 16px 22px;
  border-radius: 7px;

  &:hover {
    background-color: #80808029;
  };

  ${({ $donedItem }) =>
    $donedItem &&
    css`
      text-decoration: line-through;
      color: rgba(0, 0, 0, 0.682);
    `};

    ${({ $important }) =>
    $important &&
    css`
      font-weight: bold;
    `};

    ${({ $justified }) =>
    $justified &&
    css`
      text-align: justify;
    `};
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  transition: 0.5s;
  padding:  0px 10px;
  line-height: 1.5;
`;