import styled from "styled-components";

import GlobalStyles from "./components/GlobalStyles/index.jsx";
import Header from "./components/Header/index.jsx";
import Sidebar from "./components/Sidebar/index.jsx";
import Banner from "./components/Banner/index.jsx";
import bannerImage from './assets/banner.png'

function App() {
  const StyledGradientBackground = styled.div`
    background: linear-gradient(
      174.61deg,
      #041833 4.16%,
      #04244f 48%,
      #154580 96.76%
    );
    width: 100%;
    min-height: 100vh;
    padding: 0 24px;
    box-sizing: border-box;
  `;

  const StyledMainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
  `;

  return (
    <StyledGradientBackground>
      <GlobalStyles />

      <Header />

      <StyledMainContainer>
        <Sidebar />

        <Banner 
          title="A galeria mais completa de fotos do espaço!"
          backgroundImage={bannerImage}
        />
      </StyledMainContainer>
    </StyledGradientBackground>
  );
}

export default App;
