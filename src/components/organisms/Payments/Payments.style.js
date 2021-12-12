import styled from 'styled-components';

export const Title = styled.h2`
    margin-top: ${({secondary}) => secondary ? '4rem' : '1rem'};
    margin-bottom: 1rem;

    @media screen and (min-width: 768px) {
        margin-top: ${({secondary}) => secondary ? '4rem' : '0'};
    }
`;

export const PaymentContainer = styled.div`
    margin-top: ${({primary}) => primary ? '2rem' : '.5rem'};
    position: relative;
`;

export const RadioButton = styled.input`
    margin-left: 1rem;
    position: absolute;
    left: 8rem;
`;

export const TotalContainer = styled.div`
    width: 95vw;
    margin-left: 1rem;
`;

export const Button = styled.button`
    padding: 12px 48px;
    color: #fafafa;
    background-color: #2a2a2a;
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

export const Label = styled.label`
    font-size: 1rem;
    text-align: start;
    font-weight: 700;
    margin-top: ${({ primary }) => primary ? '2rem' : '1rem'};
    margin-bottom: ${({ primary }) => primary ? '1rem' : '0'};
    color: #2a2a2a;

`;