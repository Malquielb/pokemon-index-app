import React from 'react';
import { FormControl, IconButton, InputAdornment, makeStyles, OutlinedInput } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center'
    },
    outlinedInput: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    },
    formControl: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        width: '80%',
        textAlign: 'center'
    }
}));

function SearchInput(props) {
    const classes = useStyles();

    return (
        <form onSubmit={props.handleSubmit} className={classes.root}>
            <FormControl className={classes.formControl} variant="outlined">
                <OutlinedInput
                    value={props.value}
                    onChange={props.handleChange}
                    className={classes.outlinedInput}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton type="submit" edge="end">
                                <SearchIcon color="primary" />
                            </IconButton>
                        </InputAdornment>
                    }
                    placeholder={props.placeholder}
                />
            </FormControl>
        </form>
    );
}

export default SearchInput;
