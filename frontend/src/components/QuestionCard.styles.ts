import styled from 'styled-components';

export const Wrapper = styled.div`
    :root {
        --gray: #282828;
        --white: #ECEBF3;
        --blue: #3500D3;
        --shadow: #2f6627;
    }
    z-index: 3;
    max-width: 1100px;
    border-radius: 10px;
    border: 0px;
    padding: 20px;
    font-family: 
    text-shadow:0px 1px 0px var(--shadow);
    text-align: center;

    p {
        font-size: 1rem;
    }
`

export const ButtonWrapper = styled.div`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    button {
        background-color: var(--blue);
        color: var(--white);
        border:0px;
        text-shadow:0px 1px 0px var(--shadow);
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        margin: 5px 0;
        padding: 20px;
    }
`