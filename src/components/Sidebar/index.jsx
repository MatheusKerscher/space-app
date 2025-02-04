import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const Sidebar = () => {
    return(
        <aside>
            <nav>
                <StyledList>
                    <NavigationItem 
                        activeIcon="/icons/home-active.png"
                        inactiveIcon="/icons/home-inactive.png"
                        altIcon="Ícone com contorno de uma casa"
                        active
                    >
                        Início
                    </NavigationItem>

                    <NavigationItem 
                        activeIcon="/icons/most-viewed-active.png"
                        inactiveIcon="/icons/most-viewed-inactive.png"
                        altIcon="Ícone com contorno de um olho aberto"
                    >
                        Mais vistas
                    </NavigationItem>

                    <NavigationItem 
                        activeIcon="/icons/most-likes-active.png"
                        inactiveIcon="/icons/most-likes-inactive.png"
                        altIcon="Ícone com contorno de uma mão fazendo sinal de beleza"
                    >
                        Mais curtidas
                    </NavigationItem>

                    <NavigationItem 
                        activeIcon="/icons/new-active.png"
                        inactiveIcon="/icons/new-inactive.png"
                        altIcon="Ícone de uma estrela com brilho"
                    >
                        Novas
                    </NavigationItem>

                    <NavigationItem 
                       activeIcon="/icons/surprise-me-active.png"
                       inactiveIcon="/icons/surprise-me-inactive.png"
                       altIcon="Ícone com contorno de uma lampada"
                    >
                        Surpreenda-me
                    </NavigationItem>
                </StyledList>
            </nav>
        </aside>
    )
}

export default Sidebar