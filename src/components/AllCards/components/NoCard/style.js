import styled from "styled-components";

export const NoCardContainer = styled.div`
    border: 1px solid rgba(52, 32, 177, 0.6);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .3s;

    svg {
        color: rgba(52, 32, 177, 0.8);
        width: 6.2rem;
        height: 6.2rem;
        transition: .3s;
    }

    &:hover {
        border: 1px solid rgba(52, 32, 177, 0.8);

        svg {
           color: rgba(52, 32, 177, 1);
        }
    }
`;