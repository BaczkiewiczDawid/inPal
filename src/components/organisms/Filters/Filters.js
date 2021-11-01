import { useState, useEffect } from 'react';
import arrowDown from 'assets/images/arrow-down.png';
import NavigationLink from 'components/molecules/NavigationLink/NavigationLink';
import styled from 'styled-components';

const Filter = styled.div`
    margin-left: 1.5rem;
    margin-top: 2rem;
    width: 200px;
`;

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
`;

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


    return (
        <Filter> 
            {isMobile ? 
            <NavigationLink text={'Filter'} icon={arrowDown} /> :
            <StyledList>
                <NavigationLink text={'Category'} icon={arrowDown} />
                <NavigationLink text={'Collection'} icon={arrowDown} />
                <NavigationLink text={'Price'} icon={arrowDown} />
                <NavigationLink text={'Color'} icon={arrowDown} />
            </StyledList> 
            }
        </Filter>
     );
}
 
export default Filters;