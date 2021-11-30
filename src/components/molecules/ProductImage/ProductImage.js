import { ImageWrapper, StyledProductImage } from './ProductImage.style';
import { useParams } from 'react-router-dom';
// import products from 'data/Products';
import useFetch from 'hooks/useFetch';

const ProductImagte = () => {
    const { id } = useParams();

    const products = useFetch();
    const product = products.find(x => x.id === id);
    
    return ( 
        <ImageWrapper>
            { product ? <StyledProductImage src={product.image.url} alt="suit"></StyledProductImage> : null}
        </ImageWrapper>
     );
}
 
export default ProductImagte;