import ArticlesList from "../ArticlesList/ArticlesList";
import Banner from "../Banner";

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <ArticlesList />
    </div>
  );
};

export default Home;
