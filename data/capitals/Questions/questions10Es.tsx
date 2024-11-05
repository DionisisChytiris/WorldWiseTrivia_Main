const question10Es = [
  {
    id: "1a",
    status: "Capitals",
    country: "Lituania",
    image: require("../../../assets/Flags/lithuania.png"),
    options: [
      {
        id: "0",
        capital: "Riga",
        country: "Letonia",
      },
      {
        id: "1",
        capital: "Tallinn",
        country: "Estonia",
      },
      {
        id: "2",
        capital: "Minsk",
        country: "Bielorrusia",
      },
      {
        id: "3",
        capital: "Vilna",
        country: "Lituania",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Bueno, no estoy seguro de la respuesta, pero estoy dividido entre Vilna y Minsk.",
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Lituania",
    country: "Vilna",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/armenia.png"),
        country: "Armenia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/bulgaria.png"),
        country: "Bulgaria",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/hungary.png"),
        country: "Hungría",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/lithuania.png"),
        country: "Lituania",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
     "Esta bandera tiene colores similares a la bandera de Bulgaria, pero la franja superior es amarilla en lugar de blanca.",
  },
  {
    id: "1c",
    status: "Guess",
    word: "VILNA",
    country: "Lituania",
    num: 5,
    letters: "ILREAUNSVOBC",
    img: require("../../../assets/Flags/lithuania.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Bahamas",
    image: require("../../../assets/Flags/Bahamas.png"),
    options: [
      {
        id: "0",
        capital: "Kingston",
        country: "Jamaica",
      },
      {
        id: "1",
        capital: "Nasáu",
        country: "Bahamas",
      },
      {
        id: "2",
        capital: "San Juán",
        country: "Puerto Rico",
      },
      {
        id: "3",
        capital: "San José",
        country: "Costa Rica",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: "Creo que la respuesta correcta es Nassau.",
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Bahamas",
    country: "Nasáu",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: "Azerbaiyán",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Bahamas.png"),
        country: "Bahamas",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Palau.png"),
        country: "Palau",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Fiji.png"),
        country: "Fiyi",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "¡Mira la bandera de las Bahamas! Presenta tres franjas horizontales con un triángulo en el lado izquierdo.",
  },
  {
    id: "2c",
    status: "Guess",
    word: "NASÁU",
    country: "Bahamas",
    num: 5,
    letters: "ILUEAPNSÁOBC",
    img: require("../../../assets/Flags/Bahamas.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Baréin",
    image: require("../../../assets/Flags/Bahrain.png"),
    options: [
      {
        id: "0",
        capital: "Mascate",
        country: "Omán",
      },
      {
        id: "1",
        capital: "Amán",
        country: "Jordania",
      },
      {
        id: "2",
        capital: "Manama",
        country: "Baréin",
      },
      {
        id: "3",
        capital: "Doha",
        country: "Catar",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: "Estoy un poco inseguro, pero es o Manama o Kuwait para mí.",
  },
  {
    id: "3b",
    status: "Flags",
    capital: "Baréin",
    country: "Manama",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/qatar.png"),
        country: "Catar",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Oman.png"),
        country: "Omán",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Bahrain.png"),
        country: "Baréin",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/jordan.png"),
        country: "Jordania",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Esta bandera tiene un campo rojo en el lado derecho con cinco bordes blancos en forma de sierra que crean un patrón en zigzag.",
  },

  {
    id: "3c",
    status: "Guess",
    word: "MANAMA",
    country: "Baréin",
    num: 3,
    letters: "ILUEANOTJOMP",
    img: require("../../../assets/Flags/Bahrain.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Mozambique",
    image: require("../../../assets/Flags/Mozambique.png"),
    options: [
      {
        id: "0",
        capital: "Maputo",
        country: "Mozambique",
      },
      {
        id: "1",
        capital: "Harare",
        country: "Zimbabwe",
      },
      {
        id: "2",
        capital: "Gaborone",
        country: "Botswana",
      },
      {
        id: "3",
        capital: "Windhoek",
        country: "Namibia",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "No estoy seguro, pero me inclino hacia Harare o Maputo.",
  },
  {
    id: "4b",
    status: "Flags",
    capital: "Mozambique",
    country: "Maputo",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Mozambique.png"),
        country: "Mozambique",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Zimbabwe.png"),
        country: "Zimbabwe",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Zambia.png"),
        country: "Zambia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/safrica.png"),
        country: "Sudáfrica",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
    "¡Mira la bandera de Mozambique! En el lado izquierdo, hay un triángulo rojo que contiene un libro, un rifle y una azada, simbolizando la educación, la defensa y la agricultura.",
  },
  {
    id: "4c",
    status: "Guess",
    word: "MAPUTO",
    country: "Mozambique",
    num: 6,
    letters: "ILUEANFTJOMP",
    img: require("../../../assets/Flags/Mozambique.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Zambia",
    image: require("../../../assets/Flags/Zambia.png"),
    options: [
      {
        id: "0",
        capital: "Lusaka",
        country: "Zambia",
      },
      {
        id: "1",
        capital: "Gaborone",
        country: "Botswana",
      },
      {
        id: "2",
        capital: "Windhoek",
        country: "Namibia",
      },
      {
        id: "3",
        capital: "Harare",
        country: "Zimbabwe",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
     "Bueno, no estoy seguro de la respuesta, pero estoy dividido entre Gaborone y Harare.",
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Zambia",
    country: "Lusaka",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Mozambique.png"),
        country: "Mozambique",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Zambia.png"),
        country: "Zambia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/kenya.png"),
        country: "Kenia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Ethiopia.png"),
        country: "Etiopía",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
     "La bandera de Zambia tiene un águila naranja en la esquina superior derecha. El águila simboliza la libertad y la capacidad del país para superar los desafíos.",
  },
  {
    id: "5c",
    status: "Guess",
    word: "LUSAKA",
    country: "Zambia",
    num: 6,
    letters: "ILREAUNSJOKC",
    img: require("../../../assets/Flags/Zambia.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Zimbabwe",
    image: require("../../../assets/Flags/Zimbabwe.png"),
    options: [
      {
        id: "0",
        capital: "Lusaka",
        country: "Zambia",
      },
      {
        id: "1",
        capital: "Gaborone",
        country: "Botswana",
      },
      {
        id: "2",
        capital: "Windhoek",
        country: "Namimbia",
      },
      {
        id: "3",
        capital: "Harare",
        country: "Zimbabue",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
     "No estoy seguro de la respuesta, pero estoy atascado entre Harare y Dodoma.",
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Zimbabwe",
    country: "Harare",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Ethiopia.png"),
        country: "Etiopía",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/kenya.png"),
        country: "Kenia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Cameroon.png"),
        country: "Camerún",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Zimbabwe.png"),
        country: "Zimbabwe",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
     "¡Mira la bandera de Zimbabue! Presenta siete franjas horizontales con un triángulo blanco en el lado izquierdo que contiene una estrella roja de cinco puntas y el Ave de Zimbabue.",
  },
  {
    id: "6c",
    status: "Guess",
    word: "HARARE",
    country: "Zimbabwe",
    num: 4,
    letters: "ILREAPHSJOBC",
    img: require("../../../assets/Flags/Zimbabwe.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Camboya",
    image: require("../../../assets/Flags/Cambodia.png"),
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
        capital: "Kathmandú",
        country: "Nepal",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: "Estoy bastante seguro de que la respuesta correcta es Phnom Penh.",
  },
  {
    id: "7b",
    status: "Flags",
    capital: "Camboya",
    country: "Nom Pen",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/thailand.png"),
        country: "Tailandia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/vietnam.png"),
        country: "Vietnam",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Cambodia.png"),
        country: "Camboya",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/malaysia.png"),
        country: "Malasia",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "¡Mira la bandera de Camboya! En el centro, hay una imagen de Angkor Wat, un famoso templo, que simboliza la herencia y el orgullo de la nación.",
  },
  {
    id: "7c",
    status: "Guess",
    word: "NOMPEN",
    country: "Camboya",
    num: 5,
    letters: "ILREAPNSMOHC",
    img: require("../../../assets/Flags/Cambodia.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Tailandia",
    image: require("../../../assets/Flags/thailand.png"),
    options: [
      {
        id: "0",
        capital: "Bangkok",
        country: "Tailandia",
      },
      {
        id: "1",
        capital: "Vientián",
        country: "Laos",
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
    correctAnswerIndex: 0,
    phoneHelp:
      "Eso es fácil. La capital de Tailandia es Bangkok. Las principales atracciones incluyen el Gran Palacio, Wat Arun y los bulliciosos mercados como Chatuchak.",
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Tailandia",
    country: "Bangkok",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/thailand.png"),
        country: "Tailandia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/costaRica.png"),
        country: "Costa Rica",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Indonesia.png"),
        country: "Indonesia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Cambodia.png"),
        country: "Camboya",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "¡Mira la bandera de Tailandia! Presenta cinco franjas horizontales. La franja azul es la más ancha y representa a la monarquía, mientras que la roja simboliza al pueblo y la blanca simboliza la paz.",
  },
  {
    id: "8c",
    status: "Guess",
    word: "BANGKOK",
    country: "Tailandia",
    num: 6,
    letters: "ILREAPNSKOBG",
    img: require("../../../assets/Flags/thailand.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Georgia",
    image: require("../../../assets/Flags/georgia.png"),
    options: [
      {
        id: "0",
        capital: "Ereván",
        country: "Armenia",
      },
      {
        id: "1",
        capital: "Bakú",
        country: "Azerbaiyán",
      },
      {
        id: "2",
        capital: "Tiflis",
        country: "Georgia",
      },
      {
        id: "3",
        capital: "Teherán",
        country: "Irán",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: "Eso es difícil. Es o Tbilisi o Bakú.",
  },
  {
    id: "9b",
    status: "Flags",
    capital: "Georgia",
    country: "Tiflis",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/england.jpg"),
        country: "Inglaterra",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/uk.png"),
        country: "Reino Unido",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/georgia.png"),
        country: "Georgia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: "Azerbaiyán",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "¡La bandera de Georgia! Presenta un fondo blanco con cruces rojas. El diseño simboliza el cristianismo y la rica herencia cultural del país.",
  },
  {
    id: "9c",
    status: "Guess",
    word: "TIFLIS",
    country: "Georgia",
    num: 5,
    letters: "ILREAPOSTOBN",
    img: require("../../../assets/Flags/georgia.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Islas Salomón",
    image: require("../../../assets/Flags/Solomon-Islands.png"),
    options: [
      {
        id: "0",
        capital: "Tarawa",
        country: "Kiribati",
      },
      {
        id: "1",
        capital: "Honiara",
        country: "Islas Salomón",
      },
      {
        id: "2",
        capital: "Suva",
        country: "Fiyi",
      },
      {
        id: "3",
        capital: "Puerto Moresby",
        country: "Papúa Nueva\nGuinea",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Lo siento, pero no tengo idea de cuál es la capital de las Islas Salomón.",
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Islas Salomón",
    country: "Honiara",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Kiribati.png"),
        country: "Kiribati",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Solomon-Islands.png"),
        country: "Islas Salomón",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Papua-New-Guinea.png"),
        country: "Papúa Nueva Guinea",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Fiji.png"),
        country: "Fiyi",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
     "¡Mira la bandera de las Islas Salomón! En la esquina superior izquierda hay cinco estrellas blancas que representan las islas.",
  },
  {
    id: "10c",
    status: "Guess",
    word: "HONIARA",
    country: "Islas Salomón",
    num: 6,
    letters: "ILREAPNSHOBC",
    img: require("../../../assets/Flags/Solomon-Islands.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question10Es;
