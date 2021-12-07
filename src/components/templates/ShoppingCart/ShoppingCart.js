import Navigation from 'components/organisms/Navigation/Navigation';
import useFetch from 'hooks/useFetch';
import { Wrapper } from './ShoppingCart.style'
import SummaryContainer from 'components/organisms/Summary/Summary';
import ShoppingCartItem from 'components/molecules/ShoppingCartItem/ShoppingCartItem';


const ShoppingCart = ({ shoppingCart }) => {
    const products = useFetch();
    const cart = shoppingCart.map((el) => el.id);

    return ( 
        <>
            <Navigation />
            <Wrapper>
            {products.filter(({id}) => cart.includes(id)).map((item) => (
                <ShoppingCartItem item={item} />
            ))}
            </Wrapper>
            <SummaryContainer />
        </>
     );
}
 
export default ShoppingCart;