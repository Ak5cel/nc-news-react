import { useState } from "react";
import ArticlesList from "../ArticlesList";

const ArticlesView = () => {
  const [articles, setArticles] = useState([
    {
      article_id: 34,
      author: "grumpy19",
      title: "The Notorious MSG’s Unlikely Formula For Success",
      topic: "cooking",
      created_at: "2020-11-22T11:13:00.000Z",
      votes: 0,
      article_img_url: "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
      comment_count: 11,
    },
    {
      article_id: 12,
      author: "tickle122",
      title: "The battle for Node.js security has only begun",
      topic: "coding",
      created_at: "2020-11-15T13:25:00.000Z",
      votes: 0,
      article_img_url: "https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700",
      comment_count: 7,
    },
    {
      article_id: 6,
      author: "grumpy19",
      title: "JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals",
      topic: "coding",
      created_at: "2020-11-11T15:09:00.000Z",
      votes: 0,
      article_img_url: "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?w=700&h=700",
      comment_count: 11,
    },
  ]);

  return (
    <div className="articles-view">
      <h2>Browse Articles</h2>
      <ArticlesList articles={articles} />
    </div>
  );
};

export default ArticlesView;
