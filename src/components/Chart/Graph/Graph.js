import React from 'react';
import classes from './Graph.module.css';
import Line from './Line/Line';

const graph = props => {
    // function nextChar(c) {
    //     return String.fromCharCode(c.charCodeAt(0) + 1);
    // };

    const alphabetsArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'];
    const value = [0.4,0.5,0.4,0.6,0.4,0.65,0.8,0.5,0.6,0.55,0.7,0.5,0.65,0.7,0.75];    
    

    let graph = alphabetsArray.map( (el,index) => {
        return <Line key={el} content={el} height={value[index]} color={index%2 === 0 ? props.color1 : props.color2}/>
        ;
    });    

  
    return <div className={classes.graph}>
        {graph}
    </div>;
}

export default graph;