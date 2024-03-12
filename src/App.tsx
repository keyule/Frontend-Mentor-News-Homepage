import React from "react";
import FeaturedArticle from "./components/FeaturedArticle";
import NewArticles from "./components/NewArticles";
import BottomArticles from "./components/BottomArticles";
import Header from "./components/Header";
import { Article } from "./models/Article";

const featured: Article = {
  id: 1,
  title: "The Bright Future of Web 3.0?",
  description:
    "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
  imageUrl: "https://github.com/keyule/Frontend-Mentor-News-Homepage/blob/main/src/assets/images/image-web-3-desktop.jpg?raw=true",
  imageMobileURL: "https://github.com/keyule/Frontend-Mentor-News-Homepage/blob/main/src/assets/images/image-web-3-mobile.jpg?raw=true",
}

const newArticlesData: Article[] = [
  {
    id: 2,
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
    imageUrl: "#",
    imageMobileURL: "#",
  },
  {
    id: 3,
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
    imageUrl: "#",
    imageMobileURL: "#",
  },
  {
    id: 4,
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    imageUrl: "#",
    imageMobileURL: "#",
  },
];

const bottomArticlesData: Article[] = [
  {
    id: 5,
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    imageUrl: "https://github.com/keyule/Frontend-Mentor-News-Homepage/blob/main/src/assets/images/image-retro-pcs.jpg?raw=true",
    imageMobileURL: "#",
  },
  {
    id: 6,
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    imageUrl: "https://github.com/keyule/Frontend-Mentor-News-Homepage/blob/main/src/assets/images/image-top-laptops.jpg?raw=true",
    imageMobileURL: "#",
  },
  {
    id: 7,
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    imageUrl: "https://github.com/keyule/Frontend-Mentor-News-Homepage/blob/main/src/assets/images/image-gaming-growth.jpg?raw=true",
    imageMobileURL: "#",
  },
];

const App: React.FC = () => {
  return (
    <main className="bg-Off-white h-screen">
      <div className="container mx-auto p-8">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <FeaturedArticle article={featured} />
          </div>
          <div className="lg:col-span-1 ">
            <NewArticles articles={newArticlesData} />
          </div>
        </div>
         <BottomArticles articles = { bottomArticlesData} /> 
        </div>
      </main>
  );
};

export default App;
