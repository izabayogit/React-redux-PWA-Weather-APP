import *as type from "../actionTypes/index"
import axios from "axios"
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

export const getWeaher = (query) =>
{
        return async (dispatch) =>
        {
                await axios.get(URL, {
                        params: {
                                q: query,
                                units: "metrics",
                                APPID: API_KEY
                        }
                }).then((response) =>
                {
                        console.log(response);
                        dispatch({
                                type: type.GET_CITY_WEATHER,
                                payload: response.data
                        })


                })

        }

}