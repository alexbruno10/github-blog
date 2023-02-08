import Header from "../../components/Header"
import CardProfile from "../../components/CardProfile"
import { HomeContainer } from "./styles"
import SearchInput from "../../components/SearchInput"
import Posts from "../../components/Posts"

export default function Home() {
    return (
        <HomeContainer>
            <CardProfile /> 
            <SearchInput />
            <Posts />
        </HomeContainer>
    )
};
