import React from 'react';
import PieChart from './PieChart/PieChart';
import Graph from './Graph/Graph';
import classes from './Chart.module.css';

const chart = props => (
    <div className={classes.chartSec}>
        <div className={classes.secHead}>{props.mainHead}</div>
        <div className={classes.chart}>
            <div className={classes.chartHead}><strong>{props.followers}</strong> <span>Followers</span></div>
            <div className={classes.chartPortion}>
                <Graph className={classes.graph} color1={props.color1} color2={props.color2} />
                <div className={classes.piechart}>
                    <PieChart color1={props.color1} color2={props.color2}/> 
                </div>
            </div>         
        </div>
    </div>
);

export default chart;