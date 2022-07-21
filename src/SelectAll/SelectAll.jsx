import React from 'react'
import classes from './SelectAll.module.css'

export const SelectAll = ({ onChange }) => {
  return <button type='button' className={classes.btn} onClick={() => onChange()}>
    выбрать все
    </button>
}
