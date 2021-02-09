import React from 'react';
import { Pagination } from '@material-ui/lab';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: '16px 16px',
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        width: '80%'
    },
    root: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

function PageControl(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper color="disabled" className={classes.paper}>
                <Pagination
                    count={props.count} 
                    page={props.page}
                    onChange={props.handleChange}
                    shape="rounded"
                    color="primary" 
                />
            </Paper>
        </div>
    );
}

export default PageControl;
