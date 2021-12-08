import { useState, useEffect } from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import useFetch from 'hooks/useFetch';
import { Wrapper } from './ShoppingCart.style'
import SummaryContainer from 'components/organisms/Summary/Summary';
import ShoppingCartItem from 'components/molecules/ShoppingCartItem/ShoppingCartItem';


const ShoppingCart = ({ shoppingCart }) => {
    const products = useFetch();
    const initialCart = shoppingCart.map((el) => el.id);
    const [cart, setCart] = useState(initialCart)

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
                <ShoppingCartItem item={item} cart={cart} setCart={setCart} />
            ))}
            </Wrapper>
            <SummaryContainer productsPrice={productsPrice} />
        </>
     );
}
 
export default ShoppingCart;