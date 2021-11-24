import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './Item.style';
import ProductContent from 'components/organisms/ProductContent/ProductContent';
import ProductImage from 'components/molecules/ProductImage/ProductImage';

const Item = () => {
    return (
        <>
        <Navigation />  
        <Wrapper>
            <ProductImage />
            <ProductContent />
        </Wrapper>
        </>
     );
}
 
export default Item;