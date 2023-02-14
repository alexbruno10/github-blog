import { Link } from "react-router-dom";
import { IPost } from "../Posts";
import { CardPostContainer } from "./styles";
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from "date-fns/esm/locale/pt-BR/index.js";

interface PostProps {
    posts: IPost,
  }

export default function CardPosts({ posts }: PostProps) {

    const publishedAt = new Date(posts.created_at)

    const publishedDateNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return( 
        <CardPostContainer>
            <Link to={`/post/${posts.number}`}>
            <header>
                <h2>{posts.title}</h2>
                <span>{publishedDateNow}</span>
            </header>
            <p>{posts.body}</p>
            </Link>
        </CardPostContainer>
    )
};
