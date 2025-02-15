import styled from "styled-components"
import ButtonIcon from "../../ButtonIcon"

const StyledPictureContainer = styled.figure`
    width: ${props => props.$expanded ? '100%' : '460px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;

    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }

    figcaption {
        padding: 16px 20px;
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: #ffffff;
        box-sizing: border-box;

        
        h3, h4 {
            margin: 0;
        }

        h3 {
            font-family: 'GandhiSansBold';
            font-size: 22px;
            margin-bottom: 10px;
        }

        h4 {
            flex-grow: 1;
            font-size: 16px;
            font-weight: normal;
        }

    }
`

const StyledFooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Picture = ({ picture, expanded = false, onSolicitedZoom }) => {
    return(
        <StyledPictureContainer $expanded={expanded}>
            <img
                src={picture.path}
                alt={picture.title}
            />

            <figcaption>
                <h3>
                    {picture.title}
                </h3>

                <StyledFooterContainer>
                    <h4>
                        {picture.path}
                    </h4>

                    <ButtonIcon type="button">
                        <img src="/icons/favorite.png" alt="Ícone de favorito" />
                    </ButtonIcon>

                    {!expanded && 
                        <ButtonIcon 
                            type="button" 
                            aria-hidden={expanded}
                            onClick={() => onSolicitedZoom(picture)}    
                        >
                            <img src="/icons/expand.png" alt="Ícone de expandir" />
                        </ButtonIcon>
                    }
                </StyledFooterContainer>
            </figcaption>
        </StyledPictureContainer>
    )
}

export default Picture