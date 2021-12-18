import styled from 'styled-components';

export const Link = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (min-width: 768px) {
        cursor: pointer;
        margin: 0;

        &:first-child {
            margin-left: 4rem;
        }

        &:nth-child(n+2) {
            margin-left: 2rem;
        } 
    }
`;

export const StyledLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
`;