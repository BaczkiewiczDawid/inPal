import { useState, useEffect } from 'react';
import arrowDown from 'assets/images/arrow-down.png';
import NavigationLink from 'components/molecules/NavigationLink/NavigationLink';
import { Filter, StyledList } from './Filtets.styles';
import styled from 'styled-components';

const Filters = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile = width >= 768 ? false : true;

    const StyledDropdown = styled.ul`
        margin-left: 1rem;
        margin-top: 2rem;
    `;

    const StyledListItem = styled.li`
        list-style: none;
        cursor: pointer;

        &:nth-child(n+2) {
            margin-top: 1rem;
        }
    `;

const navItems = [
    {
        id: 1,
        text: 'Category',
        icon: arrowDown,
    },
    {
        id: 2,
        text: 'Collection',
        icon: arrowDown,
    },
    {
        id: 3,
        text: 'Price',
        icon: arrowDown,
    },
    {
        id: 4,
        text: 'Color',
        icon: arrowDown,
    }
];

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

    const DropdownMenu = ({id}) => {
        return (    
            <StyledDropdown>
                <StyledListItem>Boots</StyledListItem>
                <StyledListItem>Jackets and blazers</StyledListItem>
                <StyledListItem>Jeans and chinos</StyledListItem>
                <StyledListItem>Accessories</StyledListItem>
            </StyledDropdown>
        )
    }

    return (
        <Filter> 
            {isMobile ? 
            <NavigationLink text={'Filter'} icon={arrowDown} /> : null }
            {!isMobile ? <StyledList>
            {navItems.map(({ text, icon, id }) => (
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