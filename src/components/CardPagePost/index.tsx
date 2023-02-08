import { CardInfoContainer } from "../CardProfile/styles";
import { CardPagePostContent } from "./styles";
import { GithubLogo, Buildings, Users, ArrowSquareOut, ArrowLineLeft} from "phosphor-react";

export default function CardPagePost() {
    return (
        <>
        <CardInfoContainer>
            <CardPagePostContent>
                    <header>
                    <a href="https://github.com/alexbruno10" target="_blank">
                    <ArrowLineLeft size={12} weight="fill"/>VOLTAR
                    </a>

                    <a href="https://github.com/alexbruno10" target="_blank">VER NO GITHUB 
                    <ArrowSquareOut size={12} weight="fill"/>
                    </a>
                    </header>
                    <h1>Título</h1>
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
            </CardPagePostContent>
        </CardInfoContainer>
        </>
    )
};
