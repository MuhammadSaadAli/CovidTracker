import React,  { useEffect,useState }  from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    marginTop : 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
  title : {
    color : '#3399ff'
  }
}));

export default function InfoPanel() {
  const classes = useStyles();

  const [globalData , setGlobalData] = useState({})

 

  useEffect(
    ()   => {

    async function getData () {
      const response = await fetch('https://api.thevirustracker.com/free-api?global=stats')
      let data = await response.json()
      delete data.results[0].source
      setGlobalData(data.results[0])
      console.log(data.results[0])
    }
    getData()

    }, []
  )

  

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        {Object.keys(globalData).map( 
          (key, ind) => {
            return(
              
                <Grid item xs={12} sm={4}  key={ind}>
            <Paper elevation={5} className={classes.paper} key={ind}>
              
              <h2 className={classes.title}>{key.replace(/_/g,' ').toUpperCase()}</h2>
              <h3>
                {globalData[key]}
              </h3>
              </Paper>
        </Grid>
              
            )
          }
        )}

      </Grid>
    </div>
  );
}
