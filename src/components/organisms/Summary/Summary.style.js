import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 15vh;
    bottom: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};

    @media screen and (min-width: 768px) {
        position: absolute;
        right: 0;
        top: 0;
        margin-top: 5rem;
        height: 50vh;
        width: 40vw;
        border: none;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin-top: 1rem;
`;

export const Subtitle = styled.h3`
    font-size: 1rem;
`;

export const Amount = styled.span`
`;

export const Button = styled.button`
    padding: 12px 48px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    border: none;
    font-weight: 700;
    cursor: pointer;
    margin-top: 2rem;
    font-size: 1rem;
    width: 90vw;
    margin-bottom: 1rem;

    @media screen and (min-width: 768px) {
        width: 34vw;
    }
`;