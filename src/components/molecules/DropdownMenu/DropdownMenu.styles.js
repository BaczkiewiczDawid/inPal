import styled from 'styled-components';

export const StyledDropdown = styled.ul`
    margin-left: 1rem;
    margin-top: 2rem;
    word-wrap: wrap;

    @media screen and (min-width: 768px) {
        background-color: ${({navigation}) => navigation ? 'red': 'none'};
    }
`;

export const StyledListItem = styled.li`
    list-style: none;
    cursor: pointer;

    &:nth-child(n+2) {
        margin-top: 1rem;
    }
`;