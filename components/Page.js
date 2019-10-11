import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../components/Header";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4, 4)
    }
}));

const Page = ({ children, pageProps }) => {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="md">
                <Typography variant="h1" gutterBottom>
                    Meal Planner
                </Typography>
            </Container>
            <Header color="red" {...pageProps} />
            <Container maxWidth="md">
                <Paper className={classes.root}>{children}</Paper>
            </Container>
        </>
    );
};

export default Page;
