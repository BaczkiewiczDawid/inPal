import { StyledDropdown, StyledListItem } from './DropdownMenu.styles';
import styled from 'styled-components';
import colorsList from 'data/colorsList';

const ColorsWrapper = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-wrap: wrap;
`;

const ColorPicker = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${({ color }) => color };
    margin: 5px;
    cursor: pointer;
`;

const DropdownMenu = ({ id, navigation, isOpen }) => {
    return (    
        <StyledDropdown navigation={navigation} isOpen={isOpen}>
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
            {id === 3 ? 
                <input type="range" min="0" max="2000" />
            : null} 
            {id === 4 ? 
                <ColorsWrapper>
                    {colorsList.map((color) => (
                        <ColorPicker color={color.value} />
                    ))}
                </ColorsWrapper>
            : null}
        </StyledDropdown>
    )
};

export default DropdownMenu;