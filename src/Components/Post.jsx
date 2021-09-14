import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles( theme => ({
    card:{
        marginBottom:theme.spacing(5),
    },
    media:{
        height:250,
        [theme.breakpoints.down('sm')]:{
            height:150,
        }
    }
}))
const Post = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://images.pexels.com/photos/5097039/pexels-photo-5097039.jpeg?cs=srgb&dl=pexels-domenico-bandiera-5097039.jpg&fm=jpg"
                    title="Contemplative Reptile"
                    className={classes.media}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;
