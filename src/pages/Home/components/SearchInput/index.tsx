import { useForm } from "react-hook-form";
import { SearchInputContainer } from "./styles";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export default function SearchInput() {

    const {register, handleSubmit, reset} = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    function handleSubmitPost(data: SearchFormInputs) {
        console.log(data)
        reset()
    }

    return(
        <SearchInputContainer>

            <header>
                <h3>Publicações</h3>
                <span>6 publicações</span>
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
