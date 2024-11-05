const question5Es = [
  {
    id: "1a",
    status: "Capitals",
    country: "El Salvador",
    image: require("../../../assets/Flags/elSalvador.png"),
    options: [
      {
        id: "0",
        capital: "San José",
        country: "Puerto Rico",
      },
      {
        id: "1",
        capital: "Tegucigalpa",
        country: "Honduras",
      },
      {
        id: "2",
        capital: "Managua",
        country: "Nicaragua",
      },
      {
        id: "3",
        capital: "San Salvador",
        country: "El Salvador",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Η πρωτεύουσα του Ελ Σαλβαδόρ είναι η μεγαλύτερη πόλη της χώρας, γνωστή για τα γύρω ηφαίστεια και τη ζωντανή της ατμόσφαιρα. Το όνομά της ξεκινά με 'S'.",
  },
  {
    id: "1b",
    status: "Flags",
    capital: "El Salvador",
    country: "San Salvador",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/nicaragua.png"),
        country: "Nicaragua",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/uruguay.png"),
        country: "Uruguay",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/elSalvador.png"),
        country: "El Salvador",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/argentina.png"),
        country: "Argentina",
      },
    ],
    correctAnswerIndex: 2,
     phoneHelp: 'Esta bandera presenta tres franjas horizontales de azul y blanco, con un emblema en el centro. Este emblema no es un triángulo.'
  },
  {
    id: "1c",
    status: "Guess",
    word: "SANSALVADOR",
    ountry: "El Salvador",
    num: 8,
    letters: "ILREADNSVOBR",
    img: require("../../../assets/Flags/elSalvador.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Malasia",
    image: require("../../../assets/Flags/malaysia.png"),
    options: [
      {
        id: "0",
        capital: "Yakarta",
        country: "Indonesia",
      },
      {
        id: "1",
        capital: "Kuala Lumpur",
        country: "Malasia",
      },
      {
        id: "2",
        capital: "Manila",
        country: "Filipinas",
      },
      {
        id: "3",
        capital: "Nom Pen",
        country: "Camboya",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Bueno, no estoy seguro de la respuesta, pero estoy dividido entre Yakarta y Kuala Lumpur.",
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Malasia",
    country: "Kuala Lumpur",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/malaysia.png"),
        country: "Malasia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/philipines.png"),
        country: "Filipinas",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Cambodia.png"),
        country: "Camboya",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/thailand.png"),
        country: "Tailandia",
      },
    ],
    correctAnswerIndex: 0,
     phoneHelp: 'Esta bandera es similar a la bandera de los Estados Unidos de América, pero con un creciente amarillo y una estrella en la esquina superior izquierda.'
  },
  {
    id: "2c",
    status: "Guess",
    word: "KUALALUMPUR",
    country: "Malasia",
    num: 7,
    letters: "ILREAPNSUOKM",
    img: require("../../../assets/Flags/malaysia.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Suecia",
    image: require("../../../assets/Flags/sweden.png"),
    options: [
      {
        id: "0",
        capital: "Copenhague",
        country: "Dinamarca",
      },
      {
        id: "1",
        capital: "Oslo",
        country: "Noruega",
      },
      {
        id: "2",
        capital: "Helsinki",
        country: "Finlandia",
      },
      {
        id: "3",
        capital: "Estocolmo",
        country: "Suecia",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "La capital de Suecia es una pintoresca ciudad famosa por sus canales y sus edificios históricos. ¡Es la ciudad más grande del país y su nombre comienza con 'S'!",
  },
  {
    id: "3b",
    status: "Flags",
    capital: "Suecia",
    country: "Estocolmo",
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
        img: require("../../../assets/Flags/sweden.png"),
        country: "Suecia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/finland.png"),
        country: "Finlandia",
      },
    ],
    correctAnswerIndex: 2,
     phoneHelp: 'Esta bandera presenta una cruz nórdica que se extiende hasta los bordes, con los mismos colores que la bandera de Ucrania, simbolizando la herencia cristiana de la nación y sus lazos históricos con otros países escandinavos.'
  },
  {
    id: "3c",
    status: "Guess",
    word: "ESTOCOLMO",
    country: "Suecia",
    num: 7,
    letters: "ILUCANMHSOTK",
    img: require("../../../assets/Flags/sweden.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Vietnam",
    image: require("../../../assets/Flags/vietnam.png"),
    options: [
      {
        id: "0",
        capital: "Bangkok",
        country: "Tailandia",
      },
      {
        id: "1",
        capital: "Hanói",
        country: "Vietnam",
      },
      {
        id: "2",
        capital: "Nom Pen",
        country: "Camboya",
      },
      {
        id: "3",
        capital: "Pekín",
        country: "China",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Definitivamente, Bangkok es la capital de Tailandia y Pekín es la capital de China.",
  },
  {
    id: "4b",
    status: "Flags",
    capital: "Vietnam",
    country: "Hanói",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/vietnam.png"),
        country: "Vietnam",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/china.png"),
        country: "China",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/morocco.png"),
        country: "Marruecos",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/tunisia.png"),
        country: "Túnez",
      },
    ],
    correctAnswerIndex: 0,
      phoneHelp: 'La bandera de Vietnam tiene un fondo rojo con una gran estrella en el centro. El rojo representa la lucha por la independencia, mientras que la estrella amarilla simboliza la unidad.'
  },
  {
    id: "4c",
    status: "Guess",
    country: "Vietnam",
    word: "HANÓI",
    num: 5,
    letters: "ILUEANÓHJOBC",
    img: require("../../../assets/Flags/vietnam.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Suiza",
    image: require("../../../assets/Flags/switzerland.png"),
    options: [
      {
        id: "0",
        capital: "Ankara",
        country: "Turquía",
      },
      {
        id: "1",
        capital: "Reikiavik",
        country: "Islandia",
      },
      {
        id: "2",
        capital: "Viena",
        country: "Austria",
      },
      {
        id: "3",
        capital: "Berna",
        country: "Suecia",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: "Piensa en ciudades que se encuentran en Europa Central.",
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Suecia",
    country: "Berna",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/switzerland.png"),
        country: "Suecia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/turkey.png"),
        country: "Turquía",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/taiwan.png"),
        country: "Taiwán",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/poland.png"),
        country: "Polonia",
      },
    ],
    correctAnswerIndex: 0,
     phoneHelp: 'La bandera suiza presenta un fondo rojo con una cruz blanca en el centro. El diseño representa la unidad y la neutralidad suizas.'
  },
  {
    id: "5c",
    status: "Guess",
    word: "BERNA",
    country: "Suecia",
    num: 5,
    letters: "ILREAPNSJOBC",
    img: require("../../../assets/Flags/switzerland.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Islandia",
    image: require("../../../assets/Flags/iceland.png"),
    options: [
      {
        id: "0",
        capital: "Oslo",
        country: "Noruega",
      },
      {
        id: "1",
        capital: "Tallin",
        country: "Estonia",
      },
      {
        id: "2",
        capital: "Reikiavik",
        country: "Islandia",
      },
      {
        id: "3",
        capital: "Estocolmo",
        country: "Suecia",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "La capital de Islandia es una ciudad colorida, conocida por su arquitectura única y sus impresionantes alrededores naturales. ¡Es la ciudad más grande del país y su nombre comienza con 'R'!",
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Islandia",
    country: "Reikiavik",
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
        img: require("../../../assets/Flags/iceland.png"),
        country: "Islandia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Fiji.png"),
        country: "Fiyi",
      },
    ],
    correctAnswerIndex: 2,
     phoneHelp: 'La bandera islandesa tiene un fondo azul con una cruz contornada en blanco. Los colores representan las características naturales del país: azul por el océano, blanco por el hielo y la nieve, y rojo por las erupciones volcánicas.'
  },
  {
    id: "6c",
    status: "Guess",
    word: "REIKIAVIK",
    country: "Islandia",
    num: 6,
    letters: "ILREAYNVJOKC",
    img: require("../../../assets/Flags/iceland.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Ucrania",
    image: require("../../../assets/Flags/ukrainer.png"),
    options: [
      {
        id: "0",
        capital: "Kiev",
        country: "Ucrania",
      },
      {
        id: "1",
        capital: "Tallin",
        country: "Estonia",
      },
      {
        id: "2",
        capital: "Minsk",
        country: "Bielorrusia",
      },
      {
        id: "3",
        capital: "Riga",
        country: "Letonia",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "La capital de Ucrania es una ciudad vibrante, conocida por su rica historia, su impresionante arquitectura y sus monumentos culturales. ¡Está situada a lo largo del río Dnipro y su nombre comienza con 'K'!",
  },
  {
    id: "7b",
    status: "Flags",
    capital: "Ucrania",
    country: "Kiev",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/sweden.png"),
        country: "Suecia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/ukrainer.png"),
        country: "Ucrania",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/brazil.png"),
        country: "Brasil",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/bolivia.png"),
        country: "Bolivia",
      },
    ],
    correctAnswerIndex: 1,
     phoneHelp: 'La bandera de Ucrania consiste en dos franjas horizontales. El azul representa el cielo, mientras que el amarillo simboliza los campos de trigo.'
  },
  {
    id: "7c",
    status: "Guess",
    word: "KIEV",
    country: "Ucrania",
    num: 4,
    letters: "ILRYAPVSJOKC",
    img: require("../../../assets/Flags/ukrainer.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Kenia",
    image: require("../../../assets/Flags/kenya.png"),
    options: [
      {
        id: "0",
        capital: "Addis Abeba",
        country: "Etiopía",
      },
      {
        id: "1",
        capital: "Lusaka",
        country: "Zambia",
      },
      {
        id: "2",
        capital: "Harare",
        country: "Zimbabwe",
      },
      {
        id: "3",
        capital: "Nairobi",
        country: "Kenia",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: "Estoy muy cerca de dar Nairobi como mi respuesta final.",
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Kenia",
    country: "Nairobi",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Ethiopia.png"),
        country: "Etiopía",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Zambia.png"),
        country: "Zambia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Zimbabwe.png"),
        country: "Zimbabwe",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/kenya.png"),
        country: "Kenia",
      },
    ],
    correctAnswerIndex: 3,
      phoneHelp: 'La bandera de Kenia presenta tres franjas horizontales con bordes blancos. El negro representa al pueblo, el rojo simboliza la lucha por la independencia y el verde representa la tierra.'
  },
  {
    id: "8c",
    status: "Guess",
    word: "NAIROBI",
    country: "Kenia",
    num: 6,
    letters: "ILROAPNSJOBC",
    img: require("../../../assets/Flags/kenya.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Malta",
    image: require("../../../assets/Flags/malta.png"),
    options: [
      {
        id: "0",
        capital: "Madrid",
        country: "España",
      },
      {
        id: "1",
        capital: "La Valeta",
        country: "Malta",
      },
      {
        id: "2",
        capital: "Roma",
        country: "Italia",
      },
      {
        id: "3",
        capital: "Zagreb",
        country: "Croacia",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "La capital de Malta es una ciudad histórica, conocida por su impresionante arquitectura y su rica historia. ¡Está ubicada en la isla del mismo nombre y su nombre comienza con 'V'!",
  },
  {
    id: "9b",
    status: "Flags",
    capital: "Malta",
    country: "La Valeta",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/malta.png"),
        country: "Malta",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/poland.png"),
        country: "Polonia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/singapore.png"),
        country: "Singapur",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/czechia.png"),
        country: "Republica Checa",
      },
    ],
    correctAnswerIndex: 0,
      phoneHelp: 'La bandera de Malta está compuesta por dos franjas verticales: blanca en el lado izquierdo y roja en el lado derecho. Presenta una representación de la Cruz de Jorge en la esquina superior del asta, simbolizando valentía y honor.'
  },
  {
    id: "9c",
    status: "Guess",
    country: "Malta",
    word: "VALETA",
    num: 5,
    letters: "ILREAPOLOBTV",
    img: require("../../../assets/Flags/malta.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Serbia",
    image: require("../../../assets/Flags/serbia.png"),
    options: [
      {
        id: "0",
        capital: "Bratislava",
        country: "Eslovaquia",
      },
      {
        id: "1",
        capital: "Liubliana",
        country: "Eslovenia",
      },
      {
        id: "2",
        capital: "Belgrado",
        country: "Serbia",
      },
      {
        id: "3",
        capital: "Sofía",
        country: "Bulgaria",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "La capital de Serbia es una ciudad animada, conocida por su vibrante vida nocturna y sus monumentos culturales. ¡Se encuentra en la confluencia de dos ríos, el Sava y el Danubio, y su nombre comienza con 'B'!",
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Serbia",
    country: "Belgrado",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/slovakia.png"),
        country: "Eslovaquia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/slovenia.png"),
        country: "Eslovenia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/serbia.png"),
        country: "Serbia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/russia.png"),
        country: "Rusia",
      },
    ],
    correctAnswerIndex: 2,
      phoneHelp: 'La bandera de Serbia consta de tres franjas horizontales, con colores similares a la bandera de Rusia, pero al revés. Los colores representan el movimiento panslavo, y el escudo de armas se encuentra en el lado izquierdo.'
  },
  {
    id: "10c",
    status: "Guess",
    word: "BELGRADO",
    country: "Serbia",
    num: 8,
    letters: "ILREADNSGOBC",
    img: require("../../../assets/Flags/serbia.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question5Es;
