import { StyledDropdown, StyledListItem } from './DropdownMenu.styles';

const DropdownMenu = ({ id, navigation }) => {
    return (    
        <StyledDropdown navigation={navigation}>
            {id === 1 ?
                <>
                    <StyledListItem>Boots</StyledListItem>
                    <StyledListItem>Jackets and blazers</StyledListItem>
                    <StyledListItem>Jeans and chinos</StyledListItem>
                    <StyledListItem>Accessories</StyledListItem>
                </>
            : null }
            {id === 2 ?
                <>
                    <StyledListItem>Spring</StyledListItem>
                    <StyledListItem>Summer</StyledListItem>
                    <StyledListItem>Autumn</StyledListItem>
                    <StyledListItem>Winter</StyledListItem>
                </>
            : null }
            {id === 3 ? <input type="range" min="0" max="2000" /> : null} 
            {id === 4 ? <input type="color" /> : null}
        </StyledDropdown>
    )
};

export default DropdownMenu;