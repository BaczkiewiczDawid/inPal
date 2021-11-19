import { Link } from './NavigationLink.style';

const NavigationLink = ({ text, link, onClick, icon, id }) => {
    return ( 
        <Link id={id}>
            <a href={link} onClick={onClick}>{text}</a>
            {icon ? <i src={icon}></i> : null}
        </Link>
     );
}
 
export default NavigationLink;