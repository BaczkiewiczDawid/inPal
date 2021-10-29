import { useState, useEffect } from 'react';
import arrowDown from 'assets/images/arrow-down.png';
import shoppingCart from 'assets/images/shopping-cart.png';
import { Nav, MenuToggleButton, Link, Icon, Container, CartIcon, Line, NavList } from './Navigation.styles';

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
                    <Link>
                        <span>Category</span>
                        <Icon src={arrowDown} alt="arrow-down"/>
                    </Link>
                    <Link>
                        <span>Collection</span>
                        <Icon src={arrowDown} alt="arrow-down"/>
                    </Link>
                    <Link>
                        <Link href="#">Assistance</Link >
                    </Link>
                    <Link>
                        <Link href="#">Contacts</Link>
                    </Link>
                </NavList>
                <Container>
                    <Link href="">
                        <CartIcon src={shoppingCart} alt="Shopping cart" />
                    </Link>
                    <Link href="">
                        <span>My account</span>
                        <Icon src={arrowDown} alt="arrow-down" />
                    </Link>
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