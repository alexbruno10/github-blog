import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from  './styles/global'
import Header from './components/Header'
import CardInfo from './components/CardInfo'

function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <CardInfo />
    <GlobalStyle />
  </ThemeProvider>
  )
}

export default App
