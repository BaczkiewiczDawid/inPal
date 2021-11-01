import searchIcon from 'assets/images/search-icon.png';
import { StyledTitle, StyledInput, SearchIcon, InputWrapper, Wrapper } from './SearchBar.style';

const SearchBar = () => {
    return ( 
        <Wrapper>
            <StyledTitle>inPal Search</StyledTitle>
            <InputWrapper>
                <StyledInput type="text" placeholder="Write something..." />
                <SearchIcon src={searchIcon} alt="Search" />
            </InputWrapper>
        </Wrapper>
     );
}
 
export default SearchBar;