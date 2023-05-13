import axios from "axios"
import { useEffect, useState } from "react";

export default function Categoriees(props) {
    const [news, setNews] = useState([]);
    const [loaded, setLoaded] = useState(false);

    

    useEffect(() => {
        const getNews = async () => {
            await axios.get(`https://newsapi.org/v2/top-headlines/sources?category=${props.cat}&apiKey=f67f2c7afa394e38a83ffdcd6d7bb7`)
                .then(res => res.data)
                .then(data => setNews(data))
            setLoaded(true)
        }
        getNews()
    },[props.cat])

    if (loaded) {
        console.log('News Data Loaded Succesfully')
        return (
            
            <div className='newscard container-fluid'>
                <div className='row gy-4'>

                    {

                        news.sources.map(item =>
                            <div class="card ">
                            
                            <div class="card-header">
                                {item.country}
                            </div>
                            <img src={item.url} alt=' ' className='card-img-top'/>
                            <div class="card-body">
                                <h5 class="card-title">{item.description}</h5>
                                <p class="card-text">{item.content}</p>
                                <a href={item.url}  rel="noreferrer" target='_blank' class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        )
                    }
                </div>

            </div>
        )
    }
}