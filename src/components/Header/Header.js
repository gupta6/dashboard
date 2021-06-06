import classes from '../../assets/css/Header.module.css';
import React from 'react';

const header = () => {
    let style = [classes.nav_list,classes.active];    
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <div className={classes.logoCircle}>
                    <span className={classes.logoDot}>.</span>
                </div>
            </div>
            <nav className={classes.navbar}>
                <div className={style.join(' ')}>Overview</div>
                <div className={classes.nav_list}>Campaigns</div>
                <div className={classes.nav_list}>Analytics</div>
            </nav>
            <div className={classes.header_buttonDiv}>
                <button className={classes.header_btn}>Premium</button>
            </div>
        </header>
    );
}

export default header;