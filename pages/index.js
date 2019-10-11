import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Link from "next/link";

const MySpan = styled.span`
    color: tomato;
`;

function Home() {
    return (
        <>
            <Typography variant="h2" gutterBottom>
                Home screen
            </Typography>
            <Link href={{ pathname: 'recipe', query: { id: 123 } }}>
                <Button> Surprise </Button>
            </Link>
        </>
    );
}

export default Home;
