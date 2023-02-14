import { useState, useCallback, useEffect } from "react";
import CardPosts from "../CardPosts";
import { PostsContainer } from "./styles";
import { api } from "../../../../lib/axios";
import { Spinner } from "../../../../components/Spinner";

export interface IPost {
    title: string;
    body: string;
    created_at: string;
    number: number;
  }

export default function Posts() {

    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState(true);

    const getPosts = useCallback(async() => {
          try {
            setLoading(true);
            const response = await api.get(
              `/search/issues?q=%20repo:alexbruno10/github-blog`
            );
    
            setPosts(response.data.items);
          } finally {
            setLoading(false);
          }
        },
        [posts]
      );

      useEffect(() => {
        getPosts();
        console.log(posts)
      }, []);

    return (
        <>
        {loading ? (
            <Spinner />
            ) : (
                <PostsContainer>
                    {posts.map((item) => (
                        <CardPosts key={item.number} posts={item}/>
                    ))}
                </PostsContainer>
            )}
        </>
    )
};
