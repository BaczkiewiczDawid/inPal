import styled from 'styled-components';
import Select from 'react-select';
import Slider from '@material-ui/core/Slider';


export const StyledDropdown = styled.ul`
    margin-left: 1rem;
    margin-top: 2rem;
    word-wrap: wrap;
`;

export const StyledListItem = styled.li`
    list-style: none;
    cursor: pointer;

    &:last-child {
        margin-bottom: 1rem;
    }

    &:nth-child(n+2) {
        margin-top: 1rem;
    }
`;

export const ColorsWrapper = styled.div`
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

export const StyledSelect = styled(Select)`
    width: 70vw;

    @media screen and (min-width: 768px) {
        width: 15vw;
    }
`;

export const StyledSlider = styled(Slider)`
    @media screen and (min-width: 768px) {
        width: 8vw;
    }
`;

export const SliderWrapper = styled.div`
    @media screen and (min-width: 768px) {
        width: 8vw;
    }
`;

export const Title = styled.h3`
    font-size: .8rem;
    margin-bottom: .5rem;
`;