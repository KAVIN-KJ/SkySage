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
    const labels = dataList.map(entry => entry.dt_txt.split("-")[1]+"-"+entry.dt_txt.split("-")[2]); 
    const humidity = dataList.map(entry=> entry.main.humidity)
    const pressure = dataList.map(entry=> entry.main.pressure)
    useEffect(()=>{
        setDatalist(props.response.data.list);
    },[props.response])

    const options = {
        plugins:{
            title:{
                display: true,
            }
        }
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
    const pressureData = {
        labels: labels,
        datasets: [
            {
                label:"Pressure",
                data:pressure,
                borderColor:"green"
            }
        ]
    }

    return (
        <div style={{ width: "40%",overflow:"auto",display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
            <Line options={options} data={tempdata} />
            <Line options={options} data={humdata}/>
            <Line options={options} data={pressureData}/>
        </div>
    );
}
