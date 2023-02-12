import React , {useState , useEffect} from 'react'
import "./Temp.css"


// https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=f8e705d8bd1e47788fd18a96709f36f2

const Temp = () => {

    const [serachValue, setserachValue] = useState('delhi');
    const [tempInfo, settempInfo] = useState({})

    const getWeatherInfo=async()=>{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${serachValue}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`; 

            const res=await fetch(url);
            const data=await res.json();
            const {temp,pressure,humidity}=data.main;
            const {main:weathermood}=data.weather[0];
            const {name}=data;
            const {speed}=data.wind;
            const {country,sunset}=data.sys;
            
            const weatherInfo={
                temp,
                pressure,
                humidity,
                weathermood,
                name,
                speed,
                country,
                sunset
            };

            settempInfo(weatherInfo);
            

        }
        catch(error){
            console.log("Error - Unable to Fetch API")
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, [])
    
    let sec=tempInfo.sunset;
    let date=new Date(sec*1000);
    let timeStr=`${date.getHours()}:${date.getMinutes()}`

    return (
        <>
            <div className="main">

                <div className="box1">
                    <input type="search" placeholder='Search here...' value={serachValue} onChange={(e)=>{setserachValue(e.target.value)}}/>
                    <button onClick={getWeatherInfo}>Search</button>
                </div>

                <div className="box2">
                    <div className="section1">
                        <i className="logo wi wi-day-thunderstorm" />
                    </div>
                    <div className="section2">
                        <div className="black">
                            <div className='black1'>{tempInfo.temp}&#176;</div>
                            <div className='black2'>
                                <div className='weather'>{tempInfo.weathermood}</div>
                                <div>{tempInfo.name},{tempInfo.country}</div>
                            </div>
                        </div>
                        <div className="blue">
                            <div className="date">7/18/2021</div>
                            <div className="time">03:39:29 PM</div>
                        </div>

                    </div>
                    <div className="box3">
                        <div className="data">
                            <i className="wi wi-sunset" />
                            <div className="readings">
                                <div className="stime">{timeStr}</div>
                                <div className="work">Sunset</div>
                            </div>
                        </div>
                        <div className="data">
                            <i className="wi wi-humidity" />
                            <div className="readings">
                                <div className="stime">{tempInfo.humidity}</div>
                                <div className="work">Humidity</div>
                            </div>
                        </div>
                        <div className="data">
                            <i className="wi wi-barometer" />
                            <div className="readings">
                                <div className="stime">{tempInfo.pressure}</div>
                                <div className="work">Pressure</div>
                            </div>
                        </div>
                        <div className="data">
                            <i className="wi wi-strong-wind" />
                            <div className="readings">
                                <div className="stime">{tempInfo.speed}</div>
                                <div className="work">Speed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Temp