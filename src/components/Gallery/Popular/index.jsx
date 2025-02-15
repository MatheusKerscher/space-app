import styled from "styled-components"
import Title from "../../Title"
import ButtonOutline from "../../ButtonOutline"

const StyledPopularGalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const StyledPictureContainer = styled.figure`
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;

    & > img {
        max-width: 100%;
        border-radius: 20px;
    }
`

const Popular = () => {
    return (
        <aside>
            <Title $align="center">Populares</Title>

            <StyledPopularGalleryContainer>
                <StyledPictureContainer>
                    <img src="images/popular/photo-1.png" alt="Céu estrelado com nuvens"/>
                </StyledPictureContainer>

                <StyledPictureContainer>
                    <img src="images/popular/photo-2.png" alt="Céu estrelado"/>
                </StyledPictureContainer>

                <StyledPictureContainer>
                    <img src="images/popular/photo-3.png" alt="Lua em fase minguante"/>
                </StyledPictureContainer>

                <StyledPictureContainer>
                    <img src="images/popular/photo-4.png" alt="Deserto com céu estrelado"/>
                </StyledPictureContainer>

                <StyledPictureContainer>
                    <img src="images/popular/photo-5.png" alt="Céu estrelado com estrela cadente"/>
                </StyledPictureContainer>

                <ButtonOutline>
                    Ver mais
                </ButtonOutline>
            </StyledPopularGalleryContainer>
        </aside>
    )
}

export default Popular