import { useState, useEffect } from 'react';
import arrowDown from 'assets/images/arrow-down.png';
import shoppingCart from 'assets/images/shopping-cart.png';
import { Nav, MenuToggleButton, Link, Container, CartIcon, Line, NavList, Wrapper } from './Navigation.styles';
import NavigationLink from 'components/atoms/NavigationLink/NavigationLink';
import { navItems } from 'data/navItems';
import useMobile from 'hooks/useMobile';
import DropdownMenu from 'components/molecules/DropdownMenu/DropdownMenu';

const Navigation = () => {
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    
    const isMobile = useMobile();

    const [isOpen, setIsOpen] = useState({
        1: false,
        2: false,
    });

    const handleIsOpen = (id) => {
        setIsOpen({
            ...isOpen,
            [id]: !isOpen[id],
        })
    }

    
    return ( 
        <>
            {isMobile ? 
                <MenuToggleButton isNavigationOpen={isNavigationOpen} onClick={() => setIsOpen(prevState => !prevState)}>
                    <span />
                    <span />
                </MenuToggleButton>
            : null}

            <Nav isOpen={isOpen}>
                <NavList>
                    {navItems.map(({ text, icon, id }) => (
                        <Wrapper>
                            <NavigationLink text={text} icon={icon} id={id} onClick={() => handleIsOpen(id)} />
                            {isOpen[id] ? <DropdownMenu id={id} /> : null}
                        </Wrapper>
                    ))}
                </NavList>
                <Container>
                    <Link href="">
                        <CartIcon src={shoppingCart} alt="Shopping cart" />
                    </Link>
                    <NavigationLink text={'My account'} icon={arrowDown} />
                </Container>
            </Nav>
        {!isMobile ? 
            <Line></Line>
            : null
        }
        </>
     );
}
 
export default Navigation;