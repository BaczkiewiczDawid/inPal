import { Link, Icon } from './NavigationLink.styles';

const NavigationLink = ({ text, link, icon, horizontal }) => {
    return ( 
        <Link a href={link} horizontal={horizontal}>
            {text ? <span text={text}>{text}</span> : null}
            {icon ? <Icon src={icon} alt="arrow-down"/> : null}
        </Link>
     );
}
 
export default NavigationLink;