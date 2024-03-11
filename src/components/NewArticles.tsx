import React from 'react';
import { Article } from '../models/Article';

interface NewArticlesProps {
  articles: Article[];
}

const NewArticles: React.FC<NewArticlesProps> = ({ articles }) => {
  return (
    <aside className="w-full">
      <div className="mt-10 lg:mt-0">
        <h3 className="font-bold text-xl mb-4">New</h3>
        {articles.map((article) => (
          <div key={article.id} className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h4 className="text-lg font-semibold mb-2">{article.title}</h4>
            <p className="text-gray-600">{article.description}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default NewArticles;