const question6Es = [
  {
    id: "1a",
    status: "Capitals",
    country: "Budapest",
    image: require("../../../assets/Flags/hungary.png"),
    options: [
      {
        id: "0",
        capital: 'Hungría',
        country: 'Budapest'
      },
      {
        id: "1",
        capital: 'Rumanía',
        country: 'Bucarest'
      },
      {
        id: "2",
        capital: 'Moldavia',
        country: 'Chisinau'
      },
      {
        id: "3",
        capital: 'Ucrania',
        country: 'Kiev'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Budapest",
    country: "Hungría",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/hungary.png"),
        country: "Hungría",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/italy.png"),
        country: "Italia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/iran.png"),
        country: "Irán",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/india.png"),
        country: "India",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "1c",
    status: "Guess",
    word: "HUNGARY",
    country: "Budapest",
    num: 7,
    letters: "ILYEANORHGMU",
    img: require("../../../assets/Flags/hungary.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Wellington",
    image: require("../../../assets/Flags/newZealand.png"),
    options: [
      {
        id: "0",
        capital: 'Indonesia',
        country: 'Yakarta'
      },
      {
        id: "1",
        capital: 'Australia',
        country: 'Canberra'
      },
      {
        id: "2",
        capital: 'Malasia',
        country: 'Kuala Lumpur'
      },
      {
        id: "3",
        capital: 'Nueva Zelanda',
        country: 'Wellington'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Wellington",
    country: "Nueva Zelanda",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/australia.png"),
        country: "Australia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Fiji.png"),
        country: "Fiji",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Solomon-Islands.png"),
        country: "Solomon Islands",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/newZealand.png"),
        country: "Nueva Zelanda",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2c",
    status: "Guess",
    word: "NEWZEALAND",
    country: "Wellington",
    num: 8,
    letters: "ILREANOWZDPC",
    img: require("../../../assets/Flags/newZealand.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Islamabad",
    image: require("../../../assets/Flags/pakistan.png"),
    options: [
      {
        id: "0",
        capital: 'Bangladés',
        country: 'Daca'
      },
      {
        id: "1",
        capital: 'Pakistán',
        country: 'Islamabad'
      },
      {
        id: "2",
        capital: 'India',
        country: 'Nueva Delhi'
      },
      {
        id: "3",
        capital: 'Nepal',
        country: 'Katmandú'
      },
    ],
    correctAnswerIndex: 1,
  },

  {
    id: "3b",
    status: "Flags",
    capital: "Islamabad",
    country: "Pakistán",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Algeria.png"),
        country: "Argelia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/pakistan.png"),
        country: "Pakistán",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/kazakhstan.png"),
        country: "Kazajistán",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: "Azerbaiyán",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "3c",
    status: "Guess",
    word: "PAKISTAN",
    country: "Islamabad",
    num: 7,
    letters: "ISLEANUTPOKC",
    img: require("../../../assets/Flags/pakistan.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Caracas",
    image: require("../../../assets/Flags/venezuela.png"),
    options: [
      {
        id: "0",
        capital: 'Colombia',
        country: 'Bogotá'
      },
      {
        id: "1",
        capital: 'Ecuador',
        country: 'Quito'
      },
      {
        id: "2",
        capital: 'Venezuela',
        country: 'Caracas'
      },
      {
        id: "3",
        capital: 'Perú',
        country: 'Lima'
      },
    ],
    correctAnswerIndex: 2,
  },

  {
    id: "4b",
    status: "Flags",
    capital: "Caracas",
    country: "Venezuela",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/mexico.png"),
        country: "México",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/brazil.png"),
        country: "Brasil",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/venezuela.png"),
        country: "Venezuela",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Moldova.png"),
        country: "Moldavia",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "4c",
    status: "Guess",
    word: "VENEZUELA",
    country: "Caracas",
    num: 7,
    letters: "ILUEANORVZMC",
    img: require("../../../assets/Flags/venezuela.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Liubliana",
    image: require("../../../assets/Flags/slovenia.png"),
    options: [
      {
        id: "0",
        capital: 'Austria',
        country: 'Viena'
      },
      {
        id: "1",
        capital: 'Eslovenia',
        country: 'Liubliana'
      },
      {
        id: "2",
        capital: 'Eslovaquia',
        country: 'Bratislava'
      },
      {
        id: "3",
        capital: 'República Checa',
        country: 'Praga'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Liubliana",
    country: "Eslovenia",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/colombia.png"),
        country: "Colombia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/slovenia.png"),
        country: "Eslovenia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/ireland.png"),
        country: "Irlanda",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/greece.png"),
        country: "Grecia",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "5c",
    status: "Guess",
    word: "SLOVENIA",
    country: "Liubliana",
    num: 8,
    letters: "ILUEANORSPVC",
    img: require("../../../assets/Flags/slovenia.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Nueva Delhi",
    image: require("../../../assets/Flags/india.png"),
    options: [
      {
        id: "0",
        capital: 'Pakistán',
        country: 'Islamabad'
      },
      {
        id: "1",
        capital: 'Nepal',
        country: 'Katmandú'
      },
      {
        id: "2",
        capital: 'Mongolia',
        country: 'Ulaanbataar'
      },
      {
        id: "3",
        capital: 'India',
        country: 'Nueva Delhi'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Nueva Delhi",
    country: "India",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/ireland.png"),
        country: "Irlanda",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/mexico.png"),
        country: "México",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/iran.png"),
        country: "Irán",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/india.png"),
        country: "India",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "6c",
    status: "Guess",
    word: "INDIA",
    country: "Nueva Delhi",
    num: 4,
    letters: "ILUEANORDPMC",
    img: require("../../../assets/Flags/india.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "San Jose",
    image: require("../../../assets/Flags/costaRica.png"),
    options: [
      {
        id: "0",
        capital: 'Cuba',
        country: 'Havana'
      },
      {
        id: "1",
        capital: 'Costa Rica',
        country: 'San Jose'
      },
      {
        id: "2",
        capital: 'Puerto Rico',
        country: 'San Juan'
      },
      {
        id: "3",
        capital: 'Chile',
        country: 'Santiago de Chile'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "7b",
    status: "Flags" ,
    capital: "San Jose",
    country: "Costa Rica",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Panama.png"),
        country: 'Panamá'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/costaRica.png"),
        country: 'Costa Rica'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/thailand.png"),
        country: 'Tailandia'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/dominican.png"),
        country: 'República Dominicana'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "7c",
    status: "Guess",
    word: "COSTARICA",
    country: "San Jose",
    num: 7,
    letters: "ISLEAVUTROBC",
    img: require("../../../assets/Flags/costaRica.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Riyadh",
    image: require("../../../assets/Flags/saudi-arabia.png"),
    options: [
      {
        id: "0",
        capital: 'Baréin',
        country: 'Manama'
      },
      {
        id: "1",
        capital: 'Yemen',
        country: 'Sana\'a'
      },
      {
        id: "2",
        capital: 'Saudi Arabia',
        country: 'Riyadh'
      },
      {
        id: "3",
        capital: 'Emiratos Árabes Unidos',
        country: 'Abu Dabi'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Riyadh",
    country: "Saudi Arabia",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/nigeria.png"),
        country: "Nigeria",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Oman.png"),
        country: "Omán",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/saudi-arabia.png"),
        country: "Saudi Arabia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/kazakhstan.png"),
        country: "Kazajistán",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "8c",
    status: "Guess",
    word: "SAUDIARABIA",
    country: "Riyadh",
    num: 7,
    letters: "ILUEADORSPBC",
    img: require("../../../assets/Flags/saudi-arabia.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "San Juan",
    image: require("../../../assets/Flags/puertoRico.jpg"),
    options: [
      {
        id: "0",
        capital: 'Puerto Rico',
        country: 'San Juan'
      },
      {
        id: "1",
        capital: 'Haiti',
        country: 'Port-au-Prince'
      },
      {
        id: "2",
        capital: 'Jamaica',
        country: 'Kingston'
      },
      {
        id: "3",
        capital: 'Nicaragua',
        country: 'Managua'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "9b",
    status: "Flags",
    capital: "San Juan",
    country: "Puerto Rico",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/puertoRico.jpg"),
        country: "Puerto Rico",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/czechia.png"),
        country: "República Checa",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/chile.png"),
        country: "Chile",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Cuba.png"),
        country: "Cuba",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "9c",
    status: "Guess",
    word: "PUERTORICO",
    country: "San Juan",
    num: 8,
    letters: "ILUEANORTPMC",
    img: require("../../../assets/Flags/puertoRico.jpg"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Asunción",
    image: require("../../../assets/Flags/paraguay.png"),
    options: [
      {
        id: "0",
        capital: 'Uruguay',
        country: 'Montevideo'
      },
      {
        id: "1",
        capital: 'Paraguay',
        country: 'Asunción'
      },
      {
        id: "2",
        capital: 'Argentina',
        country: 'Buenos Aires'
      },
      {
        id: "3",
        capital: 'Chile',
        country: 'Santiago de Chile'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Asunción",
    country: "Paraguay",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/netherlands.png"),
        country: "Países Bajos",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/paraguay.png"),
        country: "Paraguay",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/bulgaria.png"),
        country: "Bulgaria",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/peru.png"),
        country: "Perú",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "10c",
    status: "Guess",
    word: "PARAGUAY",
    country: "Asunción",
    num: 6,
    letters: "ILUEANORYPMG",
    img: require("../../../assets/Flags/paraguay.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question6Es;
