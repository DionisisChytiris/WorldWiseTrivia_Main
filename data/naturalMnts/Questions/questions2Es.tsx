const questions2Es = [
  {
    id: "1a",
    status: "Capitals",
    img: 'L',
    country: "Varios países sudamericanos",
    image: require("../../../assets/NaturalMnt/America/amazonRainforest.webp"),
    options: [
      {
        id: "0",
        capital: "Parque Nacional de Banff",
        country: "Canadá",
      },
      {
        id: "1",
        capital: "Monte Rainier",
        country: "EE.UU.",
      },
      {
        id: "2",
        capital: "Montaña Arco Iris (Vinicunca)",
        country: "Perú",
      },
      {
        id: "3",
        capital: "Selva amazónica",
        country: "Varios países sudamericanos",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "1b",
    status: "Flags",
    country: "Selva amazónica",
    capital: "Varios países sudamericanos",
    options: [
      {
        id: "0",
        country: "Parque Nacional de Banff\nCanadá",
        img: require("../../../assets/NaturalMnt/America/BanffNationalPark.webp"),
      },
      {
        id: "1",
        country: "Monte Rainier\nEE.UU.",
        img: require("../../../assets/NaturalMnt/America/mount rainier.webp"),
      },
      {
        id: "2",
        country: "Montaña Arco Iris (Vinicunca)\nPerú",
        img: require("../../../assets/NaturalMnt/America/rainbowMountain.webp"),
      },
      {
        id: "3",
        country: "Selva amazónica\nVarios países sudamericanos",
        img: require("../../../assets/NaturalMnt/America/amazonRainforest.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2a",
    status: "Capitals",
    img: 'L',
    country: "EE.UU.",
    image: require("../../../assets/NaturalMnt/America/Sequoia-National-Park.webp"),
    options: [
      {
        id: "0",
        capital: "Las Agujas",
        country: "EE.UU.",
      },
      {
        id: "1",
        capital: "Selva Negra",
        country: "Alemania",
      },
      {
        id: "2",
        capital: "Parque Nacional de las Secuoyas",
        country: "EE.UU.",
      },
      {
        id: "3",
        capital: "Parque Nacional de Kakadu",
        country: "Australia",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "2b",
    status: "Flags",
    country: "Parque Nacional de las Secuoyas",
    capital: "EE.UU.",
    options: [
      {
        id: "0",
        country: "Las Agujas\nEE.UU.",
        img: require("../../../assets/NaturalMnt/America/TheNeedles.webp"),
      },
      {
        id: "1",
        country: "Selva Negra\nAlemania",
        img: require("../../../assets/NaturalMnt/Europe/blackForest.webp"),
      },
      {
        id: "2",
        country: "Parque Nacional de las Secuoyas\nEE.UU",
        img: require("../../../assets/NaturalMnt/America/Sequoia-National-Park.webp"),
      },
      {
        id: "3",
        country: "Parque Nacional de Kakadu\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/kakadu.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "Vietnam",
    image: require("../../../assets/NaturalMnt/Asia/halongbay-0.png"),
    options: [
      {
        id: "0",
        capital: "Bahía de Halong",
        country: "Vietnam",
      },
      {
        id: "1",
        capital: "Monte Bromo",
        country: "Indonesia",
      },
      {
        id: "2",
        capital: "Monte Otemanu",
        country: "Polinesia Francesa",
      },
      {
        id: "3",
        capital: "Bora Bora",
        country: "Polinesia Francesa",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "3b",
    status: "Flags",
    country: "Bahía de Halong",
    capital: "Vietnam",
    options: [
      {
        id: "0",
        country: "Bahía de Halong\nVietnam",
        img: require("../../../assets/NaturalMnt/Asia/halongbay-0.png"),
      },
      {
        id: "1",
        country: "Monte Bromo\nIndonesia",
        img: require("../../../assets/NaturalMnt/Asia/mountBromo.webp"),
      },
      {
        id: "2",
        country: "Monte Otemanu\nPolinesia Francesa",
        img: require("../../../assets/NaturalMnt/Asia/mountOtemanu.png"),
      },
      {
        id: "3",
        country: "Bora Bora\nPolinesia Francesa",
        img: require("../../../assets/NaturalMnt/Asia/bora_bora.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "4a",
    status: "Capitals",
    img: 'L',
    country: "Sudáfrica",
    image: require("../../../assets/NaturalMnt/Africa/table-mountain.webp"),
    options: [
      {
        id: "0",
        capital: "Cabo de Buena Esperanza",
        country: "Sudáfrica",
      },
      {
        id: "1",
        capital: "Wadi Rum",
        country: "Jordania",
      },
      {
        id: "2",
        capital: "Parque Nacional de la Montaña de la Mesa",
        country: "Sudáfrica",
      },
      {
        id: "3",
        capital: "Desierto de gobi",
        country: "China/Mongolia",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "4b",
    status: "Flags",
    country: "Parque Nacional de la Montaña de la Mesa",
    capital: "Sudáfrica",
    options: [
      {
        id: "0",
        country: "Cabo de Buena Esperanza\nSudáfrica",
        img: require("../../../assets/NaturalMnt/Africa/CapeofGoodHope.webp"),
      },
      {
        id: "1",
        country: "Wadi Rum\nJordania",
        img: require("../../../assets/NaturalMnt/Asia/wadi-rum.webp"),
      },
      {
        id: "2",
        country: "Parque Nacional de la Montaña de la Mesa\nSudáfrica",
        img: require("../../../assets/NaturalMnt/Africa/table-mountain.webp"),
      },
      {
        id: "3",
        country: "Desierto de gobi\nChina/Mongolia",
        img: require("../../../assets/NaturalMnt/Asia/Winter-GobiDesert.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "5a",
    status: "Capitals",
    img: 'L',
    country: "Tanzania",
    image: require("../../../assets/NaturalMnt/Africa/Kilimanjaro.webp"),
    options: [
      {
        id: "0",
        capital: "Monte Kenia",
        country: "Kenia",
      },
      {
        id: "1",
        capital: "Monte Sinaí",
        country: "Egipto",
      },
      {
        id: "2",
        capital: "Zhangjiajie",
        country: "China",
      },
      {
        id: "3",
        capital: "Monte Kilimanjaro",
        country: "Tanzania",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "5b",
    status: "Flags",
    country: "Monte Kilimanjaro",
    capital: "Tanzania",
    options: [
      {
        id: "0",
        country: "Monte Kenia\nKenia",
        img: require("../../../assets/NaturalMnt/Africa/mountKenya.webp"),
      },
      {
        id: "1",
        country: "Monte Sinaí\nEgipto",
        img: require("../../../assets/NaturalMnt/Africa/mountSinai.webp"),
      },
      {
        id: "2",
        country: "Zhangjiajie\nChina",
        img: require("../../../assets/NaturalMnt/Asia/zhangjiajie-national-forest-park-china.png"),
      },
      {
        id: "3",
        country: "Monte Kilimanjaro\nTanzania",
        img: require("../../../assets/NaturalMnt/Africa/Kilimanjaro.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "Perú",
    image: require("../../../assets/NaturalMnt/America/rainbowMountain.webp"),
    options: [
      {
        id: "0",
        capital: "Montaña Arco Iris (Vinicunca)",
        country: "Perú",
      },
      {
        id: "1",
        capital: "Salar de Uyuni",
        country: "Bolivia",
      },
      {
        id: "2",
        capital: "Torres de Paine",
        country: "Chile",
      },
      {
        id: "3",
        capital: "Valle de Jiuzhaigou",
        country: "China",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "6b",
    status: "Flags",
    country: "Montaña Arco Iris (Vinicunca)",
    capital: "Perú",
    options: [
      {
        id: "0",
        country: "Montaña Arco Iris (Vinicunca)\nPerú",
        img: require("../../../assets/NaturalMnt/America/rainbowMountain.webp"),
      },
      {
        id: "1",
        country: "Salar de Uyuni\nBolivia",
        img: require("../../../assets/NaturalMnt/America/SalardeUyuni.webp"),
      },
      {
        id: "2",
        country: "Torres de Paine\nChile",
        img: require("../../../assets/NaturalMnt/America/torres-del-paine.webp"),
      },
      {
        id: "3",
        country: "Jiuzhaigou\nChina",
        img: require("../../../assets/NaturalMnt/Asia/Jiuzhaigou-Valley.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "7a",
    status: "Capitals",
    img: 'L',
    country: "EE.UU.",
    image: require("../../../assets/NaturalMnt/America/Arches-National-Park.webp"),
    options: [
      {
        id: "0",
        capital: "Gran Cañón",
        country: "EE.UU.",
      },
      {
        id: "1",
        capital: "Cuevas de mármol",
        country: "Chile",
      },
      {
        id: "2",
        capital: "Parque Nacional de los Arcos",
        country: "EE.UU.",
      },
      {
        id: "3",
        capital: "Mesetas Mitten",
        country: "EE.UU.",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7b",
    status: "Flags",
    country: "Parque Nacional de los Arcos",
    capital: "EE.UU.",
    options: [
      {
        id: "0",
        country: "Gran Cañón\nEE.UU.",
        img: require("../../../assets/NaturalMnt/America/grandcanyon.webp"),
      },
      {
        id: "1",
        country: "Cuevas de mármol\nChile",
        img: require("../../../assets/NaturalMnt/America/marble-caves-chile.png"),
      },
      {
        id: "2",
        country: "Parque Nacional de los Arcos\nEE.UU.",
        img: require("../../../assets/NaturalMnt/America/Arches-National-Park.webp"),
      },
      {
        id: "3",
        country: "Mesetas Mitten\nEE.UU.",
        img: require("../../../assets/NaturalMnt/America/mitten-butte.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "Islandia",
    image: require("../../../assets/NaturalMnt/Europe/BlueLagoon.webp"),
    options: [
      {
        id: "0",
        capital: "Cascada de Dettifoss",
        country: "Islandia",
      },
      {
        id: "1",
        capital: "Laguna Azul",
        country: "Islandia",
      },
      {
        id: "2",
        capital: "Lago Bled",
        country: "Eslovenia",
      },
      {
        id: "3",
        capital: "Monte Elbrus",
        country: "Rusia",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "8b",
    status: "Flags",
    country: "Laguna Azul",
    capital: "Islandia",
    options: [
      {
        id: "0",
        country: "Cascada de Dettifoss\nIslandia",
        img: require("../../../assets/NaturalMnt/Europe/dettifossWaterfall.webp"),
      },
      {
        id: "1",
        country: "Laguna Azul\nIslandia",
        img: require("../../../assets/NaturalMnt/Europe/BlueLagoon.webp"),
      },
      {
        id: "2",
        country: "Lago Bled\nEslovenia",
        img: require("../../../assets/NaturalMnt/Europe/lake-bled.webp"),
      },
      {
        id: "3",
        country: "Monte Elbrus\nRusia",
        img: require("../../../assets/NaturalMnt/Europe/mount-elbrus.webp"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "Alemania",
    image: require("../../../assets/NaturalMnt/Europe/blackForest.webp"),
    options: [
      {
        id: "0",
        capital: "Lago Moraine",
        country: "Canadá",
      },
      {
        id: "1",
        capital: "Cataratas del Niágara",
        country: "EE.UU./Canadá",
      },
      {
        id: "2",
        capital: "Selva Negra",
        country: "Alemania",
      },
      {
        id: "3",
        capital: "Parque Nacional de Kakadu",
        country: "Australia",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "9b",
    status: "Flags",
    country: "Selva Negra",
    capital: "Alemania",
    options: [
      {
        id: "0",
        country: "Lago Moraine\nCanadá",
        img: require("../../../assets/NaturalMnt/America/Moraine-Lake.webp"),
      },
      {
        id: "1",
        country: "Cataratas del Niágara\nCanadá/EE.UU.",
        img: require("../../../assets/NaturalMnt/America/NiagaraFalls.webp"),
      },
      {
        id: "2",
        country: "Selva Negra\nAlemania",
        img: require("../../../assets/NaturalMnt/Europe/blackForest.webp"),
      },
      {
        id: "3",
        country: "Parque Nacional de Kakadu\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/kakadu.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "10a",
    status: "Capitals",
    img: 'L',
    country: "Australia",
    image: require("../../../assets/NaturalMnt/Oceania/oceanroad.webp"),
    options: [
      {
        id: "0",
        capital: "Los Doce Apóstoles",
        country: "Australia",
      },
      {
        id: "1",
        capital: "Delta del Okavango",
        country: "Botswana",
      },
      {
        id: "2",
        capital: "Cataratas de Kalandula",
        country: "Angola",
      },
      {
        id: "3",
        capital: "La Gran Carretera Oceánica",
        country: "Australia",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "10b",
    status: "Flags",
    country: "La Gran Carretera Oceánica",
    capital: "Australia",
    options: [
      {
        id: "0",
        country: "Los Doce Apóstoles\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/12-apostels.webp"),
      },
      {
        id: "1",
        country: "Delta del Okavango\nBotswana",
        img: require("../../../assets/NaturalMnt/Africa/Botswana_Okavango_Delta.webp"),
      },
      {
        id: "2",
        country: "Cataratas de Kalandula\nAngola",
        img: require("../../../assets/NaturalMnt/Africa/kalandula-falls-angola.webp"),
      },
      {
        id: "3",
        country: "La Gran Carretera Oceánica\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/oceanroad.webp"),
      },
    ],
    correctAnswerIndex: 3,
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

export default questions2Es;
