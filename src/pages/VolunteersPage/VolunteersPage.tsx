import Vector from "../../components/Vector/Vector"
import LoveContainer from "../../components/LoveContainer/LoveContainer"
import GeneralInformation from "../../components/GeneralInformation/GeneralInformation"

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
    {
        id: 4,
        title: 'Экологическое волонтерство',
        image: '/garden.png',  
        path: '/volunteers/ecology-volunteering',
    },
    {
        id: 5,
        title: 'Спортивное волонтерство',
        image: '/sport.png',
        path: '/volunteers/sport-volunteering',
    },
    {
        id: 6,
        title: 'Культурное волонтерство',
        image: '/culture.png',
        path: '/volunteers/culture-volunteering',
    },
    {
        id: 7,
        title: 'Медиа-волонтерство',
        image: '/media.png',
        path: '/volunteers/media-volunteering',
    },
    {
        id: 8,
        title: 'Патриотическое волонтерство',
        image: '/patriot.png',
        path: '/volunteers/patriot-volunteering',
    },
];

const VolunteersPage = () => {
  return (
    <div>
      <GeneralInformation
        title="Общая Информация"
        prevTitle="Направления добровольчества"
        text="Волонтерская деятельность в ИКТИБ ЮФУ 
        осуществляется по следующим направлениям:
        спортивное, экологическое, патриотическое,
        культурное, социальное, 
        событийное, медиаволонтерство, донорство."
        pathImg='/gen-volunteer.png'
        altText="competition"      
      />
      <Vector mockVectors={mockVectors} type={""}/>
      <LoveContainer
        title="Твое направление ждет тебя!"
        prevTitle="Переходи по ссылке!"
        backgroundColor="green"
        leftContent='Изучай информацию!'
        rightContent='Жми Готов помогать'
      />
    </div>
  )
}

export default VolunteersPage
