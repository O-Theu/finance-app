import { Avatar, HeaderContainer, Message } from "./style";

export const Header = () => {
    return (
        <HeaderContainer>
            <Message>
                <h1>Olá! Seja bem-vindo novamente</h1>
                <h2>Sua carteira está esperando por você</h2>
            </Message>
            <Avatar>
                <img src='/avatar.png' alt="avatar"/>
            </Avatar>
        </HeaderContainer>
    );
}