import styled from 'styled-components'

export const CardPagePostContainer = styled.div`

    display: flex;
    width: 54rem;
    height: 13.5rem;
    background: ${({theme}) => theme.colors["profile"]};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin: 0 auto;
    margin-top: -5.5rem;

`

export const CardPagePostContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.colors["subtitle"]};
  padding: 2rem 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.2rem;

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
        /* margin-right: 1rem; */
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

export const DescriptionPageContent = styled.div`

    width: 100%;
    padding: 2.5rem 2rem;
    color: ${({theme}) => theme.colors["text"]};

`
