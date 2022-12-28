import React from 'react';
import '../styles/sidebar.css'

export default function Sidebar() {

    const [weather, setWeather] = React.useState('');
    const [loaded, setLoaded] = React.useState(false)
    React.useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=7b8d6c56df292d95f816f38d57ddd444&units=metric`)
                    .then(res => res.json())
                    .then(data => {
                        setWeather(data);
                        setLoaded(true)
                    }).catch(err => console.log(err));
            });
        } else {
            document.getElementById("demo").innerHTML =
                "Geolocation is not supported by this browser.";
        }
    }, [])

    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (loaded) {
        return (
            <div>
                <div className="card mx-3" style={{ width: '15rem', position: 'sticky', top: '50px' }} >
                    <div className="card-body">
                        <h4 className="card-title">{days[d.getDay()] + " , " + d.getDate() + " " + months[d.getMonth()]}</h4>
                        <h5>{weather.name}</h5>
                        <h6>Temp: {weather.main.temp}</h6>
                    </div>
                </div>
            </div>
        )
    }
    }