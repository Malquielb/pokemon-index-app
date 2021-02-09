import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        textAlign: 'center'
    }
}));

function Preloader() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    )
}

export default Preloader;
