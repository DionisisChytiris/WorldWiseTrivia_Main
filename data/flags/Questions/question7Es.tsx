const question7Es = [
  {
    id: "1a",
    status: "Capitals",
    country: "Ottawa",
    image: require("../../../assets/Flags/canada.png"),
    options: [
      {
        id: "0",
        capital: "Estados Unidos",
        country: "Washington DC",
      },
      {
        id: "1",
        capital: "Australia",
        country: "Canberra",
      },
      {
        id: "2",
        capital: "UK",
        country: "Londres",
      },
      {
        id: "3",
        capital: "Canadá",
        country: "Ottawa",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Ottawa",
    country: "Canadá",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/peru.png"),
        country: "Perú",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/japan.png"),
        country: "Japón",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/lebanon.png"),
        country: "Líbano",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/canada.png"),
        country: "Canadá",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "1c",
    status: "Guess",
    word: "CANADA",
    country: "Ottawa",
    num: 4,
    letters: "ILUEANODJPMC",
    img: require("../../../assets/Flags/canada.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Copenhague",
    image: require("../../../assets/Flags/denmark.png"),
    options: [
      {
        id: "0",
        capital: 'Noruega',
        country: 'Oslo'
      },
      {
        id: "1",
        capital: 'Dinamarca',
        country: 'Copenhague'
      },
      {
        id: "2",
        capital: 'Finlandia',
        country: 'Helsinki'
      },
      {
        id: "3",
        capital: 'Islandia',
        country: 'Reikiavik'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Copenhague",
    country: "Dinamarca",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/norway.png"),
        country: "Noruega",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/denmark.png"),
        country: "Dinamarca",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/switzerland.png"),
        country: "Suiza",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/iceland.png"),
        country: "Islandia",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "2c",
    status: "Guess",
    word: "DENMARK",
    country: "Copenhague",
    num: 7,
    letters: "ILREANODKYMC",
    img: require("../../../assets/Flags/denmark.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Bagdad",
    image: require("../../../assets/Flags/iraq.png"),
    options: [
      {
        id: "0",
        capital: 'Irak',
        country: 'Bagdad'
      },
      {
        id: "1",
        capital: 'Irán',
        country: 'Teherán'
      },
      {
        id: "2",
        capital: 'Kuwait',
        country: 'Kuwait'
      },
      {
        id: "3",
        capital: 'Afganistán',
        country: 'Kabul'
      },
    ],
    correctAnswerIndex: 0,
  },

  {
    id: "3b",
    status: "Flags",
    capital: "Bagdad",
    country: "Irak",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/iraq.png"),
        country: "Irak",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/iran.png"),
        country: "Irán",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/jordan.png"),
        country: "Jordania",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/syria.png"),
        country: "Siria",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "3c",
    status: "Guess",
    word: "IRAQ",
    country: "Bagdad",
    num: 4,
    letters: "ISLEAQYTROMC",
    img: require("../../../assets/Flags/iraq.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Bakú",
    image: require("../../../assets/Flags/azerbaijan.png"),
    options: [
      {
        id: "0",
        capital: 'Irán',
        country: 'Teherán'
      },
      {
        id: "1",
        capital: 'Kazajistán',
        country: 'Astaná'
      },
      {
        id: "2",
        capital: 'Uzbekistán',
        country: 'Tashkent'
      },
      {
        id: "3",
        capital: 'Azerbaiyán',
        country: 'Bakú'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "4b",
    status: "Flags",
    capital: "Bakú",
    country: "Azerbaiyán",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/kazakhstan.png"),
        country: "Kazajistán",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Oman.png"),
        country: "Omán",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/iran.png"),
        country: "Irán",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: "Azerbaiyán",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "4c",
    status: "Guess",
    word: "AZERBAIJAN",
    country: "Bakú",
    num: 8,
    letters: "ILUEANORJPZB",
    img: require("../../../assets/Flags/azerbaijan.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Ciudad de Guatamala",
    image: require("../../../assets/Flags/guatemala.png"),
    options: [
      {
        id: "0",
        capital: 'Honduras',
        country: 'Tegucigalpa'
      },
      {
        id: "1",
        capital: 'Nicaragua',
        country: 'Managua'
      },
      {
        id: "2",
        capital: 'Guatemala',
        country: 'Ciudad de Guatamala'
      },
      {
        id: "3",
        capital: 'El Salvador',
        country: 'San Salvador'
      },
    ],
    correctAnswerIndex: 2,
  },

  {
    id: "5b",
    status: "Flags",
    capital: "Ciudad de Guatamala",
    country: "Guatemala",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/chile.png"),
        country: "Chile",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/elSalvador.png"),
        country: "El Salvador",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/guatemala.png"),
        country: "Guatemala",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/argentina.png"),
        country: "Argentina",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "5c",
    status: "Guess",
    word: "GUATEMALA",
    country: "Ciudad de Guatamala",
    num: 7,
    letters: "ILUEANORTPMG",
    img: require("../../../assets/Flags/guatemala.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Singapur",
    image: require("../../../assets/Flags/singapore.png"),
    options: [
      {
        id: "0",
        capital: 'Malasia',
        country: 'Kuala Lumpur'
      },
      {
        id: "1",
        capital: 'Singapur',
        country: 'Singapur city'
      },
      {
        id: "2",
        capital: 'Indonesia',
        country: 'Yakarta'
      },
      {
        id: "3",
        capital: 'Camboya',
        country: 'Nom Pen'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Singapur",
    country: "Singapur",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Indonesia.png"),
        country: "Indonesia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/singapore.png"),
        country: "Singapur",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/malta.png"),
        country: "Malta",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Bahrain.png"),
        country: "Baréin",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6c",
    status: "Guess",
    word: "SINGAPORE",
    country: "Singapur",
    num: 9,
    letters: "ISLEAGUTRONP",
    img: require("../../../assets/Flags/Indonesia.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Adís Abeba",
    image: require("../../../assets/Flags/Ethiopia.png"),
    options: [
      {
        id: "0",
        capital: 'Sudan',
        country: 'Khartoum'
      },
      {
        id: "1",
        capital: 'Kenya',
        country: 'Nairobi'
      },
      {
        id: "2",
        capital: 'Uganda',
        country: 'Kampala'
      },
      {
        id: "3",
        capital: 'Etiopía',
        country: 'Adís Abeba'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "7b",
    status: "Flags",
    capital: "Adís Abeba",
    country: "Etiopía",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/kenya.png"),
        country: "Kenya",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/safrica.png"),
        country: "República Sudafricana",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Zambia.png"),
        country: "Zambia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Ethiopia.png"),
        country: "Etiopía",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "7c",
    status: "Guess",
    word: "ETHIOPIA",
    country: "Adís Abeba",
    num: 7,
    letters: "ILRHANETJOPC",
    img: require("../../../assets/Flags/Ethiopia.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Acra",
    image: require("../../../assets/Flags/Ghana.png"),
    options: [
      {
        id: "0",
        capital: 'Ghana',
        country: 'Acra'
      },
      {
        id: "1",
        capital: 'Liberia',
        country: 'Monrovia'
      },
      {
        id: "2",
        capital: 'Nigeria',
        country: 'Abuya'
      },
      {
        id: "3",
        capital: 'Camerún',
        country: 'Yaundé'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Acra",
    country: "Ghana",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Ghana.png"),
        country: "Ghana",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Liberia.png"),
        country: "Liberia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/angola.png"),
        country: "Angola",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/senegal.png"),
        country: "Senegal",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8c",
    status: "Guess",
    word: "GHANA",
    country: "Acra",
    num: 4,
    letters: "ILUEANORHPMG",
    img: require("../../../assets/Flags/Ghana.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Dakar",
    image: require("../../../assets/Flags/senegal.png"),
    options: [
      {
        id: "0",
        capital: 'Guinea',
        country: 'Conakry'
      },
      {
        id: "1",
        capital: "Cote d'Ivoire",
        country: 'Yamoussoukro'
      },
      {
        id: "2",
        capital: 'Senegal',
        country: 'Dakar'
      },
      {
        id: "3",
        capital: 'The Gambia',
        country: 'Banjul'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "9b",
    status: "Flags",
    capital: "Dakar",
    country: "Senegal",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/bolivia.png"),
        country: "Bolivia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Cameroon.png"),
        country: "Camerún",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/senegal.png"),
        country: "Senegal",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/safrica.png"),
        country: "República Sudafricana",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "9c",
    status: "Guess",
    word: "SENEGAL",
    country: "Dakar",
    num: 6,
    letters: "ILUEANORSPGC",
    img: require("../../../assets/Flags/senegal.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Nicosia",
    image: require("../../../assets/Flags/cyprus.png"),
    options: [
      {
        id: "0",
        capital: 'Grecia',
        country: 'Atenas'
      },
      {
        id: "1",
        capital: 'Chipre',
        country: 'Nicosia'
      },
      {
        id: "2",
        capital: 'Siria',
        country: 'Damascus'
      },
      {
        id: "3",
        capital: 'Malta',
        country: 'Valletta'
      },
    ],
    correctAnswerIndex: 1,
  },

  {
    id: "10b",
    status: "Flags",
    capital: "Nicosia",
    country: "Chipre",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/italy.png"),
        country: "Italia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/cyprus.png"),
        country: "Chipre",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/greece.png"),
        country: "Grecia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/malta.png"),
        country: "Malta",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "10c",
    status: "Guess",
    word: "CYPRUS",
    country: "Nicosia",
    num: 6,
    letters: "ISUEANORYPMC",
    img: require("../../../assets/Flags/cyprus.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question7Es;
