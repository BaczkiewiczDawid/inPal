import styled from 'styled-components';

export const Wrapper = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90vw;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 1.5rem;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: row;
`;

export const ListItem = styled.li`
    list-style: none;
    cursor: pointer;

    &:nth-child(n) {
        margin-left: 10vw;
    }

    &:nth-child(n+2) {
        margin-left: 5rem;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: #2a2a2a;
`;

export const Icon = styled.img`
    width: 10px;
    height: auto;
    margin-left: 1rem;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const CartIcon = styled.img`
    margin-right: 3rem;
    width: 20px;
    height: auto;
`;

export const Line = styled.div`
    width: 100vw;
    height: 1px;
    background-color: #B0B0B0;
    margin-top: 1.5rem;
`;