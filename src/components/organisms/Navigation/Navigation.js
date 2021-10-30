import { useState, useEffect } from 'react';
import arrowDown from 'assets/images/arrow-down.png';
import shoppingCart from 'assets/images/shopping-cart.png';
import { Nav, MenuToggleButton, Link, Icon, Container, CartIcon, Line, NavList } from './Navigation.styles';
import NavigationLink from 'components/molecules/NavigationLink/NavigationLink';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile = width >= 768 ? false : true;

    return ( 
        <>
            {isMobile ? 
                <MenuToggleButton isOpen={isOpen} onClick={() => setIsOpen(prevState => !prevState)}>
                    <span />
                    <span />
                </MenuToggleButton>
            : null}

            <Nav isOpen={isOpen}>
                <NavList>
                    <NavigationLink text={'Category'} icon={arrowDown}  />
                    <NavigationLink text={'Collection'} icon={arrowDown} />
                    <NavigationLink text={'Assistance'} link={'assistance'} />
                    <NavigationLink text={'Contacts'} link={'contacts'} />
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