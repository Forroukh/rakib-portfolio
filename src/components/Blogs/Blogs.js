import React, { useEffect, useState } from 'react';
import News from '../News/News';
import './Blogs.css'


const Blogs = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=8ede50bb78fc4dc9a0848845b996c195')
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    },[])
   
    return (
        <div className='blogs'>
            {
                articles.map(article => <News
                key={article.source.id}
                article={article}
                ></News>)
            }
        </div>
    );
};

export default Blogs;