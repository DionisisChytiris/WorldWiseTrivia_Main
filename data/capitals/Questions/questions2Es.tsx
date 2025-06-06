const question2Es = [
  {
    id: "1a",
    status: "Capitals",
    country: "Alemania",
    image: require("../../../assets/Flags/germany.png"),
    options: [
      {
        id: "0",
        capital: "Múnich",
        country: "Ciudad alemana",
      },
      {
        id: "1",
        capital: "Viena",
        country: "Austria",
      },
      {
        id: "2",
        capital: "Berlín",
        country: "Alemania",
      },
      {
        id: "3",
        capital: "Berna",
        country: "Suiza",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Bueno, la capital de Alemania es conocida por su rica historia, incluido el Muro que una vez dividió la ciudad. También es famosa por lugares emblemáticos como la Puerta de Brandeburgo, su vibrante escena artística y por ser un centro de actividad política y cultural en Europa.",
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Alemania",
    country: "Berlín",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/belgium.png"),
        country: "Bélgica",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/germany.png"),
        country: "Alemania",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/spain.png"),
        country: "España",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/lithuania.png"),
        country: "Lituania",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "La bandera de Alemania tiene tres franjas horizontales, de diferentes colores. Estos colores simbolizan la unidad, la libertad y la democracia. Definitivamente, no hay verde en ella.",
  },
  {
    id: "1c",
    status: "Guess",
    word: "BERLÍN",
    country: "Alemania",
    num: 6,
    letters: "ÍLUEANORJBMC",
    img: require("../../../assets/Flags/germany.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Austria",
    image: require("../../../assets/Flags/austria.png"),
    options: [
      {
        id: "0",
        capital: "Viena",
        country: "Austria",
      },
      {
        id: "1",
        capital: "París",
        country: "Francia",
      },
      {
        id: "2",
        capital: "Varsovia",
        country: "Polonia",
      },
      {
        id: "3",
        capital: "Berlín",
        country: "Alemania",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "La capital de Austria es conocida por su herencia de música clásica, con compositores como Mozart y Beethoven que vivieron allí. También es famosa por sus palacios imperiales, como el Palacio de Schönbrunn.",
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Austria",
    country: "Viena",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/austria.png"),
        country: "Austria",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/poland.png"),
        country: "Polonia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/malta.png"),
        country: "Malta",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/singapore.png"),
        country: "Singapur",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Esta bandera presenta dos colores brillantes en tres franjas horizontales, con rojo en la parte superior e inferior.",
  },
  {
    id: "2c",
    status: "Guess",
    word: "VIENA",
    country: "Austria",
    num: 5,
    letters: "ILUEANODVOBC",
    img: require("../../../assets/Flags/austria.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Marruecos",
    image: require("../../../assets/Flags/morocco.png"),
    options: [
      {
        id: "0",
        capital: "Rabat",
        country: "Marruecos",
      },
      {
        id: "1",
        capital: "Trípoli",
        country: "Libia",
      },
      {
        id: "2",
        capital: "Marrakech",
        country: "Ciudad marroquí",
      },
      {
        id: "3",
        capital: "Casablanca",
        country: "Ciudad marroquí",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "La capital de Marruecos es conocida por su ambiente tranquilo en comparación con las bulliciosas ciudades de Casablanca y Marrakech. Alberga la impresionante Torre Hassan.",
  },
  {
    id: "3b",
    status: "Flags",
    capital: "Marruecos",
    country: "Rabat",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/portugal.png"),
        country: "Portugal",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/vietnam.png"),
        country: "Vietnam",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/morocco.png"),
        country: "Marruecos",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/turkey.png"),
        country: "Turquía",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Una bandera roja intensa con una estrella de cinco puntas en el centro, que representa una mezcla de historia y tradición.",
  },
  {
    id: "3c",
    status: "Guess",
    word: "RABAT",
    country: "Marruecos",
    num: 4,
    letters: "ILUEATRDBOMC",
    img: require("../../../assets/Flags/morocco.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Grecia",
    image: require("../../../assets/Flags/greece.png"),
    options: [
      {
        id: "0",
        capital: "Sofía",
        country: "Bulgaria",
      },
      {
        id: "1",
        capital: "Roma",
        country: "Italia",
      },
      {
        id: "2",
        capital: "Atenas",
        country: "Grecia",
      },
      {
        id: "3",
        capital: "Nicosia",
        country: "Chipre",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "La capital de Grecia es famosa por sus antiguos monumentos, como el Partenón y la Acrópolis. Combina maravillosamente su rico pasado con la cultura moderna, convirtiéndola en una ciudad única y vibrante.",
  },
  {
    id: "4b",
    status: "Flags",
    capital: "Grecia",
    country: "Atenas",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/finland.png"),
        country: "Finlandia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/elSalvador.png"),
        country: "El Salvador",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/argentina.png"),
        country: "Argentina",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/greece.png"),
        country: "Grecia",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "El diseño de esta bandera refleja la herencia marítima de Grecia, con franjas azules y blancas y una cruz en la esquina superior.",
  },
  {
    id: "4c",
    status: "Guess",
    word: "ATENAS",
    num: 5,
    letters: "ITREANOHSOBC",
    img: require("../../../assets/Flags/greece.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Cuba",
    image: require("../../../assets/Flags/Cuba.png"),
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
        capital: "Bridgetown",
        country: "Barbados",
      },
      {
        id: "3",
        capital: "La Habana",
        country: "Cuba",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "La capital de Cuba es como un colorido coche antiguo, rebosante de historia y cultura vibrante. Conocida por su impresionante arquitectura colonial y su animada escena musical, ofrece una combinación única de pasado y presente.",
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Cuba",
    country: "Havana",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/philipines.png"),
        country: "Filipinas",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Cuba.png"),
        country: "Cuba",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/chile.png"),
        country: "Chile",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/puertoRico.jpg"),
        country: "Puerto Rico",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Para la bandera de Cuba, solo recuerda las franjas azules y blancas. Hay un triángulo rojo a un lado con una estrella blanca dentro — ¡imposible no verlo!",
  },
  {
    id: "5c",
    status: "Guess",
    word: "HAVANA",
    country: "Cuba",
    num: 4,
    letters: "YLNEAPOSJHVC",
    img: require("../../../assets/Flags/Cuba.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Ecuador",
    image: require("../../../assets/Flags/ecuador.png"),
    options: [
      {
        id: "0",
        capital: "Quito",
        country: "Ecuador",
      },
      {
        id: "1",
        capital: "Bogotá",
        country: "Colombia",
      },
      {
        id: "2",
        capital: "Lima",
        country: "Perú",
      },
      {
        id: "3",
        capital: "Asunción",
        country: "Paraguay",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "La capital de Ecuador es como una joya escondida en los Andes, conocida por su impresionante arquitectura colonial y sus vistas montañosas espectaculares. Es una de las capitales más altas del mundo, ofreciendo una combinación única de historia y belleza natural.",
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Ecuador",
    country: "Quito",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/colombia.png"),
        country: "Colombia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/venezuela.png"),
        country: "Venezuela",
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
    correctAnswerIndex: 2,
    phoneHelp:
      "Es principalmente amarilla con franjas azules y rojas, y no olvides el emblema en el centro — eso te ayudará a reconocerla.",
  },
  {
    id: "6c",
    status: "Guess",
    word: "QUITO",
    country: "Ecuador",
    num: 5,
    letters: "YLUEAPOSQTIC",
    img: require("../../../assets/Flags/ecuador.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "México",
    image: require("../../../assets/Flags/mexico.png"),
    options: [
      {
        id: "0",
        capital: "Cancún",
        country: "Ciudad Mexicana",
      },
      {
        id: "1",
        capital: "Acapulco",
        country: "Ciudad Mexicana",
      },
      {
        id: "2",
        capital: "Ciudad de \nMéxico",
        country: "México",
      },
      {
        id: "3",
        capital: "Guadalajara",
        country: "Ciudad Mexicana",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "La capital de México es como una metrópoli bulliciosa, hogar de más de 9 millones de personas, lo que la convierte en una de las ciudades más grandes del mundo. Con su rica historia y vibrante cultura, ocupa un lugar destacado entre las capitales más pobladas a nivel mundial.",
  },
  {
    id: "7b",
    status: "Flags",
    capital: "México",
    country: "Ciudad de México",
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
        img: require("../../../assets/Flags/peru.png"),
        country: "Perú",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Oh, ¿la bandera de México? Tiene tres franjas verticales: verde, blanca y roja, y hay un impresionante emblema de un águila justo en el centro.",
  },
  {
    id: "7c",
    status: "Guess",
    word: "MÉXICO",
    country: "México",
    num: 6,
    letters: "YXRÉAPOIMTKC",
    img: require("../../../assets/Flags/mexico.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    capital: "Siria",
    country: "Damasco",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/iraq.png"),
        country: "Irak",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/egypt.png"),
        country: "Egipto",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/syria.png"),
        country: "Siria",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/United-Arab-Emirates.png"),
        country: "",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Piensa en una ciudad famosa por sus mercados antiguos y la Mezquita de los Omeyas. Se encuentra cerca del extremo oriental de la región mediterránea, cerca del Líbano y justo al norte de la frontera con Jordania.",
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Siria",
    country: "Damascus",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/iraq.png"),
        country: "Irak",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/egypt.png"),
        country: "Egipto",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/syria.png"),
        country: "Siria",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/United-Arab-Emirates.png"),
        country: "Emiratos Árabes Unidos",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Para la bandera de Siria, busca franjas horizontales y no olvides las dos estrellas verdes en el centro. ¡Esa es la clave!",
  },
  {
    id: "8c",
    status: "Guess",
    word: "DAMASCO",
    country: "Siria",
    num: 6,
    letters: "ULDEAPOSJTMC",
    img: require("../../../assets/Flags/syria.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Portugal",
    image: require("../../../assets/Flags/portugal.png"),
    options: [
      {
        id: "0",
        capital: "Madrid",
        country: "España",
      },
      {
        id: "1",
        capital: "Lisboa",
        country: "Portugal",
      },
      {
        id: "2",
        capital: "París",
        country: "Francia",
      },
      {
        id: "3",
        capital: "Roma",
        country: "Italia",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "La capital de Portugal es conocida por sus icónicos tranvías y sus barrios históricos como Alfama. Se encuentra en la costa, con vistas al océano Atlántico.",
  },
  {
    id: "9b",
    status: "Flags",
    capital: "Portugal",
    country: "Lisboa",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/lithuania.png"),
        country: "Lituania",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/portugal.png"),
        country: "Portugal",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/brazil.png"),
        country: "Brasil",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/italy.png"),
        country: "Italia",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "¿La bandera de Portugal? Está dividida en verde a la izquierda y rojo a la derecha, con un detallado escudo de armas justo en el medio.",
  },
  {
    id: "9c",
    status: "Guess",
    word: "LISBOA",
    country: "Portugal",
    num: 6,
    letters: "ILREAPYSNOBC",

    img: require("../../../assets/Flags/portugal.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Países Bajos",
    image: require("../../../assets/Flags/netherlands.png"),
    options: [
      {
        id: "0",
        capital: "Varsovia",
        country: "Polonia",
      },
      {
        id: "1",
        capital: "Ámsterdam",
        country: "Países Bajos",
      },
      {
        id: "2",
        capital: "Bruselas",
        country: "Bélgica",
      },
      {
        id: "3",
        capital: "Berlín",
        country: "Alemania",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "La capital de los Países Bajos es famosa por sus canales, casas estrechas y museos de arte de clase mundial como el Rijksmuseum. Es conocida por su vibrante cultura ciclista.",
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Países Bajos",
    country: "Ámsterdam",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/paraguay.png"),
        country: "Paraguay",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/russia.png"),
        country: "Rusia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/serbia.png"),
        country: "Serbia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/netherlands.png"),
        country: "Países Bajos",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Oh, ¿la bandera de los Países Bajos? Es muy simple: busca tres franjas horizontales en rojo, blanco y azul de arriba a abajo.",
  },
  {
    id: "10c",
    status: "Guess",
    word: "ÁMSTERDAM",
    country: "Países Bajos",
    num: 8,
    letters: "IÁREAPMSDOTC",
    img: require("../../../assets/Flags/netherlands.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question2Es;
