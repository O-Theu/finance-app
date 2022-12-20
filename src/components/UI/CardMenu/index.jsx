import { CardMenuContainer, List } from "./style"

export const CardMenu = () => {
    return(
        <CardMenuContainer>
            <div>
                <List>
                    <li>Editar</li>
                    <li>Adicionar</li>
                    <li>Remover</li>
                </List>
            </div>
        </CardMenuContainer>
    )
}