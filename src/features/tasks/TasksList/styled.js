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
  padding: 5px;
`;

export const ButtonsBarItem = styled.button`
  font-weight: bold;
  font-size:larger;
  border:none;
  background-color:transparent;
  padding: 3px;
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
  padding: 5px 0px;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: 50px 1fr 50px;
  display: grid;
  border-bottom: 3px solid rgba(144, 141, 141, 0.742);
  transition: background 0.3s, padding 0.3s, font-size 0.3s;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileM}px) {
    grid-template-columns: 40px 1fr 40px;
  }
`;

export const Button = styled.button`
  border: none;
  color: white;
  padding: 10px;
  border-radius: 3px;
  border: 3px solid #ab0929;
  border-bottom: 10px solid #ab0929;
  background-color: crimson;
  align-self: center;
  min-height: 50px;
  font-size: small;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileM}px) {
    border: none;
    border-top: none;
    min-height: 40px;
    font-size: x-small;
  }

  &:hover {
    background-color: rgb(241, 40, 80);
    transition: 0.2s;
  }

  &:active {
    border: 3px solid #ab0929;
    border-top: 10px solid #ab0929;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileM}px) {
      border: none;
      border-top: none;
    }
  }
`;

export const ToggleDoneButton = styled(Button)`
  background: green;
  border: 3px solid #0c660c;
  border-bottom: 10px solid #0c660c;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileM}px) {
    border: none;
    border-top: none;
    min-height: 40px;
    font-size: x-small;
  }

  &:hover {
    background: rgb(6, 147, 6);
    transition: 0.2s;
  }

  &:active {
    border: 3px solid #0c660c;
    border-top: 10px solid #0c660c;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileM}px) {
      border: none;
      border-top: none;
    }
  }
`;

export const Content = styled.p`
  text-align: center;
  line-height: 1.5;
  padding: 10px;
  padding: 0px 5px;

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
`;
