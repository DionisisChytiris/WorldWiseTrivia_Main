const questions3Es = [
  {
    id: "1a",
    status: "Capitals",
    img: 'L',
    country: "EE.UU.",
    image: require("../../../assets/NaturalMnt/America/grandcanyon.webp"),
    options: [
      {
        id: "0",
        capital: "Gran Cañón",
        country: "EE.UU.",
      },
      {
        id: "1",
        capital: "Salto Ángel",
        country: "Venezuela",
      },
      {
        id: "2",
        capital: "Cañón del Antílope",
        country: "EE.UU.",
      },
      {
        id: "3",
        capital: "Parque Nacional del Chapada del Diamantina",
        country: "Brasil",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "1b",
    status: "Flags",
    country: "Gran Cañón",
    capital: "EE.UU.",
    options: [
      {
        id: "0",
        country: "Gran Cañón\nEE.UU.",
        img: require("../../../assets/NaturalMnt/America/grandcanyon.webp"),
      },
      {
        id: "1",
        country: "Salto Ángel\nVenezuela",
        img: require("../../../assets/NaturalMnt/America/Angel-Falls.webp"),
      },
      {
        id: "2",
        country: "Cañón del Antílope\nEE.UU.",
        img: require("../../../assets/NaturalMnt/America/Antelope-Canyon.webp"),
      },
      {
        id: "3",
        country: "Parque Nacional del Chapada del Diamantina\nBrasil",
        img: require("../../../assets/NaturalMnt/America/chadadaDiamantina.webp"),
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "2a",
    status: "Capitals",
    img: 'L',
    country: "Australia",
    image: require("../../../assets/NaturalMnt/Oceania/Ayers-Rock.webp"),
    options: [
      {
        id: "0",
        capital: "Cataratas del Iguazú",
        country: "Argentina/Brasil",
      },
      {
        id: "1",
        capital: "Kauai",
        country: "Hawai",
      },
      {
        id: "2",
        capital: "Uluru",
        country: "Australia",
      },
      {
        id: "3",
        capital: "Parque Nacional de la Montaña de la Mesa",
        country: "Sudáfrica",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "2b",
    status: "Flags",
    country: "Uluru",
    capital: "Australia",
    options: [
      {
        id: "0",
        country: "Cataratas del Iguazú\nArgentina/Brazil",
        img: require("../../../assets/NaturalMnt/America/iguazufalls.webp"),
      },
      {
        id: "1",
        country: "Kauai\nHawai",
        img: require("../../../assets/NaturalMnt/America/KauaiUSA.webp"),
      },
      {
        id: "2",
        country: "Uluru\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/Ayers-Rock.webp"),
      },
      {
        id: "3",
        country: "Parque Nacional de la Montaña de la Mesa\nSouth Africa",
        img: require("../../../assets/NaturalMnt/Africa/table-mountain.webp"),
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "Irlanda",
    image: require("../../../assets/NaturalMnt/Europe/CliffsofMoher.webp"),
    options: [
      {
        id: "0",
        capital: "Acantilados de Moher",
        country: "Irlanda",
      },
      {
        id: "1",
        capital: "Calzada del Gigante",
        country: "Irlanda",
      },
      {
        id: "2",
        capital: "Isla de Skye",
        country: "Escocia",
      },
      {
        id: "3",
        capital: "Aurora polar",
        country: "Zonas polares",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "3b",
    status: "Flags",
    country: "Acantilados de Moher",
    capital: "Irlanda",
    options: [
      {
        id: "0",
        country: "Acantilados de Moher\nIrlanda",
        img: require("../../../assets/NaturalMnt/Europe/CliffsofMoher.webp"),
      },
      {
        id: "1",
        country: "Calzada del Gigante\nIrlanda",
        img: require("../../../assets/NaturalMnt/Europe/GiantsCauseway.webp"),
      },
      {
        id: "2",
        country: "Isla de Skye\nEscocia",
        img: require("../../../assets/NaturalMnt/Europe/isleofSkye.jpg"),
      },
      {
        id: "3",
        country: "Aurora polar\nZonas polares",
        img: require("../../../assets/NaturalMnt/Europe/Northern-Lights-Desktop-Wallpaper.jpg"),
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "4a",
    status: "Capitals",
    img: 'L',
    country: "Italia",
    image: require("../../../assets/NaturalMnt/Europe/mountEtna.webp"),
    options: [
      {
        id: "0",
        capital: "Monte Teide",
        country: "España",
      },
      {
        id: "1",
        capital: "Bora Bora",
        country: "Polinesia Francesa",
      },
      {
        id: "2",
        capital: "Monte Etna",
        country: "Italia",
      },
      {
        id: "3",
        capital: "Monte Fuji",
        country: "Japón",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "4b",
    status: "Flags",
    country: "Monte Etna",
    capital: "Italia",
    options: [
      {
        id: "0",
        country: "Monte Teide\nEspaña",
        img: require("../../../assets/NaturalMnt/Europe/mountTeide.webp"),
      },
      {
        id: "1",
        country: "Bora Bora\nPolinesia Francesa",
        img: require("../../../assets/NaturalMnt/Asia/bora_bora.webp"),
      },
      {
        id: "2",
        country: "Monte Etna\nItalia",
        img: require("../../../assets/NaturalMnt/Europe/mountEtna.webp"),
      },
      {
        id: "3",
        country: "Monte Fuji\nJapón",
        img: require("../../../assets/NaturalMnt/Asia/mount_fuji.webp"),
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "5a",
    status: "Capitals",
    img: 'L',
    country: "Australia",
    image: require("../../../assets/NaturalMnt/Oceania/lakehillier.webp"),
    options: [
      {
        id: "0",
        capital: "Nilo",
        country: "Egipto",
      },
      {
        id: "1",
        capital: "Lago Bled",
        country: "Eslovenia",
      },
      {
        id: "2",
        capital: "Lagos de Plitvice",
        country: "Croacia",
      },
      {
        id: "3",
        capital: "Lago Hillier",
        country: "Australia",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: ''
  },
  {
    id: "5b",
    status: "Flags",
    country: "Lago Hillier",
    capital: "Australia",
    options: [
      {
        id: "0",
        country: "Nilo\nEgipto",
        img: require("../../../assets/NaturalMnt/Africa/RiverNile.webp"),
      },
      {
        id: "1",
        country: "Lago Bled\nEslovenia",
        img: require("../../../assets/NaturalMnt/Europe/lake-bled.webp"),
      },
      {
        id: "2",
        country: "Lagos de Plitvice\nCroacia",
        img: require("../../../assets/NaturalMnt/Europe/Plitvice-lakes.webp"),
      },
      {
        id: "3",
        country: "Lago Hillier\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/lakehillier.webp"),
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: ''
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "Tanzania",
    image: require("../../../assets/NaturalMnt/Africa/serengeti-national-park.webp"),
    options: [
      {
        id: "0",
        capital: "Parque Nacional del Serengeti",
        country: "Tanzania",
      },
      {
        id: "1",
        capital: "Depresión de Danakil",
        country: "Etiopía",
      },
      {
        id: "2",
        capital: "Cañón de Charyn",
        country: "Kazajstán",
      },
      {
        id: "3",
        capital: "Área escénica de Huanglong",
        country: "China",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "6b",
    status: "Flags",
    country: "Parque Nacional del Serengeti",
    capital: "Tanzania",
    options: [
      {
        id: "0",
        country: "Parque Nacional del Serengeti\nTanzania",
        img: require("../../../assets/NaturalMnt/Africa/serengeti-national-park.webp"),
      },
      {
        id: "1",
        country: "Depresión de Danakil\nEtiopía",
        img: require("../../../assets/NaturalMnt/Africa/The Danakil DepressionEthiopia.webp"),
      },
      {
        id: "2",
        country: "Cañón de Charyn\nKazajstán",
        img: require("../../../assets/NaturalMnt/Asia/charynCanyon.webp"),
      },
      {
        id: "3",
        country: "Área escénica de Huanglong\nChina",
        img: require("../../../assets/NaturalMnt/Asia/huanglongScenicArea.webp"),
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "7a",
    status: "Capitals",
    img: 'L',
    country: "EE.UU.",
    image: require("../../../assets/NaturalMnt/America/mitten-butte.webp"),
    options: [
      {
        id: "0",
        capital: "Uluru",
        country: "Australia",
      },
      {
        id: "1",
        capital: "Roca del Púlpito",
        country: "Noruega",
      },
      {
        id: "2",
        capital: "Caldera Santorini",
        country: "Grecia",
      },
      {
        id: "3",
        capital: "Mesetas Mitten",
        country: "EE.UU.",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: ''
  },
  {
    id: "7b",
    status: "Flags",
    country: "Mesetas Mitten",
    capital: "EE.UU.",
    options: [
      {
        id: "0",
        country: "Uluru",
        img: require("../../../assets/NaturalMnt/Oceania/Ayers-Rock.webp"),
      },
      {
        id: "1",
        country: "Roca del Púlpito\nNoruega",
        img: require("../../../assets/NaturalMnt/Europe/pulpitRock.webp"),
      },
      {
        id: "2",
        country: "Caldera Santorini\nGrecia",
        img: require("../../../assets/NaturalMnt/Europe/Santorini-Caldera.jpg"),
      },
      {
        id: "3",
        country: "Mesetas Mitten\nEE.UU.",
        img: require("../../../assets/NaturalMnt/America/mitten-butte.webp"),
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: ''
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "Venezuela",
    image: require("../../../assets/NaturalMnt/America/Angel-Falls.webp"),
    options: [
      {
        id: "0",
        capital: "Parque Nacional de las Grandes Dunas de Arena",
        country: "EE.UU.",
      },
      {
        id: "1",
        capital: "Salto Ángel",
        country: "Venezuela",
      },
      {
        id: "2",
        capital: "Great Smoky Mountains",
        country: "EE.UU.",
      },
      {
        id: "3",
        capital: "Monte Kenia",
        country: "Kenia",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: ''
  },
  {
    id: "8b",
    status: "Flags",
    country: "Salto Ángel",
    capital: "Venezuela",
    options: [
      {
        id: "0",
        country: "Parque Nacional de las Grandes Dunas de Arena\nEE.UU",
        img: require("../../../assets/NaturalMnt/America/GreatSandDunesPark.webp"),
      },
      {
        id: "1",
        country: "Salto Ángel\nVenezuela",
        img: require("../../../assets/NaturalMnt/America/Angel-Falls.webp"),
      },
      {
        id: "2",
        country: "Great Smoky Mountains\nEE.UU",
        img: require("../../../assets/NaturalMnt/America/GreatSmokyMountains.webp"),
      },
      {
        id: "3",
        country: "Monte Kenia\nKenia",
        img: require("../../../assets/NaturalMnt/Africa/mountKenya.webp"),
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: ''
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "Sudáfrica",
    image: require("../../../assets/NaturalMnt/Africa/CapeofGoodHope.webp"),
    options: [
      {
        id: "0",
        capital: "Parque Nacional del Desierto Blanco",
        country: "Egipto",
      },
      {
        id: "1",
        capital: "Salar de Uyuni",
        country: "Bolivia",
      },
      {
        id: "2",
        capital: "Cabo de Buena Esperanza",
        country: "Sudáfrica",
      },
      {
        id: "3",
        capital: "Los Doce Apóstoles",
        country: "Australia",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "9b",
    status: "Flags",
    country: "Cabo de Buena Esperanza",
    capital: "Sudáfrica",
    options: [
      {
        id: "0",
        country: "Parque Nacional del Desierto Blanco\nEgipto",
        img: require("../../../assets/NaturalMnt/Africa/Egypt-White-Desert-National.webp"),
      },
      {
        id: "1",
        country: "Salar de Uyuni\nBolivia",
        img: require("../../../assets/NaturalMnt/America/SalardeUyuni.webp"),
      },
      {
        id: "2",
        country: "Cabo de Buena Esperanza\nSudáfrica",
        img: require("../../../assets/NaturalMnt/Africa/CapeofGoodHope.webp"),
      },
      {
        id: "3",
        country: "Los Doce Apóstoles\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/12-apostels.webp"),
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "10a",
    status: "Capitals",
    img: 'L',
    country: "Egipto",
    image: require("../../../assets/NaturalMnt/Africa/RiverNile.webp"),
    options: [
      {
        id: "0",
        capital: "River Nilo",
        country: "Egipto",
      },
      {
        id: "1",
        capital: "Delta del Okavango",
        country: "Botswana",
      },
      {
        id: "2",
        capital: "Selva amazónica",
        country: "Varios países sudamericanos",
      },
      {
        id: "3",
        capital: "Gran Agujero Azul",
        country: "Belice",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "10b",
    status: "Flags",
    country: "Nilo",
    capital: "Egipto",
    options: [
      {
        id: "0",
        country: "Nilo\nEgipto",
        img: require("../../../assets/NaturalMnt/Africa/RiverNile.webp"),
      },
      {
        id: "1",
        country: "Delta del Okavango\nBotswana",
        img: require("../../../assets/NaturalMnt/Africa/Botswana_Okavango_Delta.webp"),
      },
      {
        id: "2",
        country: "Selva amazónica\nVarios países sudamericanos",
        img: require("../../../assets/NaturalMnt/America/amazonRainforest.webp"),
      },
      {
        id: "3",
        country: "Gran Agujero Azul\nBelice",
        img: require("../../../assets/NaturalMnt/America/Great-Blue-Hole.webp"),
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
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
  {
    id: "11",
    monument: "",
    country: "",
  },
];

export default questions3Es;
