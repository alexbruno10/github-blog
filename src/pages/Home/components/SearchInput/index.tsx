import { useForm } from "react-hook-form";
import { SearchInputContainer } from "./styles";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface SearchProps {
    countPosts: number,
    getPosts: (query?: string) => Promise<void>;
}

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export default function SearchInput({countPosts, getPosts} : SearchProps) {

    const {register, handleSubmit, reset} = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    function handleSubmitPost(data: SearchFormInputs) {
        console.log(data)
        getPosts(data.query)
        reset()
    }

    return(
        <SearchInputContainer>

            <header>
                <h3>Publicações</h3>
                <span>{countPosts > 0 ? `${countPosts} publicações` : `${countPosts} publicação`}</span>
            </header>


            <form onSubmit={handleSubmit(handleSubmitPost)}>
                <input 
                type="text"
                placeholder="Buscar conteúdo"
                {...register('query')}
                />
            </form>

        </SearchInputContainer>
    )
};
