import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
        paddingBottom: theme.spacing(8)
    }
}));

function MainContainer({ children }) {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md">
            {children}
        </Container>
    );
}

export default MainContainer;
