import React, { useEffect, useState } from 'react'
import { NewsItem } from './NewsItem';

function NewsBoard({ category }) {

    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        // Appeler l'API au chargement du composant
        fetchNews();
    }, [category]);


    const fetchNews = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=9d0a8273efa14a28ab270fc6a5782249`);
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données');
            }
            const data = await response.json();
            setNewsData(data.articles);
            if (response.ok) {
                console.log(newsData)
            }
        } catch (error) {
            console.error('Erreur:', error);
        }
    };
    return (
        <>
            <div className="container">
                <h2 className="text-center" >Latest <span className="badge bg-danger">News</span></h2>
                <div className="row">
                    {newsData.map((article, index) => (
                        <React.Fragment key={index} className="col-md-3 col-sm-6">
                            <NewsItem title={article.title} description={article.description} src={article.urlToImage} url={article.url} />
                        </React.Fragment>
                    ))}
                </div>
                

            </div>
            
        </>

    )
}

export default NewsBoard
