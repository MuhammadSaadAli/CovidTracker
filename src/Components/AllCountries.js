import React from 'react'


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

function AllCountriesData({value}){
    
    const classes = useStyles();
    console.log(value)

    // let [allCountries, setAllCountries] = useState({})


    // useEffect(() => {
        
    //     async function getData() {
    //         const response = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL')
    //         let data = await response.json()
    //         setAllCountries(Object.values(Object.values(data.countryitems)[0]))
    //         // console.log(Object.values(Object.values(data.countryitems)[0]))
    //         console.log( Object.values(data.countryitems)[0] )
    //     }
    //     getData()
    // }, [])


    // console.log(allCountries)
    console.log(value)
    let filteredValue = Object.entries(value)
    filteredValue.splice(3,1) 
    filteredValue.splice(0,2)
    console.log(filteredValue)
  return (
    <div className={classes.root}>
      
          <br />
            <h1 style={{color:'#3399ff'}}>

                {value.title }
            </h1>
      
      <br /> <br />

      <Grid container spacing={3}>


        {filteredValue.map( 
          (key, ind) => {
            console.log(key)
            return(

                
                <Grid item xs={12} sm={4}  key={ind}>
                  

              {/* <h3>
                {value[ind].title}
              </h3> */}

            <Paper elevation={5} className={classes.paper} key={ind}>
                
              <h2 className={classes.title}>{key[0].replace(/_/g,' ').toUpperCase()}</h2>
              <h3> {key[1]} </h3>
              </Paper>
        </Grid>
              
            )
          }
        )}

      </Grid>
    </div>
  );
}




export default AllCountriesData 

// https://api.thevirustracker.com/free-api?countryTotals=ALL