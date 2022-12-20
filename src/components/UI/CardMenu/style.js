import styled from "styled-components";

export const CardMenuContainer = styled.div`
    filter: drop-shadow(0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.25));
    position: absolute;
    top: calc(100% + 1.5rem);
    right: 10%;

    & > div {
        background-color: var(--white);
        min-width: 17rem;
        border-radius: .5rem;
        position: relative;

        &::before {
            content: '';
            display: block;
            width: 2rem;
            height: 1.5rem;
            position: absolute;
            right: 0.5rem;
            top: -1.5rem;
            background-color: var(--white);
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
    }
`;

export const List = styled.ul`
    list-style: none;

    li {
        font-size: 1.4rem;
        text-align: left;
        padding: 1.5rem 2rem;
        position: relative;

        &:hover {
            background-color: rgba(52, 32, 177, 0.1);
            color: var(--income);
            font-weight: 500;
            cursor: pointer;

            &::before {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                width: 0.2rem;
                height: 100%;
                background-color: var(--income);
            }
        }
    }
`;