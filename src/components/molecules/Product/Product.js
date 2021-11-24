import products from 'data/Products';
import { ProductWrapper, StyledImg, StyledTitle, Price } from './Product.style';

const Product = () => {
    return ( 
        <>
            {products.map((product) => (
                <ProductWrapper to={`/item/${product.id}`}>
                    <StyledImg src={product.img} alt="" />
                    <StyledTitle>{product.name}</StyledTitle>
                    <Price>${product.price}</Price>
                </ProductWrapper>
            ))}
        </>
     );
}
 
export default Product;