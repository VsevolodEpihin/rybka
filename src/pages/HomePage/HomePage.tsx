import {
  CardNews,
  Footer,
  Header,
  InfoBox,
  Partners,
  Volunteer
} from '../';

const HomePage = () => {
  return (
    <>
      <Header />
       <InfoBox
        title='Наша Миссия'
        text='Создать условия для укрепления культуры добровольчества
        как естественной нормы жизни. Предоставлять возможности участия активистов позитивном 
        развитии Института Компьютерных Технологий и Информационной безопасности.'
        textButton='О Центре'
        pathImg='/palm.png'
        altText='palm'
       />
      <Partners />
      <Volunteer />
      <CardNews />
      <Footer />
    </>
  )
}

export default HomePage
