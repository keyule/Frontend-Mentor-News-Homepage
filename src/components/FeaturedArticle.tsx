import React from "react";
import { Article } from "../models/Article";
import { MaskContainer } from "../components/ui/svg-mask-effect";

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <div className="flex flex-col">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full"
        style={{ height: "18rem" }}
      />
      <div className="flex-1 pt-8 flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <MaskContainer
            revealText={
              <p className="text-5xl md:text-6xl font-extrabold text-slate-800">
                The Bright Future of Web 3.0?
              </p>
            }
            className="h-full rounded-md"
          >
            <p className="text-5xl md:text-6xl font-extrabold text-white">
              The <span className="text-red-500">Dark</span> Future of Web
              3.0?
            </p>
          </MaskContainer>
        </div>
        <div className="md:w-1/2 flex flex-col justify-between py-5 md:px-5">
          <p className="text-mg mb-4">{article.description}</p>
          <div className="md:w-1/2">
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

/* 
<h2 className="text-5xl md:text-6xl font-extrabold ">{article.title}</h2> 
*/
