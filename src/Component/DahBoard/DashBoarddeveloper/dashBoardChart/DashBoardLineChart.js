import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
responsive: true,
maintainAspectRatio: false,
plugins: {
    legend: {
    position: 'top' ,
    },
    title: {
    display: true,
    text: 'Number view in your profile',
    },
},
};






const DashBoardLineChart = () => {
  const [data1, setdata1] = useState([65, 59, 80, 81, 56, 55, 40]);
  const [labels, setlabels] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July'])
  const [dataSet, setdataSet] = useState({
    labels,
    datasets: [
      {
        label: 'Number of views',
        data: data1 ,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        // width:'100%'
      }
    ]

})

  return (
    <Line  options={options} data={dataSet} />
  )
}

export default DashBoardLineChart







