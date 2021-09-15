import React from 'react';
import {Avatar, Container, ImageList, ImageListItem, Link, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import {AvatarGroup} from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
    container:{
        paddingTop:theme.spacing(10),
        height:'100vh',
        position:'sticky',
        top:0,
    },
    text:{
        color:'#555',
        fontWeight:600,
        fontSize:'16px',
        marginBottom:theme.spacing(1),
    },
    avatarGp:{
        marginBottom:theme.spacing(3),
    },
    link:{
        marginRight:theme.spacing(2),
        fontWeight:600,

    },
    category:{
        color:'#555',
        fontWeight:600,
        fontSize:'16px',
        marginBottom:theme.spacing(1),
        marginTop:theme.spacing(3),
    }
}));
const Rightbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Typography className={classes.text}>Online Friends</Typography>
            <AvatarGroup max={6} className={classes.avatarGp}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>

            <Typography className={classes.text}>Images</Typography>
            <ImageList rowHeight={150} cols={3}>
                <ImageListItem >
                    <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" alt="" />
                </ImageListItem>
                <ImageListItem >
                    <img src="https://material-ui.com/static/images/image-list/burgers.jpg" alt="" />
                </ImageListItem>
                <ImageListItem >
                    <img src="https://material-ui.com/static/images/image-list/camera.jpg" alt="" />
                </ImageListItem>
                <ImageListItem >
                    <img src="https://material-ui.com/static/images/image-list/morning.jpg" alt="" />
                </ImageListItem>
                <ImageListItem >
                    <img src="https://material-ui.com/static/images/image-list/hats.jpg" alt="" />
                </ImageListItem>
                <ImageListItem >
                    <img src="https://material-ui.com/static/images/image-list/honey.jpg" alt="" />
                </ImageListItem>
            </ImageList>

            <Typography className={classes.category}>Categories</Typography>
            <Typography>
                <Link href="#" onClick={ (e) => e.preventDefault } color="primary"  className={classes.link}>
                    Sport
                </Link>
                <Link href="#" onClick={ (e) => e.preventDefault } color="primary"  className={classes.link}>
                    Music
                </Link>
                <Link href="#" onClick={ (e) => e.preventDefault } color="primary"  className={classes.link}>
                    Food
                </Link>
                <Link href="#" onClick={ (e) => e.preventDefault } color="primary"  className={classes.link}>
                    Life style
                </Link>
            </Typography>
        </Container>
    );
};

export default Rightbar;
