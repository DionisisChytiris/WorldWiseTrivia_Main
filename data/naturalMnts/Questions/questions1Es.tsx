const questions1Es = [
  {
    id: "1a",
    img: 'L',
    status: "Capitals",
    country: "EE.UU.",
    image: require("../../../assets/NaturalMnt/America/yellowstone.webp"),
    options: [
      {
        id: "0",
        capital: 'Salto Ángel',
        country: 'Venezuela'
      },
      {
        id: "1",
        capital: 'Gran Agujero Azul',
        country: 'Belice'
      },
      {
        id: "2",
        capital: 'Great Smoky Mountains',
        country: 'EE.UU.'
      },
      {
        id: "3",
        capital: 'Parque  nacional de Yellowstone',
        country: 'EE.UU.'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "1b",
    status: "Flags",
    country: "Parque  nacional de Yellowstone",
    capital: "EE.UU.",
    options: [
      {
        id: "0",
        country: "Salto Ángel \nVenezuela",
        img: require("../../../assets/NaturalMnt/America/Angel-Falls.webp"),
      },
      {
        id: "1",
        country: "Gran Agujero Azul\nBelice",
        img: require("../../../assets/NaturalMnt/America/Great-Blue-Hole.webp"),
      },
      {
        id: "2",
        country: "Great Smoky Mountains\nEE.UU.",
        img: require("../../../assets/NaturalMnt/America/GreatSmokyMountains.webp"),
      },
      {
        id: "3",
        country: "Parque  nacional de Yellowstone",
        img: require("../../../assets/NaturalMnt/America/yellowstone.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2a",
    status: "Capitals",
    img: 'L',
    country: "Zimbabue/Zambia",
    image: require("../../../assets/NaturalMnt/Africa/Victoria-Falls.webp"),
    options: [
      {
        id: "0",
        capital: 'Sossuvlei',
        country: 'Namibia'
      },
      {
        id: "1",
        capital: 'Cataratas Victoria',
        country: 'Zimbabue/Zambia'
      },
      {
        id: "2",
        capital: 'Parque Nacional del Desierto Blanco',
        country: 'c'
      },
      {
        id: "3",
        capital: 'Monte Kilimanjaro',
        country: 'Tanzania'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "2b",
    status: "Flags",
    country: "Cataratas Victoria",
    capital: "Zimbabue/Zambia",
    options: [
      {
        id: "0",
        country: "Sossuvlei\nNamibia",
        img: require("../../../assets/NaturalMnt/Africa/Sossusvlei-Dunes.webp"),
      },
      {
        id: "1",
        country: "Cataratas Victoria\nZimbabue/Zambia",
        img: require("../../../assets/NaturalMnt/Africa/Victoria-Falls.webp"),
      },
      {
        id: "2",
        country: "Parque Nacional del Desierto Blanco\nEgipto",
        img: require("../../../assets/NaturalMnt/Africa/Egypt-White-Desert-National.webp"),
      },
      {
        id: "3",
        country: "Monte Kilimanjaro\nTanzania",
        img: require("../../../assets/NaturalMnt/Africa/Kilimanjaro.webp"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "EE.UU.",
    image: require("../../../assets/NaturalMnt/America/Antelope-Canyon.webp"),
    options: [
      {
        id: "0",
        capital: 'Parque Nacional de los Arcos',
        country: 'EE.UU.'
      },
      {
        id: "1",
        capital: 'Capadocia',
        country: 'Turquía'
      },
      {
        id: "2",
        capital: 'Pamukale',
        country: 'Turquía'
      },
      {
        id: "3",
        capital: 'Cañón del Antílope',
        country: 'EE.UU.'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "3b",
    status: "Flags",
    country: "Cañón del Antílope",
    capital: "EE.UU.",
    options: [
      {
        id: "0",
        country: "Parque Nacional de los Arcos\nEE.UU.",
        img: require("../../../assets/NaturalMnt/America/Arches-National-Park.webp"),
      },
      {
        id: "1",
        country: "Capadocia\nTurquía",
        img: require("../../../assets/NaturalMnt/Asia/Cappadocia-valley.webp"),
      },
      {
        id: "2",
        country: "Pamukale\nTurquía",
        img: require("../../../assets/NaturalMnt/Asia/Pamukkale.webp"),
      },
      {
        id: "3",
        country: "Cañón del Antílope\nEE.UU.",
        img: require("../../../assets/NaturalMnt/America/Antelope-Canyon.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "4a",
    status: "Capitals",
    img: 'L',
    country: "Nepal/China",
    image: require("../../../assets/NaturalMnt/Asia/Mount-Everest.webp"),
    options: [
      {
        id: "0",
        capital: 'Monte Everest',
        country: 'Nepal/China'
      },
      {
        id: "1",
        capital: 'Monte Fuji',
        country: 'Japón'
      },
      {
        id: "2",
        capital: 'Monte Otemanu',
        country: 'Polinesia Francesa'
      },
      {
        id: "3",
        capital: 'Acantilados de Moher',
        country: 'Irlanda'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "4b",
    status: "Flags",
    country: "Monte Everest",
    capital: "Nepal/China",
    options: [
      {
        id: "0",
        country: "Monte Everest\nNepal/China",
        img: require("../../../assets/NaturalMnt/Asia/Mount-Everest.webp"),
      },
      {
        id: "1",
        country: "Monte Fuji\nJapón",
        img: require("../../../assets/NaturalMnt/Asia/mount_fuji.webp"),
      },
      {
        id: "2",
        country: "Monte Otemanu\nPolinesia Francesa",
        img: require("../../../assets/NaturalMnt/Asia/mountOtemanu.png"),
      },
      {
        id: "3",
        country: "Acantilados de Moher\nIrlanda",
        img: require("../../../assets/NaturalMnt/Europe/CliffsofMoher.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "5a",
    status: "Capitals",
    img: 'L',
    country: "Belice",
    image: require("../../../assets//NaturalMnt/America/Great-Blue-Hole.webp"),
    options: [
      {
        id: "0",
        capital: 'Kauai',
        country: 'Hawai'
      },
      {
        id: "1",
        capital: 'Lago Titicaca',
        country: 'Bolivia/Perú'
      },
      {
        id: "2",
        capital: 'Gran Agujero Azul',
        country: 'Belice'
      },
      {
        id: "3",
        capital: 'Uluru',
        country: 'Australia'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "5b",
    status: "Flags",
    country: "Gran Agujero Azul",
    capital: "Belice",
    options: [
      {
        id: "0",
        country: "Kauai\nHawai",
        img: require("../../../assets/NaturalMnt/America/KauaiUSA.webp"),
      },
      {
        id: "1",
        country: "Lago Titicaca\nBolivia/Perú",
        img: require("../../../assets/NaturalMnt/America/lakeTiticaca.webp"),
      },
      {
        id: "2",
        country: "Gran Agujero Azul\nBelice",
        img: require("../../../assets/NaturalMnt/America/Great-Blue-Hole.webp"),
      },
      {
        id: "3",
        country: "Uluru\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/Ayers-Rock.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "Inglaterra",
    image: require("../../../assets/NaturalMnt/Europe/sevensisters.webp"),
    options: [
      {
        id: "0",
        capital: 'Trolltunga',
        country: 'Noruega'
      },
      {
        id: "1",
        capital: 'Seven Sisters',
        country: 'Inglaterra'
      },
      {
        id: "2",
        capital: 'Calzada del Gigante',
        country: 'Irlanda'
      },
      {
        id: "3",
        capital: 'Laguna Azul',
        country: 'Islandia'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6b",
    status: "Flags",
    country: "Seven Sisters",
    capital: "Inglaterra",
    options: [
      {
        id: "0",
        country: "Trolltunga\nNoruega",
        img: require("../../../assets//NaturalMnt/Europe/Trolltunga.webp"),
      },
      {
        id: "1",
        country: "Seven Sisters\nInglaterra",
        img: require("../../../assets/NaturalMnt/Europe/sevensisters.webp"),
      },
      {
        id: "2",
        country: "Calzada del Gigante\nIrlanda",
        img: require("../../../assets/NaturalMnt/Europe/GiantsCauseway.webp"),
      },
      {
        id: "3",
        country: "Laguna Azul\nIslandia",
        img: require("../../../assets/NaturalMnt/Europe/BlueLagoon.webp"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "7a",
    status: "Capitals",
    img: 'L',
    country: "Australia",
    image: require("../../../assets/NaturalMnt/Oceania/12-apostels.webp"),
    options: [
      {
        id: "0",
        capital: 'Los Doce Apóstoles',
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
        capital: 'Cabo de Buena Esperanza',
        country: 'Sudáfrica'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "7b",
    status: "Flags",
    country: "Los Doce Apóstoles",
    capital: "Australia",
    options: [
      {
        id: "0",
        country: "Los Doce Apóstoles\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/12-apostels.webp"),
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
        country: "Cabo de Buena Esperanza\nSudáfrica",
        img: require("../../../assets/NaturalMnt/Africa/CapeofGoodHope.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "Japón",
    image: require("../../../assets/NaturalMnt/Asia/mount_fuji.webp"),
    options: [
      {
        id: "0",
        capital: 'Monte Ararat',
        country: 'Turquía'
      },
      {
        id: "1",
        capital: 'Monte Fuji',
        country: 'Japón'
      },
      {
        id: "2",
        capital: 'Monte Huang',
        country: 'China'
      },
      {
        id: "3",
        capital: 'Monte Kinabalu',
        country: 'Malasia'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "8b",
    status: "Flags",
    country: "Monte Fuji",
    capital: "Japón",
    options: [
      {
        id: "0",
        country: "Monte Ararat\nTurquía",
        img: require("../../../assets/NaturalMnt/Asia/mountArarat.webp"),
      },
      {
        id: "1",
        country: "Monte Fuji\nJapón",
        img: require("../../../assets/NaturalMnt/Asia/mount_fuji.webp"),
      },
      {
        id: "2",
        country: "Monte Huang\nChina",
        img: require("../../../assets/NaturalMnt/Asia/mountHuangshan.webp"),
      },
      {
        id: "3",
        country: "Monte Kinabalu\nMalasia",
        img: require("../../../assets/NaturalMnt/Asia/MountKinabalu.webp"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "Turquía",
    image: require("../../../assets/NaturalMnt/Asia/Cappadocia-valley.webp"),
    options: [
      {
        id: "0",
        capital: 'Área escénica de Huanglong',
        country: 'China'
      },
      {
        id: "1",
        capital: 'Isla de Skye',
        country: 'Escocia'
      },
      {
        id: "2",
        capital: 'Roca del Púlpito',
        country: 'Noruega'
      },
      {
        id: "3",
        capital: 'Capadocia',
        country: 'Turquía'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "9b",
    status: "Flags",
    country: "Capadocia",
    capital: "Turquía",
    options: [
      {
        id: "0",
        country: "Área escénica de Huanglong\nChina",
        img: require("../../../assets/NaturalMnt/Asia/huanglongScenicArea.webp"),
      },
      {
        id: "1",
        country: "Isla de Skye\nEscocia",
        img: require("../../../assets/NaturalMnt/Europe/isleofSkye.jpg"),
      },
      {
        id: "2",
        country: "Roca del Púlpito\nNoruega",
        img: require("../../../assets/NaturalMnt/Europe/pulpitRock.webp"),
      },
      {
        id: "3",
        country: "Capadocia\nTurquía",
        img: require("../../../assets/NaturalMnt/Asia/Cappadocia-valley.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "10a",
    status: "Capitals",
    img: 'L',
    country: "Italia",
    image: require("../../../assets/NaturalMnt/Europe/mount-vesuvius.webp"),
    options: [
      {
        id: "0",
        capital: 'Monte Vesubio',
        country: 'Italia'
      },
      {
        id: "1",
        capital: 'Alpes suizos',
        country: 'Suiza'
      },
      {
        id: "2",
        capital: 'Monte Teide',
        country: 'España'
      },
      {
        id: "3",
        capital: 'Parque Nacional de las Grandes Dunas de Arena',
        country: 'EE.UU.'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "10b",
    status: "Flags",
    country: "Monte Vesubio",
    capital: "Italia",
    options: [
      {
        id: "0",
        country: "Monte Vesubio\nItalia",
        img: require("../../../assets/NaturalMnt/Europe/mount-vesuvius.webp"),
      },
      {
        id: "1",
        country: "Alpes suizos\nSuiza",
        img: require("../../../assets/NaturalMnt/Europe/swissapls.jpg"),
      },
      {
        id: "2",
        country: "Monte Teide\nEspaña",
        img: require("../../../assets/NaturalMnt/Europe/mountTeide.webp"),
      },
      {
        id: "3",
        country: "Parque Nacional de las Grandes Dunas de Arena\nEE.UU.",
        img: require("../../../assets/NaturalMnt/America/GreatSandDunesPark.webp"),
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
