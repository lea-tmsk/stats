import React from 'react'
import classes from './Checkbox.module.css'

export const Checkbox = ({ item, onChange }) => {
    return (
        <label className={classes.container}>
            <input type="checkbox" checked = {item.state} onChange={() => onChange(item.id)}/>
                <div className={classes.checkmark} />
                    <span className={classes.text}>
                        {item.text}
                    </span>
        </label>
    )
}

