import styled from 'styled-components';
import Select from 'react-select';

export const Content = styled.div`
    margin-top: 2rem;
    width: 90vw;

    @media screen and (min-width: 768px) {
        width: 40vw;
        margin-right: 5rem;
    }

    @media screen and (min-width: 1300px) {
        margin-right: 8rem;
    }

    @media screen and (min-width: 1600px) {
        margin-top: 5rem;
    }
`;

export const Title = styled.h1`
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: .8rem;

    @media screen and (min-width: 1024px) {
        font-size: 1.4rem;
    }
`;

export const Price = styled.span`
    font-size: 1.4rem;
    font-weight: 700;

    @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;

export const ProductDescription = styled.p`
    letter-spacing: .8px;
    word-spacing: 6px;
    line-height: 1.4rem;
    font-size: .9rem;
    margin-top: 2rem;

    @media screen and (min-width: 1024px) {
        line-height: 1.6rem;
    }
`;

export const Size = styled.h2`
    margin-top: 2rem;

    @media screen and (min-width: 1600px) {
        margin-top: 4rem;
    }
`;

export const StyledSelect = styled(Select)`
    background-color: transparent;
    border: none;
    font-weight: 700;
    width: 120px;
    font-size: .7rem;
`;

export const Option = styled.option`
    font-weight: 700;
`;

export const Button = styled.button`
    width: 80vw;
    padding: 18px 0;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    border: none;
    border-radius: 100px;
    margin-left:50%;
    transform: translateX(-50%);
    margin-top: 3rem;
    margin-bottom: 3rem;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        width: 40vw;
        margin-left: 20vw;
    }

    @media screen and (min-width: 1024px) {
        width: 30vw;
        margin-left: 15vw;
        font-size: 1.2rem;
    }

    @media screen and (min-width: 1600px) {
        margin-top: 5rem;
    }
`;