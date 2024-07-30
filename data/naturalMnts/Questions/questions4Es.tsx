const questions4Es = [
  {
    id: "1a",
    status: "Capitals",
    img: 'L',
    country: "Egipto",
    image: require("../../../assets/NaturalMnt/Africa/mountSinai.webp"),
    options: [
      {
        id: "0",
        capital: "Cascada de Dettifoss",
        country: "Islandia",
      },
      {
        id: "1",
        capital: "Parque Nacional de Banff",
        country: "Canadá",
      },
      {
        id: "2",
        capital: "Lago Titicaca",
        country: "Bolivia/Perú",
      },
      {
        id: "3",
        capital: "Monte Sinaí",
        country: "Egipto",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "1b",
    status: "Flags",
    country: "Monte Sinaí",
    capital: "Egipto",
    options: [
      {
        id: "0",
        country: "Cascada de Dettifoss\nIslandia",
        img: require("../../../assets/NaturalMnt/Europe/dettifossWaterfall.webp"),
      },
      {
        id: "1",
        country: "Parque Nacional de Banff\nCanadá",
        img: require("../../../assets/NaturalMnt/America/BanffNationalPark.webp"),
      },
      {
        id: "2",
        country: "Lago Titicaca\nBolivia/Perú",
        img: require("../../../assets/NaturalMnt/America/lakeTiticaca.webp"),
      },
      {
        id: "3",
        country: "Monte Sinaí\nEgipto",
        img: require("../../../assets/NaturalMnt/Africa/mountSinai.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2a",
    status: "Capitals",
    img: 'L',
    country: "EE.UU.",
    image: require("../../../assets/NaturalMnt/America/TheNeedles.webp"),
    options: [
      {
        id: "0",
        capital: "Torres del Paine",
        country: "Chile",
      },
      {
        id: "1",
        capital: "Parque Nacional de Yosemite",
        country: "EE.UU.",
      },
      {
        id: "2",
        capital: "Las Agujas",
        country: "EE.UU.",
      },
      {
        id: "3",
        capital: "Pamukale",
        country: "Turquía",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "2b",
    status: "Flags",
    country: "Las Agujas",
    capital: "EE.UU.",
    options: [
      {
        id: "0",
        country: "Torres del Paine\nChile",
        img: require("../../../assets/NaturalMnt/America/torres-del-paine.webp"),
      },
      {
        id: "1",
        country: "Parque Nacional de Yosemite\nEE.UU",
        img: require("../../../assets/NaturalMnt/America/yosemite-national-park.webp"),
      },
      {
        id: "2",
        country: "Las Agujas\nEE.UU.",
        img: require("../../../assets/NaturalMnt/America/TheNeedles.webp"),
      },
      {
        id: "3",
        country: "Pamukale\nTurquía",
        img: require("../../../assets/NaturalMnt/Asia/Pamukkale.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "Ecuador",
    image: require("../../../assets/NaturalMnt/America/galapagosIslands.webp"),
    options: [
      {
        id: "0",
        capital: 'Islas Galápagos',
        country: 'Ecuador'
      },
      {
        id: "1",
        capital: 'Bora Bora',
        country: 'Polinesia Francesa'
      },
      {
        id: "2",
        capital: 'Gran Barrera de Coral',
        country: 'Australia'
      },
      {
        id: "3",
        capital: 'Bahía de Halong',
        country: 'Vietnam'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "3b",
    status: "Flags",
    country: "Islas Galápagos",
    capital: "Ecuador",
    options: [
      {
        id: "0",
        country: "Islas Galápagos\nEcuador",
        img: require("../../../assets/NaturalMnt/America/galapagosIslands.webp"),
      },
      {
        id: "1",
        country: "Bora Bora\nPolinesia Francesa",
        img: require("../../../assets/NaturalMnt/Asia/bora_bora.webp"),
      },
      {
        id: "2",
        country: "Gran Barrera de Coral\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/greatBarrierReef.webp"),
      },
      {
        id: "3",
        country: "Bahía de Halong\nVietnam",
        img: require("../../../assets/NaturalMnt/Asia/halongbay-0.png"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "4a",
    status: "Capitals",
    img: 'L',
    country: "EE.UU.",
    image: require("../../../assets/NaturalMnt/America/GreatSmokyMountains.webp"),
    options: [
      {
        id: "0",
        capital: 'Selva Negra',
        country: 'Alemania'
      },
      {
        id: "1",
        capital: 'Montaña Arco Iris (Vinicunca)s',
        country: 'Perú'
      },
      {
        id: "2",
        capital: 'Great Smoky Mountains',
        country: 'EE.UU.'
      },
      {
        id: "3",
        capital: 'Monte Yasur',
        country: 'Vanuatu'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "4b",
    status: "Flags",
    country: "Great Smoky Mountains",
    capital: "EE.UU.",
    options: [
      {
        id: "0",
        country: "Selva Negra",
        img: require("../../../assets/NaturalMnt/Europe/blackForest.webp"),
      },
      {
        id: "1",
        country: "Montaña Arco Iris (Vinicunca)s\nPerú",
        img: require("../../../assets/NaturalMnt/America/rainbowMountain.webp"),
      },
      {
        id: "2",
        country: "Great Smoky Mountains",
        img: require("../../../assets/NaturalMnt/America/GreatSmokyMountains.webp"),
      },
      {
        id: "3",
        country: "Monte Yasur\nVanuatu",
        img: require("../../../assets/NaturalMnt/Oceania/yasur_mount.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "5a",
    status: "Capitals",
    img: 'L',
    country: "Irlanda",
    image: require("../../../assets/NaturalMnt/Europe/GiantsCauseway.webp"),
    options: [
      {
        id: "0",
        capital: 'Laguna Azul',
        country: 'Islandia'
      },
      {
        id: "1",
        capital: 'Calzada del Gigante',
        country: 'Irlanda'
      },
      {
        id: "2",
        capital: 'Avenidas de Baobabs',
        country: 'Madagascar'
      },
      {
        id: "3",
        capital: 'Cataratas de Kalandula',
        country: 'Angola'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "5b",
    status: "Flags",
    country: "Calzada del Gigante",
    capital: "Irlanda",
    options: [
      {
        id: "0",
        country: "Laguna Azul\nIslandia",
        img: require("../../../assets/NaturalMnt/Europe/BlueLagoon.webp"),
      },
      {
        id: "1",
        country: "Calzada del Gigante\nIrlanda",
        img: require("../../../assets/NaturalMnt/Europe/GiantsCauseway.webp"),
      },
      {
        id: "2",
        country: "Avenidas de Baobabs\nMadagascar",
        img: require("../../../assets/NaturalMnt/Africa/avenueofboababs.webp"),
      },
      {
        id: "3",
        country: "Cataratas de Kalandula\nAngola",
        img: require("../../../assets/NaturalMnt/Africa/kalandula-falls-angola.webp"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "Kenia",
    image: require("../../../assets/NaturalMnt/Africa/mountKenya.webp"),
    options: [
      {
        id: "0",
        capital: 'Monte Vesubio',
        country: 'Italia'
      },
      {
        id: "1",
        capital: 'Montañas Azules',
        country: 'Australia'
      },
      {
        id: "2",
        capital: 'Monte Kenia',
        country: 'Kenia'
      },
      {
        id: "3",
        capital: 'Monte Ararat',
        country: 'Turquía'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "6b",
    status: "Flags",
    country: "Monte Kenia",
    capital: "Kenia",
    options: [
      {
        id: "0",
        country: "Monte Vesubio\nItalia",
        img: require("../../../assets/NaturalMnt/Europe/mount-vesuvius.webp"),
      },
      {
        id: "1",
        country: "Montañas Azules\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/Australia-Blue-Mountains.webp"),
      },
      {
        id: "2",
        country: "Monte Kenia\nKenia",
        img: require("../../../assets/NaturalMnt/Africa/mountKenya.webp"),
      },
      {
        id: "3",
        country: "Monte Ararat\nTurquía",
        img: require("../../../assets/NaturalMnt/Asia/mountArarat.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7a",
    status: "Capitals",
    img: 'L',
    country: "Canadá/EE.UU.",
    image: require("../../../assets/NaturalMnt/America/NiagaraFalls.webp"),
    options: [
      {
        id: "0",
        capital: 'Cataratas del Niágara',
        country: 'Canadá/EE.UU.'
      },
      {
        id: "1",
        capital: 'Parque Nacional de las Dunas de Yeso',
        country: 'EE.UU.'
      },
      {
        id: "2",
        capital: 'Monte Cook',
        country: 'Nueva Zelanda'
      },
      {
        id: "3",
        capital: 'Monte Yasur',
        country: 'Vanuatu'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "7b",
    status: "Flags",
    country: "Cataratas del Niágara",
    capital: "Canadá/EE.UU.",
    options: [
      {
        id: "0",
        country: "Cataratas del Niágara\nCanadá/EE.UU.",
        img: require("../../../assets/NaturalMnt/America/NiagaraFalls.webp"),
      },
      {
        id: "1",
        country: "Parque Nacional de las Dunas de Yeso\nEE.UU",
        img: require("../../../assets/NaturalMnt/America/white-sandsNationalPark.webp"),
      },
      {
        id: "2",
        country: "Monte Cook\nNueva Zelanda",
        img: require("../../../assets/NaturalMnt/Oceania/mountcook.webp"),
      },
      {
        id: "3",
        country: "Monte Yasur\nVanuatu",
        img: require("../../../assets/NaturalMnt/Oceania/yasur_mount.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "Chile",
    image: require("../../../assets/NaturalMnt/America/torres-del-paine.webp"),
    options: [
      {
        id: "0",
        capital: 'Sossusvlei',
        country: 'Namibia'
      },
      {
        id: "1",
        capital: 'Pamukale',
        country: 'Turquía'
      },
      {
        id: "2",
        capital: 'Torres de Paine',
        country: 'Chile'
      },
      {
        id: "3",
        capital: 'Wadi Rum',
        country: 'Jordania'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "8b",
    status: "Flags",
    country: "Torres de Paine",
    capital: "Chile",
    options: [
      {
        id: "0",
        country: "Sossusvlei\nNamibia",
        img: require("../../../assets/NaturalMnt/Africa/Sossusvlei-Dunes.webp"),
      },
      {
        id: "1",
        country: "Pamukale\nTurquía",
        img: require("../../../assets/NaturalMnt/Asia/Pamukkale.webp"),
      },
      {
        id: "2",
        country: "Torres de Paine\nChile",
        img: require("../../../assets/NaturalMnt/America/torres-del-paine.webp"),
      },
      {
        id: "3",
        country: "Wadi Rum\nJordania",
        img: require("../../../assets/NaturalMnt/Asia/wadi-rum.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "España",
    image: require("../../../assets/NaturalMnt/Europe/mountTeide.webp"),
    options: [
      {
        id: "0",
        capital: 'Uluru',
        country: 'Australia'
      },
      {
        id: "1",
        capital: 'Parque Nacional de Fiordland',
        country: 'Nueva Zelanda'
      },
      {
        id: "2",
        capital: 'Parque Nacional de Kakadu',
        country: 'Australia'
      },
      {
        id: "3",
        capital: 'Monte Teide',
        country: 'España'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "9b",
    status: "Flags",
    country: "Monte Teide",
    capital: "España",
    options: [
      {
        id: "0",
        country: "Uluru\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/Ayers-Rock.webp"),
      },
      {
        id: "1",
        country: "Parque Nacional de Fiordland\nNueva Zelanda",
        img: require("../../../assets/NaturalMnt/Oceania/fiordlandNationalPark.webp"),
      },
      {
        id: "2",
        country: "Parque Nacional de Kakadu\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/kakadu.webp"),
      },
      {
        id: "3",
        country: "Monte Teide\nEspaña",
        img: require("../../../assets/NaturalMnt/Europe/mountTeide.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "10a",
    status: "Capitals",
    img: 'L',
    country: "Eslovenia",
    image: require("../../../assets/NaturalMnt/Europe/lake-bled.webp"),
    options: [
      {
        id: "0",
        capital: 'Monte Elbrus',
        country: 'Rusia'
      },
      {
        id: "1",
        capital: 'Lago Bled',
        country: 'Eslovenia'
      },
      {
        id: "2",
        capital: 'Picos de Europa',
        country: 'España'
      },
      {
        id: "3",
        capital: 'Alpes suizos',
        country: 'Suiza'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "10b",
    status: "Flags",
    country: "Lago Bled",
    capital: "Eslovenia",
    options: [
      {
        id: "0",
        country: "Monte Elbrus\nRusia",
        img: require("../../../assets/NaturalMnt/Europe/mount-elbrus.webp"),
      },
      {
        id: "1",
        country: "Lago Bled\nEslovenia",
        img: require("../../../assets/NaturalMnt/Europe/lake-bled.webp"),
      },
      {
        id: "2",
        country: "Picos de Europa\nEspaña",
        img: require("../../../assets/NaturalMnt/Europe/PicosdeEuropa.webp"),
      },
      {
        id: "3",
        country: "Alpes suizos\nSuiza",
        img: require("../../../assets/NaturalMnt/Europe/swissapls.jpg"),
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
