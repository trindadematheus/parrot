import styled from "styled-components";

export const Container = styled.div`
    .dots {
        width: 3em;

        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
    }

    .dots div {
        width: 0.6em;
        height: 0.6em;
        border-radius: 50%;
        background-color: #aaa;
        animation: fade 0.8s ease-in-out alternate infinite;
    }

    .dots div:nth-of-type(1) {
        animation-delay: -0.4s;
    }

    .dots div:nth-of-type(2) {
        animation-delay: -0.2s;
    }

    @keyframes fade {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`