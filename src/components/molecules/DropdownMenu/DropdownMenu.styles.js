import styled from 'styled-components';

export const StyledDropdown = styled.ul`
    margin-left: 1rem;
    margin-top: 2rem;
`;

export const StyledListItem = styled.li`
    list-style: none;
    cursor: pointer;

    &:nth-child(n+2) {
        margin-top: 1rem;
    }
`;