import styled, { css } from "styled-components";

export const PageSupport = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        color: #eee;
    }

    p {
        color: #aaa;
    }

    a {
        color: #d1fe49;
        text-decoration: underline;
    }
`

export const PageLayout = styled.div`
    height: 100vh;
    padding-top: 20px;

    display: grid;
    grid-template-rows: 80px 1fr 60px;

    .messages-list {
        overflow: auto;
        padding: 20px;

        ::-webkit-scrollbar {
            width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: #222; 
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #444; 
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #555; 
        }
    }
`

export const MessageBox = styled.div`
    background-color: #161616;
    border: 1px solid #222;
    border-radius: 8px;
    width: 100%;
    height: 50px;
    padding: 10px;
    color: #ccc;
    font-size: 14px;

    display: flex;
    align-items: center;
`

type MessageItemProps = {
    author: 'me' | 'gpt'
}

export const MessageItem = styled.div<MessageItemProps>`
    background-color: #1a1a1a;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
    border-left: 2px solid #d1fe49;
    ${({ author }) => author === 'gpt' && css`border-color: white;`}
    
    .message-header {
        margin-bottom: 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .play {
            background-color: #d1fe49;
            height: 30px;
            width: 30px;
            border-radius: 30px;

            display: flex;
            justify-content: center;
            align-items: center;

            transition: all 400ms;

            :hover {
                opacity: 0.8;
            }
        }

        .message-author {
            font-weight: bold;
            color: #fff;
        }
    }

    .message-text {
        color: #aaa;
    }
`

type FormGroupProps = {
    isListening: boolean
}

export const FormGroup = styled.div<FormGroupProps>`
    margin-bottom: 40px;

    transition: all 400ms;

    display: grid;
    gap: 12px;
    grid-template-columns: 1fr 70px;
    ${({ isListening }) => isListening && css`grid-template-columns: 1fr 70px 70px;`}
`