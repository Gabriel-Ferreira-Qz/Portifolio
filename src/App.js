import { createGlobalStyle } from "styled-components";

import Header from "./Components/Header";
import Home from "./Components/Home";
import SobreMim from "./Components/Sobre-Mim";
import Projetos from "./Components/Projetos";
import Linguagens from "./Components/Linguagens";
import Footer from "./Components/Footer";

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
      <Header />
      
      <main>
        <Home />
        <SobreMim />
        <Projetos />
        <Linguagens />
      </main>

      <Footer />
    </div>
  );
}

export default App;
