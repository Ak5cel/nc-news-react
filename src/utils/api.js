import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://ak-nc-news.onrender.com/api",
});

export const getArticles = async (topic) => {
  const { data } = await newsApi.get("/articles", { params: { topic } });

  return data.articles;
};

export const getArticleById = async (articleId) => {
  const { data } = await newsApi.get(`/articles/${articleId}`);

  return data.article;
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
  const { data } = await newsApi.get(`/articles/${articleId}/comments`);

  return data.comments;
};

export const postComment = async (username, commentBody, articleId) => {
  const postBody = {
    username: username,
    body: commentBody,
  };

  const { data } = await newsApi.post(`/articles/${articleId}/comments`, postBody);

  return data.comment;
};

export const deleteComment = async (commentId) => {
  const response = await newsApi.delete(`/comments/${commentId}`);

  return {};
};
