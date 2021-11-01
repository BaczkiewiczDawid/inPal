import styled from 'styled-components';

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 10px;
    margin: 1em;
    width: 95vw;

    @media screen and (min-width: 490px) {
        grid-gap: 35px;
    }

    @media screen and (min-width: 768px) {
        grid-gap: 70px;
        margin: 0;
        margin-right: 5vw;
    }
`;