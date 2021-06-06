import React from 'react';
import classes from '../../assets/css/SideBar.module.css'

const sideBar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebaricon+" "+classes.active}><i className="las la-tachometer-alt sidebar__active__icon"></i></div>
            <div className={classes.sidebaricon}><i className="las la-comments"></i></div>
            <div className={classes.sidebaricon}><i className="lar la-folder-open"></i></div>
            <div className={classes.sidebaricon}><i className="las la-comment-alt"></i></div>
            <div className={classes.sidebaricon}><i className="las la-cog"></i></div>

        </div>
    );
}

export default sideBar;