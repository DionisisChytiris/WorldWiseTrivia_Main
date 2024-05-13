const question6Es = [
  {
    id: "1a",
    status: "Capitals",
    country: "Hungría",
    image: require("../../../assets/Flags/hungary.png"),
    options: [
      {
        id: "0",
        capital: 'Budapest',
        country: 'Hungría'
      },
      {
        id: "1",
        capital: 'Bucarest',
        country: 'Rumanía'
      },
      {
        id: "2",
        capital: 'Bratislava',
        country: 'Eslovaquia'
      },
      {
        id: "3",
        capital: 'Liubliana',
        country: 'Eslovenia'
      },

    ],
    correctAnswerIndex: 0,
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Hungría",
    country: "Budapest",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/italy.png"),
        country: "Italia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/hungary.png"),
        country: "Hungría",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/mexico.png"),
        country: "México",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/bulgaria.png"),
        country: "Bulgaria",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "1c",
    status: "Guess",
    word: "BUDAPEST",
    country: "Hungría",
    num: 8,
    letters: "ITREAPNSUOBD",
    img: require("../../../assets/Flags/hungary.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Nueva Zelanda",
    image: require("../../../assets/Flags/newZealand.png"),
    options: [
      {
        id: "0",
        capital: 'Auckland',
        country: 'Nueva Zelanda'
      },
      {
        id: "1",
        capital: 'Canberra',
        country: 'Australia'
      },
      {
        id: "2",
        capital: 'Perth',
        country: 'Australia'
      },
      {
        id: "3",
        capital: 'Wellington',
        country: 'Nueva Zelanda'
      },

    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Nueva Zelanda",
    country: "Wellington",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/australia.png"),
        country: "Australia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/uk.png"),
        country: "Reino Unido",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/newZealand.png"),
        country: "Nueva Zelanda",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Fiji.png"),
        country: "Fiyi",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "2c",
    status: "Guess",
    word: "WELLINGTON",
    country: "Nueva Zelanda",
    num: 8,
    letters: "ILWEAPNSJOTG",
    img: require("../../../assets/Flags/newZealand.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Pakistán",
    image: require("../../../assets/Flags/pakistan.png"),
    options: [
      {
        id: "0",
        capital: "Daca",
        country: "Bangladés",
      },
      {
        id: "1",
        capital: "Islamabad",
        country: "Pakistán",
      },
      {
        id: "2",
        capital: "Katmandú",
        country: "Nepal",
      },
      {
        id: "3",
        capital: "Timbu",
        country: "Bután",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "3b",
    status: "Flags",
    capital: "Pakistán",
    country: "Islamabad",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/pakistan.png"),
        country: "Pakistán",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Algeria.png"),
        country: "Argelia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: "Azerbaiyán",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/tunisia.png"),
        country: "Túnez",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "3c",
    status: "Guess",
    word: "ISLAMABAD",
    country: "Pakistán",
    num: 7,
    letters: "ILUEACODMOBS",
    img: require("../../../assets/Flags/pakistan.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Venezuela",
    image: require("../../../assets/Flags/venezuela.png"),
    options: [
      {
        id: "0",
        capital: "Bogotá",
        country: "Colombia",
      },
      {
        id: "1",
        capital: "Paramaribo",
        country: "Suriname",
      },
      {
        id: "2",
        capital: "Caracas",
        country: "Venezuela",
      },
      {
        id: "3",
        capital: "Georgetown",
        country: "Guyana",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "4b",
    status: "Flags",
    capital: "Venezuela",
    country: "Caracas",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/romania.png"),
        country: "Rumanía",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/ecuador.png"),
        country: "Ecuador",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/colombia.png"),
        country: "Colombia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/venezuela.png"),
        country: "Venezuela",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "4c",
    status: "Guess",
    word: "CARACAS",
    country: "Venezuela",
    num: 4,
    letters: "ILUEACODROBS",
    img: require("../../../assets/Flags/venezuela.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Eslovenia",
    image: require("../../../assets/Flags/slovenia.png"),
    options: [
      {
        id: "0",
        capital: 'Bratislava',
        country: 'Eslovaquia'
      },
      {
        id: "1",
        capital: 'Belgrado',
        country: 'Serbia'
      },
      {
        id: "2",
        capital: 'Zagreb',
        country: 'Croacia'
      },
      {
        id: "3",
        capital: 'Liubliana',
        country: 'Eslovenia'
      },

    ],
    correctAnswerIndex: 1,
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Eslovenia",
    country: "Liubliana",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/costaRica.png"),
        country: "Costa Rica",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/slovakia.png"),
        country: "Eslovaquia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/slovenia.png"),
        country: "Eslovenia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/czechia.png"),
        country: "Republica Checa",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "5c",
    status: "Guess",
    word: "LIUBLIANA",
    country: "Eslovenia",
    num: 6,
    letters: "ILRUAPNSJOBC",
    img: require("../../../assets/Flags/slovenia.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "India",
      image: require("../../../assets/Flags/india.png"),
      options: [
        {
          id: "0",
          capital: 'Kathmandú',
          country: 'Nepal'
        },
        {
          id: "1",
          capital: 'Bombay',
          country: 'India'
        },
        {
          id: "2",
          capital: 'Nueva Delhi',
          country: 'India'
        },
        {
          id: "3",
          capital: 'Calcuta',
          country: 'India'
        },

    ],
    correctAnswerIndex: 0,
  },
  {
    id: "6b",
    status: "Flags",
    capital: "India",
    country: "Nueva Delhi",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/iran.png"),
        country: "Irán",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/india.png"),
        country: "India",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/hungary.png"),
        country: "Hungría",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/ireland.png"),
        country: "Irlanda",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6c",
    status: "Guess",
    word: "NUEVADELHI",
    country: "India",
    num: 9,
    letters: "ILREUVNSDOHA",
    img: require("../../../assets/Flags/india.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Costa Rica",
      image: require("../../../assets/Flags/costaRica.png"),
      options: [
        {
          id: "0",
          capital: 'San José',
          country: 'Costa Rica'
        },
        {
          id: "1",
          capital: 'San Salvador',
          country: 'El Salvador'
        },
        {
          id: "2",
          capital: 'Managua',
          country: 'Nicaragua'
        },
        {
          id: "3",
          capital: 'San Juan',
          country: 'Puerto Rico'
        },

    ],
    correctAnswerIndex: 0,
  },
  {
    id: "7b",
    status: "Flags",
    capital: "Costa Rica",
    country: "San Jose",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/thailand.png"),
        country: "Tailandia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/puertoRico.jpg"),
        country: "Puerto Rico",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/dominican.png"),
        country: "República Dominicana",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/costaRica.png"),
        country: "Costa Rica",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "7c",
    status: "Guess",
    word: "SANJOSE",
    country: "Costa Rica",
    num: 6,
    letters: "ILREAPNSJOBC",
    img: require("../../../assets/Flags/costaRica.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Arabia Saudita",
    image: require("../../../assets/Flags/saudi-arabia.png"),
    options: [
      {
        id: "0",
        capital: "Riad",
        country: "Arabia Saudita",
      },
      {
        id: "1",
        capital: "Mascate",
        country: "Omán",
      },
      {
        id: "2",
        capital: "Saná",
        country: "Yemen",
      },
      {
        id: "3",
        capital: "Amán",
        country: "Jordania",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Arabia Saudita",
    country: "Riad",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/bangladesh.png"),
        country: "Bangladés",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/jordan.png"),
        country: "Jordania",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/saudi-arabia.png"),
        country: "Arabia Saudita",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/United-Arab-Emirates.png"),
        country: "Emiratos Árabes Unidos",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "8c",
    status: "Guess",
    word: "RIAD",
    country: "Emiratos Árabes Unidos",
    num: 4,
    letters: "ILREANHSYOBD",
    img: require("../../../assets/Flags/saudi-arabia.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Puerto Rico",
    image: require("../../../assets/Flags/puertoRico.jpg"),
    options: [
      {
        id: "0",
        capital: 'Santo Domingo',
        country: 'República Dominicana'
      },
      {
        id: "1",
        capital: 'San José',
        country: 'Costa Rica'
      },
      {
        id: "2",
        capital: 'San Salvador',
        country: 'El Salvador'
      },
      {
        id: "3",
        capital: 'San Juan',
        country: 'Puerto Rico'
      },
    ],
    correctAnswerIndex: 3,

  },
  {
    id: "9b",
    status: "Flags",
    capital: "Puerto Rico",
    country: "San Juan",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/dominican.png"),
        country: "República Dominicana",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Panama.png"),
        country: "Panamá",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Cuba.png"),
        country: "Cuba",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/puertoRico.jpg"),
        country: "Puerto Rico",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "9c",
    status: "Guess",
    word: "SANJUAN",
    country: "Puerto Rico",
    num: 5,
    letters: "ILREANJSYOBD",
    img: require("../../../assets/Flags/puertoRico.jpg"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Paraguay",
    image: require("../../../assets/Flags/paraguay.png"),
    options: [
      {
        id: "0",
        capital: "Asunción",
        country: "Paraguay",
      },
      {
        id: "1",
        capital: "Managua",
        country: "Nicaragua",
      },
      {
        id: "2",
        capital: "San Salvador",
        country: "El Salvador",
      },
      {
        id: "3",
        capital: "Guatemala",
        country: "Guatemala",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Paraguay",
    country: "Asunción",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/paraguay.png"),
        country: "Paraguay",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/netherlands.png"),
        country: "Países Bajos",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/france.png"),
        country: "Francia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/costaRica.png"),
        country: "Costa Rica",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "10c",
    status: "Guess",
    word: "ASUNCION",
    country: "Paraguay",
    num: 7,
    letters: "ILRUAPNSJOBC",
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
