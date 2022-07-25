import React from 'react'
import classes from './Form.module.css'
import { ButtonGetStats } from '../ButtonGetStats/ButtonGetStats';
import { DateInputs } from '../DateInputs/DateInputs';
import { CheckBoxesList } from '../CheckBoxesList/CheckBoxesList';
import axios from 'axios';

export const Form = () => {
    const [items, setItems] = React.useState([
        {id: 1, state: true, text: "Карточки"},
        {id: 2, state: true, text: "Видеотека"},
        {id: 3, state: true, text: "Упражнения"},
        {id: 4, state: true, text: "Опросники"},
        {id: 5, state: true, text: "Тредмилы"},
        {id: 6, state: true, text: "Тесты"}
      ])
      
    function handleChange(id) {
        setItems(
            items.map(item => {
                if (item.id === id) {
                    item.state = !item.state;
                }
                return item;
            })
        )
    }

    function setAllChecked() {
        setItems(
            items.map(item => {
                item.state = true;
                return item;
            })
        )
    }

    function setAllUnchecked() {
        setItems(
            items.map(item => {
                item.state = false;
                return item;
            })
        )
    }

    function handleSubmit(event) {
        const data = {};
        data.from = document.getElementById("from").value;
        data.to = document.getElementById("to").value;

        let isAllUncheked = true;
        for (let i = 0; i < items.length; i++) {
            if (items[i].state === true) {
                isAllUncheked = false;
                data[items[i].text] = items[i].text;
            }
        }

        if (!isAllUncheked) {
            axios.post('/', data)
            .then((response) => {
                console.log(response.data);
            });
        }
        else {  
            alert("Вы не выбрали тренажер");
            event.preventDefault();
        }
    }

    return (
        <form action="/stats" onSubmit={handleSubmit}>
        <div className={classes.dateInputs}>
          <DateInputs />
        </div>
        <div className={classes.checkbox} id='cb'>
          <CheckBoxesList items={items} setAllChecked={setAllChecked} setAllUnchecked={setAllUnchecked} changeState={handleChange}/>
        </div>
        <div className={classes.button}>
            <ButtonGetStats text="Показать"/>
        </div>
      </form>
    )
}
