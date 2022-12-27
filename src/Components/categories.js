import axios from "axios"
import { useEffect, useState } from "react";

export default function Categoriees(props) {
    const [news, setNews] = useState([]);
    const [loaded, setLoaded] = useState(false);

    

    useEffect(() => {
        const getNews = async () => {
            await axios.get(`https://newsapi.org/v2/top-headlines/sources?category=${props.cat}&apiKey=f67f2c7afa394e38a83ffdcd6d7bb7a0`)
                .then(res => res.data)
                .then(data => setNews(data))
            setLoaded(true)
        }
        getNews()
    },[props.cat])

    if (loaded) {
        console.log(news.sources)
        return (
            
            <div className='newscard container-fluid'>
                <div className='row gy-4'>

                    {

                        news.sources.map(item =>
                            <div className="col-md-3">
                                <div key={item.country} className="card border-0 h-100" >
                                    <img className="card-img-top" src={item.url} alt="Not Avaliable" />
                                    <div className="card-body">
                                        <p className="card-title">{item.description}</p>
                                        <a href={item.url} rel="noreferrer" target='_blank' className="read">Read more</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        )
    }
}