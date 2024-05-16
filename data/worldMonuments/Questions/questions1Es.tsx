const questions1Es = [
  {
    id: "1a",
    img: 'L',
    status: "Capitals",
    country: "France",
    image: require("../../../assets/WorldMonuments/Europe/eiffelTower.png"),
    options: [
      {
        id: "0",
        capital: 'Acropolis',
        country: 'Greece'
      },
      {
        id: "1",
        capital: 'Leaning \nTower of Pisa',
        country: 'Italy'
      },
      {
        id: "2",
        capital: 'Eiffel Tower',
        country: 'France'
      },
      {
        id: "3",
        capital: 'Arc de \nTriumph',
        country: 'France'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "1b",
    status: "Flags",
    country: "Eiffel Tower",
    capital: "France",
    options: [
      {
        id: "0",
        country: "Acropolis\nGreece",
        img: require("../../../assets/WorldMonuments/Europe/Acropolis.png"),
      },
      {
        id: "1",
        country: "Arc de Triumph\nFrance",
        img: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.png"),
      },
      {
        id: "2",
        country: "Eiffel Tower\nFrance",
        img: require("../../../assets/WorldMonuments/Europe/eiffelTower.png"),
      },
      {
        id: "3",
        country: "Pisa Tower\nItaly",
        img: require("../../../assets/WorldMonuments/Europe/TowerPisa.png"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "2a",
    status: "Capitals",
    img: 'L',
    country: "USA",
    image: require("../../../assets/WorldMonuments/USA/statue-of-liberty.png"),
    options: [
      {
        id: "0",
        capital: 'Valley of the \nKings',
        country: 'Egypt'
      },
      {
        id: "1",
        capital: 'Statue of \nLiberty',
        country: 'USA'
      },
      {
        id: "2",
        capital: 'Christ the \nRedeemer',
        country: 'Brazil'
      },
      {
        id: "3",
        capital: 'United States \nCapitol',
        country: 'USA'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "2b",
    status: "Flags",
    country: "Statue of Liberty",
    capital: "USA",
    options: [
      {
        id: "0",
        country: "Valley of the Kings\nEgypt",
        img: require("../../../assets/WorldMonuments/Africa/Luxor-Valley-of-the-Kings.png"),
      },
      {
        id: "1",
        country: "Statue of Liberty\nUSA",
        img: require("../../../assets/WorldMonuments/USA/statue-of-liberty.png"),
      },
      {
        id: "2",
        country: "Christ the Redeemer\nBrazil",
        img: require("../../../assets/WorldMonuments/America/Jesus-Christ-The-Redeemer.png"),
      },
      {
        id: "3",
        country: "United States Capitol\nUSA",
        img: require("../../../assets/WorldMonuments/USA/capitol-building.png"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "Egypt",
    image: require("../../../assets/WorldMonuments/Africa/Pyramids.png"),
    options: [
      {
        id: "0",
        capital: 'Leaning \nTower of Pisa',
        country: 'Italy'
      },
      {
        id: "1",
        capital: 'Colosseum',
        country: 'Italy'
      },
      {
        id: "2",
        capital: 'Great \nSphinx of Giza',
        country: 'Egypt'
      },
      {
        id: "3",
        capital: 'Great Pyramid \nof Giza',
        country: 'Egypt'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "3b",
    status: "Flags",
    country: "Great Pyramid of Giza",
    capital: "Egypt",
    options: [
      {
        id: "0",
        country: "Leaning Tower of Pisa\nItaly",
        img: require("../../../assets/WorldMonuments/Europe/TowerPisa.png"),
      },
      {
        id: "1",
        country: "Colosseum\nItaly",
        img: require("../../../assets/WorldMonuments/Europe/colosseum.jpg"),
      },
      {
        id: "2",
        country: "Great Sphinx of Giza\nEgypt",
        img: require("../../../assets/WorldMonuments/Africa/sphinx.png"),
      },
      {
        id: "3",
        country: "Great Pyramid of Giza\nEgypt",
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
        capital: 'Bran Castle',
        country: 'Romania'
      },
      {
        id: "2",
        capital: 'Mexico City \nCathedral',
        country: 'Mexico'
      },
      {
        id: "3",
        capital: 'Cité de \nCarcassonne',
        country: 'France'
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
        country: "Bran Castle\nRomania",
        img: require("../../../assets/WorldMonuments/Europe/Bran-CastleDracula.png"),
      },
      {
        id: "2",
        country: "Mexico City Cathedral\nMexico",
        img: require("../../../assets/WorldMonuments/America/Metropolitan-Cathedral_Mexico.png"),
      },
      {
        id: "3",
        country: "Cité de Carcassonne\nFrance",
        img: require("../../../assets/WorldMonuments/Europe/CitédeCarcassonne.png"),
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
        capital: 'Florence Cathedral',
        country: 'Italy'
      },
      {
        id: "1",
        capital: 'Atomium',
        country: 'Belgium'
      },
      {
        id: "2",
        capital: 'Sydney \nOpera House',
        country: 'Australia'
      },
      {
        id: "3",
        capital: 'Rialto Bridge',
        country: 'Italy'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "5b",
    status: "Flags",
    country: "Sydney Opera House",
    capital: "Australia",
    options: [
      {
        id: "0",
        country: "Florence Cathedral\nItaly",
        img: require("../../../assets/WorldMonuments/Europe/duomo-florence.png"),
      },
      {
        id: "1",
        country: "Mosque of Djenné\nMali",
        img: require("../../../assets/WorldMonuments/Africa/mosque-of-djenne.png"),
      },
      {
        id: "2",
        country: "Sydney Opera House\nAustralia",
        img: require("../../../assets/WorldMonuments/Oceania/SydneyOperaHouse.jpg"),
      },
      {
        id: "3",
        country: "Atomium\nBelgium",
        img: require("../../../assets/WorldMonuments/Europe/Atomium.png"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "France",
    image: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.png"),
    options: [
      {
        id: "0",
        capital: 'Brandenburg Gate',
        country: 'Germany'
      },
      {
        id: "1",
        capital: 'Arc de \nTriumph',
        country: 'France'
      },
      {
        id: "2",
        capital: 'Eiffel Tower',
        country: 'France'
      },
      {
        id: "3",
        capital: 'Milan Duomo',
        country: 'Italy'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6b",
    status: "Flags",
    country: "Arc de Triomphe",
    capital: "France",
    options: [
      {
        id: "0",
        country: "Brandenburg Gate\nGermany",
        img: require("../../../assets/WorldMonuments/Europe/Brandenburg-Gate-Berlin.png"),
      },
      {
        id: "1",
        country: "Arc de Triumph\nFrance",
        img: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.png"),
      },
      {
        id: "2",
        country: "Eiffel Tower\nFrance",
        img: require("../../../assets/WorldMonuments/Europe/eiffelTower.png"),
      },
      {
        id: "3",
        country: "Rialto Bridge\nItaly",
        img: require("../../../assets/WorldMonuments/Europe/Rialto-Bridge.jpg"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "7a",
    status: "Capitals",
    img: 'L',
    country: "Greece",
    image: require("../../../assets/WorldMonuments/Europe/Acropolis.png"),
    options: [
      {
        id: "0",
        capital: 'Acropolis',
        country: 'Greece'
      },
      {
        id: "1",
        capital: 'Ephesus',
        country: 'Turkey'
      },
      {
        id: "2",
        capital: 'Persepolis',
        country: 'Iran'
      },
      {
        id: "3",
        capital: 'Arles \nAmphitheatre',
        country: 'France'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "7b",
    status: "Flags",
    country: "Acropolis",
    capital: "Greece",
    options: [
      {
        id: "0",
        country: "Acropolis\nGreece",
        img: require("../../../assets/WorldMonuments/Europe/Acropolis.png"),
      },
      {
        id: "1",
        country: "Ephesus\nTurkey",
        img: require("../../../assets/WorldMonuments/Asia/ephesos.png"),
      },
      {
        id: "2",
        country: "Persepolis\nIran",
        img: require("../../../assets/WorldMonuments/Asia/persepolis.png"),
      },
      {
        id: "3",
        country: "Arles Amphitheatre\nFrance",
        img: require("../../../assets/WorldMonuments/Europe/AmpitheatreofArles.png"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "Peru",
    image: require("../../../assets/WorldMonuments/America/MachuPicchu.png"),
    options: [
      {
        id: "0",
        capital: 'Machu \nPicchu',
        country: 'Peru'
      },
      {
        id: "1",
        capital: 'Tulum',
        country: 'Mexico'
      },
      {
        id: "2",
        capital: 'Tikal',
        country: 'Guatemala'
      },
      {
        id: "3",
        capital: 'Chichen Itza',
        country: 'Mexico'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8b",
    status: "Flags",
    country: "Machu Picchu",
    capital: "Peru",
    options: [
      {
        id: "0",
        country: "Machu Picchu\nPeru",
        img: require("../../../assets/WorldMonuments/America/MachuPicchu.png"),
      },
      {
        id: "1",
        country: "Tulum\nMexico",
        img: require("../../../assets/WorldMonuments/America/TulumMexico.png"),
      },
      {
        id: "2",
        country: "Tikal\nGuatemala",
        img: require("../../../assets/WorldMonuments/America/TikalGuatemala.jpg"),
      },
      {
        id: "3",
        country: "Chichen Itza\nMexico",
        img: require("../../../assets/WorldMonuments/America/chichen-itza_mexico.png"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "Italy",
    image: require("../../../assets/WorldMonuments/Europe/colosseum.jpg"),
    options: [
      {
        id: "0",
        capital: 'Palace of \nVersailles',
        country: 'France'
      },
      {
        id: "1",
        capital: 'Arc de \nTriumph',
        country: 'France'
      },
      {
        id: "2",
        capital: 'Knossos',
        country: 'Greece'
      },
      {
        id: "3",
        capital: 'Colosseum',
        country: 'Italy'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "9b",
    status: "Flags",
    country: "Colosseum",
    capital: "Italy",
    options: [
      {
        id: "0",
        country: "Palace of Versailles\nFrance",
        img: require("../../../assets/WorldMonuments/Europe/Palace-of-Versailles-France.png"),
      },
      {
        id: "1",
        country: "Knossos\nGreece",
        img: require("../../../assets/WorldMonuments/Europe/knossos.png"),
      },
      {
        id: "2",
        country: "Arc de Triumph\nFrance",
        img: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.png"),
      },
      {
        id: "3",
        country: "Colosseum\nItaly",
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
        capital: 'The Great\nWall',
        country: 'China'
      },
      {
        id: "1",
        capital: 'Great \nOcean Road',
        country: 'Australia'
      },
      {
        id: "2",
        capital: 'Forbidden \nCity',
        country: 'China'
      },
      {
        id: "3",
        capital: 'Temple \nof Heaven',
        country: 'China'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "10b",
    status: "Flags",
    country: "The Great Wall of China",
    capital: "China",
    options: [
      {
        id: "0",
        country: "Great Wall of China\nChina",
        img: require("../../../assets/WorldMonuments/Asia/theGreatWallChina.png"),
      },
      {
        id: "1",
        country: "Great Ocean Road\nAustralia",
        img: require("../../../assets/WorldMonuments/Oceania/greatoceanroad.png"),
      },
      {
        id: "2",
        country: "Forbidden City\nChina",
        img: require("../../../assets/WorldMonuments/Asia/forbidden-city.jpg"),
      },
      {
        id: "3",
        country: "Temple of Heaven\nChina",
        img: require("../../../assets/WorldMonuments/Asia/temple-of-heaven-in-beijing.png"),
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
