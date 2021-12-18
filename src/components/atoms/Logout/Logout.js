import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const LogoutButton = styled.button`
    background-color: none;
    border: none;
    font-size: 1rem;
    margin-left: 3rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
`;

const Logout = () => {
  const { logout } = useAuth0();
  return (
    <LogoutButton onClick={() => 
    logout({
        returnTo: window.location.origin,
    })}>Log Out</LogoutButton>
  );
};

export default Logout