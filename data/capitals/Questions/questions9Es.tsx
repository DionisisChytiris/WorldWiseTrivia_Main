const question9Es = [
  {
    id: "1a",
    status: "Capitals",
    country: "Estonia",
    image: require("../../../assets/Flags/estonia.png"),
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
        capital: "Vilna",
        country: "Lituania",
      },
      {
        id: "3",
        capital: "Minsk",
        country: "Bielorrusia",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Todo lo que sé es que Vilna es la capital de Lituania y Riga es la capital de Letonia.",
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Estonia",
    country: "Tallinn",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/nicaragua.png"),
        country: "Nicaragua",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/estonia.png"),
        country: "Estonia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: "Azerbaiyán",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/finland.png"),
        country: "Finlandia",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Esta bandera tiene tres franjas horizontales sin ningún emblema. Sus colores representan el cielo, el suelo y la búsqueda de libertad del país.",
  },
  {
    id: "1c",
    status: "Guess",
    word: "TALLINN",
    country: "Estonia",
    num: 5,
    letters: "ILTEAPNSJOBC",
    img: require("../../../assets/Flags/estonia.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Moldavia",
    image: require("../../../assets/Flags/Moldova.png"),
    options: [
      {
        id: "0",
        capital: "Chisináu",
        country: "Moldavia",
      },
      {
        id: "1",
        capital: "Bucarest",
        country: "Rumanía",
      },
      {
        id: "2",
        capital: "Kiev",
        country: "Ucrania",
      },
      {
        id: "3",
        capital: "Odesa",
        country: "Ucrania",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Bueno, Odesa no es una capital. Creo que la primera respuesta es la correcta.",
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Moldavia",
    country: "Chisináu",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Moldova.png"),
        country: "Moldavia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/colombia.png"),
        country: "Colombia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/romania.png"),
        country: "Rumanía",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/venezuela.png"),
        country: "Venezuela",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "La bandera de Moldavia es similar a la bandera de Rumanía. La diferencia clave está en la franja del medio.",
  },
  {
    id: "2c",
    status: "Guess",
    word: "CHISINÁU",
    country: "Moldavia",
    num: 7,
    letters: "ILUEÁPNSHOBC",
    img: require("../../../assets/Flags/Moldova.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Filipinas",
    image: require("../../../assets/Flags/philipines.png"),
    options: [
      {
        id: "0",
        capital: "Kuala \nLumpur",
        country: "Malasia",
      },
      {
        id: "1",
        capital: "Yakarta",
        country: "Indonesia",
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
    correctAnswerIndex: 2,
    phoneHelp:
      "Bueno, no estoy seguro de la respuesta, pero estoy dividido entre Yakarta y Manila.",
  },
  {
    id: "3b",
    status: "Flags",
    capital: "Filipinas",
    country: "Manila",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Cuba.png"),
        country: "Cuba",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/chile.png"),
        country: "Chile",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/philipines.png"),
        country: "Filipinas",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/czechia.png"),
        country: "Republica Checa",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "¡Mira la bandera de Filipinas! Tiene dos franjas horizontales: azul y roja. En el lado izquierdo, hay un triángulo blanco con un sol amarillo de ocho rayos y tres estrellas.",
  },

  {
    id: "3c",
    status: "Guess",
    word: "MANILA",
    country: "Filipinas",
    num: 5,
    letters: "ILUEANSGMOBR",
    img: require("../../../assets/Flags/philipines.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Fiyi",
    image: require("../../../assets/Flags/Fiji.png"),
    options: [
      {
        id: "0",
        capital: "Manila",
        country: "Filipinas",
      },
      {
        id: "1",
        capital: "Ngerulmud",
        country: "Palau",
      },

      {
        id: "2",
        capital: "Honiara",
        country: "Islas Salomón",
      },
      {
        id: "3",
        capital: "Suva",
        country: "Fiyi",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: "Creo que Suva es la respuesta correcta.",
  },
  {
    id: "4b",
    status: "Flags",
    capital: "Fiyi",
    country: "Suva",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/uk.png"),
        country: "Reino Unido",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/usa.png"),
        country: "Estados Unidos",
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
    correctAnswerIndex: 3,
    phoneHelp:
      "¡Mira la bandera de Fiyi! Presenta un campo azul con la Union Jack en la esquina superior izquierda. En el lado derecho, hay un escudo que representa un león, caña de azúcar y una palmera de coco.",
  },
  {
    id: "4c",
    status: "Guess",
    word: "SUVA",
    country: "Fiyi",
    num: 4,
    letters: "ILUEATSVJOBR",
    img: require("../../../assets/Flags/Fiji.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Camerún",
    image: require("../../../assets/Flags/Cameroon.png"),
    options: [
      {
        id: "0",
        capital: "Luanda",
        country: "Angola",
      },
      {
        id: "1",
        capital: "Yaundé",
        country: "Camerún",
      },

      {
        id: "2",
        capital: "Monrovia",
        country: "Liberia",
      },
      {
        id: "3",
        capital: "Abuya",
        country: "Nigeria",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Bueno, no estoy seguro de la respuesta, pero estoy dividido entre Abuja y Yaundé.",
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Camerún",
    country: "Yaundé",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/senegal.png"),
        country: "Senegal",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Cameroon.png"),
        country: "Camerún",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Ghana.png"),
        country: "Ghana",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Zambia.png"),
        country: "Zambia",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Esta bandera tiene tres franjas verticales. En la franja del medio, hay una pequeña estrella que representa la unidad y los ricos recursos naturales del país.",
  },
  {
    id: "5c",
    status: "Guess",
    word: "YAUNDÉ",
    country: "Camerún",
    num: 6,
    letters: "ILUÉAPNYDOBC",
    img: require("../../../assets/Flags/Cameroon.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Argelia",
    image: require("../../../assets/Flags/Algeria.png"),
    options: [
      {
        id: "0",
        capital: "Argel",
        country: "Argelia",
      },
      {
        id: "1",
        capital: "Libano",
        country: "Beirut",
      },
      {
        id: "2",
        capital: "Libia",
        country: "Trípoli",
      },
      {
        id: "3",
        capital: "El Cairo",
        country: "Egipto",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Algunos países tienen capitales cuyos nombres son similares al nombre del país.",
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Argelia",
    country: "Argel",
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
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: "Azerbaiyán",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/safrica.png"),
        country: "Sudáfrica",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "¡Mira la bandera de Argelia! Tiene dos secciones verticales. En el centro, hay una media luna y una estrella, simbolizando el Islam y la lucha del país por la independencia.",
  },
  {
    id: "6c",
    status: "Guess",
    country: "Argelia",
    word: "ARGEL",
    num: 5,
    letters: "ILUEANSGJOBR",
    img: require("../../../assets/Flags/Algeria.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Uruguay",
    image: require("../../../assets/Flags/uruguay.png"),
    options: [
      {
        id: "0",
        capital: "Asunción",
        country: "Paraguay",
      },
      {
        id: "1",
        capital: "La Paz",
        country: "Bolivia",
      },
      {
        id: "2",
        capital: "Quito",
        country: "Ecuador",
      },
      {
        id: "3",
        capital: "Montevideo",
        country: "Uruguay",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "La capital de Uruguay es conocida por su arquitectura histórica, sus vistas costeras y su vibrante escena cultural, que mezcla el encanto colonial con la vida moderna. ¡Comienza con la letra 'M'!",
  },
  {
    id: "7b",
    status: "Flags",
    capital: "Uruguay",
    country: "Montevideo",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/nicaragua.png"),
        country: "Nicaragua",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Panama.png"),
        country: "Panamá",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/argentina.png"),
        country: "Argentina",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/uruguay.png"),
        country: "Uruguay",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "¡Mira la bandera de Uruguay! En la esquina superior izquierda hay un sol dorado con cara, que representa el sol de mayo y la independencia del país.",
  },
  {
    id: "7c",
    status: "Guess",
    word: "MONTEVIDEO",
    country: "Uruguay",
    num: 8,
    letters: "IVREAPNTDOMC",
    img: require("../../../assets/Flags/uruguay.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Jamaica",
    image: require("../../../assets/Flags/jamaica.png"),
    options: [
      {
        id: "0",
        capital: "La Havana",
        country: "Cuba",
      },
      {
        id: "1",
        capital: "Puerto Príncipe",
        country: "Haití",
      },
      {
        id: "2",
        capital: "Kingston",
        country: "Jamaica",
      },
      {
        id: "3",
        capital: "Tegucigalpa",
        country: "Honduras",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Jamaica es una nación insular del Caribe celebrada por sus impresionantes playas, la música reggae y su vibrante cultura. Su capital es el corazón cultural, conocida por su historia musical y su ambiente animado. ¡Comienza con la letra 'K'!",
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Jamaica",
    country: "Kingston",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/kenya.png"),
        country: "Kenia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/canada.png"),
        country: "Canadá",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/jamaica.png"),
        country: "Jamaica",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Solomon-Islands.png"),
        country: "Islas Salomón",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "¡Mira la bandera de Jamaica! Tiene una cruz diagonal que divide la bandera en triángulos.",
  },
  {
    id: "8c",
    status: "Guess",
    word: "KINGSTON",
    country: "Jamaica",
    num: 7,
    letters: "IKUEANYSTONG",
    img: require("../../../assets/Flags/jamaica.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Omán",
    image: require("../../../assets/Flags/Oman.png"),
    options: [
      {
        id: "0",
        capital: "Mascate",
        country: "Omán",
      },
      {
        id: "1",
        capital: "Beirut",
        country: "Libano",
      },
      {
        id: "2",
        capital: "Amán",
        country: "Jordania",
      },
      {
        id: "3",
        capital: "Saná",
        country: "Yemen",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Bueno, no estoy seguro de la respuesta, pero estoy dividido entre Ammán y Mascate.",
  },
  {
    id: "9b",
    status: "Flags",
    capital: "Omán",
    country: "Mascate",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Oman.png"),
        country: "Omán",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/United-Arab-Emirates.png"),
        country: "Emiratos Árabes\nUnidos	",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/bulgaria.png"),
        country: "Bulgaria",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/jordan.png"),
        country: "Jordania",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "¡Mira la bandera de Omán! Tiene tres franjas horizontales y una franja vertical que presenta el escudo nacional, que incluye un khanjar (daga) y dos espadas cruzadas, simbolizando el patrimonio y la fortaleza de Omán.",
  },
  {
    id: "9c",
    status: "Guess",
    word: "MASCATE",
    country: "Omán",
    num: 6,
    letters: "ILUEAMYSTONC",
    img: require("../../../assets/Flags/Oman.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Líbano",
    image: require("../../../assets/Flags/lebanon.png"),
    options: [
      {
        id: "0",
        capital: "Doha",
        country: "Catar",
      },
      {
        id: "1",
        capital: "Beirut",
        country: "Líbano",
      },
      {
        id: "2",
        capital: "Riad",
        country: "Arabia Saudita",
      },
      {
        id: "3",
        capital: "Mascate",
        country: "Omán",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Bueno, no estoy seguro de la respuesta, pero estoy dividido entre Mascate y Beirut.",
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Líbano",
    country: "Beirut",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/peru.png"),
        country: "Perú",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/lebanon.png"),
        country: "Líbano",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/austria.png"),
        country: "Austria",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/canada.png"),
        country: "Canadá",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "En el centro de esta bandera, hay un cedro verde, que simboliza la paz y la resiliencia del país.",
  },
  {
    id: "10c",
    status: "Guess",
    word: "BEIRUT",
    country: "Líbano",
    num: 6,
    letters: "ILREAPNTUOBC",
    img: require("../../../assets/Flags/lebanon.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question9Es;
