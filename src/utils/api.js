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

export const getTopics = async () => {
  try {
    const { data } = await newsApi.get("/topics");

    return data.topics;
  } catch (err) {
    console.log(err.response.data);
  }
};
