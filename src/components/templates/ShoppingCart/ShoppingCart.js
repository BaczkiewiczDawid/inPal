import { useState, useEffect } from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import useFetch from 'hooks/useFetch';
import { Wrapper } from './ShoppingCart.style'
import SummaryContainer from 'components/organisms/Summary/Summary';
import ShoppingCartItem from 'components/molecules/ShoppingCartItem/ShoppingCartItem';


const ShoppingCart = ({ shoppingCart, finalProductsList, setFinalProductsList }) => {
    const products = useFetch();
    const initialCart = shoppingCart.map((el) => el.id);

    const [cart, setCart] = useState(initialCart);
    const [productsPrice, setProductsPrice] = useState(0);

    const product = products.filter(({id}) => cart.includes(id)).map((item) => item.price)

    useEffect(() => {
        if (product.length > 0) {
            setProductsPrice(product.reduce((a, b) => a + b))
        }
    }, [product])

    const filteredProducts = products.filter(({id}) => cart.includes(id));

    const size = shoppingCart.map((el) => ({size: el.size}));

    const filteredProductsWithSize = filteredProducts.map((product, i) => ({
        ...product,
        ...size[i]
    }));

    useEffect(() => {
        setFinalProductsList(filteredProductsWithSize);
    }, [finalProductsList, filteredProductsWithSize, setFinalProductsList]);

    console.log(finalProductsList)

    return ( 
        <>
            <Navigation />
            <Wrapper>
            {filteredProductsWithSize.map((item) => (
                <ShoppingCartItem item={item} cart={cart} setCart={setCart} />
            ))}
            </Wrapper>
            <SummaryContainer productsPrice={productsPrice} product={product} />
        </>
     );
}
 
export default ShoppingCart;