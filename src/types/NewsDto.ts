import { Nullable } from './Nullable';

export interface News {
  id: number;
  text: string;
  date: string;
};

export interface NewsStore {
  isLoading: boolean;
  error: Nullable<string>;
  news: Nullable<News[]>;
  getNews: () => void;
};
