import React from 'react';
import searchIcon from 'assets/images/search-icon.png';
import { StyledTitle, StyledInput, SearchIcon, InputWrapper, Wrapper } from './SearchBar.style';

const SearchBar = ({ setSearch }) => {
    const handleSetSearch = (e) => {
        setSearch((e.target.value).toLowerCase());
    }

    return ( 
        <Wrapper>
            <StyledTitle>inPal Search</StyledTitle>
            <InputWrapper>
                <StyledInput type="text" placeholder="Write something..." onChange={(e) => handleSetSearch(e)} />
                <SearchIcon src={searchIcon} alt="Search" />
            </InputWrapper>
        </Wrapper>
     );
}

export default SearchBar;