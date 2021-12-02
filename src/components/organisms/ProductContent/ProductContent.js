import { Content, Title, Price, ProductDescription, Size, Select, Option, Button } from './ProductContent.style';
import { useParams } from 'react-router-dom';
// import products from 'data/Products';
import useFetch from 'hooks/useFetch';

const ProductContent = () => {
    const { id } = useParams();

    const products = useFetch();
    const product = products.find(productID => productID.id === id);
    console.log(product);

    return (
        <>
        { product ?
            <Content>
                <Title>{product.title}</Title>
                <Price>${product.price}</Price>
                <ProductDescription>{product.description}</ProductDescription>
                <Size>
                    <Title>Choose size</Title>
                    <Select name="sizes">
                        <Option value="s">S</Option>
                        <Option value="m">M</Option>
                        <Option value="l">L</Option>
                        <Option value="xl">XL</Option>
                        <Option value="xxl">XXL</Option>
                    </Select>
                </Size>
                <Button>Add to cart</Button>
            </Content>
        : null} 
        
        </>
     );
}
 
export default ProductContent;