import React from "react";
import { Article } from "../models/Article";

interface BottomArticlesProps {
  articles: Article[];
}

const BottomArticles: React.FC<BottomArticlesProps> = ({ articles }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 mt-10">
      {articles.map((article, index) => (
        <div key={article.id} className="p-4 flex items-center">
          <img src={article.imageUrl} alt={article.title} className="w-24 mr-4" />
          <div>
            <span className="text-3xl font-semibold text-Grayish-blue">{(index + 1).toString().padStart(2, '0')}</span>
            <a href = "#">
              <h5 className="text-xl font-bold mb-2 hover:text-Soft-red transition-colors duration-200">{article.title}</h5>
            </a>
            <p className="text-gray-600">{article.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BottomArticles;
