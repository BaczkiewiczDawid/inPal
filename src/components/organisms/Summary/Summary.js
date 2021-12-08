import { SummaryContainer, InfoContainer, Subtitle, Amount, Button } from './Summary.style';

const Summary = ({ productsPrice }) => {
    const shippingCost = productsPrice >= 100 ? 0 : 4.99;
    const totalPrice = (parseFloat(productsPrice) + parseFloat(shippingCost)).toFixed(2)

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
            <Button>Go to checkout</Button>
        </SummaryContainer>
     );
}
 
export default Summary;