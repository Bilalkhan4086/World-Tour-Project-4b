import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { HomeSvg } from '../Svgs/HomeSvg';

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
background: 'linear-gradient(294deg, rgba(253,58,45,1) 0%, rgba(158,34,195,1) 100%)',   
    }, Paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        textShadow:"2px 2px 2px grey",
        color:"white",
        background: 'transparent',
      },
  }));

export const About = () => {
    const classes = useStyles();
    return (
        <div><h1 style={{color:"wheat",textShadow:"2px 2px 2px black",fontWeight:"lighter",background:"transparent",fontSize:"60px"}}>ABOUT</h1>
           <Grid container spacing={3} >
            <Paper className={classes.paper} style={{fontWeight:"normal"}} >
        {/* Grid # 1 */}
            <Grid item xs={12} md={7}>
              <Paper elevation={0} className={classes.Paper}>
               <HomeSvg/>
              </Paper>
            </Grid>
             {/* Grid # 2   */}
            <Grid item xs={12} md={5}>
              <Paper elevation={0} className={classes.Paper}>
                <Typography variant="h2">
                    OUR PLAN IS TO RAECH THE LAST EDGE OF EARTH
                </Typography><br/>
                <Typography variant="body1">
                    WE PROVIDE THE BEST TOURS
                </Typography><br/>
                <Button variant="outlined">
                    Let's go
                </Button>
               </Paper>
              </Grid>
             </Paper>
           </Grid>
        </div>
    )
}
