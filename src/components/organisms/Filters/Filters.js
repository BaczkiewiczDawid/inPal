import { useState, useEffect } from 'react';
import arrowDown from 'assets/images/arrow-down.png';
import NavigationLink from 'components/molecules/NavigationLink/NavigationLink';
import { Filter, StyledList } from './Filtets.styles';



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
            <NavigationLink text={'Filter'} icon={arrowDown} /> : null }
            {!isMobile ? <StyledList>
                <NavigationLink text={'Category'} icon={arrowDown} />
                <NavigationLink text={'Collection'} icon={arrowDown} />
                <NavigationLink text={'Price'} icon={arrowDown} />
                <NavigationLink text={'Color'} icon={arrowDown} />
            </StyledList> : null}
        </Filter>
     );
}
 
export default Filters;