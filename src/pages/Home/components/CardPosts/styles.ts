import styled from 'styled-components'

export const CardPostContainer = styled.div`

    width: 26rem;
    height: 16.25rem;

    background: ${({theme}) => theme.colors["post"]};
    border-radius: 0.625rem;
    padding: 2rem 2rem;

    header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h2 {
        flex: 1;
      color: ${({theme}) => theme.colors["title"]};
      line-height: 130%;
    }

    span {
        width: max-content;
        color: ${({theme}) => theme.colors["span"]};
    }

    }

    p {
        color: ${({theme}) => theme.colors["text"]};
        margin-top: 2rem;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }

    &:hover {
        border: 2px solid ${({theme}) => theme.colors["span"]};
        cursor: pointer;
    }
    
`
