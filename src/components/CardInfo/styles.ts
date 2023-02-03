import styled from 'styled-components'

export const CardInfoContainer = styled.div`

    display: flex;
    width: 54rem;
    height: 13.5rem;
    background: ${({theme}) => theme.colors["profile"]};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin: 0 auto;
    margin-top: -5.5rem;

`

export const CardInfoContent = styled.div`
    display: flex;
    width: 100%;
    padding-left: 2.5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    gap: 2rem;

    img {
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 8px;
    }
`

export const CardInfoContentInformations = styled.div`
    width: 38.31rem;
    height: 8.56rem;


`

export const CardInfoContentInformationsName = styled.div`
    display: flex;
    justify-content: space-between;

    span {
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 130%;
    
        color: ${({theme}) => theme.colors["title"]};
    }
`

export const CardInfoContentInformationsDescription = styled.div`
    width: 100%;
    height: 3.25rem;
    font-size: 1rem;
    font-style: normal;
    margin-top: 0.5rem;
    color: ${({theme}) => theme.colors["text"]};

`

export const CardInfoContentInformationsLast = styled.div`
    display: flex;
    gap: 1.5rem;

    span {
        font-style: normal;
        font-size: 1rem;
        line-height: 130%;
        color: ${({theme}) => theme.colors["text"]};
    }

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`
