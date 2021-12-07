import Navigation from 'components/organisms/Navigation/Navigation';
import jacket from 'assets/images/jacket.png';
import { useParams } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import styled from 'styled-components';
import useMobile from 'hooks/useMobile';

const Wrapper = styled.div`
    margin-top: 6rem;

    @media screen and (min-width: 768px) {
        margin-top: 2rem;
    }
`;

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    height: 7rem;
    background-color: #fafafa;
    box-shadow: 7px 5px 24px -14px rgba(66, 68, 90, 1);

    &:nth-child(n+1) {
        margin-top: 2rem;
    }

    &:last-child {
        margin-bottom: 30vh;
    }

    @media screen and (min-width: 768px) {
        width: 50vw;
        margin-left: 2rem;
    }
`;

const Title = styled.h2`
    font-size: 1.5rem;
`;

const ItemImage = styled.img`
    width: auto;
    height: 90%;
    margin-left: 2rem;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-right: 2rem;
`;

const Price = styled.span`
    margin-top: 1rem;
`;

const Summary = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 15vh;
    bottom: 0;
    border-top: 1px solid #2a2a2a;
    background-color: #fafafa;

    @media screen and (min-width: 768px) {
        position: absolute;
        right: 0;
        top: 0;
        margin-top: 5rem;
        height: 50vh;
        width: 40vw;
        border: none;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin-top: 1rem;
`;

const Subtitle = styled.h3`
    font-size: 1rem;
`;

const Amount = styled.span`
`;

const Delete = styled.span`
    font-size: .7rem;
    margin-top: .5rem;
    margin-bottom: .5rem;
`;

const Button = styled.button`
    padding: 12px 48px;
    color: #fafafa;
    background-color: #2a2a2a;
    border: none;
    font-weight: 700;
    cursor: pointer;
    margin-top: 2rem;
    font-size: 1rem;
    width: 85%;
    margin-bottom: 1rem;
`;

const ShoppingCart = ({ shoppingCart }) => {
    const isMobile = useMobile();
    const { id } = useParams();

    const products = useFetch();
    console.log(shoppingCart.map((el) => el.id))

    return ( 
        <>
            <Navigation />
            <Wrapper>
            <Item>
                <ItemImage src={jacket} alt="jacket" />
                <Info>
                    <Title>Jacket title</Title>
                    <span>Rozmiar: M</span>
                    <Price>$39.99</Price>
                    {!isMobile ? <Delete>Delete</Delete> : null}
                </Info>
            </Item>
            {/* <Item>
                <ItemImage src={jacket} alt="jacket" />
                <Info>
                    <Title>Jacket title</Title>
                    <span>Rozmiar: M</span>
                    <Price>$39.99</Price>
                    {!isMobile ? <Delete>Delete</Delete> : null}
                </Info>
            </Item>
            <Item>
                <ItemImage src={jacket} alt="jacket" />
                <Info>
                    <Title>Jacket title</Title>
                    <span>Rozmiar: M</span>
                    <Price>$39.99</Price>
                    {!isMobile ? <Delete>Delete</Delete> : null}
                </Info>
            </Item>
            <Item>
                <ItemImage src={jacket} alt="jacket" />
                <Info>
                    <Title>Jacket title</Title>
                    <span>Rozmiar: M</span>
                    <Price>$39.99</Price>
                    {!isMobile ? <Delete>Delete</Delete> : null}
                </Info>
            </Item>
            <Item>
                <ItemImage src={jacket} alt="jacket" />
                <Info>
                    <Title>Jacket title</Title>
                    <span>Rozmiar: M</span>
                    <Price>$39.99</Price>
                    {!isMobile ? <Delete>Delete</Delete> : null}
                </Info>
            </Item> */}
            </Wrapper>
            <Summary>
                <InfoContainer>
                    <Subtitle>Shipping</Subtitle>
                    <Amount>$4.99</Amount>
                </InfoContainer>
                <InfoContainer>
                    <Subtitle>Total</Subtitle>
                    <Amount>$135.98</Amount>
                </InfoContainer>
                <Button>Go to checkout</Button>
            </Summary>
        </>
     );
}
 
export default ShoppingCart;