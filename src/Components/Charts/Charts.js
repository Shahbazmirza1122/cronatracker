import React, { useState, useEffect} from 'react';
import {Line, Bar} from 'react-chartjs-2';
import {fetchDailyData, modifiedData} from '../API/index';
import styles from '../Charts/Charts.module.css';


const Charts = ({data:{confirmed, recovered, deaths}, country}) => {
   
            const [ dailyData, setDailyData ] = useState([]);

            useEffect(()=>{
            const fetchAPI = async()=>{
            setDailyData(await fetchDailyData());
        }
        console.log(dailyData);
            fetchAPI();
    },[]);

        // const lineChart = ()=>{
        //     const lineChart = dailyData.length!==0 
        const lineChart = (
            dailyData.length
            ?(
                <Line
                data = {{
                    labels:dailyData.map(({date})=>date),
                    datasets:[{
                        data: dailyData.map(({confirmed})=>confirmed), 
                        lable: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    },
                    

                        {
                            data: dailyData.map(({deaths})=>deaths), 
                            lable: 'Deaths',
                            borderColor: 'red',
                            // backgroundColor: rgba(255, 0, 0, 0.8),
                            fill: true
                        }]
                }}  />
            ):null
            
        );

        const barChart = (
            confirmed
            ? (
                <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label:'People',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.7)',
                            'rgba(0, 255, 0, 0.8)',
                            'rgba(255, 0, 0, 0.8)'

                        ],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]

                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text: `Current State In ${country}`}
                }}
                />
            ):null
        )

    return (
        <div className={styles.container}>
           
            {country ?barChart : lineChart}
        </div>
    )
}
export default Charts;