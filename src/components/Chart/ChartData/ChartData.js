import React from 'react';
import classes from './ChartData.module.css';

const chartData = () => {
    return (
        <div className={classes.dataContainer}>
            <div className={classes.data}>Term 1</div>
            <div className={classes.data}>85.08</div>
            <div className={classes.data}>Term 2</div>
            <div className={classes.data}>1.76</div>
            <div className={classes.data}>Term 3</div>
            <div className={classes.data}>33.42</div>
            <div className={classes.data}>Term 4</div>
            <div className={classes.data}>75.11</div>
        </div>
    );  
}

export default chartData;