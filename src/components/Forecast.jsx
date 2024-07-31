
const Forecast = () => {
    const data = [1,2,3,4,5];
  return (
    <div>
        <div className="flex items-center justify-start mt-6">
            <p className="font-medium uppercase">3 Hour Step ForeCast</p>
        </div>
        <hr className="my-3"/>
        <div className="flex items-center justify-between">
            {data.map((data, index) => (
                <div key={index} className="flex flex-col items-center justify-center ">
                    <p className="font-light text-sm">Wed</p>
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" 
                    alt="weather icon" 
                    className="w-12 my-1"/>
                    <p className="font-medium">20°</p>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Forecast
