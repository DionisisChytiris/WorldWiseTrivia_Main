const question3Es = [
    {
      id: "1a",
      status: "Capitals",
      country: "Quito",
      image: require("../../../assets/Flags/ecuador.png"),
      options: [
        {
          id: "0",
          capital: "Colombia",
          country: "Bogotá",
        },
        {
          id: "1",
          capital: "Perú",
          country: "Lima",
        },
        {
          id: "2",
          capital: "Ecuador",
          country: "Quito",
        },
        {
          id: "3",
          capital: "Brasil",
          country: "Brasilia",
        },
      ],
      correctAnswerIndex: 2,
    phoneHelp: ''
    },
    {
      id: "1b",
      status: "Flags",
      capital: "Quito",
      country: "Ecuador",
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
      correctAnswerIndex: 2,
    phoneHelp: ''
    },
    {
      id: "1c",
      status: "Guess",
      word: "ECUADOR",
      country: "Lima",
      num: 7,
      letters: "ILUEANORDPMC",
      img: require("../../../assets/Flags/ecuador.png"),
    },
    {
      id: "2a",
      status: "Capitals",
      country: "Doha",
      image: require("../../../assets/Flags/qatar.png"),
      options: [
        {
          id: "0",
          capital: 'Baréin',
          country: 'Manama'
        },
        {
          id: "1",
          capital: 'Catar',
          country: 'Doha'
        },
        {
          id: "2",
          capital: 'Jordania',
          country: 'Amán'
        },
        {
          id: "3",
          capital: 'Omán',
          country: 'Muscat'
        },
      ],
      correctAnswerIndex: 1,
    phoneHelp: ''
    },
    {
      id: "2b",
      status: "Flags",
      capital: "Doha",
      country: "Catar",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/Indonesia.png"),
          country: "Indonesia",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/qatar.png"),
          country: "Catar",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/Bahrain.png"),
          country: "Baréin",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/malta.png"),
          country: "Malta",
        },
      ],
      correctAnswerIndex: 1,
    phoneHelp: ''
    },
    {
      id: "2c",
      status: "Guess",
      word: "QATAR",
      country: "Doha",
      num: 4,
      letters: "ITUEAQORJPMC",
      img: require("../../../assets/Flags/qatar.png"),
    },
    {
      id: "3a",
      status: "Capitals",
      country: "Oslo",
      image: require("../../../assets/Flags/norway.png"),
      options: [
        {
          id: "0",
          capital: 'Noruega',
          country: 'Oslo'
        },
        {
          id: "1",
          capital: 'Finlandia',
          country: 'Helsinki'
        },
        {
          id: "2",
          capital: 'Suecia',
          country: 'Estocolmo'
        },
        {
          id: "3",
          capital: 'Dinamarca',
          country: 'Copenhague'
        },
      ],
      correctAnswerIndex: 0,
    phoneHelp: ''
    },
  
    {
      id: "3b",
      status: "Flags",
      capital: "Oslo",
      country: "Noruega",
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
          img: require("../../../assets/Flags/denmark.png"),
          country: "Dinamarca",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/sweden.png"),
          country: "Suecia",
        },
      ],
      correctAnswerIndex: 0,
    phoneHelp: ''
    },
    {
      id: "3c",
      status: "Guess",
      word: "NORWAY",
      country: "Oslo",
      num: 6,
      letters: "IYLEARWTMOUN",
      img: require("../../../assets/Flags/norway.png"),
    },
    {
      id: "4a",
      status: "Capitals",
      country: "Bogotá",
      image: require("../../../assets/Flags/colombia.png"),
      options: [
        {
          id: "0",
          capital: "Bolivia",
          country: "La Paz",
        },
        {
          id: "1",
          capital: "Perú",
          country: "Lima",
        },
        {
          id: "2",
          capital: "Ecuador",
          country: "Quito",
        },
        {
          id: "0",
          capital: "Colombia",
          country: "Bogotá",
        },
      ],
      correctAnswerIndex: 3,
    phoneHelp: ''
    },
    {
      id: "4b",
      status: "Flags",
      capital: "Bogotá",
      country: "Colombia",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/ecuador.png"),
          country: "Ecuador",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/romania.png"),
          country: "Rumanía",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/venezuela.png"),
          country: "Venezuela",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/colombia.png"),
          country: "Colombia",
        },
      ],
      correctAnswerIndex: 3,
    phoneHelp: ''
    },
    {
      id: "4c",
      status: "Guess",
      word: "COLOMBIA",
      country: "Bogotá",
      num: 7,
      letters: "ILUEANORMBMC",
      img: require("../../../assets/Flags/colombia.png"),
    },
    {
      id: "5a",
      status: "Capitals",
      country: "Amán",
      image: require("../../../assets/Flags/jordan.png"),
      options: [
        {
          id: "0",
          capital: 'Siria',
          country: 'Damascus'
        },
        {
          id: "1",
          capital: 'Jordania',
          country: 'Amán'
        },
        {
          id: "2",
          capital: 'Omán',
          country: 'Muscat'
        },
        {
          id: "3",
          capital: 'Irak',
          country: 'Bagdad'
        },
      ],
      correctAnswerIndex: 1,
      phoneHelp: ''
    },
    {
      id: "5b",
      status: "Flags",
      capital: "Amán",
      country: "Jordania",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/syria.png"),
          country: "Siria",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/jordan.png"),
          country: "Jordania",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/iraq.png"),
          country: "Irak",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/egypt.png"),
          country: "Egipto",
        },
      ],
      correctAnswerIndex: 1,
    phoneHelp: ''
    },
    {
      id: "5c",
      status: "Guess",
      word: "JORDAN",
      country: "Amán",
      num: 6,
      letters: "ILUEANORJPDC",
      img: require("../../../assets/Flags/jordan.png"),
    },
    {
      id: "6a",
      status: "Capitals",
      country: "Praga",
      image: require("../../../assets/Flags/czechia.png"),
      options: [
        {
          id: "0",
          capital: 'República Checa',
          country: 'Praga'
        },
        {
          id: "1",
          capital: 'Hungría',
          country: 'Budapest'
        },
        {
          id: "2",
          capital: 'Austria',
          country: 'Viena'
        },
        {
          id: "3",
          capital: 'Eslovaquia',
          country: 'Bratislava'
        },
      ],
      correctAnswerIndex: 0,
    phoneHelp: ''
    },
    {
      id: "6b",
      status: "Flags",
      capital: "Praga",
      country: "República Checa",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags//czechia.png"),
          country: "República Checa",
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
          img: require("../../../assets/Flags/philipines.png"),
          country: "Filipinas",
        },
      ],
      correctAnswerIndex: 0,
    phoneHelp: ''
    },
    {
      id: "6c",
      status: "Guess",
      word: "CZECHIA",
      country: "Praga",
      num: 6,
      letters: "IZUEANORHPMC",
      img: require("../../../assets/Flags/czechia.png"),
    },
    {
      id: "7a",
      status: "Capitals",
      country: "Yakarta",
      image: require("../../../assets/Flags/Indonesia.png"),
      options: [
        {
          id: "0",
          capital: 'Malasia',
          country: 'Kuala Lumpur'
        },
        {
          id: "1",
          capital: 'Singapur',
          country: 'Singapur'
        },
        {
          id: "2",
          capital: 'Indonesia',
          country: 'Yakarta'
        },
        {
          id: "3",
          capital: 'Vietnam',
          country: 'Hanói'
        },
      ],
      correctAnswerIndex: 2,
    phoneHelp: ''
    },
    {
      id: "7b",
      status: "Flags" ,
      capital: "Yakarta",
      country: "Indonesia",
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
    phoneHelp: ''
    },
    {
      id: "7c",
      status: "Guess",
      word: "INDONESIA",
      num: 7,
      letters: "IYLEANHTDOPS",
      img: require("../../../assets/Flags/Indonesia.png"),
    },
    {
      id: "8a",
      status: "Capitals",
      country: "Buenos Aires",
      image: require("../../../assets/Flags/argentina.png"),
      options: [
        {
          id: "0",
          capital: 'Brasil',
          country: 'Brasilia'
        },
        {
          id: "1",
          capital: 'Argentina',
          country: 'Buenos Aires'
        },
        {
          id: "2",
          capital: 'Uruguay',
          country: 'Montevideo'
        },
        {
          id: "3",
          capital: 'Paraguay',
          country: 'Asunción'
        },
      ],
      correctAnswerIndex: 1,
    phoneHelp: ''
    },
    {
      id: "8b",
      status: "Flags",
      capital: "Buenos Aires",
      country: "Argentina",
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
          img: require("../../../assets/Flags/Panama.png"),
          country: "Panamá",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/uruguay.png"),
          country: "Uruguay",
        },
      ],
      correctAnswerIndex: 1,
    phoneHelp: ''
    },
    {
      id: "8c",
      status: "Guess",
      word: "ARGENTINA",
      country: "Buenos Aires",
      num: 7,
      letters: "ILUEANORTPMG",
      img: require("../../../assets/Flags/argentina.png"),
    },
    {
      id: "9a",
      status: "Capitals",
      country: "Seúl",
      image: require("../../../assets/Flags/skorea.png"),
      options: [
        {
          id: "0",
          capital: 'Corea del Sur',
          country: 'Seúl'
        },
        {
          id: "1",
          capital: 'China',
          country: 'Pekín'
        },
        {
          id: "2",
          capital: 'Japón',
          country: 'Tokio'
        },
        {
          id: "3",
          capital: 'Mongolia',
          country: 'Ulaanbaatar'
        },
      ],
      correctAnswerIndex: 0,
    phoneHelp: ''
    },
    {
      id: "9b",
      status: "Flags",
      capital: "Seúl",
      country: "Corea del Sur",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/skorea.png"),
          country: "Corea del Sur",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/bangladesh.png"),
          country: "Bangladés",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/Palau.png"),
          country: "Palau",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/japan.png"),
          country: "Japón",
        },
      ],
      correctAnswerIndex: 0,
    phoneHelp: ''
    },
    {
      id: "9c",
      status: "Guess",
      word: "SOUTHKOREA",
      country: "Seúl",
      num: 9,
      letters: "ILUEANORSKHT",
      img: require("../../../assets/Flags/skorea.png"),
    },
    {
      id: "10a",
      status: "Capitals",
      country: "Helsinki",
      image: require("../../../assets/Flags/finland.png"),
      options: [
        {
          id: "0",
          capital: 'Noruega',
          country: 'Oslo'
        },
        {
          id: "1",
          capital: 'Islandia',
          country: 'Reikiavik'
        },
        {
          id: "2",
          capital: 'Dinamarca',
          country: 'Copenhague'
        },
        {
          id: "3",
          capital: 'Finlandia',
          country: 'Helsinki'
        },
      ],
      correctAnswerIndex: 3,
    phoneHelp: ''
    },
    {
      id: "10b",
      status: "Flags",
      capital: "Helsinki",
      country: "Finlandia",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/iceland.png"),
          country: "Islandia",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/norway.png"),
          country: "Noruega",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/england.jpg"),
          country: "England",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/finland.png"),
          country: "Finlandia",
        },
      ],
      correctAnswerIndex: 3,
    phoneHelp: ''
    },
    {
      id: "10c",
      status: "Guess",
      word: "FINLAND",
      country: "Helsinki",
      num: 6,
      letters: "ILUEANOFDPMC",
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
  