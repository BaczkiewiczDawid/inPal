import { TotalContainer, Title, Label, RadioButton, Button, PaymentContainer } from './Payments.style';
import { Link } from 'react-router-dom';

const Payments = () => {
    const paymentMethods = [
        {
            name: 'Blik',
            checked: true
        },
        {
            name: 'Przelewy24'
        },
        {
            name: 'Cash'
        }
    ]

    const shippingMethods = [
        {
            online: [
                {
                    name: 'DHL',
                    price: 4.99,
                    checked: true
                },
                {
                    name: 'DPD',
                    price: 4.99
                },
                {
                    name: 'TNT',
                    price: 4.99
                }
            ],

            cash: [
                {
                    name: 'DHL',
                    price: 6.99
                },
                {
                    name: 'DPD',
                    price: 6.99
                },
            ]
        }
    ]

    return ( 
        <TotalContainer>
            <Title>Payment Method</Title>
            {paymentMethods.map((el) => (
                <PaymentContainer>
                    <Label>{el.name}</Label>
                    <RadioButton type="radio" name="payment" checked={el.checked} />
                </PaymentContainer>
            ))}
            <Title secondary>Shipping Method</Title>
            <Label>Payment online</Label>
            {shippingMethods[0].online.map((el) => (
                <PaymentContainer>
                    <Label>{el.name}</Label>
                    <RadioButton type="radio" name="shipping" checked={el.checked} />
                </PaymentContainer>
            ))}
            <Label primary>Cash on delivery</Label>
            {shippingMethods[0].cash.map((el) => (
                <PaymentContainer>
                    <Label>{el.name}</Label>
                    <RadioButton type="radio" name="shipping" />
                </PaymentContainer>
            ))}
            <Link to="/summary">
                <Button>Order &amp; Summary</Button> 
            </Link>
        </TotalContainer>
     );
}
 
export default Payments;