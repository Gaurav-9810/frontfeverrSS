import React, { useState }  from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
 




  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Your Information',
    },
  },
};

const DashBoardVerticalChart = () => {
    const [data1, setdata1] = useState([65, 59, 80, 81, 56, 55, 40]);
    const [data2, setdata2] = useState([28, 48, 40, 19, 86, 27, 90]);
    const [labels, setlabels] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July'])

    const [dataSet, setdataSet] = useState({
        labels,
        datasets: [
          {
            label: 'job Apply',
            data: data1 ,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'job completed',
            data: data2,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ]

    })

    
  

    return (
        <div className=''>
            <Bar options={options} data={dataSet} />

        </div>
    );
  };
export default DashBoardVerticalChart