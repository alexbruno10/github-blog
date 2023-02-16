import { CardPagePostContent, CardPagePostContainer, DescriptionPageContent } from "./styles";
import { GithubLogo, ArrowSquareOut, ArrowLineLeft, Calendar, Chat} from "phosphor-react";
import { Link } from "react-router-dom";
import { IPostData } from "../..";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";


interface PostProps {
    contentPost: IPostData,
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

                    <Link to={`${contentPost.url}`} target="_blank">
                    VER NO GITHUB 
                    <ArrowSquareOut size={12} weight="fill"/>
                    </Link>

                    </header>
                    <h1>{contentPost.title}</h1>
                    <ul>
                        <li>
                            <GithubLogo size={32} weight="fill"/>
                            {contentPost.login}
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

        <ReactMarkdown
            children={contentPost.body}
            components={{
            code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={dracula as any}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                />
                ) : (
                <code className={className} {...props}>
                    {children}
                </code>
                );
            },
            }}
        />

        </DescriptionPageContent>
        </>
    )
};
