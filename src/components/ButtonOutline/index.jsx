import styled from "styled-components"

const StyledButtonOutline = styled.button`
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #C98CF1;
    padding: 12px 0;
    border-radius: 10px;
    outline: none;
    
    &:hover {
        border-color: transparent;
        border-width: 0;
        padding: 14px 0;
        background: linear-gradient(to right, #C98CF1, #7B78E5);
        cursor: pointer;
    }
`

const ButtonOutline = ({ children }) => {
    return <StyledButtonOutline type="button">
        {children}
    </StyledButtonOutline>
}

export default ButtonOutline