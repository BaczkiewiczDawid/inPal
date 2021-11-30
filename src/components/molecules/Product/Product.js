import { ProductWrapper, StyledImg, StyledTitle, Price } from './Product.style';
import useFetch from 'hooks/useFetch';

const Product = () => {
    const products = useFetch();
    
    return ( 
        <>
            {products.filter(product => product.title.toLowerCase().includes('')).map(({ id, title, price, image}) => (
                <ProductWrapper to={`/item/${id}`}>
                    <StyledImg src={image.url} alt="" />
                    <StyledTitle>{title}</StyledTitle>
                    <Price>${price}</Price>
                </ProductWrapper>
            ))}
        </>
     );
}
 
export default Product;