import React from 'react'
import classes from './ButtonGetStats.module.css'


export const ButtonGetStats = (props) => {
  return (
    <input type="submit" className={classes.button} value={props.text}></input>
  )
}
