import CardProfile from "./components/CardProfile"
import { HomeContainer, HomeContentPosts } from "./styles"
import SearchInput from "./components/SearchInput"
import { useCallback, useEffect, useState } from "react"
import { api } from '../../lib/axios'
import { Spinner } from "../../components/Spinner"
import CardPosts from "./components/CardPosts"

export interface IPost {
    title: string;
    body: string;
    created_at: string;
    number: number;
    html_url: string;
    comments: number;
    user: {
      login: string;
    };
  }

export default function Home() {

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

      const countPosts = posts.length
    
    return (
        <HomeContainer>
            <CardProfile /> 
            <SearchInput countPosts={countPosts} />

            {loading ? (
                <Spinner />
                ) : (
                <HomeContentPosts>
                    {posts.map((item) => (
                        <CardPosts key={item.number} posts={item}/>
                    ))}
                </HomeContentPosts>
            )}

        </HomeContainer>
    )
};
