import styled from 'styled-components';

export const Icon = styled.img`
    width: 10px;
    height: auto;
    margin-left: 1rem;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #2a2a2a;
    font-size: 1.5rem;
    cursor: pointer;

    &:nth-child(n+2) {
        margin-top: 2rem;
    }

    @media screen and (min-width: 768px) {
        font-size: 1.2rem;

        &:nth-child(n+2) {
            margin-top: ${props => props.horizontal ? '0' : '1.4rem' };
            margin-left: ${props => props.horizontal ? '1.5rem' : '0'};
        }
    }

    @media screen and (min-width: 1024px) {
        &:nth-child(n+2) {
            margin-left: ${props => props.horizontal ? '3rem' : '0'};
        }
    }
`;