import { Item, ItemImage, Info, Title, Price, Delete } from './ShoppingCartItem.style';
import useMobile from 'hooks/useMobile';

const ShoppingCartItem = ({ item }) => {
    const isMobile = useMobile();

    return ( 
        <Item>
            <ItemImage src={item.image.url} alt="jacket" />
            <Info>
                <Title>{item.title}</Title>
                <span>Rozmiar: M</span>
                <Price>{item.price}</Price>
                {!isMobile ? <Delete>Delete</Delete> : null}
            </Info>
        </Item>
     );
}
 
export default ShoppingCartItem;