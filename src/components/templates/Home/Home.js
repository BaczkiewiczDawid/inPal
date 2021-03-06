import { useState } from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import Filters from 'components/organisms/Filters/Filters';
import ProductsList from 'components/organisms/ProductsList/ProductsList';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        margin-top: 1.5rem;
    }
`;

const Home = () => {
    const [search, setSearch] = useState('');

    return ( 
        <>
            <Navigation />
            <SearchBar setSearch={setSearch} />
            <Wrapper>
                <Filters />
                <ProductsList search={search} />
            </Wrapper>
        </>
     );
}
 
export default Home;