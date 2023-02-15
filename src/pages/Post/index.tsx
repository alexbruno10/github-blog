import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import PagePost from "./components/CardPagePost";
import { PostContainer } from "./styles";
import reactMarkdown from "react-markdown";

export interface IPostData {
    title: string;
    body: string;
    created_at: string;
    url: string;
    comments: number;
    login: string;
  }

export default function Post() {

    const [postData, setPostData] = useState<IPostData>({} as IPostData);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    const getPostDetails = useCallback(async () => {
        try {
        setIsLoading(true);

        const response = await api.get(
            `/repos/alexbruno10/github-blog/issues/${id}`
        );

        const { title, comments, created_at, user, html_url, body } = response.data;

        const newPostObj = {
            title,
            login: user.login,
            comments,
            created_at: created_at,
            url: html_url,
            body,
          };

        setPostData(newPostObj);
        } finally {
        setIsLoading(false);
        }
    }, [postData]);

    useEffect(() => {
        getPostDetails();
        console.log(postData)
    }, []);

    return(
        <PostContainer>
            <PagePost contentPost={postData} />
        </PostContainer>
    )
};
