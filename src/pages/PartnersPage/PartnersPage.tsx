import GeneralInformation from "../../components/GeneralInformation/GeneralInformation"

import LoveContainer from "../../components/LoveContainer/LoveContainer"
import PartnersGrid from "../../components/PartnersGrid/PartnersGrid"
import Vector from "../../components/Vector/Vector";

const partners = [
  { src: '/youngdon.png', alt: 'youngdon' },
  { src: '/army.png', alt: 'army' },
  { src: '/volunteer.png', alt: 'volunteer' },
  { src: '/do-it.png', alt: 'do-it' },
  { src: '/city.png', alt: 'city' },
  { src: '/tag-vol.png', alt: 'tag-vol' },
  { src: '/hospital.png', alt: 'hospital' },
  { src: '/assk.png', alt: 'assk' },
  { src: '/topika.png', alt: 'Topika' },
  { src: '/stars.png', alt: 'stars' },
  { src: '/auto.png', alt: 'auto' },
  { src: '/brain.png', alt: 'brain' },
];

const mockVectors = [
  {
      id: 1,
      title: 'Социальное волонтерство',
      image: '/child.png',
      path: '/volunteers/social-volunteering',
  },
  {
      id: 2,
      title: 'Событийное волонтерство',
      image: '/event.png',
      path: '/volunteers/event-volunteering',
  },
  {
      id: 3,
      title: 'Донорство',
      image: '/doner.png',
      path: '/volunteers/doner-volunteering',
  },
];

const PartnersPage = () => {
  return (
    <div>
      <GeneralInformation
        title="О нас"
        text="Волонтерский Центр ИКТИБ ЮФУ — организация на базе Института Компьютерных
         Технологий и Информационной Безопасности, создающая все условия для
         добровольчества.  За годы работы в волонтерскую деятельность 
         вовлечено более 5000 студентов, ежегодно 
         ведется работа на более 200 мероприятиях от 
         местного до международного масштаба."
         pathImg="/protocol.png"
         altText="protocol"
      />
      <Vector type="services" mockVectors={mockVectors} />
      <PartnersGrid images={partners} />
      <LoveContainer
        title="наши контакты"
        backgroundColor="blue"
        leftContent='+7 (928) 118-10-51
        Антон Михайлович Кумов 
        Зам. Директора ИКТИБ ЮФУ'
        rightContent='+7 (989) 705-17-04
        Анастасия Анатольевна Рыбченкова 
        Руководитель ВЦ'
        footer={true}
      />
    </div>
  )
}

export default PartnersPage
