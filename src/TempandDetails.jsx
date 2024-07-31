import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp,MdKeyboardArrowDown } from "react-icons/md";
const TempandDetails = () => {
    const VerDetails= [
        {
            id:1,
            Icon:FaThermometerEmpty,
            title:"Real feel",
            value:"22°",
        },
        {
            id:2,
            Icon:BiSolidDropletHalf,
            title:"Humidity",
            value:"34%",
        },
        {
            id:3,
            Icon:FiWind,
            title:"Wind",
            value:"10 Km/Hr",
        },
    ];
    const HoriDetailts= [
        {
            id:1,
            Icon:GiSunrise,
            title:"SunRise",
            value:"06:30 AM",
        },
        {
            id:2,
            Icon:GiSunset,
            title:"Sunset",
            value:"06:30 PM",
        },
        {
            id:3,
            Icon:MdKeyboardArrowUp,
            title:"High",
            value:"32°",
        },
        {
            id:4,
            Icon:MdKeyboardArrowDown,
            title:"Low",
            value:"22°",
        },
    ];
  return (
    <div>
    <div className="flex items-center justify-center py-6 text-xl text-cyan-700">
        <p>Rain</p>
    </div>
        <div className="flex flex-row items-center justify-between py-3">
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="weather icon"
            className="w-20"/>
            <p className="text-5xl">34°</p>
            <div className="flex flex-col space-y-3 items-start">
                {
                    VerDetails.map(({id, Icon, title, value}) => (
                        <div key={id} className="flex font-light text-sm items-center justify-center">
                    <Icon size={18} className="mr-1"/>
                    {`${title}: `} <span className="font-medium ml-1">{value}</span>
                </div>
                    ))
                }
            </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
                {
                    HoriDetailts.map(({id, Icon, title, value}) => (
                        <div key={id} className="flex flex-row items-center">
                            <Icon size={40}/>
                            <p className="font-light ml-1">
                            {`${title}: `} <span className="font-medium ml-1">{value}</span>
                            </p>

                        </div>

                    ))
                }
                

            </div>
    </div>
  )
}

export default TempandDetails
