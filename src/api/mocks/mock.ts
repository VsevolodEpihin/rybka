export const getMockNews = () => {
  return [
    {
      id: 1,
      text: "Собрание Волонтерского Центра ИКТИБ ЮФУ",
      date: '1 апреля 2024'
    },
    {
      id: 2,
      text: "Хакатон Cyber Garden",
      date: '15 апреля 2026'
    },
    {
      id: 3,
      text: "Неделя добра",
      date: '4 января 2026'
    },
    {
      id: 4,
      text: "Экологическая акция",
      date: '10 мая 2026'
    },
    {
      id: 5,
      text: "Ярмарка IT-профессий",
      date: '22 июня 2026'
    },
    {
      id: 6,
      text: "Тренинг лидерства",
      date: '3 июля 2026'
    },
  ];   
};

export const findAuthUser = () => {
  return [
    {
      id:"1",
      firstName: "Epikhin",
      name: "Vsevolod",
      surname: "Andreevich",
      avatarImg: "/user1.jpg",
      tel: "+7 (989) 614-58-50",
      email: "epikhin01_03@mail.ru",
      password: "123456789",
      dateBirthday: "21.01.2003",
      city: 'Taganrog',
      gender: 'men',
      career: 'developer',
      univerity: 'SFEDU',
      releaseDate: '23.06.2025',
      socialExpirience: 'lorem ilpsum',
      levelEng: 'L2',
      priorityAreas: ['wop','volunteer'],
      consent: true,
    },
    {
      id:"2",
      tel: "epikhin01_03@mail.ru",
      password: "123456789",
    },
    {
      id:"3",
      tel: "epikhin01_04@mail.ru",
      password: "123456789",
    },
  ]
}