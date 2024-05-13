const question1Es = [
    {
      id: "1a",
      status: "Capitals",
      country: "Italia",
      image: require("../../../assets/Flags/italy.png"),
      options: [
        {
          id: "0",
          capital: 'París',
          country: 'Francia'
        },
        {
          id: "1",
          capital: 'Roma',
          country: 'Italia'
        },
        {
          id: "2",
          capital: 'Madrid',
          country: 'España'
        },
        {
          id: "3",
          capital: 'Milán',
          country: 'Italia'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "1b",
      status: "Flags" ,
      capital: "Italia",
      country: "Roma",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/france.png"),
          country: 'Francia'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/italy.png"),
          country: 'Italia'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/spain.png"),
          country: 'España'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/lithuania.png"),
          country: 'Lituania'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "1c",
      status: "Guess",
      word: "ROMA",
      country: "Italia",
      num: 4,
      letters: "ILUEANORJPMC",
      img: require("../../../assets/Flags/italy.png"),
    },
    {
      id: "2a",
      status: "Capitals",
      country: "Reino Unido",
      image: require("../../../assets/Flags/uk.png"),
      options: [
        {
          id: "0",
          capital: 'Londres',
          country: 'Reino Unido'
        },
        {
          id: "1",
          capital: 'París',
          country: 'Francia'
        },
        {
          id: "2",
          capital: 'Madrid',
          country: 'España'
        },
        {
          id: "3",
          capital: 'Berlín',
          country: 'Alemania'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "2b",
      status: "Flags" ,
      capital: "Reino Unido",
      country: "Londres",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/uk.png"),
          country: 'Reino Unido'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/france.png"),
          country: 'Francia'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/netherlands.png"),
          country: 'Países Bajos'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/australia.png"),
          country: 'Australia'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "2c",
      status: "Guess",
      word: "LONDRES",
      ccountry: "Reino Unido",
      num: 7,
      letters: "ILUEANODJORS",
      img: require("../../../assets/Flags/uk.png"),
    },
    {
      id: "3a",
      status: "Capitals",
      country: "España",
      image: require("../../../assets/Flags/spain.png"),
      options: [
        {
          id: "0",
          capital: 'Paris',
          country: 'Francia'
        },
        {
          id: "1",
          capital: 'Roma',
          country: 'Italia'
        },
        {
          id: "2",
          capital: 'Madrid',
          country: 'España'
        },
        {
          id: "3",
          capital: 'Milan',
          country: 'Ciudad italiana'
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "3b",
      status: "Flags",
      capital: "España",
      country: "Madrid",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/portugal.png"),
          country: 'Portugal'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/bolivia.png"),
          country: 'Bolivia'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/spain.png"),
          country: 'España'
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
      id: "3c",
      status: "Guess",
      word: "MADRID",
      country: "España",
      num: 5,
      letters: "ILUEANRDJOMC",
      img: require("../../../assets/Flags/spain.png"),
    },
    {
      id: "4a",
      status: "Capitals",
      country: "Irlanda",
      image: require("../../../assets/Flags/ireland.png"),
      options: [
        {
          id: "0",
          capital: 'Londres',
          country: 'Reino Unido'
        },
        {
          id: "1",
          capital: 'París',
          country: 'Francia'
        },
        {
          id: "2",
          capital: 'Madrid',
          country: 'España'
        },
        {
          id: "3",
          capital: 'Dublín',
          country: 'Irlanda'
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "4b",
      status: "Flags" ,
      capital: "Irlanda",
      country: "Dublín",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/portugal.png"),
          country: 'Portugal'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/ireland.png"),
          country: 'Irlanda'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/india.png"),
          country: 'India'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/hungary.png"),
          country: 'Hungría'
        },
      ],
      correctAnswerIndex: 1,
    },
     {
      id: "4c",
      status: "Guess",
      word: "DUBLÍN",
      country: "Irlanda",
      num: 6,
      letters: "ÍLUEANODJOBC",
      img: require("../../../assets/Flags/ireland.png"),
    },
    {
      id: "5a",
      status: "Capitals",
      country: "Japón",
      image: require("../../../assets/Flags/japan.png"),
      options: [
        {
          id: "0",
          capital: 'Taipéi',
          country: 'Taiwán'
        },
        {
          id: "1",
          capital: 'Pekín',
          country: 'China'
        },
        {
          id: "2",
          capital: 'Seúl',
          country: 'Corea del Sur'
        },
        {
          id: "3",
          capital: 'Tokio',
          country: 'Japón'
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "5b",
      status: "Flags" ,
      capital: "Japón",
      country: "Tokio",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/skorea.png"),
          country: 'Corea del Sur'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/Palau.png"),
          country: 'Palau'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/Laos.png"),
          country: 'Laos'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/japan.png"),
          country: 'Japón'
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "5c",
      status: "Guess",
      word: "TOKIO",
      country: "Japón",
      num: 4,
      letters: "YLREAPOSITKC",
      img: require("../../../assets/Flags/japan.png"),
    },
    {
      id: "6a",
      status: "Capitals",
      country: "Perú",
      image: require("../../../assets/Flags/peru.png"),
      options: [
        {
          id: "0",
          capital: 'Quito',
          country: 'Ecuador'
        },
        {
          id: "1",
          capital: 'Bogotá',
          country: 'Colombia'
        },
        {
          id: "2",
          capital: 'Lima',
          country: 'Perú'
        },
        {
          id: "3",
          capital: 'Asunción',
          country: 'Paraguay'
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "6b",
      status: "Flags" ,
      capital: "Perú",
      country: "Lima",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/peru.png"),
          country: 'Perú'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/austria.png"),
          country: 'Austria'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/latvia.png"),
          country: 'Letonia'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/poland.png"),
          country: 'Polonia'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "6c",
      status: "Guess",
      word: "LIMA",
      country: "Perú",
      num: 4,
      letters: "ILREAPMSJOBC",
      img: require("../../../assets/Flags/peru.png"),
    },
    {
      id: "7a",
      status: "Capitals",
      country: "China",
      image: require("../../../assets/Flags/china.png"),
      options: [
        {
          id: "0",
          capital: 'Pekín',
          country: 'China'
        },
        {
          id: "1",
          capital: 'Hanói',
          country: 'Vietnam'
        },
        {
          id: "2",
          capital: 'Tokio',
          country: 'Japón'
        },
        {
          id: "3",
          capital: 'Seúl',
          country: 'Corea del Sur'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "7b",
      status: "Flags" ,
      capital: "China",
      country: "Pekín",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/morocco.png"),
          country: 'Marruecos'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/turkey.png"),
          country: 'Turquía'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/china.png"),
          country: 'China'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/vietnam.png"),
          country: 'Vietnam'
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "7c",
      status: "Guess",
      word: "PEKÍN",
      country: "China",
      num: 6,
      letters: "ÍLREAPNSJOKG",
      img: require("../../../assets/Flags/china.png"),
    },
    {
      id: "8a",
      status: "Capitals",
      country: "Egipto",
      image: require("../../../assets/Flags/egypt.png"),
      options: [
        {
          id: "0",
          capital: 'El Cairo',
          country: 'Egipto'
        },
        {
          id: "1",
          capital: 'Bagdad',
          country: 'Irak'
        },
        {
          id: "2",
          capital: 'Damasco',
          country: 'Siria'
        },
        {
          id: "3",
          capital: 'Abu Dabi',
          country: 'Emiratos Árabes \nUnidos'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "8b",
      status: "Flags",
      capital: "Egipto",
      country: "El Cairo",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/iraq.png"),
          country: 'Irak'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/egypt.png"),
          country: 'Egipto'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/syria.png"),
          country: 'Siria'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/United-Arab-Emirates.png"),
          country: 'Emiratos Árabes Unidos'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "8c",
      status: "Guess",
      word: "CAIRO",
      country: "Egipto",
      num: 5,
      letters: "ILREAPRSJOBC",
      img: require("../../../assets/Flags/egypt.png"),
    },
    {
      id: "9a",
      status: "Capitals",
      country: "Francia",
      image: require("../../../assets/Flags/france.png"),
      options: [
        {
          id: "0",
          capital: 'Londres',
          country: 'Reino Unido'
        },
        {
          id: "1",
          capital: 'París',
          country: 'Francia'
        },
        {
          id: "2",
          capital: 'Madrid',
          country: 'España'
        },
        {
          id: "3",
          capital: 'Berlín',
          country: 'Alemania'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "9b",
      status: "Flags" ,
      capital: "Francia",
      country: "Paris",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/netherlands.png"),
          country: 'Países Bajos'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/Cuba.png"),
          country: 'Cuba'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/france.png"),
          country: 'Francia'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/russia.png"),
          country: 'Rusia'
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "9c",
      status: "Guess",
      word: "PARÍS",
      ountry: "Francia",
      num: 5,
      letters: "ÍLREAPOSJOBC",
      img: require("../../../assets/Flags/france.png"),
    },
    {
      id: "10a",
      status: "Capitals",
      country: "Australia",
      image: require("../../../assets/Flags/australia.png"),
      options: [
        {
          id: "0",
          capital: 'Wellington',
          country: 'Nueva Zelanda'
        },
        {
          id: "1",
          capital: 'Melbourne',
          country: 'Australia'
        },
        {
          id: "2",
          capital: 'Sídney',
          country: 'Australia'
        },
        {
          id: "3",
          capital: 'Camberra',
          country: 'Australia'
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "10b",
      status: "Flags" ,
      capital: "Australia",
      country: "Canberra",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/australia.png"),
          country: 'Australia'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/uk.png"),
          country: 'Reino Unido'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/newZealand.png"),
          country: 'Nueva Zelanda'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/Fiji.png"),
          country: 'Fiyi'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "10c",
      status: "Guess",
      word: "CANBERRA",
      country: "Australia",
      num: 6,
      letters: "ILREAPMSNOBC",
      img: require("../../../assets/Flags/australia.png"),
    },
    {
      id: "11",
      status: "Flags",
      capital: "",
      country: "",
    },
  ];
  export default question1Es;
  