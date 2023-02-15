import { CardPagePostContent, CardPagePostContainer, DescriptionPageContent } from "./styles";
import { GithubLogo, ArrowSquareOut, ArrowLineLeft, Calendar, Chat} from "phosphor-react";
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
                            {contentPost.user.login}
                        </li>
                        <li>
                            <Calendar size={32} weight="fill"/>
                            {contentPost.created_at}
                        </li>
                        <li>
                            <Chat size={32} weight="fill"/>
                            {contentPost.comments}
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
