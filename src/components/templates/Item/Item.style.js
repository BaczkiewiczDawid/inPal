import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20%;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        margin-top: 6rem;
        justify-content: space-between;
    }
`;