import React from 'react';
import classes from './PieChart.module.css';

const pieChart = props => (
    <div className={classes.circleChart}>
        <div className={[classes.circleChartMain,classes[props.color1]].join(' ')}></div>
          <span className={classes.circleLeft}>
            <span className={[classes.circleLeftProgressBar, classes[props.color2]].join(' ')}></span>
          </span>
          <div className={[classes.circleRight, classes[props.color2]].join(' ')}></div>
        
    </div>
);

export default pieChart;