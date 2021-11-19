import { useState, useEffect } from 'react';
import arrowDown from 'assets/images/arrow-down.png';
import shoppingCart from 'assets/images/shopping-cart.png';
import { Nav, MenuToggleButton, Link, Container, CartIcon, Line, NavList, Wrapper } from './Navigation.styles';
import { navItems } from 'data/navItems';
import useMobile from 'hooks/useMobile';
import NavigationLink from 'components/atoms/NavigationLink/NavigationLink';

const Navigation = () => {
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    
    const isMobile = useMobile();

    const [isOpen, setIsOpen] = useState({
        1: false,
        2: false,
    });

    const handleIsOpen = (id) => {
        if (id === 1 || id === 2) {
            setIsOpen({
                ...isOpen,
                [id]: !isOpen[id],
            })
        }
    }
   
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
                    {navItems.map(({ id, icon, text }) => (
                        <NavigationLink icon={icon} id={id} text={text}>{text}</NavigationLink>
                    ))}
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