import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const LogoutButton = styled.button`
    position: fixed;
    bottom: 1rem;
    background-color: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
    width: 90vw;
    background-color: ${({ theme }) => theme.colors.black};
    padding: 12px 24px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    margin-left: 50%;
    transform: translateX(-50%);

    @media screen and (min-width: 768px) {
      width: 30vw;
      margin: 0;
      transform: none;
      margin-left: 1rem;
    }
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