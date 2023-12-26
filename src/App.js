import React, { useState } from 'react'
import { fetchWeather } from './api/fetchWeather';
import "./app.css"
import { connect } from "react-redux"
import { getWeaher } from './Redux/actions';

function App(props)
{
        const [query, setQuery] = useState('')
        const [weather, setWether] = useState({})
        const searchData = async (e) =>
        {
                if (e.key == "Enter")
                {
                        const data = await props.getWeaher(query);
                        setWether(data);
                        setQuery('')
                        console.log(data, ".........")
                }


        }
        return (
                <div className='main-container'>
                        <input
                                type="text"
                                className='search'
                                placeholder='search.....'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={searchData}
                        />
                        <div>
                                {props.data && (
                                        <div className='city'>
                                                <h2 className='city-name'>
                                                        <span>{props.data.name}</span>
                                                        <sup>{props.data.sys.country}</sup>
                                                </h2>
                                                <div className='city-temp'>
                                                        {
                                                                Math.round(props.data.main.temp)
                                                        }
                                                        <sup> &deg;C</sup>
                                                </div>
                                                <div className='info'>
                                                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt={props.data.weather[0].description} />
                                                        <p> {props?.data?.weather[0].description}</p>
                                                </div>
                                        </div>
                                )}
                        </div>
                </div>
        )
}

const mapStateToProps = ({ weatherReducer }) =>
{
        const { weatherState } = weatherReducer;
        return weatherState
}

export default connect(mapStateToProps, { getWeaher })(App)