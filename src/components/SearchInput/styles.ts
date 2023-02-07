import styled from 'styled-components'

export const SearchInputContainer = styled.div`

    width: 100%;
    margin-top: 4.8rem;
    

    header {
        display: flex;
        width: 100%;
        justify-content: space-between;

        h3 {
            color: ${({theme}) => theme.colors["subtitle"]};
        }

        span {
            color: ${({theme}) => theme.colors["span"]};
        }
    }

    form {
        
        input {
            width: 100%;
            height: 3.125rem;
            border: 1px solid #1C2F41;
            border-radius: 6px;
            margin-top: 0.75rem;
            background: ${({theme}) => theme.colors["input"]};
            padding: 0.75rem 1rem;
            color: ${({theme}) => theme.colors["label"]};
        }

        input::placeholder {
            color: ${({theme}) => theme.colors["label"]};
        }

    }
    
`
