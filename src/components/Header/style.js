import styled from "styled-components";

export const HeaderContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6rem;
`;

export const Message = styled.div`
    h1 {
        font-size:  2.8rem;
        font-weight: 700;
        color: var(--black);
    }

    h2 {
        font-size: 2.1rem;
        font-weight: 500;
        color: var(--text);
    }
`;

export const Avatar = styled.div`
    width: 4.8rem;
    height: 4.8rem;
    cursor: pointer;
    
    img {
        border-radius: 50%;
    }
`;