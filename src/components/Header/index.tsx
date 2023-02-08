import { HeaderContainer } from "./styles";
import Logo from '../../assets/Logo.svg'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <HeaderContainer>
            <Link to={'/'}>
                <img src={Logo} alt="" />  
            </Link>
        </HeaderContainer>
    )
};
