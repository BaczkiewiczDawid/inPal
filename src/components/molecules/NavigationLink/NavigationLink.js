import { Link, Icon } from './NavigationLink.styles';

const NavigationLink = ({ text, link, icon, horizontal, onClick, id }) => {
    return ( 
        <Link a href={link} horizontal={horizontal} onClick={onClick} id={id} >
            {text ? <span text={text}>{text}</span> : null}
            {icon ? <Icon src={icon} alt="arrow-down"/> : null}
        </Link>
     );
}
 
export default NavigationLink;