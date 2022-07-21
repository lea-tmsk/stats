import React from 'react'
import classes from './DeselectAll.module.css'

export const DeselectAll = ({ onChange }) => {
    return <button type='button' className={classes.btn} onClick={() => onChange()}>снять выделение</button>
}
