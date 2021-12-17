import { TotalContainer, Title, Label, RadioButton, Button, PaymentContainer } from './Payments.style';
import { Link } from 'react-router-dom';

const Payments = ({ selectedPayment, setSelectedPayment }) => {
    const paymentMethods = [
        {
            name: 'Blik',
            checked: true
        },
        {
            name: 'Przelewy24',
            checked: false
        }
    ]

    const shippingMethods = [
        {
            online: [
                {
                    name: 'DHL',
                    price: 4.99,
                },
                {
                    name: 'DPD',
                    price: 4.99
                },
                {
                    name: 'TNT',
                    price: 4.99
                }
            ]
        }
    ]

    const handleSetPayment = (e) => {
        e.preventDefault();
        setSelectedPayment({
            ...selectedPayment,
            [e.target.name]: e.target.value
        })
    }

    return ( 
        <TotalContainer>
            <Title>Payment Method</Title>
            {paymentMethods.map((el) => (
                <PaymentContainer>
                    <Label>{el.name}</Label>
                    <RadioButton type="radio" name="payment" value={el.name} onClick={(e) => handleSetPayment(e)} />
                </PaymentContainer>
            ))}
            <Title secondary>Shipping Method</Title>
            <Label>Payment online</Label>
            {shippingMethods[0].online.map((el) => (
                <PaymentContainer>
                    <Label>{el.name}</Label>
                    <RadioButton type="radio" name="shipping" value={el.name} onClick={(e) => handleSetPayment(e)} />
                </PaymentContainer>
            ))}
            <Link to="/order-confirmation">
                <Button>Order &amp; Summary</Button> 
            </Link>
        </TotalContainer>
     );
}
 
export default Payments;