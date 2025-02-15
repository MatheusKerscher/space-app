import styled from "styled-components"
import TextField from "../TextField"

const StyledHeader = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;

    img {
        max-width: 212px;
    }
`

const Header = ({ onSearchPictureNameValue }) => {
    return(
        <StyledHeader>
            <img 
                src="/images/logo.png"
                alt="Logo Space App"
            />

            <TextField 
                onSearchPictureNameValue={onSearchPictureNameValue}
            />
        </StyledHeader>
    )
}

export default Header