import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectWeather, setWeatherData } from '../counter/counterSlice';


export function RefreshSection() {
    const dispatch = useDispatch()

    const [stateCity, setState] = useState("")

    const state = useSelector(selectWeather);

    const stateCities = Object.keys(state.weatherData)

    const onChangeHandler = (e) => {
        setState(e.target.value)
        searchData()
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(setWeatherData(state));
    }

    const searchData = () => {
        // setState(e.target.value)
        let data = stateCities;
        console.log(data)
        let nameToSearchString = stateCity;
        // console.log(nameToSearchString)
        if (!nameToSearchString) {
          return data;
        }
        nameToSearchString = nameToSearchString.trim().toLowerCase();
        data = data.filter(function (item) {
            // console.log(item)
          var name = item.toLowerCase().indexOf(nameToSearchString);
          if (name !== -1) {
            return item;
          }
        });

        dispatch(setWeatherData(data));

        return data
    }


    return (
        
        <div className="flex flex-row justify-between mt-20 mr-3 mb-10">
            <button className="border-4 border-black w-24 ml-3 shadow-button">
                Refresh
            </button>
            {stateCity}
            <form onSubmit={onSubmitHandler}>
                <input className="border-2 border-black rounded-3xl w-52 text-center" placeholder="fulltext search by name" value={stateCity} onChange={onChangeHandler} />
            </form>
        </div>
    )
}