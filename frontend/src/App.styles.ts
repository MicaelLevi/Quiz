import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --gray: #282828;
        --white: #ECEBF3;
        --blue: #3500D3;
    }
    html {
        height: 100%;
    }

    body {
        background-color: var(--gray);
        color: var(--white);
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center
    }

    * {
        font-family: 'Oswald', sans-serif;
        box-sizing: border-box;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    h1 {
        font-family: 'Montserrat';
        background-color: var(--blue);
        background-size: 100%;
        font-size: 70px;
        border-radius: 25px;
        text-align: center;
        margin: 20px;
        padding: 20px;
    }

    h2 {
        background-color: var(--blue);
        background-size: 100%;
        border-radius: 25px;
        margin: 20px;
        padding: 20px;
    }

    .start, .restart {
        background-color:var(--blue);
	    border-radius:28px;
	    border:0px;
	    cursor:pointer;
	    color:var(--vhite);
	    font-size:17px;
	    text-decoration:none;
	    text-shadow:0px 1px 0px #2f6627;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }

`;

export const Overlay = styled.div`
    z-index: 3;
    padding: 100px 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
`;

export const Modal = styled.div`
    background-color: black;
    padding: 40px;
    border-radius: 25px;
`;