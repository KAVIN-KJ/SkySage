import { Line } from 'react-chartjs-2';
import response from './test.json';
import axios from 'axios';
import { Chart as ChartJS, 
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

import { useEffect, useState } from 'react';

ChartJS.register(
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function Chart(props) {
   
    const [dataList,setDatalist] = useState(props.response.data.list)
    const temps = dataList.map(entry => entry.main.temp); 
    const labels = dataList.map(entry => entry.dt_txt.split(" ")[1]); 
    const humidity = dataList.map(entry=> entry.main.humidity)

    useEffect(()=>{
        setDatalist(props.response.data.list);
    },[props.response])

    const options = {

    };

    const tempdata = {
        labels: labels,
        datasets: [
            {
                label: "Temperature",
                data: temps,
                borderColor: "red",
            },
        ]
    };
    const humdata = {
        labels: labels,
        datasets: [
            {
                label:"Humidity",
                data:humidity,
                borderColor:"Blue"
            }
        ]
    }

    return (
        <div style={{ width: "40%",overflow:"auto",display:"flex",flexDirection:"column",gap:"30px"}}>
            <Line options={options} data={tempdata} />
            <Line options={options} data={humdata}/>
        </div>
    );
}
