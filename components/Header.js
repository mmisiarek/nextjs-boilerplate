import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "next/link";

import styled from "styled-components";

const Anchor = styled.a`
    color: ${props =>
        props.active ? props.theme.palette.primary.main : "black"};
    text-transform: uppercase;
    font-family: ${props => props.theme.typography.fontFamily};
    padding: ${props => props.theme.spacing(0, 2)};
    cursor: pointer;
`;

const menuItems = [
    { label: "Home", pathname: "/" },
    { label: "Recipe", pathname: "/recipe" },
    { label: "Shopping List", pathname: "/shop" },
    { label: "Groceries", pathname: "/groceries" }
];

const Header = ({ children, pathname }) => {
    return (
        <Container maxWidth="md">
            <Box mt={8} mb={8}>
                {menuItems.map(item => {
                    return (
                        <Link href={item.pathname} key={item.pathname}>
                            <Anchor active={pathname === item.pathname}>
                                {item.label}
                            </Anchor>
                        </Link>
                    );
                })}
            </Box>
        </Container>
    );
};

export default Header;
