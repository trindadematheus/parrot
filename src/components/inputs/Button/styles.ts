import styled from "styled-components";

export const Container = styled.button`
    background-color: #d1fe49;
    height: 50px;
    padding: 10px 20px;
    border-radius: 8px;
    width: 100%;
    font-weight: bold;
    font-size: 14px;
    color: #222;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 400ms;

    :hover {
        opacity: 0.8;
    }

    :disabled {
        background-color: #555;
    }
`