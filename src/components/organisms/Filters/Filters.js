import { useState } from 'react';
import arrowDown from 'assets/images/arrow-down.png';
import NavigationLink from 'components/atoms/NavigationLink/NavigationLink';
import { Filter, StyledList } from './Filtets.styles';
import DropdownMenu from 'components/molecules/DropdownMenu/DropdownMenu';
import { filterItems } from 'data/filterItems';
import useMobile from 'hooks/useMobile';

const Filters = () => {
    const isMobile = useMobile();

    const [isOpen, setIsOpen] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
    });

    const handleIsOpen = (id) => {
        setIsOpen({
            ...isOpen,
            [id]: !isOpen[id],
        })
    }

    return (
        <Filter> 
            {isMobile ? 
            <NavigationLink text={'Filter'} icon={arrowDown} /> : null }
            {!isMobile ? <StyledList>
            {filterItems.map(({ text, icon, id }) => (
                <>
                    <NavigationLink text={text} icon={icon} id={id} onClick={() => handleIsOpen(id)} />
                    {isOpen[id] ? <DropdownMenu id={id} /> : null}
                </>
            ))}
            </StyledList> : null}
        </Filter>
     );
}
 
export default Filters;