import { ImageWrapper, StyledProductImage } from './ProductImage.style';
import { useParams } from 'react-router-dom';
import products from 'data/Products';

const ProductImagte = () => {
    const { id } = useParams();
    return ( 
        <ImageWrapper>
            <StyledProductImage src={products[id - 1].img} alt="suit"></StyledProductImage>
        </ImageWrapper>
     );
}
 
export default ProductImagte;