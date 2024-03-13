import React from 'react';
import { Article } from '../models/Article';

interface NewArticlesProps {
  articles: Article[];
}

const NewArticles: React.FC<NewArticlesProps> = ({ articles }) => {
  return (
    <aside className="w-full bg-Very-dark-blue h-full">
      <div className="mt-10 lg:mt-0">
        <h3 className="font-bold text-4xl text-Soft-orange p-5">New</h3>
        {articles.map((article, index) => (
          <div key={article.id} className={`px-5 pb-5`}>
            <div className={`${index !== articles.length - 1 ? 'border-b border-Grayish-blue border-opacity-30' : ''}`}>
              <a href="#">
                <h4 className="text-xl font-semibold mb-4 text-white hover:text-Soft-orange transition-colors duration-300">{article.title}</h4>
              </a>
              <p className="text-Grayish-blue mb-5">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default NewArticles;