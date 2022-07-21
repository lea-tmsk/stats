import React from 'react';
import classes from './BarChart.module.css'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = (props) => {
    
    ChartJS.defaults.font.family = 'Montserrat'
    ChartJS.defaults.font.size = 16

    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
              display: true,
              text: props.title
          }            
        },
    };
      
    const json = {
      "Карточки": 59,
      "Видеотека": 54,
      "Упражнения": 34,
      "Опросники": 78,
      "Тредмилы": 65,
      "Тесты": 49
    }

    const labels = Object.getOwnPropertyNames(json);

    if (labels.length < 2) {
      return (
        <div className={classes.line}>
          {labels[0]}: {json[labels[0]]}
        </div> 
      )
    }

    const dataset = [];
    for (let i = 0; i < labels.length; i++) {
      dataset.push(json[labels[i]]);
    }
    
    const data = {
    // labels: props.labels,
    labels: labels,
    datasets: [{
      // data: props.data,
      data: dataset,
      hoverBackgroundColor: '#f8bb59',
      backgroundColor: '#FFA71B',
    }]
  };

  return (
    <Bar height="300px" width="700px" options={options} data={data} />
  )
}
