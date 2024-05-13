const question6Es = [
  {
    id: "1a",
    status: "Capitals",
    country: "Budapest",
    image: require("../../../assets/Flags/hungary.png"),
    options: [
      {
        id: "0",
        capital: 'Hungary',
        country: 'Budapest'
      },
      {
        id: "1",
        capital: 'Romania',
        country: 'Bucharest'
      },
      {
        id: "2",
        capital: 'Moldova',
        country: 'Chisinau'
      },
      {
        id: "3",
        capital: 'Ukraine',
        country: 'Kyiv'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Budapest",
    country: "Hungary",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/hungary.png"),
        country: "Hungary",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/italy.png"),
        country: "Italy",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/iran.png"),
        country: "Iran",
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
        country: 'Jakarta'
      },
      {
        id: "1",
        capital: 'Australia',
        country: 'Canberra'
      },
      {
        id: "2",
        capital: 'Malaysia',
        country: 'Kuala Lumpur'
      },
      {
        id: "3",
        capital: 'New Zealand',
        country: 'Wellington'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Wellington",
    country: "New Zealand",
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
        country: "New Zealand",
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
        capital: 'Bangladesh',
        country: 'Dhaka'
      },
      {
        id: "1",
        capital: 'Pakistan',
        country: 'Islamabad'
      },
      {
        id: "2",
        capital: 'India',
        country: 'New Delhi'
      },
      {
        id: "3",
        capital: 'Nepal',
        country: 'Kathmandu'
      },
    ],
    correctAnswerIndex: 1,
  },

  {
    id: "3b",
    status: "Flags",
    capital: "Islamabad",
    country: "Pakistan",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Algeria.png"),
        country: "Algeria",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/pakistan.png"),
        country: "Pakistan",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/kazakhstan.png"),
        country: "Kazakhstan",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: "Azerbaijan",
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
        country: 'Bogota'
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
        capital: 'Peru',
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
        country: "Mexico",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/brazil.png"),
        country: "Brazil",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/venezuela.png"),
        country: "Venezuela",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Moldova.png"),
        country: "Moldova",
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
    country: "Ljubljana",
    image: require("../../../assets/Flags/slovenia.png"),
    options: [
      {
        id: "0",
        capital: 'Austria',
        country: 'Vienna'
      },
      {
        id: "1",
        capital: 'Slovenia',
        country: 'Ljubljana'
      },
      {
        id: "2",
        capital: 'Slovakia',
        country: 'Bratislava'
      },
      {
        id: "3",
        capital: 'Czechia',
        country: 'Prague'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Ljubljana",
    country: "Slovenia",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/colombia.png"),
        country: "Colombia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/slovenia.png"),
        country: "Slovenia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/ireland.png"),
        country: "Ireland",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/greece.png"),
        country: "Greece",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "5c",
    status: "Guess",
    word: "SLOVENIA",
    country: "Ljubljana",
    num: 8,
    letters: "ILUEANORSPVC",
    img: require("../../../assets/Flags/slovenia.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "New Delhi",
    image: require("../../../assets/Flags/india.png"),
    options: [
      {
        id: "0",
        capital: 'Pakistan',
        country: 'Islamabad'
      },
      {
        id: "1",
        capital: 'Nepal',
        country: 'Kathmandu'
      },
      {
        id: "2",
        capital: 'Mongolia',
        country: 'Ulaanbataar'
      },
      {
        id: "3",
        capital: 'India',
        country: 'New Delhi'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "6b",
    status: "Flags",
    capital: "New Delhi",
    country: "India",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/ireland.png"),
        country: "Ireland",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/mexico.png"),
        country: "Mexico",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/iran.png"),
        country: "Iran",
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
    country: "New Delhi",
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
        country: 'Santiago'
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
        country: 'Panama'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/costaRica.png"),
        country: 'Costa Rica'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/thailand.png"),
        country: 'Thailand'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/dominican.png"),
        country: 'Dominican Republic'
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
        capital: 'Bahrain',
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
        capital: 'United Arab\nEmirates',
        country: 'Abu Dhabi'
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
        country: "Oman",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/saudi-arabia.png"),
        country: "Saudi Arabia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/kazakhstan.png"),
        country: "Kazakhstan",
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
        country: "Czechia",
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
    country: "Asuncion",
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
        country: 'Asuncion'
      },
      {
        id: "2",
        capital: 'Argentina',
        country: 'Buenos Aires'
      },
      {
        id: "3",
        capital: 'Chile',
        country: 'Santiago'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Asuncion",
    country: "Paraguay",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/netherlands.png"),
        country: "Netherlands",
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
        country: "Peru",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "10c",
    status: "Guess",
    word: "PARAGUAY",
    country: "Asuncion",
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
