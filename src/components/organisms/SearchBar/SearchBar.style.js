import styled from 'styled-components';

export const StyledTitle = styled.h1`
    color: #2a2a2a;
    margin-top: 6rem;
    font-size: 1.2rem;

    @media screen and (min-width: 768px) {
        font-size: 1.7rem;
    }
`;

export const StyledInput = styled.input`
    width: 63vw;
    border-radius: 25px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    padding: 10px 20px;

    @media (min-width: 768px) {
        font-size: .85rem;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1.3rem;
`;

export const SearchIcon = styled.img`
    background-color: #${({ theme }) => theme.colors.black};
    padding: 12px;
    border-radius: 25px;
    margin-left: 1.5rem;
    cursor: pointer;
`;

export const Wrapper = styled.div`
    margin-top: 6rem;
    margin-left: 1.5rem;

    @media screen and (min-width: 768px) {
        margin-top: 3.5rem;
        margin-left: 8rem;
    }
`;
