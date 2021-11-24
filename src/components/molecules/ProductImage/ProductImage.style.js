import styled from 'styled-components';

export const ImageWrapper = styled.div`
    @media screen and (min-width: 768px) {
        width: 40vw;
        margin-top: -5rem;   
    }

    @media screen and (min-width: 1024px) {
        width: 30vw;
        margin-top: 0;
    }
`;

export const StyledProductImage = styled.img`
    height: 45vh;
    width: auto;

    @media screen and (min-width: 768px) {
        height: 50vw;
        margin-left: 2rem;
    }

    @media screen and (min-width: 1300px) {
        height: 35vw;
        margin-left: 5rem;
    }

    @media screen and (min-width: 1600px) {
        margin-left: 8rem;
    }
`;