import styled from 'styled-components';

export const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 15vh;
    bottom: 0;
    border-top: 1px solid #2a2a2a;
    background-color: #fafafa;

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
    color: #fafafa;
    background-color: #2a2a2a;
    border: none;
    font-weight: 700;
    cursor: pointer;
    margin-top: 2rem;
    font-size: 1rem;
    width: 85%;
    margin-bottom: 1rem;
`;