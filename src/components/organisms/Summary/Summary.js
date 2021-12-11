import { SummaryContainer, InfoContainer, Subtitle, Amount, Button, StyledLink } from './Summary.style';
import { Link } from 'react-router-dom';

const Summary = ({ productsPrice, product }) => {
    const shippingCost = productsPrice >= 100 ? 0 : 4.99;
    let totalPrice = (parseFloat(productsPrice) + parseFloat(shippingCost)).toFixed(2)

    let isButtonEnabled = true;

    if (product.length <= 0) {
        totalPrice = 4.99;
        productsPrice = 0;
    }

    if (productsPrice > 0) {
        isButtonEnabled = true;
    } else {
        isButtonEnabled = false;
    }

    return ( 
        <SummaryContainer>
            <InfoContainer>
                <Subtitle>Shipping</Subtitle>
                <Amount>${shippingCost}</Amount>
            </InfoContainer>
            <InfoContainer>
                <Subtitle>Items Cost</Subtitle>
                <Amount>${productsPrice.toFixed(2)}</Amount>
            </InfoContainer>
            <InfoContainer>
                <Subtitle>Total</Subtitle>
                <Amount>${totalPrice}</Amount>
            </InfoContainer>
            {isButtonEnabled ?
            <Link to="/checkout">
                <Button>Go to checkout</Button>
            </Link>
            : <Button isButtonEnabled={isButtonEnabled} disabled>Go to checkout</Button>}
        </SummaryContainer>
     );
}
 
export default Summary;