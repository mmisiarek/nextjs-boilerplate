import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const MySpan = styled.span`
    color: tomato;
`;

function Recipe({ query }) {
    if (!query.id) {
        return <Typography variant="body1" gutterBottom>
            No content
    </Typography>
    }
    return (
        <>
            <Typography variant="h2" gutterBottom>
                Recipes
            </Typography>
            <Typography variant="h3" gutterBottom>
                Pizza {query.id}
            </Typography>
            <Typography variant="body1" gutterBottom>
                <MySpan>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos blanditiis tenetur unde suscipit, quam beatae rerum
                    inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem
                    quibusdam.
                </MySpan>
            </Typography>
            <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
        </>
    );
}

export default Recipe;
