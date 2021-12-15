import styled from 'styled-components';

export const StyledDropdown = styled.ul`
    margin-left: 1rem;
    margin-top: 2rem;
    word-wrap: wrap;
`;

export const StyledListItem = styled.li`
    list-style: none;
    cursor: pointer;

    &:last-child {
        margin-bottom: 1rem;
    }

    &:nth-child(n+2) {
        margin-top: 1rem;
    }
`;