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
    const city=props.city
    const apiKey = '49f83439ae31ba4840afc2609a55c758';
    const units = 'metric';
    const getForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`

    const [dataList,setDatalist] = useState(response.data.list)
    const temps = dataList.map(entry => entry.main.temp); 
    const labels = dataList.map(entry => entry.dt_txt.split(" ")[1]); 
    const humidity = dataList.map(entry=> entry.main.humidity)
    useEffect(()=>{
        if(city){
        axios.get(getForecast)
        .then((response)=>{
            setDatalist(response.data.list);
            console.log("Request Sent");
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    },[city])

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
