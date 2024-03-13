import React from 'react';
import { Article } from '../models/Article';

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <div className="flex flex-col">
      <img src={article.imageUrl} alt={article.title} className="w-full" style={{ height: '18rem' }} />
      <div className="flex-1 pt-8 flex md:flex-row">
        <div className = "md:w-1/2">
          <h2 className="text-6xl font-extrabold ">{article.title}</h2>
        </div>
        <div className="md:w-1/2 flex flex-col justify-between px-5">
          <p className="text-mg mb-4">{article.description}</p>
          <div className= "md:w-1/2">
            <button className="text-xs bg-Soft-red tracking-[.3em] hover:bg-Very-dark-blue text-white font-bold py-4 px-8 transition-colors duration-300 ease-in-out">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;