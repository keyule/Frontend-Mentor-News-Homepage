import React from 'react';
import { Article } from '../models/Article';

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <div className="h-full bg-blue-100 p-8 rounded-lg">
      <img src={article.imageUrl} alt={article.title} className="rounded-lg mb-4" />
      <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
      <p className="mb-6">{article.description}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Read More
      </button>
    </div>
  );
};

export default FeaturedArticle;