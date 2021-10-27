import arrowDown from 'assets/images/arrow-down.png';
import shoppingCart from 'assets/images/shopping-cart.png';
import { Wrapper, List, ListItem, Link, Icon, Container, CartIcon, Line } from './Navigation.styles';

const Navigation = () => {
    return ( 
        <>
            <Wrapper>
                <List>
                    <ListItem>
                        <span>Category</span>
                        <Icon src={arrowDown} alt="arrow-down"/>
                    </ListItem>
                    <ListItem>
                        <span>Collection</span>
                        <Icon src={arrowDown} alt="arrow-down"/>
                    </ListItem>
                    <ListItem>
                        <Link href="#">Assistance</Link >
                    </ListItem>
                    <ListItem>
                        <Link href="#">Contacts</Link>
                    </ListItem>
                </List>
                <Container>
                    <Link href="">
                        <CartIcon src={shoppingCart} alt="Shopping cart" />
                    </Link>
                    <Link href="">
                        <span>My account</span>
                        <Icon src={arrowDown} alt="arrow-down" />
                    </Link>
                </Container>
            </Wrapper>
        <Line></Line>
        </>
     );
}
 
export default Navigation;