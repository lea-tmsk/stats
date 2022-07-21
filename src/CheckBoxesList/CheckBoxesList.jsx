import React from 'react'
import classes from './CheckBoxesList.module.css'
import { Checkbox } from '../Checkbox/Checkbox'
import { DeselectAll } from '../DeselectAll/DeselectAll'
import { SelectAll } from '../SelectAll/SelectAll'

export const CheckBoxesList = (props) => {
  return (
    <div name="cb">
    {props.items.map(( item, index )=> {
        return <Checkbox item={item} key={index} onChange={props.changeState}/>
    })}
    <div className={classes.buttons}>
      <SelectAll onChange={() => props.setAllChecked()}/>
      <DeselectAll onChange={() => props.setAllUnchecked()} />
    </div>
    </div>
  )
}
