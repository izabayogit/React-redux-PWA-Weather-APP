import *as type from "../actionTypes/index"
const weatherState = {
        data: null,
        succes: false
}
const initState = weatherState;

export default function (state = initState, action)
{
        switch (action.type)
        {
                case type.GET_CITY_WEATHER:
                        return {
                                ...state,
                                weatherState: {
                                        data: action.payload,
                                        success: true
                                }
                        }
                default:
                        return state;

        }
}