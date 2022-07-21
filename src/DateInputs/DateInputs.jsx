import React from 'react'
import classes from './DateInputs.module.css'

export const DateInputs = () => {
  const date = new Date();
  const today = date.getFullYear() + '-' + (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' : '') + date.getDate();
  return (
      <div className={classes.inputs}>
      <p>с</p>
      <input type="date" id="from" required min="2016-10-15" max={today}/> 
      <p>до</p>
      <input type="date" id="to" required max={today}/>
      </div>
  )
}


