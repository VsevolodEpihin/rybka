import { useState, useCallback, useEffect } from 'react';

import Card from '../Card/Card';
import useNewsStore from '../../store/newsStore';

import styles from './CardNews.module.css';

interface News {
  id: number;
  text: string;
  date: string;
}

const CardNews = () => {
  const [showAll, setShowAll] = useState(false)
  const [convertedNews, setConvertedNews] = useState<News[]>()

  const {
    news,
    getNews,
  } = useNewsStore();

  useEffect(() => {
    getNews();
  }, [getNews])

  const getVisibleCards = useCallback(() => {
    const data = showAll ? news : news?.slice(0, 3);
    if(data) {
      setConvertedNews(data)
    }
  }, [news, showAll]);

  useEffect(() => {
    getVisibleCards();
  }, [showAll, getVisibleCards]);

  const handleToggle = () => {
    setShowAll(prev => !prev)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Новости</h1>
      <div className={styles.cardContainer}>
        {convertedNews?.map(({ id, date, text }) => (
          <Card key={id} date={date} text={text} />
        ))}
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.cardBtn} onClick={handleToggle}>
          {showAll ? 'Скрыть' : 'Узнать больше'}
        </button>
      </div>
    </div>
  )
}

export default CardNews
