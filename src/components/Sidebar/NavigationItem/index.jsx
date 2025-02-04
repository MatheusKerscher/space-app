import styled from "styled-components"

const StyledItemList = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$active ? '#7b78e5' : '#d9d9d9'};
    font-family: ${props => props.$active ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 20px
`

const NavigationItem = ({children, activeIcon, inactiveIcon, altIcon, active = false}) => {
    return (
        <StyledItemList $active={active}>
            <img 
                src={active ? activeIcon : inactiveIcon} 
                alt={altIcon}
            />

            {children}
        </StyledItemList>
    )
}

export default NavigationItem