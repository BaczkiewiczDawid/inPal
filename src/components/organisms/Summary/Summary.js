import { SummaryContainer, InfoContainer, Subtitle, Amount, Button } from './Summary.style';

const Summary = ({ productsPrice }) => {
    const shippingCost = productsPrice >= 100 ? 0 : 4.99;

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
                <Amount>${parseFloat(productsPrice.toFixed(2)) + parseFloat(shippingCost)}</Amount>
            </InfoContainer>
            <Button>Go to checkout</Button>
        </SummaryContainer>
     );
}
 
export default Summary;