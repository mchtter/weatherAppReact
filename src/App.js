import React, { useEffect } from 'react';
import './App.css';
import { Search } from './features/search/Search';
import { Cities } from './features/cities/Cities'
import { RefreshSection } from './features/cities/RefreshSection';
import { useSelector, useDispatch } from 'react-redux'
import { selectWeather, fetchData } from './features/counter/counterSlice';

function App() {
  const state = useSelector(selectWeather);
  const dispatch = useDispatch()

  let cities = Object.keys(state.weatherData)
  let timer = 10000;

  // useEffect(() => {

    // setInterval(() => {
    //   cities.map((el) => {
    //     console.log(el)
    //     dispatch(fetchData(el))
    //   })
    // }, 10000)
    
  // }, [cities])


  return (
    <div className="App container mx-auto px-80">
        <Search />
        <RefreshSection />
        <Cities />
       
    </div>
  );
}

export default App;
