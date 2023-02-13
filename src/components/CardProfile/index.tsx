import { useCallback, useState, useEffect } from "react";
import { api } from "../../lib/axios";
import { CardInfoContainer, 
CardInfoContent,
ProfileDetails
} from "./styles";
import Img from '../../assets/Teste.svg'
import { GithubLogo, Buildings, Users, ArrowSquareOut} from "phosphor-react";

type GithubProfile = {
    name: string
    login: string
    avatar_url: string
    company: string | null
    followers: number
    bio: string
  }

export default function CardProfile() {

    const [profile, setProfile] = useState<GithubProfile>({} as GithubProfile);

    const getProfileData = useCallback(async () => {
        try {
          const response = await api.get(`/users/alexbruno10`);
    
          setProfile(response.data);
        } catch {
          console.log('Erro')
        }
      }, [profile]);

    
    useEffect(() => {
    getProfileData();
    }, []);

    return (
        <CardInfoContainer>
            <CardInfoContent>
                <img src={profile.avatar_url} alt="" />
                <ProfileDetails>
                    <header>
                    <h1>{profile.name}</h1>

                    <a href="https://github.com/alexbruno10" target="_blank">GITHUB 
                    <ArrowSquareOut size={12} weight="fill"/>
                    </a>
                    </header>
                    <p>{profile.bio}</p>
                    <ul>
                        <li>
                            <GithubLogo size={32} weight="fill"/>
                            {profile.login}
                        </li>
                        <li>
                            <Buildings size={32} weight="fill"/>
                            {profile.company}
                        </li>
                        <li>
                            <Users size={32} weight="fill"/>
                            {profile.followers} seguidores
                        </li>
                    </ul>
                </ProfileDetails> 
            </CardInfoContent>
        </CardInfoContainer>


    )
};
