import products from 'data/Products';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    width: 95vw;
    margin-top: 1rem;
    margin-left: 50%;
    transform: translateX(-50%);

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        width: 60%;
    }
`;

const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`;

const StyledImg = styled.img`
    width: 80px;
    height: auto;

    @media screen and (min-width: 768px) {
        width: 120px;
    }
`;

const StyledTitle = styled.h3`
    font-size: .8rem;
    font-weight: 500;
    margin-top: 1rem;

    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }
`;

const Price = styled.p`
    font-weight: 700;
    margin-top: 1rem;

    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
    }
`;

const ProductsList = () => {
    return ( 
        <Wrapper>
            {products.map((product) => (
                <ProductWrapper>
                    <StyledImg src={product.img} alt="" />
                    <StyledTitle>{product.name}</StyledTitle>
                    <Price>${product.price}</Price>
                </ProductWrapper>
            ))}
        </Wrapper>
     );
}
 
export default ProductsList;