import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './Item.style';
import ProductContent from 'components/organisms/ProductContent/ProductContent';
import ProductImage from 'components/molecules/ProductImage/ProductImage';

const Item = ({ shoppingCart, setShoppingCart }) => {


    return (
        <>
        <Navigation />  
        <Wrapper>
            <ProductImage />
            <ProductContent shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
        </Wrapper>
        </>
     );
}
 
export default Item;