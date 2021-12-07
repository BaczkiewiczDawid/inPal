import { SummaryContainer, InfoContainer, Subtitle, Amount, Button } from './Summary.style';

const Summary = () => {
    return ( 
        <SummaryContainer>
            <InfoContainer>
                <Subtitle>Shipping</Subtitle>
                <Amount>$4.99</Amount>
            </InfoContainer>
            <InfoContainer>
                <Subtitle>Total</Subtitle>
                <Amount>$135.98</Amount>
            </InfoContainer>
            <Button>Go to checkout</Button>
        </SummaryContainer>
     );
}
 
export default Summary;