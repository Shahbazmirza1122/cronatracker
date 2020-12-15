import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country)=>{
    let changeableUrl = url;
    if (country){
        changeableUrl = `${url}/countries/${country}`;
    }
     try{
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);
        // we Dstructure the data and store in a const named modifiedData
        // but now we are going to getting all the required data without saving it in any variable
        // const modifiedData ={ confirmed, recovered, deaths, lastUpdate,}

        return { confirmed, recovered, deaths, lastUpdate };
        // here we didn't return modified data varible we are just returning feilds that we need
        
     }
     catch (error) {
         console.log(error);

     }
    }

    // Now again i am going to making a function for getting data using API
    export const fetchDailyData = async()=>{
        try{
            const {data} = await axios.get(`${url}/daily`);
            console.log(data);
           
            const modifiedData = data.map((dailyData)=>({
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate,


            }));
            console.log(modifiedData);
            return modifiedData;
            
            // const modifiedData = data.map((dailyData) => ({
            //     confirmed: dailyData.confirmed.total,
            //     deaths: dailyData.deaths.total,
            //     date: dailyData.reportDate,
            // })
            // );
            // return modifiedData;
           
            
        }
        catch(error){

        }
    }
    // Now i am going to make an API used for getting Coutries
    export const fetchCountries = async ()=>{
        try {
            const {data: {countries}} = await axios.get(`${url}/countries`);
            return countries.map((country)=> country.name)
            // console.log(response);
        }
        catch(error){
            console.log(error);
        }

        

    }

//     try {
//         const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);

//         // const modifiedData = {
//         //     confirmed: data.confirmed,
//         //     recovered: data.recovered,
//         //     deaths: data.deaths,
//         //     lastUpdate: data.lastUpdate
//         // }
        
//         // const modifiedData = { confirmed, recovered, deaths, lastUpdate, }

//         return {confirmed, recovered, deaths, lastUpdate};
        
        
//     } catch (error) {
        
//     }

// }







// // import React, { useEffect, useState } from 'react'





// //  export function fetchData() {
// //     const [globalData, setGlobalData] = useState();

// //     useEffect( ()=>{
// //         async function getData(){
// //             const url = await fetch('https://covid19.mathdro.id/api');
// //             let data = await url.json();
// //             console.log(data);
// //             setGlobalData(data);
// //         }
// //         getData();
// //     },[])


    
    

    
// //     return (
// //         <div>
            
// //         </div>
// //     )
// // }

// // import React, { useState, useEffect } from 'react';
// // function Example() {
// //   const [count, setCount] = useState(0);
// //   // Similar to componentDidMount and componentDidUpdate:
// //   useEffect(() => {
// //     // Update the document title using the browser API
// //     document.title = You clicked ${count} times;
// //   });
// //   return (
// //     <div>
// //       <p>You clicked {count} times</p>
// //       <button onClick={() => setCount(count + 1)}>
// //         Click me
// //       </button>
// //     </div>
// //   );
// // }

    
