import React from 'react'

const TopButtons = () => {
    const cities = [
        {
            id:1,
            name:'London'
        },
        {
            id:2,
            name:'Tokyo'
        },
        {
            id:3,
            name:'Vegas'
        },
        {
            id:4,
            name:'NEw York'
        },
        {
            id:5,
            name:'Osaka'
        },
    ]
  return (
    
    <div className="flex items-center justify-around my-6">
        {
            cities.map((city) => (
                <button key={city.id} 
                className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-inin">{city.name}</button>

            ))
        }
      

    </div>
  )
}

export default TopButtons
