import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    width: 80vw;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.darkwhite};
    box-shadow: 7px 5px 24px -14px rgba(66, 68, 90, 1);
    margin-top: 1.5rem;
    margin-left: 1rem;
    height: 4rem;
    cursor: pointer;
`;

export const QuestionParagraph = styled.p`
    margin-left: 1rem;
    max-width: 80%;
`;

export const Icon = styled.img`
    margin-right: 1rem;
`;

export const RotatedIcon = styled.img`
    margin-right: 1rem;
    transform: rotate(180deg);
`;

export const Content = styled.p`
    max-width: 80vw;
    margin-top: 1rem;
    margin-left: 3rem;
`;