import React from 'react';
import classes from './Line.module.css';

const graph = props => {
    // function nextChar(c) {
    //     return String.fromCharCode(c.charCodeAt(0) + 1);
    // }

    // nextChar('a');
    return (
        <div>
            <div className={classes.line}>
                <div className={[classes.progressbar, classes[props.color]].join(' ')} style={{height: props.height*100+"%"}} ></div>
            </div>
            <div className={classes.content}>{props.content}</div>
        </div>
        
    );
}

export default graph;