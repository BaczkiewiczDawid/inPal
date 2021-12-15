import { useEffect } from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BuyerInformation from 'components/molecules/BuyerInformation/BuyerInformation';
import PaymentInformation from 'components/molecules/PaymentInformation/PaymentInformation';

const Wrapper = styled.section`
    margin-top: 6rem;
    margin-left: 1rem;

    @media screen and (min-width: 768px) {
        margin-top: 2rem;
        margin-left: 2rem;
    }
`;

const Subtitle = styled.h2`
    font-size: 1.3rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
`;


const Button = styled.button`
    padding: 12px 48px;
    color: #fafafa;
    background-color: #2a2a2a;
    border: none;
    font-weight: 700;
    cursor: pointer;
    font-size: 1rem;
    position: fixed;
    margin-left: 5vw;
    bottom: 1rem;
    width: 90vw;

    @media screen and (min-width: 768px) {
        width: 34vw;
        margin-left: 2rem;
    }
`;

const OrderConfirmation = ({ inputValues, selectedPayment, setShoppingCart }) => {
    useEffect(() => {
        setShoppingCart([]);
    }, [])

    return ( 
        <>
            <Navigation />
            <Wrapper>
                <div>
                    <BuyerInformation inputValues={inputValues} />
                    <Subtitle>Delivery information</Subtitle>
                    <PaymentInformation selectedPayment={selectedPayment} />
                </div>
            </Wrapper>
            <Link to="/">
                <Button>Back to home</Button>
            </Link>
        </>
     );
}
 
export default OrderConfirmation;