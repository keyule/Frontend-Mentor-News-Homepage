import React from "react";
import { Article } from "../models/Article";

interface BottomArticlesProps {
  articles: Article[];
}

const BottomArticles: React.FC<BottomArticlesProps> = ({ articles }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {articles.map((article) => (
        <div key={article.id} className="bg-white p-4 rounded-lg shadow-lg">
          <h5 className="text-xl font-semibold mb-2">{article.title}</h5>
          <p className="text-gray-600">{article.description}</p>
        </div>
      ))}
    </section>
  );
};

export default BottomArticles;
