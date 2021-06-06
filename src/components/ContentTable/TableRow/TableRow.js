import React from 'react';
import classes from './TableRow.module.css';

const tableRow = props => {
    let btnClass = classes.disable;
    let content = 'false';
    if(props.status){
        btnClass = classes.active;
        content = 'true';
    }

    return (
        <div className={classes.tableRow}>
            <div>{props.id}</div>
            <div>{props.uId}</div>
            <div>{props.title}</div>
            <div>
                <button className={btnClass}>{content}</button>
            </div>
        </div>
    );
}

export default tableRow;