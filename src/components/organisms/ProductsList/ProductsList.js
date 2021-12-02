import Product from 'components/molecules/Product/Product';
import { Wrapper } from './ProductsList.style';

const ProductsList = ({ search }) => {
    return ( 
        <Wrapper>
            <Product search={search} />
        </Wrapper>
     );
}
 
export default ProductsList;