import styled from 'styled-components';

export const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    text-align: center;
    cursor: pointer;
`;

export const StyledImg = styled.img`
    width: 80px;
    height: auto;

    @media screen and (min-width: 768px) {
        width: 120px;
    }
`;

export const StyledTitle = styled.h3`
    font-size: .8rem;
    font-weight: 500;
    margin-top: 1rem;

    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }
`;

export const Price = styled.p`
    font-weight: 700;
    margin-top: 1rem;

    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
    }
`;