const question8Es = [
  {
    id: "1a",
    status: "Capitals",
    country: "Bolivia",
    image: require("../../../assets/Flags/bolivia.png"),
    options: [
      {
        id: "0",
        capital: "Quito",
        country: "Ecuador",
      },
      {
        id: "1",
        capital: "Lima",
        country: "Perú",
      },
      {
        id: "2",
        capital: "Caracas",
        country: "Venezuela",
      },
      {
        id: "3",
        capital: "La Paz",
        country: "Bolivia",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Bolivia",
    country: "La Paz",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/senegal.png"),
        country: "Senegal",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/brazil.png"),
        country: "Brasil",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/ecuador.png"),
        country: "Ecuador",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/bolivia.png"),
        country: "Bolivia",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "1c",
    status: "Guess",
    word: "LAPAZ",
    country: "Bolivia",
    num: 4,
    letters: "ILREAPNZJOBC",
    img: require("../../../assets/Flags/bolivia.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Rusia",
    image: require("../../../assets/Flags/russia.png"),
    options: [
      {
        id: "0",
        capital: "Moscú",
        country: "Rusia",
      },
      {
        id: "1",
        capital: "Belgrado",
        country: "Serbia",
      },
      {
        id: "2",
        capital: "Zagreb",
        country: "Croacia",
      },
      {
        id: "3",
        capital: "Liubliana",
        country: "Eslovenia",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Rusia",
    country: "Moscú",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/russia.png"),
        country: "Rusia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/slovakia.png"),
        country: "Eslovaquia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/finland.png"),
        country: "Finlandia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/skorea.png"),
        country: "Corea del Sur",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "2c",
    status: "Guess",
    word: "MOSCÚ",
    country: "Rusia",
    num: 5,
    letters: "IÚMEAPNSWOBC",
    img: require("../../../assets/Flags/russia.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Turquía",
    image: require("../../../assets/Flags/turkey.png"),
    options: [
      {
        id: "0",
        capital: "Amán",
        country: "Jordania",
      },
      {
        id: "1",
        capital: "Damasco",
        country: "Siria",
      },
      {
        id: "2",
        capital: "Ankara",
        country: "Turquía",
      },
      {
        id: "3",
        capital: "Beirut",
        country: "Líbano",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "3b",
    status: "Flags",
    capital: "Turquía",
    country: "Ankara",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/tunisia.png"),
        country: "Túnez",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/libya.png"),
        country: "Libia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/turkey.png"),
        country: "Turquía",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Algeria.png"),
        country: "Argelia",
      },
    ],
    correctAnswerIndex: 2,
  },

  {
    id: "3c",
    status: "Guess",
    word: "ANKARA",
    country: "Turquía",
    num: 4,
    letters: "IRUEANODJOKC",
    img: require("../../../assets/Flags/turkey.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Nicaragua",
    image: require("../../../assets/Flags/nicaragua.png"),
    options: [
      {
        id: "0",
        capital: "Asuncion",
        country: "Paraguay",
      },
      {
        id: "1",
        capital: "Montevideo",
        country: "Uruguay",
      },
      {
        id: "2",
        capital: "Managua",
        country: "Nicaragua",
      },
      {
        id: "3",
        capital: "Costa Rica",
        country: "San José",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "4b",
    status: "Flags",
    capital: "Nicaragua",
    country: "Managua",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/uruguay.png"),
        country: "Uruguay",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/guatemala.png"),
        country: "Guatemala",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/nicaragua.png"),
        country: "Nicaragua",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/paraguay.png"),
        country: "Paraguay",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "4c",
    status: "Guess",
    word: "MANAGUA",
    country: "Nicaragua",
    num: 5,
    letters: "IMUEANODJOGC",
    img: require("../../../assets/Flags/nicaragua.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Armenia",
    image: require("../../../assets/Flags/armenia.png"),
    options: [
      {
        id: "0",
        capital: "Tiflis",
        country: "Georgia",
      },
      {
        id: "1",
        capital: "Ankara",
        country: "Turquía",
      },
      {
        id: "2",
        capital: "Teherán",
        country: "Irán",
      },
      {
        id: "3",
        capital: "Ereván",
        country: "Armenia",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Armenia",
    country: "Ereván",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/lithuania.png"),
        country: "Lituania",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: "Azerbaiyán",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/georgia.png"),
        country: "Georgia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/armenia.png"),
        country: "Armenia",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "5c",
    status: "Guess",
    word: "EREVÁN",
    country: "Armenia",
    num: 5,
    letters: "ILREÁPNSYOVC",
    img: require("../../../assets/Flags/armenia.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Nigeria",
    image: require("../../../assets/Flags/nigeria.png"),
    options: [
      {
        id: "0",
        capital: "Dakar",
        country: "Senegal",
      },

      {
        id: "1",
        capital: "Abuya",
        country: "Nigeria",
      },
      {
        id: "2",
        capital: "Yaundé",
        country: "Camerún",
      },
      {
        id: "3",
        capital: "Acra",
        country: "Ghana",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Nigeria",
    country: "Abuja",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Cameroon.png"),
        country: "Camerún",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/nigeria.png"),
        country: "Nigeria",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/jamaica.png"),
        country: "Jamaica",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Ghana.png"),
        country: "Ghana",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6c",
    status: "Guess",
    word: "ABUJA",
    country: "Nigeria",
    num: 4,
    letters: "IUREAPNSJOBC",
    img: require("../../../assets/Flags/nigeria.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Sudáfrica",
    image: require("../../../assets/Flags/safrica.png"),
    options: [
      {
        id: "0",
        capital: "Luanda",
        country: "Angola",
      },
      {
        id: "1",
        capital: "Dodoma",
        country: "Tanzania",
      },
      {
        id: "2",
        capital: "Pretoria",
        country: "Sudáfrica",
      },
      {
        id: "3",
        capital: "Gaborone",
        country: "Botswana",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7b",
    status: "Flags",
    capital: "Sudáfrica",
    country: "Pretoria",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Zambia.png"),
        country: "Zambia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Zimbabwe.png"),
        country: "Zimbabwe",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/safrica.png"),
        country: "Sudáfrica",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/angola.png"),
        country: "Angola",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7c",
    status: "Guess",
    word: "PRETORIA",
    country: "Sudáfrica",
    num: 7,
    letters: "ILREAPNSTOBC",
    img: require("../../../assets/Flags/safrica.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Túnez",
    image: require("../../../assets/Flags/tunisia.png"),
    options: [
      {
        id: "0",
        capital: "Túnez",
        country: "Túnez",
      },
      {
        id: "1",
        capital: "Argel",
        country: "Argelia",
      },
      {
        id: "2",
        capital: "Trípoli",
        country: "Libia",
      },
      {
        id: "3",
        capital: "Rabat",
        country: "Marruecos",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Túnez",
    country: "Túnez",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/tunisia.png"),
        country: "Túnez",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/turkey.png"),
        country: "Turquía",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Algeria.png"),
        country: "Argelia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags//libya.png"),
        country: "Libia",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8c",
    status: "Guess",
    word: "TÚNEZ",
    country: "Túnez",
    num: 5,
    letters: "ILÚEAPNSTOBC",
    img: require("../../../assets/Flags/tunisia.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Serbia",
    image: require("../../../assets/Flags/serbia.png"),
    options: [
      {
        id: "0",
        capital: "Tirana",
        country: "Albania",
      },
      {
        id: "1",
        capital: "Sofía",
        country: "Bulgaria",
      },
      {
        id: "2",
        capital: "Zagreb",
        country: "Croacia",
      },
      {
        id: "3",
        capital: "Belgrado",
        country: "Serbia",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "9b",
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
        img: require("../../../assets/Flags/croatia.png"),
        country: "Croacia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/bulgaria.png"),
        country: "Bulgaria",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/serbia.png"),
        country: "Serbia",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "9c",
    status: "Guess",
    country: "Serbia",
    word: "BELGRADO",
    num: 8,
    letters: "ILREAPDGJOBC",
    img: require("../../../assets/Flags/serbia.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Angola",
    image: require("../../../assets/Flags/angola.png"),
    options: [
      {
        id: "0",
        capital: "Dakar",
        country: "Senegal",
      },
      {
        id: "1",
        capital: "Luanda",
        country: "Angola",
      },
      {
        id: "2",
        capital: "Acra",
        country: "Ghana",
      },
      {
        id: "3",
        capital: "Abuya",
        country: "Nigeria",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Angola",
    country: "Luanda",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/kenya.png"),
        country: "Kenia",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/angola.png"),
        country: "Angola",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Ethiopia.png"),
        country: "Etiopía",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Cameroon.png"),
        country: "Camerún",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "10c",
    status: "Guess",
    word: "LUANDA",
    country: "Angola",
    num: 5,
    letters: "ILREAPNUDOBC",
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
