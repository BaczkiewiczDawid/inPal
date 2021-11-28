import { useState, useEffect } from 'react';
import arrowDown from 'assets/images/arrow-down.png';
import shoppingCart from 'assets/images/shopping-cart.png';
import { Nav, MenuToggleButton, Link, Container, CartIcon, NavList, Dropdown, DropdownButton, DropdownContent, DropdownLink } from './Navigation.styles';
import { navItems } from 'data/navItems';
import useMobile from 'hooks/useMobile';
import NavigationLink from 'components/atoms/NavigationLink/NavigationLink';
import DropdownMenu from 'components/molecules/DropdownMenu/DropdownMenu';

const Navigation = () => {
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    
    const isMobile = useMobile();

    const [isOpen, setIsOpen] = useState({
        1: true,
        2: true,
    });

    const handleIsOpen = (id) => {
        if (id === 1 || id === 2) {
            setIsOpen({
                ...isOpen,
                [id]: !isOpen[id],
            })
        } else {
            setIsOpen({
                ...isOpen,
                3: false,
                4: false,
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
                    {navItems.map(({ id, icon, text}) => (
                        <Dropdown>
                            <DropdownButton id={id} onClick={() => handleIsOpen(id)}>{text}{icon ? <img src={icon} alt="arrow-down" /> : null}</DropdownButton>
                            {(id === 1 || id === 2) && !isMobile ? 
                            <DropdownContent isOpen={!!isOpen[id]}>
                                <DropdownLink href="#">Link 1</DropdownLink>
                                <DropdownLink href="#">Link 2</DropdownLink>
                                <DropdownLink href="#">Link 3</DropdownLink>
                            </DropdownContent> : null}
                            {(id === 1 || id === 2) && isMobile ?
                            <DropdownContent isOpen={!!isOpen[id]}>
                                <DropdownMenu id={id} />
                            </DropdownContent> : null}   
                        </Dropdown>
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