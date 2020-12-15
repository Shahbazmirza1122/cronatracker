import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from '../Cards/Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';



export const Cards = ( { data: {confirmed, recovered, deaths, lastUpdate}})=>{
    if(!confirmed){
        return 'Loading...'
    }

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected People</Typography>
                        <CountUp start={0} end={confirmed.value} separator=',' duration={4.5}/>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint='body2'>Number Of Active Cases By Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <CountUp start={0} end={recovered.value} separator=',' duration={4.5}/>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint='body2'>Number Of Recoveries From Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <CountUp start={0} end={deaths.value} separator=',' duration={4.5}/>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint='body2'>Number Of Deaths Caused By Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )}
    