import { Item, ItemImage, Info, Title, Price, Delete } from './ShoppingCartItem.style';
import useMobile from 'hooks/useMobile';

const ShoppingCartItem = ({ item, cart, setCart }) => {
    const isMobile = useMobile();

    const deleteItem = () => {
        const newCart = cart.filter((el) => el !== item.id);
        setCart(newCart);
    }

    return ( 
        <Item>
            <ItemImage src={item.image.url} alt="jacket" />
            <Info>
                <Title>{item.title}</Title>
                <span>Size: <b>{item.size}</b></span>
                <Price>${item.price}</Price>
                {!isMobile ? <Delete onClick={deleteItem}>Delete</Delete> : null}
            </Info>
        </Item>
     );
}
 
export default ShoppingCartItem;