import { StyledDropdown, StyledListItem } from './DropdownMenu.styles';
import styled from 'styled-components';
import colorsList from 'data/colorsList';
import Select from 'react-select';

const ColorsWrapper = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 70vw;
    margin-left: -1.5rem;

    @media screen and (min-width: 768px) {
        max-width: 15vw;
    }
`;

const StyledSelect = styled(Select)`
    width: 70vw;

    @media screen and (min-width: 768px) {
        width: 15vw;
    }
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
                    <StyledSelect isMulti options={colorsList} />
                </ColorsWrapper>
            : null}
        </StyledDropdown>
    )
};

export default DropdownMenu;