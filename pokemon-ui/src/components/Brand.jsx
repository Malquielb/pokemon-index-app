import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    logo: {
      width: theme.spacing(20),
      margin: theme.spacing(3)
    },
    root: {
        textAlign: 'center'
    }
}));

function Brand(props) {
    const classes = useStyles();
    const { logoSource, text } = props;

    return (
        <div className={classes.root}>
            <img className={classes.logo} src={logoSource} alt="logo" />
            <Typography variant="h2">
                {text}
            </Typography>
        </div>
    );
}

export default Brand;
