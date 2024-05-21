const question3Es = [
  {
    id: "1a",
    status: "Capitals",
    country: "Catar",
    image: require("../../../assets/Flags/qatar.png"),
    options: [
      {
        id: "0",
        capital: "Doha",
        country: "Catar",
      },
      {
        id: "1",
        capital: "Manama",
        country: "Baréin",
      },
      {
        id: "2",
        capital: "Abu Dabi",
        country: "Emiratos Árabes Unidos",
      },
      {
        id: "3",
        capital: "Mascate",
        country: "Omán",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Catar",
    country: "Doha",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/qatar.png"),
        country: "Catar",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/denmark.png"),
        country: "Dinamarca",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Bahrain.png"),
        country: "Baréin",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/poland.png"),
        country: "Polonia",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "1c",
    status: "Guess",
    word: "DOHA",
    country: "Catar",
    num: 4,
    letters: "ILREADNHJOBC",
    img: require("../../../assets/Flags/qatar.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Estados Unidos",
    image: require("../../../assets/Flags/usa.png"),
    options: [
      {
        id: "0",
        capital: "Ottawa",
        country: "Canadá",
      },
      {
        id: "1",
        capital: "Londres",
        country: "Reino Unido",
      },
      {
        id: "2",
        capital: "Washington DC",
        country: "Estados Unidos",
      },
      {
        id: "3",
        capital: "Canberra",
        country: "Australia",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Estados Unidos",
    country: "Washington \nD.C",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Cuba.png"),
        country: "Cuba",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/malaysia.png"),
        country: "Malasia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Liberia.png"),
        country: "Liberia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/usa.png"),
        country: "Estados Unidos",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2c",
    status: "Guess",
    word: "WASHINGTON",
    country: "Estados Unidos",
    num: 9,
    letters: "ILHEAPNSWOTG",
    img: require("../../../assets/Flags/usa.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Noruega",
    image: require("../../../assets/Flags/norway.png"),
    options: [
      {
        id: "0",
        capital: "Helsinki",
        country: "Finlandia",
      },
      {
        id: "1",
        capital: "Bergen",
        country: "Ciudad de Noruega",
      },
      {
        id: "2",
        capital: "Oslo",
        country: "Noruega",
      },
      {
        id: "3",
        capital: "Estocolmo",
        country: "Suecia",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "3b",
    status: "Flags",
    capital: "Noruega",
    country: "Oslo",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/norway.png"),
        country: "Noruega",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/finland.png"),
        country: "Finlandia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/sweden.png"),
        country: "Suecia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/iceland.png"),
        country: "Islandia",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "3c",
    status: "Guess",
    word: "OSLO",
    country: "Noruega",
    num: 3,
    letters: "ILREAPNSJOBC",
    img: require("../../../assets/Flags/norway.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Colombia",
    image: require("../../../assets/Flags/colombia.png"),
    options: [
      {
        id: "0",
        capital: "Quito",
        country: "Ecuador",
      },
      {
        id: "1",
        capital: "Caracas",
        country: "Venezuela",
      },
      {
        id: "2",
        capital: "Lima",
        country: "Perú",
      },
      {
        id: "3",
        capital: "Bogotá",
        country: "Colombia",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "4b",
    status: "Flags",
    capital: "Colombia",
    country: "Bogotá",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/venezuela.png"),
        country: "Venezuela",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/colombia.png"),
        country: "Colombia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/ecuador.png"),
        country: "Ecuador",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/romania.png"),
        country: "Rumanía",
      },
    ],
    correctAnswerIndex: 1,
  },

  {
    id: "4c",
    status: "Guess",
    country: "Colombia",
    word: "BOGOTÁ",
    num: 5,
    letters: "ITREÁNOGSOBC",
    img: require("../../../assets/Flags/colombia.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Jordania",
    image: require("../../../assets/Flags/jordan.png"),
    options: [
      {
        id: "0",
        capital: "Beirut",
        country: "Líbano",
      },
      {
        id: "1",
        capital: "Mascate",
        country: "Omán",
      },
      {
        id: "2",
        capital: "Damasco",
        country: "Siria",
      },
      {
        id: "3",
        capital: "Amán",
        country: "Jordania",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Jordania",
    country: "Amán",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/syria.png"),
        country: "Siria",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Oman.png"),
        country: "Omán",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/egypt.png"),
        country: "Egipto",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/jordan.png"),
        country: "Jordania",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "5c",
    status: "Guess",
    word: "AMÁN",
    country: "Jordania",
    num: 4,
    letters: "ILREAPNÁJOMC",
    img: require("../../../assets/Flags/jordan.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "República Checa",
    image: require("../../../assets/Flags/czechia.png"),
    options: [
      {
        id: "0",
        capital: 'Budapest',
        country: 'Hungría'
      },
      {
        id: "1",
        capital: 'Praga',
        country: 'República Checa'
      },
      {
        id: "2",
        capital: 'Liubliana',
        country: 'Eslovenia'
      },
      {
        id: "3",
        capital: 'Bratislava',
        country: 'Eslovaquia'
      },

    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Republica Checa",
    country: "Praga",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/chile.png"),
        country: "Chile",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/czechia.png"),
        country: "Republica Checa",
      },
      {
        id: "2",
        img: require("../../../assets/Flags//philipines.png"),
        country: "Filipinas",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/france.png"),
        country: "Francia",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6c",
    status: "Guess",
    word: "PRAGA",
    country: "Republica Checa",
    num: 4,
    letters: "IUREAPNSJOGC",
    img: require("../../../assets/Flags/czechia.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Indonesia",
    image: require("../../../assets/Flags/Indonesia.png"),
    options: [
      {
        id: "0",
        capital: 'Kuala Lumpur',
        country: 'Malasia'
      },
      {
        id: "1",
        capital: 'Manila',
        country: 'Filipinas'
      },
      {
        id: "2",
        capital: 'Yakarta',
        country: 'Indonesia'
      },
      {
        id: "3",
        capital: 'Bandar Seri\nBegawan',
        country: 'Brunéi'
      },

    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7b",
    status: "Flags",
    capital: "Indonesia",
    country: "Yakarta",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/singapore.png"),
        country: "Singapur",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/malta.png"),
        country: "Malta",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Indonesia.png"),
        country: "Indonesia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/peru.png"),
        country: "Perú",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7c",
    status: "Guess",
    word: "YAKARTA",
    country: "Indonesia",
    num: 5,
    letters: "ILREAKNSYOTC",
    img: require("../../../assets/Flags/Indonesia.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Argentina",
    image: require("../../../assets/Flags/argentina.png"),
    options: [
      {
        id: "0",
        capital: "Montevideo",
        country: "Uruguay",
      },
      {
        id: "1",
        capital: "Asunción",
        country: "Paraguay",
      },
      {
        id: "2",
        capital: "Ciudad de Panamá",
        country: "Panamá",
      },
      {
        id: "3",
        capital: "Buenos Aires",
        country: "Argentina",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Argentina",
    country: "Buenos Aires",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/paraguay.png"),
        country: "Paraguay",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/argentina.png"),
        country: "Argentina",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/uruguay.png"),
        country: "Uruguay",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/elSalvador.png"),
        country: "El Salvador",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "8c",
    status: "Guess",
    word: "BUENOSAIRES",
    country: "Argentina",
    num: 9,
    letters: "IUREAPNSJOBC",
    img: require("../../../assets/Flags/argentina.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Corea del Sur	",
    image: require("../../../assets/Flags/skorea.png"),
    options: [
      {
        id: "0",
        capital: "Seúl",
        country: "Corea del Sur	",
      },
      {
        id: "1",
        capital: "Tokio",
        country: "Japón",
      },
      {
        id: "2",
        capital: "Pekín",
        country: "China",
      },
      {
        id: "3",
        capital: "Hanói",
        country: "Vietnam",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "9b",
    status: "Flags",
    capital: "Corea del Sur",
    country: "Seúl",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/skorea.png"),
        country: "Corea del Sur",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/japan.png"),
        country: "Japón",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Palau.png"),
        country: "Palau",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/taiwan.png"),
        country: "Taiwán",
      },
    ],
    correctAnswerIndex: 0,
  },

  {
    id: "9c",
    status: "Guess",
    country: "Corea del Sur",
    word: "SEÚL",
    num: 4,
    letters: "ILREAPOSÚOBC",
    img: require("../../../assets/Flags/skorea.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Finlandia",
      image: require("../../../assets/Flags/finland.png"),
      options: [
        {
          id: "0",
          capital: 'Helsinki',
          country: 'Finlandia'
        },
        {
          id: "1",
          capital: 'Oslo',
          country: 'Noruega'
        },
        {
          id: "2",
          capital: 'Estocolmo',
          country: 'Suecia'
        },
        {
          id: "3",
          capital: 'Copenhague',
          country: 'Dinamarca'
        },

    ],
    correctAnswerIndex: 0,
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Finlandia",
    country: "Helsinki",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/sweden.png"),
        country: "Suecia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/iceland.png"),
        country: "Islandia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/finland.png"),
        country: "Finlandia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/denmark.png"),
        country: "Dinamarca",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "10c",
    status: "Guess",
    word: "HELSINKI",
    country: "Finlandia",
    num: 7,
    letters: "ILREAPNSKOHC",
    img: require("../../../assets/Flags/finland.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question3Es;
