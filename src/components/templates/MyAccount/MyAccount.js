import Logout from 'components/atoms/Logout/Logout';
import Navigation from 'components/organisms/Navigation/Navigation';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 6rem auto;
    width: 95vw;

    @media screen and (min-width: 768px) {
        margin-left: 1rem;
        margin-top: 1rem;
    }
`;

const Title = styled.h1`
    margin-bottom: 1rem;
    font-size: 2rem;
`;

const Subtitle = styled.h2`
    @media screen and (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

const OrderItem = styled.article`
    margin-top: 1rem;
`;

const OrderNumber = styled.h3`
    font-weight: 500;
    margin-top: 1rem;
`;

const InfoContainer = styled.div`
    display: flex;
    margin-top: 1rem;
`;

const InfoTitle = styled.h4`
    font-size: 1rem;
`;

const SingleInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin-left: ${({ secondary }) => secondary ? '2rem' : '0'};
`;

const InfoParagraph = styled.p`
    margin-top: .5rem;
`;

const BuyedItemsContainer = styled.div`
    margin-top: 1rem;
`;

const MyAccount = () => {
    return ( 
        <>
            <Navigation />
            <Wrapper>
            <Title>My orders</Title>
            <OrderItem>
                <Subtitle>15 October</Subtitle>
                <OrderNumber><b>Order number:</b> 129543898123</OrderNumber>
                <InfoContainer>
                    <SingleInfoItem>
                        <InfoTitle>Date</InfoTitle>
                        <InfoParagraph>09.10.2021</InfoParagraph>
                    </SingleInfoItem>
                    <SingleInfoItem secondary>
                        <InfoTitle>Total price</InfoTitle>
                        <InfoParagraph>$325.95</InfoParagraph>
                    </SingleInfoItem>
                </InfoContainer>
                <BuyedItemsContainer>
                    <p>Item1</p>
                    <p>Item2</p>
                </BuyedItemsContainer>
            </OrderItem>
            </Wrapper>
            <Logout />
        </>
     );
}
 
export default MyAccount;