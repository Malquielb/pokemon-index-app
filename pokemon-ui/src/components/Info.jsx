import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(4)
    }
}));

function Info(props) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Typography variant="h5" color={props.color}>
            {   props.text}
            </Typography>
        </div>   
    );
}

export default Info;
