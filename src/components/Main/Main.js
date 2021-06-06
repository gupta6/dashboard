import React from 'react';
import classes from './Main.module.css';
import Chart from '../Chart/Chart'; 
import ChartData from '../Chart/ChartData/ChartData';
import ContentTable from '../../container/ContentTable/ContentTable';

const main = () => (
    <main className={classes.Main}>
        <div className={classes.MainTop}>
            <div className={classes.topheading}>Data Overview</div>
            <div className={classes.progressDiv}>
                <div className={classes.mainprogress}>
                    <div className={classes.mainProgressBar}></div>
                </div>

                 <div className={classes.progressContent}><strong>643</strong> insertions needed to complete </div>   
            
            </div>
        </div>

        <div className={classes.chartContainer}>
            <div className={classes.chartSection}>
                <Chart mainHead='General Results' followers='9.401' color1='primaryBlue' color2='secondaryBlue'/>
            </div>
            <div className={classes.chartSection}>
                <Chart mainHead='Rating by category' followers='3.900' color1='primaryRed' color2='secondaryRed'/>
            </div>
            <div className={classes.chartDataSec}>
                <ChartData/>
            </div>
        </div>
        
        <div className={classes.ContentSec}>
            <ContentTable/>
        </div>
    </main>
);

export default main;