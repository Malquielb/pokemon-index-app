import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button, Grid, makeStyles, Typography }  from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center'
    },
    image: {
        width: theme.spacing(18)
    } 
}));

function ItemBox(props) {
    const { imageSource, title, dataSource } = props;
    const classes = useStyles();
   
    return (
        <Grid item>
            <Card className={classes.root}>
                <CardContent>
                    <img 
                        className={classes.image}
                        src={imageSource}
                        alt="pokémon sprite"
                    />
                    <Typography variant="h6">
                        {title}
                    </Typography>
                    <Button color="primary" href={dataSource}>Download Data</Button>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ItemBox;
