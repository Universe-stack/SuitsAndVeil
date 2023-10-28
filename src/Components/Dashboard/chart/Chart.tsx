import { Chart as ChartJS,ArcElement, Tooltip,Legend } from 'chart.js/auto';
import {Line} from 'react-chartjs-2'


ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    fill: boolean;
    lineTension: number;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    data: number[];
  }[];
}

type Props = {
  chartData:ChartData
}

const Chart = ({chartData}:Props) => {
  return <Line 
            data={chartData}
                  options={{
                    responsive: true,
                    plugins: {
                      title: {
                        display: false,
                        text: 'Progression of budget',
                      },
                      legend: {
                        position: 'top' as const,
                        display: true,
                      },
                    },
      }}/>
}

export default Chart