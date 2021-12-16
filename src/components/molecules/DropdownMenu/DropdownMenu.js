import { useState } from 'react';
import { StyledDropdown, StyledListItem } from './DropdownMenu.styles';
import { SliderWrapper, Title, StyledSlider, ColorsWrapper, StyledSelect } from './DropdownMenu.styles';
import colorsList from 'data/colorsList';



const DropdownMenu = ({ id, navigation, isOpen }) => {
    const [value, setValue] = useState([0, 100]);

    const rangeSelector = (e, newValue) => {
        setValue(newValue);
    }

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
                <SliderWrapper>
                    <Title>Select price range</Title>
                    <StyledSlider value={value} onChange={rangeSelector} valueLabelDisplay="auto" />
                </SliderWrapper>
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