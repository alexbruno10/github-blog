import { CardInfoContainer, 
CardInfoContent,
ProfileDetails
} from "./styles";
import Img from '../../assets/Teste.svg'
import { GithubLogo, Buildings, Users, ArrowSquareOut} from "phosphor-react";

export default function CardInfo() {
    return (
        <CardInfoContainer>
            <CardInfoContent>
                <img src={Img} alt="" />
                <ProfileDetails>
                    <header>
                    <h1>Alex Bruno Neri Humberto</h1>

                    <a href="https://github.com/alexbruno10" target="_blank">GITHUB 
                    <ArrowSquareOut size={12} weight="fill"/>
                    </a>
                    </header>
                    <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                    <ul>
                        <li>
                            <GithubLogo size={32} weight="fill"/>
                            alexbruno10
                        </li>
                        <li>
                            <Buildings size={32} weight="fill"/>
                            Sicoob
                        </li>
                        <li>
                            <Users size={32} weight="fill"/>
                            10 seguidores
                        </li>
                    </ul>
                </ProfileDetails> 
            </CardInfoContent>
        </CardInfoContainer>


    )
};
