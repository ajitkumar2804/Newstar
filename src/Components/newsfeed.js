import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/newsfeed.css'


export default function Newsfeed() {
    const [news, setNews] = useState([])
    const [loaded, setLoaded] = useState(false);

    const getNewsData = async () => {
        await axios.get(`https://newstar-backend.onrender.com/news/india`)
            .then(res => res.data)
            .then(data => setNews(data))
        setLoaded(true)
    }

    useEffect(() => {
        getNewsData();
    }, [])
    if (loaded) {
        // console.log('News Data Loaded Succesfully')
        console.log(news.articles)
        return (
            <div className='col-md-6 news '>
                <h1 className='text-center m-3'>Top Headlines</h1>
                {
                    news.articles.map(item =>
                        
                        <div class="card ">
                            
                            <div class="card-header">
                                {item.source.name}
                            </div>
                            <img src={item.urlToImage} alt=' ' className='card-img-top'/>
                            <div class="card-body">
                                <h5 class="card-title">{item.title}</h5>
                                <p class="card-text">{item.content}</p>
                                <a href={item.url}  rel="noreferrer" target='_blank' class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    )

                }

            </div>
        )
    }
}


