import { create } from 'zustand';

import { getNews } from '../api/newsApi';

type Nullable<T> = T | null;

interface News {
  id: number;
  text: string;
  date: string;
};

interface NewsStore {
  isLoading: boolean;
  error: Nullable<string>;
  news: Nullable<News[]>;
  getNews: () => void;
};

const useNewsStore = create<NewsStore>((set) => ({
  isLoading: false,
  error: null,
  news: [],
  getNews: async () => {
    set({ isLoading: true })
    let news: News[] = []
    try {
      console.log(2)
      news = await getNews();
      console.log(news)
      set({ news })
    } catch(err) {
      console.log(err)
    } finally {
      set({ isLoading: false })
    }
  },
}))

export default useNewsStore;
