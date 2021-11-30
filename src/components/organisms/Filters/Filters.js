import { useState } from 'react';
import arrowDown from 'assets/images/arrow-down.png';
import FilterLink from 'components/atoms/FilterLink/FilterLink';
import { Filter, StyledList } from './Filtets.styles';
import DropdownMenu from 'components/molecules/DropdownMenu/DropdownMenu';
import { filterItems } from 'data/filterItems';
import useMobile from 'hooks/useMobile';
import styled from 'styled-components';

const Filters = () => {
    const isMobile = useMobile();

    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const handleSetIsFilterOpen = () => {
        setIsFiltersOpen(!isFiltersOpen);
    }

    const [isOpen, setIsOpen] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
    });

    const handleIsOpen = (id) => {
        setIsOpen({
            ...isOpen,
            1: false,
            2: false,
            3: false,
            4: false,
            [id]: !isOpen[id],
        })
    }

    const FiltersWrapper = styled.div`
        display: flex;
        flex-direction: column;
        position: fixed;
        background-color: #dbd7d7;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        border: none;
        box-shadow: 1px black;
        z-index: 9999;
    `;

    const Button = styled.button`
        width: 90%;
        height: 5rem;
        background-color: #e3ba40;
        position: absolute;
        bottom: 1rem;
        margin-left: 50%;
        transform: translateX(-50%);
        border: none;
        color: #dbd7d7;
        font-weight: 700;
        font-size: 2rem;
    `;

    const FiltersContainer = styled.div`
        margin-left: 3rem;

        &:nth-child(n+1) {
            margin-top: 1rem;
        }
    `;

    return (
        <Filter> 
            {isMobile ? 
            <FilterLink text={'Filter'} icon={arrowDown} onClick={handleSetIsFilterOpen} /> : null }
            {isMobile && isFiltersOpen ? <FiltersWrapper>
                {filterItems.map(({ text, icon, id }) => (
                <FiltersContainer>
                    <FilterLink text={text} icon={icon} id={id} onClick={() => handleIsOpen(id)} />
                    {isOpen[id] ? <DropdownMenu id={id} /> : null}
                </FiltersContainer>
            ))}
            <Button onClick={handleSetIsFilterOpen}>Save</Button>
            </FiltersWrapper> : null}
            {!isMobile ? <StyledList>
            {filterItems.map(({ text, icon, id }) => (
                <>
                    <FilterLink text={text} icon={icon} id={id} onClick={() => handleIsOpen(id)} />
                    {isOpen[id] ? <DropdownMenu id={id} /> : null}
                </>
            ))}
            </StyledList> : null}
        </Filter>
     );
}
 
export default Filters;