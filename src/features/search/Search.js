import React, {useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { fetchData, setWeatherData } from '../counter/counterSlice'
import './Search.module.css';


export function Search() {
    const dispatch = useDispatch()

    const [state, setState] = useState("")
    const [stateData, setStateData] = useState({})



    const onChangeHandler = (e) => {
        setState(e.target.value)
    }


    


    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(fetchData(state));

       
    }


    return(
        <div className="flex flex-col pt-20">
            <div className="flex items-start pl-5">
                Add new City: {state}
            </div>
            <div>
                <form onSubmit={onSubmitHandler}> 
                    <input className="border-4 border-black w-5/6" value={state} type="text" onChange={onChangeHandler} />

                    <button className="border-4 border-black w-16 ml-3 shadow-button" value="Submit" type="submit" > 
                        + Add
                    </button>
                </form>
            </div>

        </div>
    )
}