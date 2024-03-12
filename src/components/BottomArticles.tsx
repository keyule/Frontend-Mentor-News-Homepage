import React from "react";
import { Article } from "../models/Article";

interface BottomArticlesProps {
  articles: Article[];
}

const BottomArticles: React.FC<BottomArticlesProps> = ({ articles }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {articles.map((article, index) => (
        <div key={article.id} className="bg-white p-4 flex items-center">
          <img src={article.imageUrl} alt={article.title} className="w-24 mr-4" />
          <div>
            <span className="text-lg font-semibold text-blue-600">{(index + 1).toString().padStart(2, '0')}</span>
            <h5 className="text-xl font-semibold mb-2">{article.title}</h5>
            <p className="text-gray-600">{article.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BottomArticles;
