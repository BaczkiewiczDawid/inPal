import { Content, Title, Price, ProductDescription, Size, Select, Option, Button } from './ProductContent.style';
import { useParams } from 'react-router-dom';
import products from 'data/Products';

const ProductContent = () => {
    const { id } = useParams();

    return ( 
        <Content>
                <Title>{products[id - 1].name}</Title>
                <Price>${products[id - 1].price}</Price>
                <ProductDescription>{products[id - 1].description}</ProductDescription>
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
     );
}
 
export default ProductContent;