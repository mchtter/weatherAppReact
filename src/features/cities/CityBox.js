import React from 'react'
import { useDispatch } from 'react-redux'
import { FiSun, FiTrash2 } from 'react-icons/fi'
import { delWeatherData } from '../counter/counterSlice'


export function CityBox({name, temp, weather, country }) {
    const dispatch = useDispatch()

    const deleteWeatherData = (id) => {
        dispatch(delWeatherData(id))
    }



    return (
        <div className="flex flex-col justify-between w-48 h-48 border-4 border-black m-2">
            <div className="flex flex-row justify-between">
                <div className="m-2">
                    {name}, {country}
                </div>
                <div className="m-2">
                    <FiSun className="text-4xl" />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-start justify-start pl-2">
                    {weather}
                </div>
                <div className="text-5xl">
                    {parseFloat(temp - 273.15).toFixed(0)} C^
                </div>
            </div>
            <button className="flex justify-end mr-1 mb-1" onClick={() => deleteWeatherData(name)}>
                <FiTrash2 />
            </button>
        </div>
    )
}