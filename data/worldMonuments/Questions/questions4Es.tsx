const questions4Es = [
  {
    id: "1a",
    status: "Capitals",
    img: 'L',
    country: "Italia",
    image: require("../../../assets/WorldMonuments/Europe/trevi-fontein-rome.png"),
    options: [
      {
        id: "0",
        capital: "Spanish Steps",
        country: "Italia",
      },
      {
        id: "1",
        capital: "Rialto Bridge",
        country: "Italia",
      },
      {
        id: "2",
        capital: "Guggenheim\nMuseum",
        country: "España",
      },
      {
        id: "3",
        capital: "Trevi \nFountain",
        country: "Italia",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "1b",
    status: "Flags",
    country: "Trevi Fountain",
    capital: "Italia",
    options: [
      {
        id: "0",
        country: "Spanish Steps\nItalia",
        img: require("../../../assets/WorldMonuments/Europe/spanish-steps-rome.png"),
      },
      {
        id: "1",
        country: "Rialto Bridge\nItalia",
        img: require("../../../assets/WorldMonuments/Europe/Rialto-Bridge.png"),
      },
      {
        id: "2",
        country: "Guggenheim Museum\nSpain",
        img: require("../../../assets/WorldMonuments/Europe/GuggenheimBilbao.png"),
      },
      {
        id: "3",
        country: "Trevi Fountain\nItalia",
        img: require("../../../assets/WorldMonuments/Europe/trevi-fontein-rome.png"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2a",
    status: "Capitals",
    img: 'L',
    country: "UK",
    image: require("../../../assets/WorldMonuments/Europe/bigBen.png"),
    options: [
      {
        id: "0",
        capital: "Westminster\nAbbey",
        country: "UK",
      },
      {
        id: "1",
        capital: "Palacio de Buckingham",
        country: "UK",
      },
      {
        id: "2",
        capital: "Big Ben",
        country: "UK",
      },
      {
        id: "3",
        capital: "Puente de la Torre",
        country: "UK",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "2b",
    status: "Flags",
    country: "Big Ben",
    capital: "UK",
    options: [
      {
        id: "0",
        country: "Palacio de Buckingham\nUK",
        img: require("../../../assets/WorldMonuments/Europe/buckinghampalace.png"),
      },
      {
        id: "1",
        country: "Abadía de Westminster \nUK",
        img: require("../../../assets/WorldMonuments/Europe/westminster-abbey.png"),
      },
      {
        id: "2",
        country: "Big Ben\nUK",
        img: require("../../../assets/WorldMonuments/Europe/bigBen.png"),
      },
      {
        id: "3",
        country: "Puente de la Torre\nUK",
        img: require("../../../assets/WorldMonuments/Europe/TowerBridge.png"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "Australia",
    image: require("../../../assets/WorldMonuments/Oceania/harbour-bridge.png"),
    options: [
      {
        id: "0",
        capital: 'Sydney\nHarbour Bridge',
        country: 'Australia'
      },
      {
        id: "1",
        capital: 'Brooklyn\nBridge',
        country: 'Estados Unidos'
      },
      {
        id: "2",
        capital: 'Puente de la Torre',
        country: 'UK'
      },
      {
        id: "3",
        capital: 'Golden\nGate Bridge',
        country: 'Estados Unidos'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "3b",
    status: "Flags",
    country: "Sydney Harbour Bridge",
    capital: "Australia",
    options: [
      {
        id: "0",
        country: "Sydney Harbour Bridge\nAustralia",
        img: require("../../../assets/WorldMonuments/Oceania/harbour-bridge.png"),
      },
      {
        id: "1",
        country: "Brooklyn Bridge\nUSA",
        img: require("../../../assets/WorldMonuments/USA/brooklyn-bridge.png"),
      },
      {
        id: "2",
        country: "Puente Golden Gate\nUSA",
        img: require("../../../assets/WorldMonuments/USA/Golden-Gate-San-Francisco.png"),
      },
      {
        id: "3",
        country: "Puente de la Torre\nUK",
        img: require("../../../assets/WorldMonuments/Europe/TowerBridge.png"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "4a",
    status: "Capitals",
    img: 'L',
    country: "Tibet",
    image: require("../../../assets/WorldMonuments/Asia/potalaPalaceTibet.png"),
    options: [
      {
        id: "0",
        capital: 'Tiger\'s nest',
        country: 'Bután'
      },
      {
        id: "1",
        capital: 'Angkor Wat',
        country: 'Camboya'
      },
      {
        id: "2",
        capital: 'Palacio de Potala ',
        country: 'Tibet'
      },
      {
        id: "3",
        capital: 'Sigiriya',
        country: 'Sri Lanka'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "4b",
    status: "Flags",
    country: "Palacio de Potala ",
    capital: "Tibet",
    options: [
      {
        id: "0",
        country: "Sigiriya\nSri Lanka",
        img: require("../../../assets/WorldMonuments/Asia/Sigiriya__Sri_Lanka.png"),
      },
      {
        id: "1",
        country: "Angkor Wat\nCambodia",
        img: require("../../../assets/WorldMonuments/Asia/AngkorWat.png"),
      },
      {
        id: "2",
        country: "Palacio de Potala \nTibet",
        img: require("../../../assets/WorldMonuments/Asia/potalaPalaceTibet.png"),
      },
      {
        id: "3",
        country: "Tiger's Nest\nBhutan",
        img: require("../../../assets/WorldMonuments/Asia/TigersNestBhutan.png"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "5a",
    status: "Capitals",
    img: 'L',
    country: "Francia",
    image: require("../../../assets/WorldMonuments/Europe/notreDame.png"),
    options: [
      {
        id: "0",
        capital: 'Acrópolis',
        country: 'Grecia'
      },
      {
        id: "1",
        capital: 'Notre Dame',
        country: 'Francia'
      },
      {
        id: "2",
        capital: 'Duomo\ndi Milan',
        country: 'Italia'
      },
      {
        id: "3",
        capital: 'Sistine Chapel',
        country: 'Vatican City'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "5b",
    status: "Flags",
    country: "Notre Dame",
    capital: "Francia",
    options: [
      {
        id: "0",
        country: "Acrópolis\nGreece",
        img: require("../../../assets/WorldMonuments/Europe/Acropolis.png"),
      },
      {
        id: "1",
        country: "Notre Dame\nFrance",
        img: require("../../../assets/WorldMonuments/Europe/notreDame.png"),
      },
      {
        id: "2",
        country: "Castillo de Bran\nRomania",
        img: require("../../../assets/WorldMonuments/Europe/Bran-CastleDracula.png"),
      },
      {
        id: "3",
        country: "Borgund Stave Church\nNorway",
        img: require("../../../assets/WorldMonuments/Europe/borgund-stave-church-Norway.png"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "UK",
    image: require("../../../assets/WorldMonuments/Europe/buckinghampalace.png"),
    options: [
      {
        id: "0",
        capital: 'Palacio Real de Madrid',
        country: 'España'
      },
      {
        id: "1",
        capital: 'Gran Palacio',
        country: 'Tailandia'
      },
      {
        id: "2",
        capital: 'Palacio de Buckingham',
        country: 'UK'
      },
      {
        id: "3",
        capital: 'Palace of\nWestminster',
        country: 'UK'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "6b",
    status: "Flags",
    country: "Palacio de Buckingham",
    capital: "UK",
    options: [
      {
        id: "0",
        country: "Gran Palacio\nThailand",
        img: require("../../../assets/WorldMonuments/Asia/the-grand-palace.png"),
      },
      {
        id: "1",
        country: "Palacio Real de Madrid\nSpain",
        img: require("../../../assets/WorldMonuments/Europe/RoyalPalaceMadrid.png"),
      },
      {
        id: "2",
        country: "Palacio de Buckingham\nUK",
        img: require("../../../assets/WorldMonuments/Europe/buckinghampalace.png"),
      },
      {
        id: "3",
        country: "Palace of Westminster\nUK",
        img: require("../../../assets/WorldMonuments/Europe/palace-of-westminster_main.png"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7a",
    status: "Capitals",
    img: 'L',
    country: "Estados Unidos",
    image: require("../../../assets/WorldMonuments/USA/alcatraz.jpg"),
    options: [
      {
        id: "0",
        capital: 'Alcatraz\nIsland',
        country: 'Estados Unidos'
      },
      {
        id: "1",
        capital: 'Ellis\nIsland',
        country: 'Estados Unidos'
      },
      {
        id: "2",
        capital: 'Mont\nSaint Michel',
        country: 'Francia'
      },
      {
        id: "3",
        capital: 'Alhambra',
        country: 'España'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "7b",
    status: "Flags",
    country: "Alcatraz Island",
    capital: "Estados Unidos",
    options: [
      {
        id: "0",
        country: "Alcatraz Island\nUSA",
        img: require("../../../assets/WorldMonuments/USA/alcatraz.png"),
      },
      {
        id: "1",
        country: "Ellis Island\nUSA",
        img: require("../../../assets/WorldMonuments/USA/ellis-island.png"),
      },
      {
        id: "2",
        country: "Monte Saint-Michel\nFrance",
        img: require("../../../assets/WorldMonuments/Europe/Mont-Saint-MichelNormandy.png"),
      },
      {
        id: "3",
        country: "Alhambra\nSpain",
        img: require("../../../assets/WorldMonuments/Europe/TheAlambraGranada.png"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "Japón",
    image: require("../../../assets/WorldMonuments/Asia/hiroshima_peace_memorial_park.png"),
    options: [
      {
        id: "0",
        capital: 'Imperial\nPalace',
        country: 'Japón'
      },
      {
        id: "1",
        capital: 'Castillo de Himeji',
        country: 'Japón'
      },
      {
        id: "2",
        capital: 'Hiroshima\nPeace\nMemorial',
        country: 'Japón'
      },
      {
        id: "3",
        capital: 'Fushimi\nInari Shrine',
        country: 'Japón'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "8b",
    status: "Flags",
    country: "Hiroshima Peace Memorial",
    capital: "Japón",
    options: [
      {
        id: "0",
        country: "Castillo de Himeji\nJapan",
        img: require("../../../assets/WorldMonuments/Asia/HimejiCastle.png"),
      },
      {
        id: "1",
        country: "Fushimi Inari Shrine\nJapan",
        img: require("../../../assets/WorldMonuments/Asia/FushimiInari-taishaShrineKyoto.png"),
      },
      {
        id: "2",
        country: "Hiroshima Peace Memorial Park\nJapan",
        img: require("../../../assets/WorldMonuments/Asia/hiroshima_peace_memorial_park.png"),
      },
      {
        id: "3",
        country: "Imperial Palace\nJapan",
        img: require("../../../assets/WorldMonuments/Asia/ImperialPalaceTokyo.png"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "Italia",
    image: require("../../../assets/WorldMonuments/Europe/TowerPisa.png"),
    options: [
      {
        id: "0",
        capital: 'Coliseo',
        country: 'Italia'
      },
      {
        id: "1",
        capital: 'Torre Eiffel ',
        country: 'Francia'
      },
      {
        id: "2",
        capital: 'Cité de\nCarcassonne',
        country: 'Francia'
      },
      {
        id: "3",
        capital: 'Leaning\nTower of Pisa',
        country: 'Italia'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "9b",
    status: "Flags",
    country: "Torre de Pisa",
    capital: "Italia",
    options: [
      {
        id: "0",
        country: "Cité de Carcassonne\nFrance",
        img: require("../../../assets/WorldMonuments/Europe/CitédeCarcassonne.png"),
      },
      {
        id: "1",
        country: "Coliseo\nItalia",
        img: require("../../../assets/WorldMonuments/Europe/colosseum.png"),
      },
      {
        id: "2",
        country: "Torre Eiffel \nFrance",
        img: require("../../../assets/WorldMonuments/Europe/eiffelTower.png"),
      },
      {
        id: "3",
        country: "Torre de Pisa\nItalia",
        img: require("../../../assets/WorldMonuments/Europe/TowerPisa.png"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "10a",
    status: "Capitals",
    img: 'L',
    country: "Estados Unidos",
    image: require("../../../assets/WorldMonuments/USA/Empire-State-Building.jpg"),
    options: [
      {
        id: "0",
        capital: 'The Shard',
        country: 'UK'
      },
      {
        id: "1",
        capital: 'Empire\nState Building',
        country: 'Estados Unidos'
      },
      {
        id: "2",
        capital: 'Petronas\nTowers',
        country: 'Malasia'
      },
      {
        id: "3",
        capital: 'Tokyo Tower',
        country: 'Japón'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "10b",
    status: "Flags",
    country: "Empire State Building",
    capital: "Estados Unidos",
    options: [
      {
        id: "0",
        country: "The Shard\nUK",
        img: require("../../../assets/WorldMonuments/Europe/TheShard.png"),
      },
      {
        id: "1",
        country: "Empire State Building\nUSA",
        img: require("../../../assets/WorldMonuments/USA/Empire-State-Building.png"),
      },
      {
        id: "2",
        country: "Petronas Towers\nMalaysia",
        img: require("../../../assets/WorldMonuments/Asia/PetronasTwinTowers.png"),
      },
      {
        id: "3",
        country: "Tokyo Tower\nJapan",
        img: require("../../../assets/WorldMonuments/Asia/TokyoTower.png"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "11",
    monument: "",
    country: "",
  },
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

export default questions4Es;
