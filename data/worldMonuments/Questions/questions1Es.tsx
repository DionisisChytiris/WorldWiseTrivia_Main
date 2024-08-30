const questions1Es = [
  {
    id: "1a",
    img: 'L',
    status: "Capitals",
    country: "Francia",
    image: require("../../../assets/WorldMonuments/Europe/eiffelTower.webp"),
    options: [
      {
        id: "0",
        capital: 'Acrópolis',
        country: 'Grecia'
      },
      {
        id: "1",
        capital: 'Torre de Pisa',
        country: 'Italia'
      },
      {
        id: "2",
        capital: 'Torre Eiffel ',
        country: 'Francia'
      },
      {
        id: "3",
        capital: 'Arco del \nTriunfo',
        country: 'Francia'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "1b",
    status: "Flags",
    country: "Torre Eiffel ",
    capital: "Francia",
    options: [
      {
        id: "0",
        country: "Acrópolis\nGrecia",
        img: require("../../../assets/WorldMonuments/Europe/Acropolis.webp"),
      },
      {
        id: "1",
        country: "Arco del Triunfo\nFrancia",
        img: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.webp"),
      },
      {
        id: "2",
        country: "Torre Eiffel \nFrancia",
        img: require("../../../assets/WorldMonuments/Europe/eiffelTower.webp"),
      },
      {
        id: "3",
        country: "Torre de Pisa\nItalia",
        img: require("../../../assets/WorldMonuments/Europe/TowerPisa.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "2a",
    status: "Capitals",
    img: 'L',
    country: "Estados Unidos",
    image: require("../../../assets/WorldMonuments/USA/statue-of-liberty.webp"),
    options: [
      {
        id: "0",
        capital: 'Valle de los Reyes',
        country: 'Egipto'
      },
      {
        id: "1",
        capital: 'Estatua de la Libertad',
        country: 'Estados Unidos'
      },
      {
        id: "2",
        capital: 'Estatua de Cristo Redentor',
        country: 'Brasil'
      },
      {
        id: "3",
        capital: 'Capitolio de Estados Unidos',
        country: 'Estados Unidos'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "2b",
    status: "Flags",
    country: "Estatua de la Libertad",
    capital: "Estados Unidos",
    options: [
      {
        id: "0",
        country: "Valle de los Reyes\nEgipto",
        img: require("../../../assets/WorldMonuments/Africa/Luxor-Valley-of-the-Kings.png"),
      },
      {
        id: "1",
        country: "Estatua de la Libertad\nEstados Unidos",
        img: require("../../../assets/WorldMonuments/USA/statue-of-liberty.webp"),
      },
      {
        id: "2",
        country: "Cristo Redentor \nBrasil",
        img: require("../../../assets/WorldMonuments/America/Jesus-Christ-The-Redeemer.png"),
      },
      {
        id: "3",
        country: "Capitolio de Estados Unidos\nEstados Unidos",
        img: require("../../../assets/WorldMonuments/USA/capitol-building.png"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "Egipto",
    image: require("../../../assets/WorldMonuments/Africa/Pyramids.png"),
    options: [
      {
        id: "0",
        capital: 'Torre de Pisa',
        country: 'Italia'
      },
      {
        id: "1",
        capital: 'Coliseo',
        country: 'Italia'
      },
      {
        id: "2",
        capital: 'Gran Esfinge de Guiza',
        country: 'Egipto'
      },
      {
        id: "3",
        capital: 'Pirámides de Giza',
        country: 'Egipto'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "3b",
    status: "Flags",
    country: "Pirámides de Giza",
    capital: "Egipto",
    options: [
      {
        id: "0",
        country: "Torre de Pisa\nItalia",
        img: require("../../../assets/WorldMonuments/Europe/TowerPisa.webp"),
      },
      {
        id: "1",
        country: "Coliseo\nItalia",
        img: require("../../../assets/WorldMonuments/Europe/colosseum.jpg"),
      },
      {
        id: "2",
        country: "Gran Esfinge de Guiza\nEgipto",
        img: require("../../../assets/WorldMonuments/Africa/sphinx.png"),
      },
      {
        id: "3",
        country: "Pirámides de Giza\nEgipto",
        img: require("../../../assets/WorldMonuments/Africa/Pyramids.png"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "4a",
    status: "Capitals",
    img: 'L',
    country: "India",
    image: require("../../../assets/WorldMonuments/Asia/TajMajal.jpg"),
    options: [
      {
        id: "0",
        capital: 'Taj Mahal',
        country: 'India'
      },
      {
        id: "1",
        capital: 'Castillo de Bran',
        country: 'Rumanía'
      },
      {
        id: "2",
        capital: 'Catedral Metropolitana de la Ciudad de México',
        country: 'México'
      },
      {
        id: "3",
        capital: 'Ciudadela de Carcasona',
        country: 'Francia'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "4b",
    status: "Flags",
    country: "Taj Mahal",
    capital: "India",
    options: [
      {
        id: "0",
        country: "Taj Mahal\nIndia",
        img: require("../../../assets/WorldMonuments/Asia/TajMajal.jpg"),
      },
      {
        id: "1",
        country: "Castillo de Bran\nRumanía",
        img: require("../../../assets/WorldMonuments/Europe/Bran-CastleDracula.webp"),
      },
      {
        id: "2",
        country: "Catedral Metropolitana de México\nMéxico",
        img: require("../../../assets/WorldMonuments/America/Metropolitan-Cathedral_Mexico.webp"),
      },
      {
        id: "3",
        country: "Ciudadela de Carcasona\nFrancia",
        img: require("../../../assets/WorldMonuments/Europe/Carcason.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "5a",
    status: "Capitals",
    img: 'L',
    country: "Australia",
    image: require("../../../assets/WorldMonuments/Oceania/SydneyOperaHouse.jpg"),
    options: [
      {
        id: "0",
        capital: 'Catedral de Santa María del Fiore',
        country: 'Italia'
      },
      {
        id: "1",
        capital: 'Atomium',
        country: 'Bélgica'
      },
      {
        id: "2",
        capital: 'Ópera de Sídney',
        country: 'Australia'
      },
      {
        id: "3",
        capital: 'Puente de Rialto',
        country: 'Italia'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "5b",
    status: "Flags",
    country: "Ópera de Sídney",
    capital: "Australia",
    options: [
      {
        id: "0",
        country: "Catedral de Santa María del Fiore\nItalia",
        img: require("../../../assets/WorldMonuments/Europe/duomo-florence.webp"),
      },
      {
        id: "1",
        country: "Gran Mezquita de Djenné\nMali",
        img: require("../../../assets/WorldMonuments/Africa/mosque-of-djenne.webp"),
      },
      {
        id: "2",
        country: "Ópera de Sídney\nAustralia",
        img: require("../../../assets/WorldMonuments/Oceania/SydneyOperaHouse.jpg"),
      },
      {
        id: "3",
        country: "Atomium\nBélgica",
        img: require("../../../assets/WorldMonuments/Europe/Atomium.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "Francia",
    image: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.webp"),
    options: [
      {
        id: "0",
        capital: 'Puerta de Brandeburgo',
        country: 'Alemania'
      },
      {
        id: "1",
        capital: 'Arco del \nTriunfo',
        country: 'Francia'
      },
      {
        id: "2",
        capital: 'Torre Eiffel',
        country: 'Francia'
      },
      {
        id: "3",
        capital: 'Catedral de Milán',
        country: 'Italia'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6b",
    status: "Flags",
    country: "Arco del Triunfo",
    capital: "Francia",
    options: [
      {
        id: "0",
        country: "Puerta de Brandeburgo\nAlemania",
        img: require("../../../assets/WorldMonuments/Europe/Brandenburg-Gate-Berlin.webp"),
      },
      {
        id: "1",
        country: "Arco del Triunfo\nFrancia",
        img: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.webp"),
      },
      {
        id: "2",
        country: "Torre Eiffel \nFrancia",
        img: require("../../../assets/WorldMonuments/Europe/eiffelTower.webp"),
      },
      {
        id: "3",
        country: "Puente de Rialto\nItalia",
        img: require("../../../assets/WorldMonuments/Europe/Rialto-Bridge.jpg"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "7a",
    status: "Capitals",
    img: 'L',
    country: "Grecia",
    image: require("../../../assets/WorldMonuments/Europe/Acropolis.webp"),
    options: [
      {
        id: "0",
        capital: 'Acrópolis',
        country: 'Grecia'
      },
      {
        id: "1",
        capital: 'Éfeso',
        country: 'Turquía'
      },
      {
        id: "2",
        capital: 'Persépolis',
        country: 'Irán'
      },
      {
        id: "3",
        capital: 'Arenas de Arlés',
        country: 'Francia'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "7b",
    status: "Flags",
    country: "Acrópolis",
    capital: "Grecia",
    options: [
      {
        id: "0",
        country: "Acrópolis\nGrecia",
        img: require("../../../assets/WorldMonuments/Europe/Acropolis.webp"),
      },
      {
        id: "1",
        country: "Éfeso\nTurquía",
        img: require("../../../assets/WorldMonuments/Asia/ephesos.webp"),
      },
      {
        id: "2",
        country: "Persépolis\nIran",
        img: require("../../../assets/WorldMonuments/Asia/persepolis.png"),
      },
      {
        id: "3",
        country: "Arenas de Arlés\nFrancia",
        img: require("../../../assets/WorldMonuments/Europe/AmpitheatreofArles.png"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "Perú",
    image: require("../../../assets/WorldMonuments/America/MachuPicchu.webp"),
    options: [
      {
        id: "0",
        capital: 'Machu \nPicchu',
        country: 'Perú'
      },
      {
        id: "1",
        capital: 'Tulum',
        country: 'México'
      },
      {
        id: "2",
        capital: 'Tikal',
        country: 'Guatemala'
      },
      {
        id: "3",
        capital: 'Chichen Itza',
        country: 'México'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8b",
    status: "Flags",
    country: "Machu Picchu",
    capital: "Perú",
    options: [
      {
        id: "0",
        country: "Machu Picchu\nPerú",
        img: require("../../../assets/WorldMonuments/America/MachuPicchu.webp"),
      },
      {
        id: "1",
        country: "Tulum\nMéxico",
        img: require("../../../assets/WorldMonuments/America/TulumMexico.png"),
      },
      {
        id: "2",
        country: "Tikal\nGuatemala",
        img: require("../../../assets/WorldMonuments/America/TikalGuatemala.jpg"),
      },
      {
        id: "3",
        country: "Chichen Itza\nMéxico",
        img: require("../../../assets/WorldMonuments/America/chichen-itza_mexico.png"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "Italia",
    image: require("../../../assets/WorldMonuments/Europe/colosseum.jpg"),
    options: [
      {
        id: "0",
        capital: 'Palacio de Versalles',
        country: 'Francia'
      },
      {
        id: "1",
        capital: 'Arco del \nTriunfo',
        country: 'Francia'
      },
      {
        id: "2",
        capital: 'Cnosos',
        country: 'Grecia'
      },
      {
        id: "3",
        capital: 'Coliseo',
        country: 'Italia'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "9b",
    status: "Flags",
    country: "Coliseo",
    capital: "Italia",
    options: [
      {
        id: "0",
        country: "Palacio de Versalles \nFrancia",
        img: require("../../../assets/WorldMonuments/Europe/Palace-of-Versailles-France.png"),
      },
      {
        id: "1",
        country: "Cnosos\nGrecia",
        img: require("../../../assets/WorldMonuments/Europe/knossos.png"),
      },
      {
        id: "2",
        country: "Arco del Triunfo\nFrancia",
        img: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.webp"),
      },
      {
        id: "3",
        country: "Coliseo\nItalia",
        img: require("../../../assets/WorldMonuments/Europe/colosseum.jpg"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "10a",
    status: "Capitals",
    img: 'L',
    country: "China",
    image: require("../../../assets/WorldMonuments/Asia/theGreatWallChina.png"),
    options: [
      {
        id: "0",
        capital: 'Gran Muralla China',
        country: 'China'
      },
      {
        id: "1",
        capital: 'Great \nOcean Road',
        country: 'Australia'
      },
      {
        id: "2",
        capital: 'Ciudad Prohibida',
        country: 'China'
      },
      {
        id: "3",
        capital: 'Templo del Cielo',
        country: 'China'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "10b",
    status: "Flags",
    country: "Gran Muralla China",
    capital: "China",
    options: [
      {
        id: "0",
        country: "Gran Muralla China\nChina",
        img: require("../../../assets/WorldMonuments/Asia/theGreatWallChina.png"),
      },
      {
        id: "1",
        country: "Great Ocean Road\nAustralia",
        img: require("../../../assets/WorldMonuments/Oceania/greatoceanroad.png"),
      },
      {
        id: "2",
        country: "Ciudad Prohibida\nChina",
        img: require("../../../assets/WorldMonuments/Asia/forbidden-city.jpg"),
      },
      {
        id: "3",
        country: "Templo del Cielo\nChina",
        img: require("../../../assets/WorldMonuments/Asia/temple-of-heaven-in-beijing.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "11",
    monument: "",
    country: "",
  },
  //Dont delete. It s missing status: 'Guess'
  {
    id: "11a",
    monument: "",
    country: "",
  },
  {
    id: "11s",
    monument: "",
    country: "",
  },
  {
    id: "11d",
    monument: "",
    country: "",
  },
  {
    id: "11f",
    monument: "",
    country: "",
  },
  {
    id: "11g",
    monument: "",
    country: "",
  },
  {
    id: "11h",
    monument: "",
    country: "",
  },
  {
    id: "11j",
    monument: "",
    country: "",
  },
  {
    id: "11k",
    monument: "",
    country: "",
  },
  {
    id: "11l",
    monument: "",
    country: "",
  },
  {
    id: "11m",
    monument: "",
    country: "",
  },
];

export default questions1Es;
