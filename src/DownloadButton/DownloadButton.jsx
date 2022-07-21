import React from 'react'
import classes from './DownloadButton.module.css'
import * as XLSX from 'xlsx';

export const DownloadButton = (props) => {
    function handeClick() {
        // const data = {
        //     "Карточки": 59,
        //     "Видеотека": 54,
        //     "Упражнения": 34,
        //     "Опросники": 78,
        //     "Тредмилы": 65,
        //     "Тесты": 49
        // }

        // data = JSON.parse(data);
        const data = [
            { title: "Карточки", amount: 59 },
            { title: "Видеотека", amount: 54 },
            { title: "Упражнения", amount: 34 },
            { title: "Опросники", amount: 78 },
            { title: "Тредмилы", amount: 65 },
            { title: "Тесты", amount: 49 },
        ]

        // const worksheet = XLSX.utils.json_to_sheet(props.data);
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, props.date);
        XLSX.writeFile(workbook, "english patient stats.xlsx");
    }
    
    return <button className={classes.btn} onClick={handeClick}>{props.text}</button>
}
