const question4Es = [
  {
    id: "1a",
    status: "Capitals",
    country: "Chile",
    image: require("../../../assets/Flags/chile.png"),
    options: [
      {
        id: "0",
        capital: 'Quito',
        country: 'Ecuador'
      },
      {
        id: "1",
        capital: 'Lima',
        country: 'Perú'
      },
      {
        id: "2",
        capital: 'Asunción',
        country: 'Paraguay'
      },
      {
        id: "3",
        capital: 'Santiago',
        country: 'Chile'
      },
    ],
    correctAnswerIndex: 3,
  },  {
    id: "1b",
    status: "Flags" ,
    capital: "Chile",
    country: "Santiago \nde Chile",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/chile.png"),
        country: 'Chile'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/czechia.png"),
        country: 'Republica Checa'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/philipines.png"),
        country: 'Filipinas'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Cuba.png"),
        country: 'Cuba'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "1c",
    status: "Guess",
    word: "SANTIAGO",
    country: "Chile",
    num: 7,
    letters: "ILREAPNSGOTC",
    img: require("../../../assets/Flags/chile.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Bélgica",
    image: require("../../../assets/Flags/belgium.png"),
    options: [
      {
        id: "0",
        capital: 'Berlín',
        country: 'Alemania'
      },
      {
        id: "1",
        capital: 'Bruselas',
        country: 'Bélgica'
      },
      {
        id: "2",
        capital: 'Ámsterdam',
        country: 'Países Bajos'
      },
      {
        id: "3",
        capital: 'París',
        country: 'Francia'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
      id: "2b",
      status: "Flags",
      capital: "Bélgica",
        country: "Bruselas",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/belgium.png"),
        country: 'Bélgica'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/hungary.png"),
        country: 'Hungría'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/germany.png"),
        country: 'Alemania'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/italy.png"),
        country: 'Italia'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "2c",
      status: "Guess",
      word: "BRUSELAS",
      country: "Bélgica",
      num: 7,
      letters: "ULREAPNSJOBC",
      img: require("../../../assets/Flags/belgium.png"),
    },
  {
    id: "3a",
    status: "Capitals",
    country: "Panamá",
      image: require("../../../assets/Flags/Panama.png"),
      options: [
        {
          id: "0",
          capital: 'San José',
          country: 'Costa Rica'
        },
        {
          id: "1",
          capital: 'Ciudad de Panamá',
          country: 'Panamá'
        },
        {
          id: "2",
          capital: 'Bogotá',
          country: 'Colombia'
        },
        {
          id: "3",
          capital: 'Caracas',
          country: 'Venezuela'
        },

    ],
    correctAnswerIndex: 1,
  },
  {
    id: "3b",
    status: "Flags" ,
    capital: "Panamá",
    country: "Ciudad de Panamá",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Cuba.png"),
        country: 'Cuba'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/puertoRico.jpg"),
        country: 'Puerto Rico'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Panama.png"),
        country: 'Panamá'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/dominican.png"),
        country: 'República Dominicana'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "3c",
    status: "Guess",
    word: "PANAMÁ",
    country: "Panamá",
    num: 5,
    letters: "ILREAPNSÁOMC",
    img: require("../../../assets/Flags/Panama.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Libia",
    image: require("../../../assets/Flags/libya.png"),
    options: [
      {
        id: "0",
        capital: 'Trípoli',
        country: 'Libia'
      },
      {
        id: "1",
        capital: 'Argel',
        country: 'Argelia'
      },
      {
        id: "2",
        capital: 'Rabat',
        country: 'Marruecos'
      },
      {
        id: "3",
        capital: 'Túnez',
        country: 'Túnez'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "4b",
    status: "Flags" ,
    capital: "Libia",
    country: "Trípoli",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/libya.png"),
        country: 'Libia'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Algeria.png"),
        country: 'Argelia'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/pakistan.png"),
        country: 'Pakistán'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: 'Azerbaiyán'
      },
    ],
    correctAnswerIndex: 0,
  },
   {
    id: "4c",
    status: "Guess",
    country: "Libia",
    word: "TRÍPOLI",
    num: 7,
    letters: "ITREANOHLOPÍ",
    img: require("../../../assets/Flags/libya.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Polonia",
      image: require("../../../assets/Flags/poland.png"),
      options: [
        {
          id: "0",
          capital: 'Cracovia',
          country: 'Polonia'
        },
        {
          id: "1",
          capital: 'Praga',
          country: 'Republica Checa'
        },
        {
          id: "2",
          capital: 'Kiev',
          country: 'Ucrania'
        },
        {
          id: "3",
          capital: 'Varsovia',
          country: 'Polonia'
        },
      ],
    correctAnswerIndex: 3,
  },
  {
    id: "5b",
    status: "Flags" ,
    capital: "Polonia",
    country: "Varsovia",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/malta.png"),
        country: 'Malta'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/singapore.png"),
        country: 'Singapur'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/austria.png"),
        country: 'Austria'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/poland.png"),
        country: 'Polonia'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "5c",
    status: "Guess",
    word: "VARSOVIA",
    country: "Polonia",
    num: 6,
    letters: "ILREAPNSJOWC",
    img: require("../../../assets/Flags/poland.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Brasil",
      image: require("../../../assets/Flags/brazil.png"),
      options: [
        {
          id: "0",
          capital: 'Brasília',
          country: 'Brasil'
        },
        {
          id: "1",
          capital: 'São Paulo',
          country: 'Ciudad brasileña'
        },
        {
          id: "2",
          capital: 'Río de\nJaneiro',
          country: 'Ciudad brasileña'
        },
        {
          id: "3",
          capital: 'Montevideo',
          country: 'Uruguay'
        },

    ],
    correctAnswerIndex: 0,
  },
  {
    id: "6b",
    status: "Flags" ,
    capital: "Brasil",
    country: "Brasília",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/argentina.png"),
        country: 'Argentina'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/brazil.png"),
        country: 'Brasil'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/mexico.png"),
        country: 'México'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/peru.png"),
        country: 'Perú'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6c",
    status: "Guess",
    word: "BRASILIA",
    country: "Brasil",
    num: 6,
    letters: "ILREAPNSJOBC",
    img: require("../../../assets/Flags/brazil.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Rumanía",
    image: require("../../../assets/Flags/romania.png"),
    options: [
      {
        id: "0",
        capital: 'Kiev',
        country: 'Ucrania'
      },
      {
        id: "1",
        capital: 'Budapest',
        country: 'Hungría'
      },
      {
        id: "2",
        capital: 'Bucarest',
        country: 'Rumanía'
      },
      {
        id: "3",
        capital: 'Sofía',
        country: 'Bulgaria'
      },

    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7b",
    status: "Flags" ,
    capital: "Rumanía",
    country: "Bucarest",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Moldova.png"),
        country: 'Moldavia'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/armenia.png"),
        country: 'Armenia'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/romania.png"),
        country: 'Rumanía'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/lithuania.png"),
        country: 'Lituania'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7c",
    status: "Guess",
    word: "BUCAREST",
    country: "Rumanía",
    num: 8,
    letters: "ULREAHTSJOBC",
    img: require("../../../assets/Flags/romania.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Irán",
    image: require("../../../assets/Flags/iran.png"),
    options: [
      {
        id: "0",
        capital: 'Amán',
        country: 'Jordania'
      },
      {
        id: "1",
        capital: 'Damasco',
        country: 'Siria'
      },
      {
        id: "2",
        capital: 'Bagdad',
        country: 'Irak'
      },
      {
        id: "3",
        capital: 'Teherán',
        country: 'Irán'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Irán",
    country: "Teherán",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/jordan.png"),
        country: 'Jordania'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/hungary.png"),
        country: 'Hungría'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/syria.png"),
        country: 'Siria'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/iran.png"),
        country: 'Irán'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "8c",
    status: "Guess",
    word: "TEHERÁN",
    country: "Irán",
    num: 6,
    letters: "ILREAHNSTOÁC",
    img: require("../../../assets/Flags/iran.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Albania",
    image: require("../../../assets/Flags/albania.png"),
    options: [
      {
        id: "0",
        capital: 'Zagreb',
        country: 'Croacia'
      },
      {
        id: "1",
        capital: 'Tirana',
        country: 'Albania'
      },
      {
        id: "2",
        capital: 'Sofía',
        country: 'Bulgaria'
      },
      {
        id: "3",
        capital: 'Belgrado',
        country: 'Serbia'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "9b",
    status: "Flags" ,
    capital: "Albania",
    country: "Tirana",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/portugal.png"),
        country: 'Portugal'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/albania.png"),
        country: 'Albania'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/tunisia.png"),
        country: 'Túnez'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/turkey.png"),
        country: 'Turquía'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "9c",
    status: "Guess",
    word: "TIRANA",
    country: "Albania",
    num: 5,
    letters: "ILREAPOTNOBC",
    img: require("../../../assets/Flags/albania.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Croacia",
    image: require("../../../assets/Flags/croatia.png"),
    options: [
      {
        id: "0",
        capital: 'Belgrado',
        country: 'Serbia'
      },
      {
        id: "1",
        capital: 'Zagreb',
        country: 'Croacia'
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
    id: "10b",
    status: "Flags" ,
    capital: "Croacia",
    country: "Zagreb",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/slovenia.png"),
        country: 'Eslovenia'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/slovakia.png"),
        country: 'Eslovaquia'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/serbia.png"),
        country: 'Serbia'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/croatia.png"),
        country: 'Croacia'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "10c",
    status: "Guess",
    word: "ZAGREB",
    country: "Croacia",
    num: 6,
    letters: "ILREAPNGZOBC",
    img: require("../../../assets/Flags/croatia.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question4Es;
