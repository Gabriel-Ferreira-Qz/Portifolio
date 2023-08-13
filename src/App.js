import { createGlobalStyle, styled } from "styled-components";

import Header from "./Components/Header";
import Home from "./Components/Home";
import SobreMim from "./Components/Sobre-Mim";
import Projetos from "./Components/Projetos";
import Linguagens from "./Components/Linguagens";
import Footer from "./Components/Footer";

const CorDeFundo = styled.section`
  background: linear-gradient(to bottom left, transparent 34%, #79E3CA 141%),
              linear-gradient(to top right, transparent 34%, #AE8FE3 120%);
`

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  body{
    background-color: #FBFAFA;
    color: #2F2E41;
    font-family: 'Poppins', sans-serif;
    height: 100vh;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <CorDeFundo>
        <Header />
        <Home />
      </CorDeFundo>

      <SobreMim />
      <Projetos />
      <Linguagens />

      <Footer />
    </div>
  );
}

export default App;
