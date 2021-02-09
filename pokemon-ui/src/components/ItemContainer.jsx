import React from 'react';
import { Grid } from '@material-ui/core';

function ItemContainer({ children }) {
    return (
        <Grid justify="center" container spacing={3}>
            {children}
        </Grid>
    );
}

export default ItemContainer; 
