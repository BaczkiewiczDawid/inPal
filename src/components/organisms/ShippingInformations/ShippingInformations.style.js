import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 7rem;
    margin-bottom: 15vh;

    @media screen and (min-width: 768px) {
        align-items: flex-start;
    }
`;

export const Label = styled.label`
    font-size: 1rem;
    text-align: start;
    font-weight: 700;
    margin-top: ${({ primary }) => primary ? '2rem' : '1rem'};
    margin-bottom: ${({ primary }) => primary ? '1rem' : '0'};
    color: #2a2a2a;

`;

export const Input = styled.input`
    width: 90vw;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.black};

    @media screen and (min-width: 768px) {
        width: 30vw;
    }
`;

export const Button = styled.button`
    padding: 12px 48px;
    color: #fafafa;
    background-color: ${({ theme }) => theme.colors.black};
    border: none;
    font-weight: 700;
    cursor: pointer;
    font-size: 1rem;
    position: fixed;
    bottom: 1rem;
    width: 90vw;

    @media screen and (min-width: 768px) {
        width: 30vw;
        position: inherit;
        margin-top: 4rem;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;