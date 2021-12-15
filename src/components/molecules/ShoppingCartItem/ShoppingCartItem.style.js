import styled from 'styled-components';

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    height: 7rem;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 7px 5px 24px -14px rgba(66, 68, 90, 1);

    &:nth-child(n+1) {
        margin-top: 2rem;
    }

    &:last-child {
        margin-bottom: 30vh;
    }

    @media screen and (min-width: 768px) {
        width: 50vw;
        margin-left: 2rem;
    }
`;

export const Title = styled.h2`
    font-size: .8rem;
    margin-left: .8rem;

    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const ItemImage = styled.img`
    width: auto;
    height: 90%;
    margin-left: 2rem;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-right: 2rem;
`;

export const Price = styled.span`
    @media screen and (min-width: 1000px) {
        margin-top: 1rem;
    }
`;

export const Delete = styled.span`
    font-size: .7rem;
    margin-top: .5rem;
    margin-bottom: .5rem;
`;