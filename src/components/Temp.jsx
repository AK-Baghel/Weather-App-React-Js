import React , {useState} from 'react'
import "./Temp.css"


// https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=f8e705d8bd1e47788fd18a96709f36f2

const Temp = () => {

    const [serachValue, setserachValue] = useState('');

    return (
        <>
            <div className="main">

                <div className="box1">
                    <input type="search" placeholder='Search here...' value={serachValue} onChange={(e)=>{setserachValue(e.target.value)}}/>
                    <button>Search</button>
                </div>

                <div className="box2">
                    <div className="section1">
                        <i className="logo wi wi-day-thunderstorm" />
                    </div>
                    <div className="section2">
                        <div className="black">
                            <div className='black1'>28.57&#176;</div>
                            <div className='black2'>
                                <div className='weather'>CLOUDS</div>
                                <div>Tokyo,Jp</div>
                            </div>
                        </div>
                        <div className="blue">
                            <div className="date">7/18/2021</div>
                            <div className="time">03:39:29 PM</div>
                        </div>

                    </div>
                    <div className="box3">
                        <div className="data">
                            <i className="wi wi-day-thunderstorm" />
                            <div className="readings">
                                <div className="stime">15:26 PM</div>
                                <div className="work">Humidity</div>
                            </div>
                        </div>
                        <div className="data">
                            <i className="wi wi-day-thunderstorm" />
                            <div className="readings">
                                <div className="stime">15:26 PM</div>
                                <div className="work">Humidity</div>
                            </div>
                        </div>
                        <div className="data">
                            <i className="wi wi-day-thunderstorm" />
                            <div className="readings">
                                <div className="stime">15:26 PM</div>
                                <div className="work">Humidity</div>
                            </div>
                        </div>
                        <div className="data">
                            <i className="wi wi-day-thunderstorm" />
                            <div className="readings">
                                <div className="stime">15:26 PM</div>
                                <div className="work">Humidity</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Temp