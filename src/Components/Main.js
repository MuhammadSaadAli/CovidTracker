import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import InfoPanel from './InfoPanel'
import EveryCountry from './AllCountries'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Main() {
  const classes = useStyles();
  const [Countries, setCountries] = useState('AllCountries');


  let [allCountries, setAllCountries] = useState([])

  // let [dataOfAllCountries, setDataOfAllCountries] = useState([])

  useEffect(() => {
      
      async function getData() {
          const response = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL')
          let data = await response.json()
          setAllCountries(Object.values(Object.values(data.countryitems)[0]))
        //   console.log(Object.values(Object.values(data.countryitems)[0]))
        //   console.log( Object.values(data.countryitems)[0] )
      }
      getData()
  }, [])
  

  const handleChange = (event) => {
    setCountries(event.target.value);
  };
        console.log(allCountries)
        console.log(Countries)
        // console.log(dataOfAllCountries)
        
        

  return (
    <div>
        
        
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Countries</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Countries}
          onChange={handleChange}
        >
          <MenuItem value="AllCountries" >All Countries</MenuItem>
          {
            allCountries.map(
                (val,ind) => {
                  return (
                    <MenuItem value={ val  } key={ind}>
                                {val.title}
                        </MenuItem>
                    )
                }
            )
        }
        </Select>
      </FormControl>

       



    {   Countries === 'AllCountries' ?  <InfoPanel /> :  <EveryCountry  value = {Countries}/> }
    
    </div>
    
  );

        
  
}
