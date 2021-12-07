import { useState, useEffect } from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import useFetch from 'hooks/useFetch';
import { Wrapper } from './ShoppingCart.style'
import SummaryContainer from 'components/organisms/Summary/Summary';
import ShoppingCartItem from 'components/molecules/ShoppingCartItem/ShoppingCartItem';


const ShoppingCart = ({ shoppingCart }) => {
    const products = useFetch();
    const cart = shoppingCart.map((el) => el.id);

    const [productsPrice, setProductsPrice] = useState(0);

    const product = products.filter(({id}) => cart.includes(id)).map((item) => item.price)

    useEffect(() => {
        if (product.length > 0) {
            setProductsPrice(product.reduce((a, b) => a + b))
        }
    }, [product])

    return ( 
        <>
            <Navigation />
            <Wrapper>
            {products.filter(({id}) => cart.includes(id)).map((item) => (
                <ShoppingCartItem item={item} cart={cart} />
            ))}
            </Wrapper>
            <SummaryContainer productsPrice={productsPrice} />
        </>
     );
}
 
export default ShoppingCart;