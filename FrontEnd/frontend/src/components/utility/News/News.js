import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import './News.css';

const { Meta } = Card;

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsResponse = await fetch(process.env.REACT_APP_NEWS_URL);
        const newsData = await newsResponse.json();
        setNewsData(newsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const carouselItems = newsData.map(newsItem => (
    <Card key={newsItem.ID} className='card-style'>
      <img
        alt={newsItem.Title}
        src={newsItem.ImageURL}
        className='img-style'
      />
      <Meta
        title={newsItem.Title}
        description={
          <a href={newsItem.ArticleURL} target="_blank" rel="noopener noreferrer">
            {newsItem.ArticleURL}
          </a>
        }
      />
    </Card>
  ));

  return (
    <div className='news-style'>
      {carouselItems}
    </div>
  );
};

export default News;
