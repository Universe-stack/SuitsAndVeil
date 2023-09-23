import React from 'react';

import { Chart as ChartJS,ArcElement, Tooltip,Legend } from 'chart.js/auto';
import {Line} from 'react-chartjs-2'


ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {}

const Chart = ({chartData}: Props) => {
  return <Line data={chartData} options={
    {
      title:{
        display:true,
        text:'Average Rainfall per month',
        fontSize:20
      },
      legend:{
        display:true,
        position:'right'
      }
    }
  }/>
}

export default Chart