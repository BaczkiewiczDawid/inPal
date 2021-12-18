import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components';

const LoginButton = styled.button`
    background-color: none;
    border: none;
    font-size: 1rem;
    margin-left: 3rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black}
`;

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <LoginButton onClick={() => loginWithRedirect()}>Log in</LoginButton>
     );
}
 
export default Login;