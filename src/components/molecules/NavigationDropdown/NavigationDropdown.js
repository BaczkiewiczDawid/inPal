import { useState } from 'react';
import { navItems } from 'data/navItems';
import DropdownMenu from 'components/molecules/DropdownMenu/DropdownMenu';
import useMobile from 'hooks/useMobile';
import { Dropdown, DropdownButton, DropdownContent, DropdownLink, ArrowDownIcon } from './NavigationDropdown.style';
import { Link } from 'react-router-dom';

const NavigationDropdown = () => {
    const isMobile = useMobile();

    const [isOpen, setIsOpen] = useState({
        1: true,
        2: true,
    });

    const handleIsOpen = (id) => {
        if (id === 1 || id === 2) {
            setIsOpen({
                1: true,
                2: true,
                [id]: !isOpen[id],
            })
        } else {
            setIsOpen({
                ...isOpen,
                3: false,
                4: false,
            })
        }
    }

    return ( 
        <>
        {navItems.map(({ id, icon, text, path}) => (
            <Dropdown>
                {path ? <Link to={path}><DropdownButton id={id} onClick={() => handleIsOpen(id)}>{text}{icon ? <ArrowDownIcon src={icon} alt="arrow-down" /> : null}</DropdownButton></Link> : <DropdownButton id={id} onClick={() => handleIsOpen(id)}>{text}{icon ? <ArrowDownIcon src={icon} alt="arrow-down" /> : null}</DropdownButton>}
                {(id === 1 || id === 2) && !isMobile ? 
                <DropdownContent isOpen={!!isOpen[id]}>
                    {navItems[id - 1].subitem.map((item) => (
                        <DropdownLink to="/">{item.name}</DropdownLink>
                    ))}
                </DropdownContent> : null}
                {(id === 1 || id === 2) && isMobile ?
                <DropdownContent isOpen={!!isOpen[id]}>
                    <DropdownMenu id={id} />
                </DropdownContent> : null}   
            </Dropdown>
        ))}
        </>
     );
}
 
export default NavigationDropdown;