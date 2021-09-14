import React, {useState} from 'react';
import {
    Button,
    Container,
    Fab,
    FormControl, FormControlLabel,
    FormLabel,
    MenuItem,
    Modal, Radio,
    RadioGroup,
    TextField,
    Tooltip
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles( theme => ({
    fab:{
        position:'fixed',
        bottom:10,
        right:10,
    },
    container:{
        width:500,
        height:550,
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        margin:'auto',
        backgroundColor:'white',
        padding:theme.spacing(3),
        [theme.breakpoints.down('sm')]:{
            width:'100vh',
            height:'100vh',

        }
    },
    item:{
        marginBottom:theme.spacing(2),
    },
    buttons:{
        marginRight:theme.spacing(2),
    },
    textfield:{
        [theme.breakpoints.down('sm')]:{
            width:'270px',
        }
    }

}));

const Add = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    return (
        <div>
            <Tooltip title="Add" aria-label="add">
                <Fab color="primary" className={classes.fab} >
                    <AddIcon onClick={ () => setOpen(true)} />
                </Fab>
            </Tooltip>
            <Modal
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"

            >
                <Container className={classes.container}>
                    <form action="">
                        <div className={classes.item}>
                            <TextField id="standard-basic" label="Title" size="small" fullWidth className={classes.textfield}/>
                        </div>
                        <div className={classes.item}>
                            <TextField id="outlined-basic"
                                       label="Description" variant="outlined" size="small" multiline rows={4} fullWidth className={classes.textfield}/>
                        </div>
                        <div className={classes.item}>
                            <TextField
                                id="filled-select-currency"
                                select
                                label="Select"
                                value="public"
                                variant="filled"
                            >
                                <MenuItem value="public">Public</MenuItem>
                                <MenuItem value="private">Private</MenuItem>
                                <MenuItem value="unlisted">Unlisted</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Who can see my post?</FormLabel>
                                <RadioGroup defaultValue="everybody" aria-label="gender" name="customized-radios">
                                    <FormControlLabel value="everybody" control={<Radio />} label="everybody" />
                                    <FormControlLabel value="friends only" control={<Radio />} label="friends only" />
                                    <FormControlLabel value="only me" control={<Radio />} label="only me" />
                                    <FormControlLabel
                                        value="custom"
                                        disabled
                                        control={<Radio />}
                                        label="Custom (Premium)"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className={classes.item}>
                            <Button variant="contained" color="primary" component="span" size="small" className={classes.buttons}>
                                Upload
                            </Button>
                            <Button variant="outlined" color="secondary" size="small" className={classes.buttons}
                            onClick={ () => setOpen(false)}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Container>
            </Modal>
        </div>
    );
};

export default Add;
