import { useState } from 'react';
import arrowDown from 'assets/images/arrow-down.png';
import shoppingCart from 'assets/images/shopping-cart.png';
import { Nav, MenuToggleButton, Link, Container, CartIcon, NavList } from './Navigation.styles';
import useMobile from 'hooks/useMobile';
import NavigationLink from 'components/atoms/NavigationLink/NavigationLink';
import NavigationDropdown from 'components/molecules/NavigationDropdown/NavigationDropdown';

const Navigation = () => {
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    
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
                    <NavigationDropdown />
                </NavList>
                <Container>
                    <Link href="">
                        <CartIcon src={shoppingCart} alt="Shopping cart" />
                    </Link>
                    <NavigationLink text={'My account'} icon={arrowDown} />
                </Container>
            </Nav>
        </>
     );
}
 
export default Navigation;