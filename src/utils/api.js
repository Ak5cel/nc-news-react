import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://ak-nc-news.onrender.com/api",
});

export const getArticles = async () => {
  try {
    const { data } = await newsApi.get("/articles");

    return data.articles;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const getArticleById = async (articleId) => {
  try {
    const { data } = await newsApi.get(`/articles/${articleId}`);

    return data.article;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const upVoteArticle = async (articleId) => {
  const { data } = await newsApi.patch(`/articles/${articleId}`, { inc_votes: 1 });

  return data.article;
};

export const downVoteArticle = async (articleId) => {
  const { data } = await newsApi.patch(`/articles/${articleId}`, { inc_votes: -1 });

  return data.article;
};

export const getTopics = async () => {
  try {
    const { data } = await newsApi.get("/topics");

    return data.topics;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const getCommentsByArticleId = async (articleId) => {
  try {
    const { data } = await newsApi.get(`/articles/${articleId}/comments`);

    return data.comments;
  } catch (err) {
    console.log(err.response.data);
  }
};
