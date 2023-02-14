import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { IPost } from "../Home";
import PagePost from "./components/CardPagePost";
import { PostContainer } from "./styles";

export default function Post() {

    const [postData, setPostData] = useState<IPost>({} as IPost);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    const getPostDetails = useCallback(async () => {
        try {
        setIsLoading(true);

        const response = await api.get(
            `/repos/alexbruno10/github-blog/issues/${id}`
        );

        setPostData(response.data);
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
