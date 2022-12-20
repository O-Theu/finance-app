import styled from "styled-components";

export const Card = styled.div`
    background-color: var(--sidebar);
    padding: 2rem;
    border-radius: 1rem;
    position: relative;

    h2 { 
        text-transform: uppercase;
        font-size: 1.5rem;
        color: var(--text);
        font-weight: 300;
        margin-bottom: 1rem;
    }

    h3 {
        font-weight: 400;
        font-size: 2.4rem;
        color: var(--black);
        margin-bottom: 3rem;
    }

    h4 {
        font-size: 1.2rem;
        font-weight: 300;
        color: var(--text);
        text-align: right;
    }
`;

export const Edit = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
`;