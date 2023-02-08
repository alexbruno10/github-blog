import CardPosts from "../CardPosts";
import { PostsContainer } from "./styles";

export default function Posts() {
    return (
        <PostsContainer>
            <CardPosts />
            <CardPosts />
            <CardPosts />
            <CardPosts />
            <CardPosts />
            <CardPosts />
        </PostsContainer>
    )
};
