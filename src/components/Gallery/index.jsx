import styled from "styled-components";

import Title from "../Title";
import Tags from "./Tags";
import Popular from "./Popular";
import Picture from "./Picture";

const StyledGallerySection = styled.div`
  display: flex;
`;

const StyledFluidContainer = styled.section`
  flex-grow: 1;
`;

const StyledPicturesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`

const Gallery = ({ pictures = [], currentTagId, onChangeCurrentTagId, onSelectPicture }) => {
  return (
    <>
      <Tags 
        currentTagId={currentTagId}
        onChangeCurrentTagId={onChangeCurrentTagId}
      />

      <StyledGallerySection>
        <StyledFluidContainer>
          <Title>Navegue pela galeria</Title>

          <StyledPicturesContainer>
            {pictures.map(p => (
              <Picture 
                key={p.id}
                picture={p}
                onSolicitedZoom={onSelectPicture}
              />
            ))}
          </StyledPicturesContainer>
        </StyledFluidContainer>

        <Popular />
      </StyledGallerySection>
    </>
  );
};

export default Gallery;
