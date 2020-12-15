import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from '../CountryPicker/Countrypicker.module.css';
import { fetchCountries } from '../API/index';




const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchCountries] = useState([]);

    useEffect(()=>{
        const fetchedAPI = async() => {
            setFetchCountries(await fetchCountries());
        }
        fetchedAPI();
    },[setFetchCountries]);
    console.log(fetchCountries);
    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option className={styles.option} value="Global">Global</option>
                {fetchedCountries.map((country, i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;