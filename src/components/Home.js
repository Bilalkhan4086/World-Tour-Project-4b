import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react';
import { Svg2 } from '../Svgs/Svg2';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(10),
        textAlign: 'center',
        display:"flex",
        flexWrap:"wrap",
        width:"100%",
background:' linear-gradient(294deg, rgba(34,193,195,1) 0%, rgba(198,45,253,1) 81%)'}, 
Paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        margin:"0px 0px",
        textShadow:"2px 2px 2px grey",
        color:"white",
        background: 'transparent',
      },
  }));

export const Home = () => {
    const classes = useStyles();
    return (
        <div>
           <Grid container spacing={3}>
            <Paper className={classes.paper} >
             {/* Grid 1 */}
              <Grid item xs={12} md={5}>
               <Paper elevation={0} className={classes.Paper}>
                <Typography variant="h2" style={{fontWeight:"normal"}}>
                 JOIN US TO HAVE FUN AND FOR WORLD TOUR
                </Typography><br/>
                <Typography variant="body1">
                 WE PROVIDE THE BEST TOURS
                </Typography><br/>
                <Button variant="contained" style={{backgroundColor:"rgba(34,193,195,0.3)",color:"white"}}>
                 Learn More
                </Button>
               </Paper>
              </Grid>
           {/* Grid#2 */}
              <Grid item xs={12} md={7}>
               <Svg2/>
              </Grid>
            </Paper>
           </Grid>
        </div>
    )
}
