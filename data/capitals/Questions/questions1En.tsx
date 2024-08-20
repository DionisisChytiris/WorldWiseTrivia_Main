const question1En = [
    {
      id: "1a",
      status: "Capitals",
      country: "Italy",
      image: require("../../../assets/Flags/italy.png"),
      options: [
        {
          id: "0",
          capital: 'Paris',
          country: 'France'
        },
        {
          id: "1",
          capital: 'Rome',
          country: 'Italy'
        },
        {
          id: "2",
          capital: 'Madrid',
          country: 'Spain'
        },
        {
          id: "3",
          capital: 'Milan',
          country: 'Italian city'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "1b",
      status: "Flags" ,
      capital: "Italy",
      country: "Rome",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/france.png"),
          country: 'France'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/italy.png"),
          country: 'Italy'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/spain.png"),
          country: 'Spain'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/lithuania.png"),
          country: 'Lithuania'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "1c",
      status: "Guess",
      word: "ROME",
      country: "Italy",
      num: 4,
      letters: "ILUEANORJPMC",
      img: require("../../../assets/Flags/italy.png"),
    },
    {
      id: "2a",
      status: "Capitals",
      country: "UK",
      image: require("../../../assets/Flags/uk.png"),
      options: [
        {
          id: "0",
          capital: 'London',
          country: 'UK'
        },
        {
          id: "1",
          capital: 'Paris',
          country: 'France'
        },
        {
          id: "2",
          capital: 'Madrid',
          country: 'Spain'
        },
        {
          id: "3",
          capital: 'Berlin',
          country: 'Germany'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "2b",
      status: "Flags" ,
      capital: "UK",
      country: "London",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/uk.png"),
          country: 'UK'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/france.png"),
          country: 'France'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/netherlands.png"),
          country: 'Netherlands'
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
      word: "LONDON",
      country: "UK",
      num: 4,
      letters: "ILUEANODJOBC",
      img: require("../../../assets/Flags/uk.png"),
    },
    {
      id: "3a",
      status: "Capitals",
      country: "Spain",
      image: require("../../../assets/Flags/spain.png"),
      options: [
        {
          id: "0",
          capital: 'Paris',
          country: 'France'
        },
        {
          id: "1",
          capital: 'Rome',
          country: 'Italy'
        },
        {
          id: "2",
          capital: 'Madrid',
          country: 'Spain'
        },
        {
          id: "3",
          capital: 'Milan',
          country: 'Italian city'
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "3b",
      status: "Flags" ,
      capital: "Spain",
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
          country: 'Spain'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/lithuania.png"),
          country: 'Lithuania'
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "3c",
      status: "Guess",
      word: "MADRID",
      country: "Spain",
      num: 5,
      letters: "ILUEANRDJOMC",
      img: require("../../../assets/Flags/spain.png"),
    },
    {
      id: "4a",
      status: "Capitals",
      country: "Ireland",
      image: require("../../../assets/Flags/ireland.png"),
      options: [
        {
          id: "0",
          capital: 'Dublin',
          country: 'Ireland'
        },
        {
          id: "1",
          capital: 'Lisbon',
          country: 'Portugal'
        },
        {
          id: "2",
          capital: 'London',
          country: 'UK'
        },
        {
          id: "3",
          capital: 'Berlin',
          country: 'Germany'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "4b",
      status: "Flags" ,
      capital: "Ireland",
      country: "Dublin",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/portugal.png"),
          country: 'Portugal'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/ireland.png"),
          country: 'Ireland'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/india.png"),
          country: 'India'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/hungary.png"),
          country: 'Hungary'
        },
      ],
      correctAnswerIndex: 1,
    },
     {
      id: "4c",
      status: "Guess",
      word: "DUBLIN",
      country: "Ireland",
      num: 6,
      letters: "ILUEANODJOBC",
      img: require("../../../assets/Flags/ireland.png"),
    },
    {
      id: "5a",
      status: "Capitals",
      country: "Japon",
      image: require("../../../assets/Flags/japan.png"),
      options: [
        {
          id: "0",
          capital: 'Taipei',
          country: 'Taiwan'
        },
        {
          id: "1",
          capital: 'Beijing',
          country: 'China'
        },
        {
          id: "2",
          capital: 'Seoul',
          country: 'South Korea'
        },
        {
          id: "3",
          capital: 'Tokyo',
          country: 'Japon'
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "5b",
      status: "Flags" ,
      capital: "Japon",
      country: "Tokyo",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/skorea.png"),
          country: 'South Korea'
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
          country: 'Japon'
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "5c",
      status: "Guess",
      word: "TOKYO",
      country: "Japon",
      num: 4,
      letters: "YLREAPOSJTKC",
      img: require("../../../assets/Flags/japan.png"),
    },
    {
      id: "6a",
      status: "Capitals",
      country: "Peru",
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
          country: 'Peru'
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
      capital: "Peru",
      country: "Lima",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/peru.png"),
          country: 'Peru'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/austria.png"),
          country: 'Austria'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/latvia.png"),
          country: 'Latvia'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/poland.png"),
          country: 'Poland'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "6c",
      status: "Guess",
      word: "LIMA",
      country: "Peru",
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
          capital: 'Beijing',
          country: 'China'
        },
        {
          id: "1",
          capital: 'Hanoi',
          country: 'Vietnam'
        },
        {
          id: "2",
          capital: 'Tokyo',
          country: 'Japon'
        },
        {
          id: "3",
          capital: 'Seoul',
          country: 'South Korea'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "7b",
      status: "Flags" ,
      capital: "China",
      country: "Beijing",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/morocco.png"),
          country: 'Morocco'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/turkey.png"),
          country: 'Turkey'
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
      word: "BEIJING",
      country: "China",
      num: 6,
      letters: "ILREAPNSJOBG",
      img: require("../../../assets/Flags/china.png"),
    },
    {
      id: "8a",
      status: "Capitals",
      country: "Egypt",
      image: require("../../../assets/Flags/egypt.png"),
      options: [
        {
          id: "0",
          capital: 'Baghdad',
          country: 'Iraq'
        },
        {
          id: "1",
          capital: 'Cairo',
          country: 'Egypt'
        },
        {
          id: "2",
          capital: 'Damascus',
          country: 'Syria'
        },
        {
          id: "3",
          capital: 'Abu Dhabi',
          country: 'United Arab\nEmirates'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "8b",
      status: "Flags",
      capital: "Egypt",
      country: "Cairo",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/iraq.png"),
          country: 'Iraq'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/egypt.png"),
          country: 'Egypt'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/syria.png"),
          country: 'Syria'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/United-Arab-Emirates.png"),
          country: 'United Arab Emirates'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "8c",
      status: "Guess",
      word: "CAIRO",
      country: "Egypt",
      num: 5,
      letters: "ILREAPRSJOBC",
      img: require("../../../assets/Flags/egypt.png"),
    },
    {
      id: "9a",
      status: "Capitals",
      country: "France",
      image: require("../../../assets/Flags/france.png"),
      options: [
        {
          id: "0",
          capital: 'London',
          country: 'UK'
        },
        {
          id: "1",
          capital: 'Paris',
          country: 'France'
        },
        {
          id: "2",
          capital: 'Madrid',
          country: 'Spain'
        },
        {
          id: "3",
          capital: 'Berlin',
          country: 'Germany'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "9b",
      status: "Flags" ,
      capital: "France",
      country: "Paris",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/netherlands.png"),
          country: 'Netherlands'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/Cuba.png"),
          country: 'Cuba'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/france.png"),
          country: 'France'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/russia.png"),
          country: 'Russia'
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "9c",
      status: "Guess",
      word: "PARIS",
      country: "France",
      num: 5,
      letters: "ILREAPOSJOBC",
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
          country: 'New Zealand'
        },
        {
          id: "1",
          capital: 'Melbourne',
          country: 'Australian city'
        },
        {
          id: "2",
          capital: 'Sydney',
          country: 'Australian city'
        },
        {
          id: "3",
          capital: 'Canberra',
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
          country: 'UK'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/newZealand.png"),
          country: 'New Zealand'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/Fiji.png"),
          country: 'Fiji'
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
      letters: "ILREAPNSJOBC",
      img: require("../../../assets/Flags/australia.png"),
    },
    {
      id: "11",
      status: "Flags",
      capital: "",
      country: "",
    },
  ];
  export default question1En;
  