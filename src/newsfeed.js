import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Newsfeed() {
    const [news, setNews] = useState([])
    const [loaded, setLoaded] = useState(false);

    const getNewsData = async () => {
        await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f67f2c7afa394e38a83ffdcd6d7bb7a0`)
            .then(res => res.data)
            .then(data => setNews(data))
        setLoaded(true)
    }

    useEffect(() => {
        getNewsData();
    })
    if (loaded) {
        console.log(news.articles)
        return (
            
            <div>
                {
                    news.articles.map(item =>
                        <div key={item.source.id} className="card" style={{ width: '10 rem' }}>
                            <img className="card-img-top" src={item.urlToImage} style={{ width: '10 rem' }} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <a href={item.url} className="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}


