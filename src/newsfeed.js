import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../src/styles/newsfeed.css'


export default function Newsfeed() {
    const [news, setNews] = useState([])
    const [loaded, setLoaded] = useState(false);

    const getNewsData = async () => {
        await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=f67f2c7afa394e38a83ffdcd6d7bb7a0`)
            .then(res => res.data)
            .then(data => setNews(data))
        setLoaded(true)
    }

    useEffect(() => {
        getNewsData();
    }, [])
    if (loaded) {
        console.log(news.articles)
        return (

            <div className='newscard container-fluid'>
                <div className='row'>
                   
                {
                    
                    news.articles.map(item =>
                        <div className="col-md-3">
                        <div key={item.source.publishedAt} className="card" >
                            <img className="card-img-top" src={item.urlToImage} alt="No image" />
                            <div className="card-body">
                                <p className="card-title">{item.title}</p>
                                <a href={item.url} target='_blank' className="read">Read more</a>
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


