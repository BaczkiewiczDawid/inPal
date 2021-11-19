import { Link, Icon } from './FilterLink.style';

const FilterLink = ({ text, link, icon, horizontal, onClick, id }) => {
    return ( 
        <Link a href={link} horizontal={horizontal} onClick={onClick} id={id} >
            {text ? <span text={text}>{text}</span> : null}
            {icon ? <Icon src={icon} alt="arrow-down"/> : null}
        </Link>
     );
}
 
export default FilterLink;