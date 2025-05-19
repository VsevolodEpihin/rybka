import { getMockNews } from "./mocks/mock";

interface News {
  id: number;
  text: string;
  date: string;
};

type getNews = () => Promise<News[]>

export const getNews: getNews = async () => {
  const data = await getMockNews();
  console.log(data)
  return data;
};
