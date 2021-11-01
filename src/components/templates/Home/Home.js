import Navigation from 'components/organisms/Navigation/Navigation';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import Filters from 'components/organisms/Filters/Filters';
import ProductsList from 'components/organisms/ProductsList/ProductsList';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: inline;
`;

const Home = () => {
    return ( 
        <>
            <Navigation />
            <SearchBar />
            <Wrapper>
                <Filters />
                <ProductsList />
            </Wrapper>
        </>
     );
}
 
export default Home;