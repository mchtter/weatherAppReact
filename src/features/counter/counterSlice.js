import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit';
import {
  fetchCount
} from './counterAPI';
import axios from 'axios';

const initialState = {
  weatherData: {},
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'weather',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setWeatherData: (state, action) => {
      state.weatherData = {
        ...state.weatherData,
        [action.payload.name]: action.payload.data
      }
    },

    delWeatherData: (state, action) => {
      let newData = state.weatherData;
      delete newData[action.payload]
      const deletedData = Object.assign({}, newData)

      state.weatherData = deletedData
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const {
  setWeatherData,
  delWeatherData
} = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectWeather = (state) => state.weather;

export default counterSlice.reducer;

export const fetchData = (cityName) => dispatch => {
  try {
    axios.get(`http://localhost:3001/city/?city=${cityName}`)
      .then((response) => {
        dispatch(setWeatherData({
          name: response.data.name,
          data: response.data
        }))
      })

  } catch (err) {

  }
}