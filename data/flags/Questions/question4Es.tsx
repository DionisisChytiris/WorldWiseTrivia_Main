const question4Es = [
    {
      id: "1a",
      status: "Capitals",
      country: "Zagreb",
      image: require("../../../assets/Flags/croatia.png"),
      options: [
        {
          id: "0",
          capital: "Eslovenia",
          country: "Liubliana",
        },
        {
          id: "1",
          capital: "Serbia",
          country: "Belgrado",
        },
        {
          id: "2",
          capital: "Eslovaquia",
          country: "Bratislava",
        },
        {
          id: "3",
          capital: "Croacia",
          country: "Zagreb",
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "1b",
      status: "Flags",
      capital: "Zagreb",
      country: "Croacia",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/slovakia.png"),
          country: "Eslovaquia",
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
          img: require("../../../assets/Flags/croatia.png"),
          country: "Croacia",
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "1c",
      status: "Guess",
      word: "CROATIA",
      country: "Zagreb",
      num: 6,
      letters: "ILUEANORTPMC",
      img: require("../../../assets/Flags/croatia.png"),
    },
    {
      id: "2a",
      status: "Capitals",
      country: "Tirana",
      image: require("../../../assets/Flags/albania.png"),
      options: [
        {
          id: "0",
          capital: 'Marruecos',
          country: 'Rabat'
        },
        {
          id: "1",
          capital: 'Albania',
          country: 'Tirana'
        },
        {
          id: "2",
          capital: 'Vietnam',
          country: 'Hanói'
        },
        {
          id: "3",
          capital: 'Turquía',
          country: 'Ankara'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "2b",
      status: "Flags",
      capital: "Tirana",
      country: "Albania",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/turkey.png"),
          country: "Turquía",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/albania.png"),
          country: "Albania",
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
      correctAnswerIndex: 1
    },
    {
      id: "2c",
      status: "Guess",
      word: "ALBANIA",
      country: "Tirana",
      num: 5,
      letters: "ILREANODBOPC",
      img: require("../../../assets/Flags/albania.png"),
    },
    {
      id: "3a",
      status: "Capitals",
      country: "Bucarest",
      image: require("../../../assets/Flags/romania.png"),
      options: [
        {
          id: "0",
          capital: 'Rumanía',
          country: 'Bucarest'
        },
        {
          id: "1",
          capital: 'Hungría',
          country: 'Budapest'
        },
        {
          id: "2",
          capital: 'Polonia',
          country: 'Varsovia'
        },
        {
          id: "3",
          capital: 'Austria',
          country: 'Viena'
        },
      ],
      correctAnswerIndex: 0,
    },
  
    {
      id: "3b",
      status: "Flags",
      capital: "Bucarest",
      country: "Rumanía",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/romania.png"),
          country: "Rumanía",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/venezuela.png"),
          country: "Venezuela",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/armenia.png"),
          country: "Armenia",
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
      id: "3c",
      status: "Guess",
      word: "ROMANIA",
      country: "Bucarest",
      num: 6,
      letters: "ILUEANORJPMC",
      img: require("../../../assets/Flags/romania.png"),
    },
    {
      id: "4a",
      status: "Capitals",
      country: "Teherán",
      image: require("../../../assets/Flags/iran.png"),
      options: [
        {
          id: "0",
          capital: 'Irak',
          country: 'Bagdad'
        },
        {
          id: "1",
          capital: 'Irán',
          country: 'Teherán'
        },
        {
          id: "2",
          capital: 'Jordania',
          country: 'Amán'
        },
        {
          id: "3",
          capital: 'Siria',
          country: 'Damascus'
        },
      ],
      correctAnswerIndex: 1,
    },
  
    {
      id: "4b",
      status: "Flags",
      capital: "Teherán",
      country: "Irán",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/india.png"),
          country: "India",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/iran.png"),
          country: "Irán",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/italy.png"),
          country: "Italia",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/mexico.png"),
          country: "México",
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "4c",
      status: "Guess",
      word: "IRAN",
      country: "Teherán",
      num: 4,
      letters: "IDLEANHTROPC",
      img: require("../../../assets/Flags/iran.png"),
    },
    {
      id: "5a",
      status: "Capitals",
      country: "Varsovia",
      image: require("../../../assets/Flags/poland.png"),
      options: [
        {
          id: "0",
          capital: 'Lituania',
          country: 'Vilna'
        },
        {
          id: "1",
          capital: 'Bielorrusia',
          country: 'Minsk'
        },
        {
          id: "2",
          capital: 'Polonia',
          country: 'Varsovia'
        },
        {
          id: "3",
          capital: 'Eslovaquia',
          country: 'Bratislava'
        },
      ],
      correctAnswerIndex: 2,
    },
  
    {
      id: "5b",
      status: "Flags",
      capital: "Varsovia",
      country: "Polonia",
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
          img: require("../../../assets/Flags/poland.png"),
          country: "Polonia",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/austria.png"),
          country: "Austria",
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "5c",
      status: "Guess",
      word: "POLAND",
      country: "Varsovia",
      num: 6,
      letters: "ILUEANORDPMC",
      img: require("../../../assets/Flags/poland.png"),
    },
    {
      id: "6a",
      status: "Capitals",
      country: "Brasilia",
      image: require("../../../assets/Flags/brazil.png"),
      options: [
        {
          id: "0",
          capital: 'Venezuela',
          country: 'Caracas'
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
          capital: 'Brasil',
          country: 'Brasilia'
        },
      ],
      correctAnswerIndex: 3
    },
    {
      id: "6b",
      status: "Flags",
      capital: "Brasilia",
      country: "Brasil",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/portugal.png"),
          country: "Portugal",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/bolivia.png"),
          country: "Bolivia",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/jamaica.png"),
          country: "Jamaica",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/brazil.png"),
          country: "Brasil",
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "6c",
      status: "Guess",
      word: "BRAZIL",
      country: "Brasilia",
      num: 6,
      letters: "ILUEANORBZMC",
      img: require("../../../assets/Flags/brazil.png"),
    },
    {
      id: "7a",
      status: "Capitals",
      country: "Bruselas",
      image: require("../../../assets/Flags/belgium.png"),
      options: [
        {
          id: "0",
          capital: 'Países Bajos',
          country: 'Ámsterdam'
        },
        {
          id: "1",
          capital: 'Bélgica',
          country: 'Bruselas'
        },
        {
          id: "2",
          capital: 'Alemania',
          country: 'Berlín'
        },
        {
          id: "3",
          capital: 'Francia',
          country: 'París'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "7b",
      status: "Flags",
      capital: "Bruselas",
      country: "Bélgica",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/germany.png"),
          country: "Alemania",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/belgium.png"),
          country: "Bélgica",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/italy.png"),
          country: "Italia",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/switzerland.png"),
          country: "Suiza",
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "7c",
      status: "Guess",
      word: "BELGIUM",
      num: 7,
      letters: "ILRUAMEDBOPG",
      img: require("../../../assets/Flags/belgium.png"),
    },
    {
      id: "8a",
      status: "Capitals",
      country: "Santiago de Chile",
      image: require("../../../assets/Flags/chile.png"),
      options: [
        {
          id: "0",
          capital: 'Chile',
          country: 'Santiago de Chile'
        },
        {
          id: "1",
          capital: 'Perú',
          country: 'Lima'
        },
        {
          id: "2",
          capital: 'Colombia',
          country: 'Bogotá'
        },
        {
          id: "3",
          capital: 'Ecuador',
          country: 'Quito'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "8b",
      status: "Flags",
      capital: "Santiago de Chile",
      country: "Chile",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/chile.png"),
          country: "Chile",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/philipines.png"),
          country: "Filipinas",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/thailand.png"),
          country: "Tailandia",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/malaysia.png"),
          country: "Malasia",
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "8c",
      status: "Guess",
      word: "CHILE",
      country: "Santiago de Chile",
      num: 5,
      letters: "IYLEANHTMOPC",
      img: require("../../../assets/Flags/chile.png"),
    },
    {
      id: "9a",
      status: "Capitals",
      country: "Panamá city",
      image: require("../../../assets/Flags/Panama.png"),
      options: [
        {
          id: "0",
          capital: 'Honduras',
          country: 'Tegucigalpa'
        },
        {
          id: "1",
          capital: 'Guatemala',
          country: 'Ciudad de Guatamala'
        },
        {
          id: "2",
          capital: 'Nicaragua',
          country: 'Managua'
        },
        {
          id: "3",
          capital: 'Panamá',
          country: 'Panamá City'
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "9b",
      status: "Flags",
      capital: "Panamá City",
      country: "Panamá",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/dominican.png"),
          country: "República Dominicana",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/puertoRico.jpg"),
          country: "Puerto Rico",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/costaRica.png"),
          country: "Costa Rica",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/Panama.png"),
          country: "Panamá",
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "9c",
      status: "Guess",
      word: "PANAMA",
      country: "Panamá City",
      num: 4,
      letters: "ILUEANORJPMC",
      img: require("../../../assets/Flags/Panama.png"),
    },
    {
      id: "10a",
      status: "Capitals",
      country: "Trípoli",
      image: require("../../../assets/Flags/libya.png"),
      options: [
        {
          id: "0",
          capital: 'Libia',
          country: 'Trípoli'
        },
        {
          id: "1",
          capital: 'Argelia',
          country: 'Argel'
        },
        {
          id: "2",
          capital: 'Egipto',
          country: 'El Cairo'
        },
        {
          id: "3",
          capital: 'Líbano',
          country: 'Beirut'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "10b",
      status: "Flags",
      capital: "Trípoli",
      country: "Libia",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/libya.png"),
          country: "Libia",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/azerbaijan.png"),
          country: "Azerbaiyán",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/tunisia.png"),
          country: "Túnez",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/Algeria.png"),
          country: "Argelia",
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "10c",
      status: "Guess",
      word: "LIBYA",
      country: "Trípoli",
      num: 5,
      letters: "ILUEANOYBPMC",
      img: require("../../../assets/Flags/libya.png"),
    },
    {
      id: "11",
      status: "Flags",
      capital: "",
      country: "",
    },
  ];
  export default question4Es;
  