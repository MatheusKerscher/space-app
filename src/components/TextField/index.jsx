import styled from "styled-components"

import searchIcon from "./search.png"

const StyledFieldContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const StyledTextField = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    transition: all 0.2s ease-in-out;

    &:focus {
        transition: all 0.2s ease-in-out;
        outline: none;
        border-width: 3px;
    }
`

const StyledSearchIcon = styled.img`
    position: absolute;
    top: 9px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const TextField = (props) => {
    return(
        <StyledFieldContainer>
            <StyledTextField placeholder="O que você quer procurar?" {...props}/>
            
            <StyledSearchIcon src={searchIcon} alt="Ícone de lupa"/>
        </StyledFieldContainer>
    )
}

export default TextField