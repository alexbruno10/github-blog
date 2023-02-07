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

export const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.colors["subtitle"]};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h1 {
      color: ${({theme}) => theme.colors["title"]};
      line-height: 130%;
    }

    a {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 160%;
        text-transform: uppercase;
        color: ${({theme}) => theme.colors["blue"]};
        flex: none;
        order: 1;
        flex-grow: 0;
        margin-right: 2rem;
        text-decoration: none;
        
        svg {
            margin-left: 0.3rem;
        }
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: auto;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${({theme}) => theme.colors["label"]};
      }
    }
  }
`;
