import React from 'react';
import '../styles/TopButtons.css'; // Adjust the path based on your folder structure

const TopButtons = ({setQuery}) => {
    const cities = [
        {
            id: 1,
            name: 'London'
        },
        {
            id: 2,
            name: 'Tokyo'
        },
        {
            id: 3,
            name: 'Vegas'
        },
        {
            id: 4,
            name: 'New York'
        },
        {
            id: 5,
            name: 'Osaka'
        },
    ];
    return (
        <div className="top-buttons-container">
            {cities.map((city) => (
                <button 
                    key={city.id} 
                    className="city-button"
                    onClick={() => setQuery({ q: city.name })}
                >
                    {city.name}
                </button>
            ))}
        </div>
    );
}

export default TopButtons;
