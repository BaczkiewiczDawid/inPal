import styled from 'styled-components';

export const Filter = styled.div`
    margin-left: 1.5rem;
    margin-top: 2rem;
    min-width: 200px;

    @media screen and (min-width: 768px) {
        min-width: 15%;
        margin-left: 3rem;
    }
`;

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
`;