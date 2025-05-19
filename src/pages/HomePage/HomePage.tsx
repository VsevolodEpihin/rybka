import {
  CardNews,
  Footer,
  Header,
  InfoBox,
  Partners,

} from '../';
import LoveContainer from '../../components/LoveContainer/LoveContainer';
import VolunteerBox from '../../components/VolunteerBox/VolunteerBox';

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
      <LoveContainer
        backgroundColor='blue'
        leftContent={<VolunteerBox title='Я - волонтер!' text='Получи подробную информацию, как быть полезным' />}
        rightContent={<VolunteerBox title='Я - организатор!' text='Получи подробную информацию об услугах и сотрудничестве' />} />
      <CardNews />
      <Footer />
    </>
  )
}

export default HomePage
