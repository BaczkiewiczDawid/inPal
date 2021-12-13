import Navigation from 'components/organisms/Navigation/Navigation';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
    margin-top: 6rem;
    margin-left: 1rem;

    @media screen and (min-width: 768px) {
        margin-top: 2rem;
        margin-left: 2rem;
    }
`;

const InformationContainer = styled.div``;

const Header = styled.h1`
    font-size: 2rem;
`;

const Subtitle = styled.h2`
    font-size: 1.3rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

const Paragraph = styled.p`
    font-size: 1rem;
    margin-top: .4rem;
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

const OrderConfirmation = ({ inputValues, selectedPayment }) => {
    return ( 
        <>
            <Navigation />
            <Wrapper>
                <InformationContainer>
                    <Header>Order summary</Header>
                    <Subtitle>Delivery address</Subtitle>
                    <div>
                        <Paragraph>{inputValues.name}</Paragraph>
                        <Paragraph>{inputValues.address}</Paragraph>
                        <Paragraph>{inputValues.postcode}</Paragraph>
                        <Paragraph>{inputValues.phone}</Paragraph>
                        <Paragraph>{inputValues.email}</Paragraph>
                    </div>
                    <Subtitle>Delivery information</Subtitle>
                    <div>
                        <Paragraph>{selectedPayment.shipping}</Paragraph>
                        <Paragraph>Payment via {selectedPayment.payment}</Paragraph>
                    </div>
                </InformationContainer>
            </Wrapper>
            <Link to="/">
                <Button>Back to home</Button>
            </Link>
        </>
     );
}
 
export default OrderConfirmation;