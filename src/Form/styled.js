import styled from "styled-components";

export const TaskForm = styled.form`
    background-color: white;
    border: 2px solid rgba(179, 174, 174, 0.742);
    border-radius: 3px;
    box-shadow: 0px 0px 11px -3px #525251be;
    width: 60%;

    @media (max-width:${({ theme }) => theme.breakPoints.tabletHorizontal}px) {
        width: 80%;
    };

    @media (max-width:${({ theme }) => theme.breakPoints.mobileL}px) {
        width: 100%;
    };
`;

export const Header = styled.header`
    padding: 10px;
    font-weight: bold;
    font-size: larger;
    border-bottom: 2px solid rgba(179, 174, 174, 0.742);
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    grid-gap: 15px;
    padding: 10px;

    @media (max-width:${({ theme }) => theme.breakPoints.tabletHorizontal}px) {
        grid-template-columns: 100%;
        grid-template-rows: repeat(2, minmax(auto, 1fr));
        grid-gap: 5px;
    };
`;

export const Input = styled.input`
    padding: 10px;
    border: 2px solid rgba(179, 174, 174, 0.742);
    border-radius: 5px;
`;

export const Button = styled.button`
    text-wrap: nowrap;
    color: white;
    background-color: ${({ theme }) => theme.mainColor.color};
    padding: 10px;
    border: none;
    border-radius: 3px;
    transition:
        background 0.5s linear,
        transform 0.5s linear,
        font-weight 0.8s linear;

    &:hover{
        background-color: rgb(52, 157, 157);
        transform: scaleX(102%);
        transition: 0.2s linear;
    };

    &:active{
        background-color: rgb(56, 212, 212);
    };
`;