const question8Es = [
  {
    id: "1a",
    status: "Capitals",
    country: "La Paz",
    image: require("../../../assets/Flags/bolivia.png"),
    options: [
      {
        id: "0",
        capital: "Ecuador",
        country: "Quito",
      },
      {
        id: "1",
        capital: "Bolivia",
        country: "La Paz",
      },
      {
        id: "2",
        capital: "Peru",
        country: "Lima",
      },
      {
        id: "3",
        capital: "Paraguay",
        country: "Asuncion",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "1b",
    status: "Flags",
    capital: "La Paz",
    country: "Bolivia",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/ecuador.png"),
        country: "Ecuador",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/bolivia.png"),
        country: "Bolivia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/peru.png"),
        country: "Peru",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/paraguay.png"),
        country: "Paraguay",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "1c",
    status: "Guess",
    word: "BOLIVIA",
    country: "La Paz",
    num: 6,
    letters: "ILUEAVORBPMC",
    img: require("../../../assets/Flags/bolivia.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Moscow",
    image: require("../../../assets/Flags/russia.png"),
    options: [
      {
        id: "0",
        capital: 'Belarus',
        country: 'Minsk'
      },
      {
        id: "1",
        capital: 'Estonia',
        country: 'Tallinn'
      },
      {
        id: "2",
        capital: 'Latvia',
        country: 'Riga'
      },
      {
        id: "3",
        capital: 'Russia',
        country: 'Moscow'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Moscow",
    country: "Russia",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/slovakia.png"),
        country: "Slovakia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/serbia.png"),
        country: "Serbia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/slovenia.png"),
        country: "Slovenia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/russia.png"),
        country: "Russia",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2c",
    status: "Guess",
    word: "RUSSIA",
    country: "Moscow",
    num: 5,
    letters: "ILREANUDSOPC",
    img: require("../../../assets/Flags/russia.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Ankara",
    image: require("../../../assets/Flags/turkey.png"),
    options: [
      {
        id: "0",
        capital: 'Iraq',
        country: 'Baghdad'
      },
      {
        id: "1",
        capital: 'Syria',
        country: 'Damascus'
      },
      {
        id: "2",
        capital: 'Turkey',
        country: 'Ankara'
      },
      {
        id: "3",
        capital: 'Tunisia',
        country: 'Tunis'
      },
    ],
    correctAnswerIndex: 2,
  },

  {
    id: "3b",
    status: "Flags",
    capital: "Ankara",
    country: "Turkey",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/tunisia.png"),
        country: "Tunisia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/lebanon.png"),
        country: "Lebanon",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/turkey.png"),
        country: "Turkey",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/United-Arab-Emirates.png"),
        country: "United Arab\nEmirates",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "3c",
    status: "Guess",
    word: "TURKEY",
    country: "Ankara",
    num: 6,
    letters: "ISUEAHYTROKC",
    img: require("../../../assets/Flags/turkey.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Managua",
    image: require("../../../assets/Flags/nicaragua.png"),
    options: [
      {
        id: "0",
        capital: 'Nicaragua',
        country: 'Managua'
      },
      {
        id: "1",
        capital: 'Honduras',
        country: 'Tegucigalpa'
      },
      {
        id: "2",
        capital: 'El Salvador',
        country: 'San Salvador'
      },
      {
        id: "3",
        capital: 'Panama',
        country: 'Panama City'
      },
    ],
    correctAnswerIndex: 0,
  },

  {
    id: "4b",
    status: "Flags",
    capital: "Managua",
    country: "Nicaragua",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/nicaragua.png"),
        country: "Nicaragua",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/greece.png"),
        country: "Greece",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/elSalvador.png"),
        country: "El Salvador",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/finland.png"),
        country: "Finland",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "4c",
    status: "Guess",
    word: "NICARAGUA",
    country: "Managua",
    num: 7,
    letters: "ILUEANORJGMC",
    img: require("../../../assets/Flags/nicaragua.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Yerevan",
    image: require("../../../assets/Flags/armenia.png"),
    options: [
      {
        id: "0",
        capital: 'Georgia',
        country: 'Tbilisi'
      },
      {
        id: "1",
        capital: 'Armenia',
        country: 'Yerevan'
      },
      {
        id: "2",
        capital: 'Afghanistan',
        country: 'Kabul'
      },
      {
        id: "3",
        capital: 'Azerbaijan',
        country: 'Baku'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Yerevan",
    country: "Armenia",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/bulgaria.png"),
        country: "Bulgaria",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/armenia.png"),
        country: "Armenia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/lithuania.png"),
        country: "Lithuania",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/iran.png"),
        country: "Iran",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "5c",
    status: "Guess",
    word: "ARMENIA",
    country: "Yerevan",
    num: 6,
    letters: "ILUEANORJPMC",
    img: require("../../../assets/Flags/armenia.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Abuja",
    image: require("../../../assets/Flags/nigeria.png"),
    options: [
      {
        id: "0",
        capital: 'Nigeria',
        country: 'Abuja'
      },
      {
        id: "1",
        capital: 'Cameroon',
        country: 'Yaounde'
      },
      {
        id: "2",
        capital: 'Angola',
        country: 'Luanda'
      },
      {
        id: "3",
        capital: 'Mali',
        country: 'Bamako'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Abuja",
    country: "Nigeria",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/nigeria.png"),
        country: "Nigeria",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/ireland.png"),
        country: "Ireland",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/france.png"),
        country: "France",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/mexico.png"),
        country: "Mexico",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "6c",
    status: "Guess",
    word: "NIGERIA",
    country: "Abuja",
    num: 6,
    letters: "ILUEANORJGMC",
    img: require("../../../assets/Flags/nigeria.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Pretoria",
    image: require("../../../assets/Flags/safrica.png"),
    options: [
      {
        id: "0",
        capital: 'Zambia',
        country: 'Lusaka'
      },
      {
        id: "1",
        capital: 'Zimbabwe',
        country: 'Harare'
      },
      {
        id: "2",
        capital: 'Namibia',
        country: 'Windhoek'
      },
      {
        id: "3",
        capital: 'South Africa',
        country: 'Pretoria'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "7b",
    status: "Flags" ,
    capital: "Pretoria",
    country: "South Africa",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Zimbabwe.png"),
        country: 'Zimbabwe'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Ethiopia.png"),
        country: 'Ethiopia'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Zambia.png"),
        country: 'Zambia'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/safrica.png"),
        country: 'South Africa'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "7c",
    status: "Guess",
    word: "SOUTHAFRICA",
    country: "Pretoria",
    num: 10,
    letters: "ISLEAHUFROCT",
    img: require("../../../assets/Flags/safrica.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Tunis",
    image: require("../../../assets/Flags/tunisia.png"),
    options: [
      {
        id: "0",
        capital: 'Algeria',
        country: 'Algiers'
      },
      {
        id: "1",
        capital: 'Tunisia',
        country: 'Tunis'
      },
      {
        id: "2",
        capital: 'Libya',
        country: 'Tripoli'
      },
      {
        id: "3",
        capital: 'Morocco',
        country: 'Rabat'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Tunis",
    country: "Tunisia",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/tunisia.png"),
        country: "Tunisia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/turkey.png"),
        country: "Turkey",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/switzerland.png"),
        country: "Switzerland",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Algeria.png"),
        country: "Algeria",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "8c",
    status: "Guess",
    word: "TUNISIA",
    country: "Tunis",
    num: 6,
    letters: "ILUEANORSPMT",
    img: require("../../../assets/Flags/tunisia.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Manila",
    image: require("../../../assets/Flags/philipines.png"),
    options: [
      {
        id: "0",
        capital: 'Indonesia',
        country: 'Jakarta'
      },
      {
        id: "1",
        capital: 'Malaysia',
        country: 'Kuala Lumpur'
      },
      {
        id: "2",
        capital: 'Philippines',
        country: 'Manila'
      },
      {
        id: "3",
        capital: 'Thailand',
        country: 'Bangkok'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "9b",
    status: "Flags",
    capital: "Manila",
    country: "Philippines",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/chile.png"),
        country: "Chile",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/puertoRico.jpg"),
        country: "Puerto Rico",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/philipines.png"),
        country: "Philippines",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/dominican.png"),
        country: "Dominican Republic",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "9c",
    status: "Guess",
    word: "PHILIPPINES",
    country: "Manila",
    num: 7,
    letters: "ILUEANORHPMS",
    img: require("../../../assets/Flags/philipines.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Luanda",
    image: require("../../../assets/Flags/angola.png"),
    options: [
      {
        id: "0",
        capital: 'Angola',
        country: 'Luanda'
      },
      {
        id: "1",
        capital: 'Rwanda',
        country: 'Kigali'
      },
      {
        id: "2",
        capital: 'Burundi',
        country: 'Bujumbura'
      },
      {
        id: "3",
        capital: 'Malawi',
        country: 'Lilongwe'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Luanda",
    country: "Angola",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/angola.png"),
        country: "Angola",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Uganda.png"),
        country: "Uganda",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Rwanda.png"),
        country: "Rwanda",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Madagascar.png"),
        country: "Madagascar",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "10c",
    status: "Guess",
    word: "ANGOLA",
    country: "Luanda",
    num: 5,
    letters: "ILUEANORJPMG",
    img: require("../../../assets/Flags/angola.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question8Es;
