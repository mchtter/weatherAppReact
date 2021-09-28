import React, {useEffect} from 'react'
import { CityBox } from './CityBox'
import { useSelector } from 'react-redux'
import { selectWeather } from '../counter/counterSlice'



export function Cities() {

    const state = useSelector(selectWeather);

    const stateData = Object.values(state.weatherData)


    return(
        <div className="flex flex-row flex-wrap order-3 items-center justify-start">
           { stateData.map((el) => {
        return <CityBox 
        key={el.name}
        name={el.name}
        temp={el.main.temp}
        weather={el.weather[0].main}
        country={el.sys.country}
        className="w-1/3"
         />

    })}

                


        </div>
    )
}