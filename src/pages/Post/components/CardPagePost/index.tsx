import { CardPagePostContent, CardPagePostContainer, DescriptionPageContent } from "./styles";
import { GithubLogo, Buildings, Users, ArrowSquareOut, ArrowLineLeft} from "phosphor-react";
import { Link } from "react-router-dom";
import { IPost } from "../../../Home";

interface PostProps {
    contentPost: IPost,
  }

export default function PagePost({ contentPost } : PostProps) {
    return (
        <>
        <CardPagePostContainer>
            <CardPagePostContent>
                    <header>

                    
                    <Link to={"/"}>
                    <ArrowLineLeft size={12} weight="fill"/>VOLTAR
                    </Link>

                    <Link to={`${contentPost.html_url}`} target="_blank">
                    VER NO GITHUB 
                    <ArrowSquareOut size={12} weight="fill"/>
                    </Link>

                    </header>
                    <h1>{contentPost.title}</h1>
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

        </CardPagePostContainer>

        <DescriptionPageContent>

            <p>{contentPost.body}</p>

        </DescriptionPageContent>

        

        </>
    )
};
