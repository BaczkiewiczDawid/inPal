import { useState } from 'react';
import { Content, Title, Price, ProductDescription, Size, StyledSelect, Button } from './ProductContent.style';
import { useParams } from 'react-router-dom';
import useFetch from 'hooks/useFetch';

const ProductContent = ({ shoppingCart, setShoppingCart }) => {
    const { id } = useParams();

    const products = useFetch();
    const product = products.find(productID => productID.id === id);

    let selectedSize = 'S';

    const handleSaveSize = (e) => {
        selectedSize = e.value;
    }

    const addToCart = () => {
        setShoppingCart((prevState) => [
            ...prevState,
            {
                id: id,
                size: selectedSize
            },
        ]);
    }

    const sizeList = [
        {
            value: 'S',
            label: 'S'
        },
        {
            value: 'M',
            label: 'M'
        },
        {
            value: 'L',
            label: 'L'
        },
        {
            value: 'XL',
            label: 'XL'
        },
        {
            value: 'XXL',
            label: 'XXL'
        }
    ]

    return (
        <>
        { product ?
            <Content>
                <Title>{product.title}</Title>
                <Price>${product.price}</Price>
                <ProductDescription>{product.description}</ProductDescription>
                <Size>
                    <Title>Choose size</Title>
                    <StyledSelect name="sizes" options={sizeList} onChange={handleSaveSize} />
                </Size>
                <Button onClick={addToCart}>Add to cart</Button>
            </Content>
        : null} 
        </>
     );
}
 
export default ProductContent;