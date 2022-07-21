import React from 'react'
import classes from './Loading.module.css'

export const Loading = (props) => {

    if (!props.loaded) {
        return (
        <div className={classes.background}>
            <div className={classes.border}>
                <div className={classes.loading}></div>
            </div>
            <div className={classes.text}>{props.text}</div>
        </div>
        )
    }
}
