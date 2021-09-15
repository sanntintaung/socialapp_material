import Navbar from "./Components/Navbar";
import { Grid, makeStyles} from "@material-ui/core";
import Leftbar from "./Components/Leftbar";
import Feeds from "./Components/Feeds";
import Add from "./Components/Add";
import Rightbar from "./Components/Rightbar";

const useStyles = makeStyles( theme => ({
    rightbar:{
        [theme.breakpoints.down('sm')]:{
            display:"none",
        }
    }
}));

function App() {
    const classes = useStyles();

    return (
        <div>
            <Navbar/>
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <Leftbar/>
                </Grid>
                <Grid item sm={7} xs={10}>
                    <Feeds/>
                </Grid>
                <Grid item sm={3} className={classes.rightbar}>
                    <Rightbar/>
                </Grid>
            </Grid>
            <Add/>
        </div>
    );
}

export default App;
