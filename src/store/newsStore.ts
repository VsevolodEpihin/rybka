import { create } from 'zustand';

import { getNews } from '../api/newsApi';
import { News, NewsStore } from '../types/NewsDto';

const useNewsStore = create<NewsStore>((set) => ({
  isLoading: false,
  error: null,
  news: [],
  getNews: async () => {
    set({ isLoading: true })
    let news: News[] = []
    try {
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
