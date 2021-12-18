import { Link, StyledLink } from './NavigationLink.style';

const NavigationLink = ({ text, link, onClick, icon, id }) => {
    return ( 
        <Link id={id}>
            <StyledLink href={link} onClick={onClick}>{text}</StyledLink>
            {icon ? <i src={icon}></i> : null}
        </Link>
     );
}
 
export default NavigationLink;