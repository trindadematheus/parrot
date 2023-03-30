import styled from 'styled-components'

export const Container = styled.button`
    background-color: #161616;
    border: 1px solid #222;
    border-radius: 8px;
    height: 34px;
    width: 34px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 16px;
        height: 16px;
    }

    transition: all 400ms;

    :hover {
        border-color: #444;
    }
`