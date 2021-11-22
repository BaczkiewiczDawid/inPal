import products from 'data/Products';
import Navigation from 'components/organisms/Navigation/Navigation';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20%;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        margin-top: 6rem;
        justify-content: space-between;
    }
`;

const ImageWrapper = styled.div`
    @media screen and (min-width: 768px) {
        width: 40vw;
        margin-top: -5rem;   
    }

    @media screen and (min-width: 1024px) {
        width: 30vw;
        margin-top: 0;
    }
`;

const StyledProductImage = styled.img`
    height: 45vh;
    width: auto;

    @media screen and (min-width: 768px) {
        height: 50vw;
        margin-left: 2rem;
    }

    @media screen and (min-width: 1300px) {
        height: 35vw;
        margin-left: 5rem;
    }

    @media screen and (min-width: 1600px) {
        margin-left: 8rem;
    }
`;

const Content = styled.div`
    margin-top: 2rem;
    width: 90vw;

    @media screen and (min-width: 768px) {
        width: 40vw;
        margin-right: 5rem;
    }

    @media screen and (min-width: 1300px) {
        margin-right: 8rem;
    }

    @media screen and (min-width: 1600px) {
        margin-top: 5rem;
    }
`;

const Title = styled.h1`
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: .8rem;

    @media screen and (min-width: 1024px) {
        font-size: 1.4rem;
    }
`;

const Price = styled.span`
    font-size: 1.4rem;
    font-weight: 700;

    @media screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;

const ProductDescription = styled.p`
    letter-spacing: .8px;
    word-spacing: 6px;
    line-height: 1.4rem;
    font-size: .9rem;
    margin-top: 2rem;

    @media screen and (min-width: 1024px) {
        line-height: 1.6rem;
    }
`;

const Size = styled.h2`
    margin-top: 2rem;

    @media screen and (min-width: 1600px) {
        margin-top: 4rem;
    }
`;

const Select = styled.select`
    background-color: transparent;
    border: none;
    font-weight: 700;
`;

const Option = styled.option`
    font-weight: 700;
`;

const Button = styled.button`
    width: 80vw;
    padding: 18px 0;
    background-color: #2a2a2a;
    color: #fafafa;
    font-weight: 700;
    border: none;
    border-radius: 100px;
    margin-left:50%;
    transform: translateX(-50%);
    margin-top: 3rem;
    margin-bottom: 3rem;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        width: 40vw;
        margin-left: 20vw;
    }

    @media screen and (min-width: 1024px) {
        width: 30vw;
        margin-left: 15vw;
        font-size: 1.2rem;
    }

    @media screen and (min-width: 1600px) {
        margin-top: 5rem;
    }
`;

const Item = () => {
    const { id } = useParams();

    return (
        <>
        <Navigation />  
        <Wrapper>
            <ImageWrapper>
                <StyledProductImage src={products[id - 1].img} alt="suit"></StyledProductImage>
            </ImageWrapper>
            <Content>
                <Title>{products[id - 1].name}</Title>
                <Price>${products[id - 1].price}</Price>
                <ProductDescription>{products[id - 1].description}</ProductDescription>
                <Size>
                    <Title>Choose size</Title>
                    <Select name="sizes">
                        <Option value="s">S</Option>
                        <Option value="m">M</Option>
                        <Option value="l">L</Option>
                        <Option value="xl">XL</Option>
                        <Option value="xxl">XXL</Option>
                    </Select>
                </Size>
                <Button>Add to cart</Button>
            </Content>
        </Wrapper>
        </>
     );
}
 
export default Item;