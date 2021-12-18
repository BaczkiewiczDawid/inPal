import { useState } from 'react';
import { Link } from 'react-router-dom';
import arrowDown from 'assets/images/arrow-down.png';
import shoppingCart from 'assets/images/shopping-cart.png';
import logo from 'assets/images/logo.png'
import { Nav, MenuToggleButton, LinkItem, Container, CartIcon, NavList, Logo } from './Navigation.styles';
import useMobile from 'hooks/useMobile';
import NavigationLink from 'components/atoms/NavigationLink/NavigationLink';
import NavigationDropdown from 'components/molecules/NavigationDropdown/NavigationDropdown';
import Login from 'components/atoms/Login/Login'
import { useAuth0 } from '@auth0/auth0-react';

const Navigation = () => {
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const { isAuthenticated } = useAuth0();
    
    const isMobile = useMobile();

    return ( 
        <>
            {isMobile ? 
                <MenuToggleButton isNavigationOpen={isNavigationOpen} onClick={() => setIsNavigationOpen(prevState => !prevState)}>
                    <span />
                    <span />
                </MenuToggleButton>
            : null}
            <Nav isNavigationOpen={isNavigationOpen}>
                <NavList>
                    {!isMobile ? <Link to="/"><Logo src={logo} /></Link> : null }
                    <NavigationDropdown />
                </NavList>
                <Container>
                    <LinkItem to="/cart">
                        <CartIcon src={shoppingCart} alt="Shopping cart" />
                    </LinkItem>
                    {isAuthenticated ? <NavigationLink text={'My account'} icon={arrowDown} link={'/my-account'} /> : <Login /> }
                </Container>
            </Nav>
        </>
     );
}
 
export default Navigation;