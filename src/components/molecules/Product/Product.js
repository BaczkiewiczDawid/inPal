import { ProductWrapper, StyledImg, StyledTitle, Price } from './Product.style';
import useFetch from 'hooks/useFetch';

const Product = ({ search }) => {
    const products = useFetch();

    console.log(search);
    
    return ( 
        <>
            {products.filter(product => product.title.toLowerCase().includes(search)).map(({ id, title, price, image}) => (
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