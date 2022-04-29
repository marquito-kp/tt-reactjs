import { Container, ContainerLogo, Logo, List, ListItem, Link } from "./styled";

const Nav = () => {

    return (
        <Container>
            <ContainerLogo>
                <Logo src="https://i.pinimg.com/originals/ea/10/72/ea10725c9063e64f80aa3889fcab9471.png" />
            </ContainerLogo>

            <List>
                <ListItem>
                    <Link href="#">Home</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">Lista Filmes</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">Cadastro</Link>
                </ListItem>
            </List>
        </Container>
    );
};

export default Nav;