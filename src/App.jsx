import { useEffect, useState } from "react";
import styled from "styled-components";

import GlobalStyles from "./components/GlobalStyles/index.jsx";
import Header from "./components/Header/index.jsx";
import Sidebar from "./components/Sidebar/index.jsx";
import Banner from "./components/Banner/index.jsx";
import bannerImage from "./assets/banner.png";
import Gallery from "./components/Gallery/index.jsx";

import pictureList from "./pictures.json";

const StyledGradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`;

const StyledAppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const StyledMainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const StyledGallerySection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
function App() {
  const [pictures, setPictures] = useState(pictureList);
  const [currentTagId, setCurrentTagId] = useState(0);

  useEffect(() => {
    if (currentTagId === 0) {
      setPictures(pictureList);
    } else {
      setPictures(pictureList.filter(p => p.tagId === currentTagId))
    }
  }, [currentTagId]);

  return (
    <StyledGradientBackground>
      <GlobalStyles />

      <StyledAppContainer>
        <Header />

        <StyledMainContainer>
          <Sidebar />

          <StyledGallerySection>
            <Banner
              title="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerImage}
            />

            <Gallery
              pictures={pictures}
              currentTagId={currentTagId}
              setCurrentTagId={setCurrentTagId}
            />
          </StyledGallerySection>
        </StyledMainContainer>
      </StyledAppContainer>
    </StyledGradientBackground>
  );
}

export default App;
