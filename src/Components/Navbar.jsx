import React, {useState} from 'react';
import {alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Search, Mail, Notifications, Cancel} from '@material-ui/icons';

const useStyles = makeStyles( theme => ({
    toolbar:{
        display:'flex',
        justifyContent:'space-between',
    },
    logoLg: {
        display: 'none',
        [theme.breakpoints.up('sm')]:{
            display: 'block',
        }
    },
    logosm: {
        display: 'block',
        [theme.breakpoints.up('sm')]:{
            display: 'none',
        }
    },

    search: {
        display: 'flex',
        alignItems:'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius:theme.shape.borderRadius,
        width:'50%',
        [theme.breakpoints.down('sm')]:{
            display: props => props.open ? 'flex' : 'none',
            width:'70%',
        }
    },
    input: {
        color:'white',
        marginLeft:theme.spacing(1),
    },
    cancel: {
        [theme.breakpoints.up('sm')]:{
            display: 'none',
        },
        marginRight:theme.spacing(1),
    },

    icons: {
        [theme.breakpoints.down('sm')]:{
            display:props => props.open ? 'none' : 'flex',
        },
        display: 'flex',
        alignItems:'center',
    },
    searchBtn:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display: 'none',
        }
    },
    badge: {
        marginRight:theme.spacing(2),
    }

}))

const Navbar = () => {
    const [open,setOpen] = useState(false);
    const classes = useStyles({open});
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>
                    Genensis
                </Typography>
                <Typography variant="h6" className={classes.logosm}>
                    G
                </Typography>

                <div className={classes.search}>
                    <Search />
                    <InputBase
                        placeholder="Search…"
                        className={classes.input}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <Cancel className={classes.cancel} onClick={ () => setOpen(false)}/>
                </div>

                <div className={classes.icons}>
                    <Search className={classes.searchBtn} onClick={ () => setOpen(true)}/>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <Notifications />
                    </Badge>
                    <Avatar>S</Avatar>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
