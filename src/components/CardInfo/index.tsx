import { CardInfoContainer, 
CardInfoContent,
CardInfoContentInformations,
CardInfoContentInformationsName,
CardInfoContentInformationsDescription,
CardInfoContentInformationsLast
} from "./styles";
import Img from '../../assets/Logo.svg'
import GitHub from '../../assets/Git.svg'
import Building from '../../assets/Building.svg'
import Users from '../../assets/Users.svg'

export default function CardInfo() {
    return (
        <CardInfoContainer>
            <CardInfoContent>
                <img src={Img} alt="" />
                <CardInfoContentInformations>
                    <CardInfoContentInformationsName>
                        <span>Álex Bruno Neri Humberto</span>
                        <p>Github</p>
                    </CardInfoContentInformationsName>
                    <CardInfoContentInformationsDescription>
                        <p>Desenvolvedor Full Stack</p>
                    </CardInfoContentInformationsDescription>
                    <CardInfoContentInformationsLast>
                        <span><img src={GitHub} alt=""/>alexbruno10</span>
                        <span><img src={Building} alt=""/>Sicoob Credivar</span>
                        <span><img src={Users} alt=""/>10 seguidores</span>
                    </CardInfoContentInformationsLast>
                </CardInfoContentInformations>    
            </CardInfoContent>
        </CardInfoContainer>
    )
};
