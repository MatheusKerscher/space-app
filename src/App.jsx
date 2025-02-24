import { useEffect, useState } from "react";
import styled from "styled-components";

import GlobalStyles from "./components/GlobalStyles/index.jsx";
import Header from "./components/Header/index.jsx";
import Sidebar from "./components/Sidebar/index.jsx";
import Banner from "./components/Banner/index.jsx";
import bannerImage from "./assets/banner.png";
import Gallery from "./components/Gallery/index.jsx";

import pictureList from "./pictures.json";
import ZoomModal from "./components/ZoomModal/index.jsx";

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
  const [searchPictureNameValue, setSearchPictureNameValue] = useState('')
  const [selectedPicture, setSelectedPicture] = useState(null)

  useEffect(() => {
    let filteredPictures = pictureList
    
    if (currentTagId !== 0) {
      filteredPictures = filteredPictures.filter(p => p.tagId === currentTagId)
    }

    if(searchPictureNameValue.length >= 3) {
      filteredPictures = filteredPictures.filter(p => p.title.toLocaleLowerCase().includes(searchPictureNameValue.toLocaleLowerCase()))
    }

    setPictures(filteredPictures)

  }, [currentTagId, searchPictureNameValue]);

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
    document.body.style.overflow = selectedPicture ? 'hidden' : '';
  }, [selectedPicture])

  const onToggleFavorite = (pictureId) => {
    if(pictureId === selectedPicture?.id) {
      setSelectedPicture({
        ...selectedPicture,
        favorited: !selectedPicture.favorited
      })
    }

    setPictures(pictures.map(p => {
        return {
          ...p,
          favorited: p.id === pictureId ? !p.favorited : p.favorited
        }
      }
    ))
  }

  return (
    <StyledGradientBackground>
      <GlobalStyles />

      <StyledAppContainer>
        <Header 
          onSearchPictureNameValue={value => setSearchPictureNameValue(value)}
        />

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
              onChangeCurrentTagId={tagId => setCurrentTagId(tagId)}
              onSelectPicture={picture => setSelectedPicture(picture)}
              onToggleFavorite={onToggleFavorite}
            />
          </StyledGallerySection>
        </StyledMainContainer>
      </StyledAppContainer>

      <ZoomModal 
        picture={selectedPicture}
        onCloseModal={() => setSelectedPicture(null)}
        onToggleFavorite={onToggleFavorite}
      />
    </StyledGradientBackground>
  );
}

export default App;
