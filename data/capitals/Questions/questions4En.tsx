const question4En = [
    {
      id: "1a",
      status: "Capitals",
      country: "Chile",
      image: require("../../../assets/Flags/chile.png"),
      options: [
        {
          id: "0",
          capital: 'Quito',
          country: 'Ecuador'
        },
        {
          id: "1",
          capital: 'Lima',
          country: 'Peru'
        },
        {
          id: "2",
          capital: 'Asuncion',
          country: 'Paraguay'
        },
        {
          id: "3",
          capital: 'Santiago',
          country: 'Chile'
        },
      ],
      correctAnswerIndex: 3,
    },  {
      id: "1b",
      status: "Flags" ,
      capital: "Chile",
      country: "Santiago",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/chile.png"),
          country: 'Chile'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/czechia.png"),
          country: 'Czechia'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/philipines.png"),
          country: 'Philippines'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/Cuba.png"),
          country: 'Cuba'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "1c",
      status: "Guess",
      word: "SANTIAGO",
      country: "Chile",
      num: 7,
      letters: "ILREAPNSGOTC",
      img: require("../../../assets/Flags/chile.png"),
    },
    {
      id: "2a",
      status: "Capitals",
      country: "Belgium",
      image: require("../../../assets/Flags/belgium.png"),
      options: [
        {
          id: "0",
          capital: 'Berlin',
          country: 'Germany'
        },
        {
          id: "1",
          capital: 'Brussels',
          country: 'Belgium'
        },
        {
          id: "2",
          capital: 'Amsterdam',
          country: 'Netherlands'
        },
        {
          id: "3",
          capital: 'Paris',
          country: 'France'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
        id: "2b",
        status: "Flags",
        capital: "Belgium",
        country: "Brussels",
        options: [
          {
            id: "0",
            img: require("../../../assets/Flags/belgium.png"),
          country: 'Belgium'
          },
          {
            id: "1",
            img: require("../../../assets/Flags/hungary.png"),
          country: 'Hungary'
          },
          {
            id: "2",
            img: require("../../../assets/Flags/germany.png"),
          country: 'Germany'
          },
          {
            id: "3",
            img: require("../../../assets/Flags/italy.png"),
          country: 'Italy'
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "2c",
        status: "Guess",
        word: "BRUSSELS",
        country: "Belgium",
        num: 6,
        letters: "ULREAPNSJOBC",
        img: require("../../../assets/Flags/belgium.png"),
      },
    {
      id: "3a",
      status: "Capitals",
      country: "Panama",
      image: require("../../../assets/Flags/Panama.png"),
      options: [
        {
          id: "0",
          capital: 'San Jose',
          country: 'Costa Rica'
        },
        {
          id: "1",
          capital: 'Panama City',
          country: 'Panama'
        },
        {
          id: "2",
          capital: 'Bogota',
          country: 'Colombia'
        },
        {
          id: "3",
          capital: 'Caracas',
          country: 'Venezuela'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "3b",
      status: "Flags" ,
      capital: "Panama",
      country: "Panama City",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/Cuba.png"),
          country: 'Cuba'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/puertoRico.jpg"),
          country: 'Puerto Rico'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/Panama.png"),
          country: 'Panama'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/dominican.png"),
          country: 'Dominican Republic'
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "3c",
      status: "Guess",
      word: "PANAMA",
      country: "Panama",
      num: 4,
      letters: "ILREAPNSJOMC",
      img: require("../../../assets/Flags/Panama.png"),
    },
    {
      id: "4a",
      status: "Capitals",
      country: "Libya",
      image: require("../../../assets/Flags/libya.png"),
      options: [
        {
          id: "0",
          capital: 'Tripoli',
          country: 'Libya'
        },
        {
          id: "1",
          capital: 'Algiers',
          country: 'Algeria'
        },
        {
          id: "2",
          capital: 'Rabat',
          country: 'Morocco'
        },
        {
          id: "3",
          capital: 'Tunis',
          country: 'Tunisia'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "4b",
      status: "Flags" ,
      capital: "Libya",
      country: "Tripoli",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/libya.png"),
          country: 'Libya'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/Algeria.png"),
          country: 'Algeria'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/pakistan.png"),
          country: 'Pakistan'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/azerbaijan.png"),
          country: 'Azerbaijan'
        },
      ],
      correctAnswerIndex: 0,
    },
     {
      id: "4c",
      status: "Guess",
      word: "TRIPOLI",
      country: "Libya",
      num: 6,
      letters: "ITREANOHLOPC",
      img: require("../../../assets/Flags/libya.png"),
    },
    {
      id: "5a",
      status: "Capitals",
      country: "Poland",
      image: require("../../../assets/Flags/poland.png"),
      options: [
        {
          id: "0",
          capital: 'Krakow',
          country: 'Polish city'
        },
        {
          id: "1",
          capital: 'Prague',
          country: 'Czech Republic'
        },
        {
          id: "2",
          capital: 'Kyiv',
          country: 'Ukraine'
        },
        {
          id: "3",
          capital: 'Warsaw',
          country: 'Poland'
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "5b",
      status: "Flags" ,
      capital: "Poland",
      country: "Warsaw",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/malta.png"),
          country: 'Malta'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/singapore.png"),
          country: 'Singapore'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/austria.png"),
          country: 'Austria'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/poland.png"),
          country: 'Poland'
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "5c",
      status: "Guess",
      word: "WARSAW",
      country: "Poland",
      num: 4,
      letters: "ILREAPNSJOWC",
      img: require("../../../assets/Flags/poland.png"),
    },
    {
      id: "6a",
      status: "Capitals",
      country: "Brazil",
      image: require("../../../assets/Flags/brazil.png"),
      options: [
        {
          id: "0",
          capital: 'Brasilia',
          country: 'Brazil'
        },
        {
          id: "1",
          capital: 'Sao Paulo',
          country: 'Brazilian city'
        },
        {
          id: "2",
          capital: 'Rio di\nJaneiro',
          country: 'Brazilian city'
        },
        {
          id: "3",
          capital: 'Montevideo',
          country: 'Uruguay'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "6b",
      status: "Flags" ,
      capital: "Brazil",
      country: "Brasilia",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/argentina.png"),
          country: 'Argentina'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/brazil.png"),
          country: 'Brazil'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/mexico.png"),
          country: 'Mexico'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/peru.png"),
          country: 'Peru'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "6c",
      status: "Guess",
      word: "BRASILIA",
      country: "Brazil",
      num: 6,
      letters: "ILREAPNSJOBC",
      img: require("../../../assets/Flags/brazil.png"),
    },
    {
      id: "7a",
      status: "Capitals",
      country: "Romania",
      image: require("../../../assets/Flags/romania.png"),
      options: [
        {
          id: "0",
          capital: 'Kiev',
          country: 'Ukraine'
        },
        {
          id: "1",
          capital: 'Budapest',
          country: 'Hungary'
        },
        {
          id: "2",
          capital: 'Bucharest',
          country: 'Romania'
        },
        {
          id: "3",
          capital: 'Sofia',
          country: 'Bulgaria'
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "7b",
      status: "Flags" ,
      capital: "Romania",
      country: "Bucharest",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/Moldova.png"),
          country: 'Moldova'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/armenia.png"),
          country: 'Armenia'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/romania.png"),
          country: 'Romania'
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
      id: "7c",
      status: "Guess",
      word: "BUCHAREST",
      country: "Romania",
      num: 9,
      letters: "ULREAHTSJOBC",
      img: require("../../../assets/Flags/romania.png"),
    },
    {
      id: "8a",
      status: "Capitals",
      country: "Iran",
      image: require("../../../assets/Flags/iran.png"),
      options: [
        {
          id: "0",
          capital: 'Amman',
          country: 'Jordan'
        },
        {
          id: "1",
          capital: 'Damascus',
          country: 'Syria'
        },
        {
          id: "2",
          capital: 'Baghdad',
          country: 'Iraq'
        },
        {
          id: "3",
          capital: 'Teheran',
          country: 'Iran'
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "8b",
      status: "Flags",
      capital: "Iran",
      country: "Teheran",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/jordan.png"),
          country: 'Jordan'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/hungary.png"),
          country: 'Hungary'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/syria.png"),
          country: 'Syria'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/iran.png"),
          country: 'Iran'
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "8c",
      status: "Guess",
      word: "TEHERAN",
      country: "Iran",
      num: 6,
      letters: "ILREAHNSTOBC",
      img: require("../../../assets/Flags/iran.png"),
    },
    {
      id: "9a",
      status: "Capitals",
      country: "Albania",
      image: require("../../../assets/Flags/albania.png"),
      options: [
        {
          id: "0",
          capital: 'Zagreb',
          country: 'Croatia'
        },
        {
          id: "1",
          capital: 'Tirana',
          country: 'Albania'
        },
        {
          id: "2",
          capital: 'Sofia',
          country: 'Bulgaria'
        },
        {
          id: "3",
          capital: 'Belgrade',
          country: 'Serbia'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "9b",
      status: "Flags" ,
      capital: "Albania",
      country: "Tirana",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/portugal.png"),
          country: 'Portugal'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/albania.png"),
          country: 'Albania'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/tunisia.png"),
          country: 'Tunisia'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/turkey.png"),
          country: 'Turkey'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "9c",
      status: "Guess",
      word: "TIRANA",
      country: "Albania",
      num: 5,
      letters: "ILREAPOTNOBC",
      img: require("../../../assets/Flags/albania.png"),
    },
    {
      id: "10a",
      status: "Capitals",
      country: "Croatia",
      image: require("../../../assets/Flags/croatia.png"),
      options: [
        {
          id: "0",
          capital: 'Belgrade',
          country: 'Serbia'
        },
        {
          id: "1",
          capital: 'Zagreb',
          country: 'Croatia'
        },
        {
          id: "2",
          capital: 'Ljubljana',
          country: 'Slovenia'
        },
        {
          id: "3",
          capital: 'Bratislava',
          country: 'Slovakia'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "10b",
      status: "Flags" ,
      capital: "Croatia",
      country: "Zagreb",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/slovenia.png"),
          country: 'Slovenia'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/slovakia.png"),
          country: 'Slovakia'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/serbia.png"),
          country: 'Serbia'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/croatia.png"),
          country: 'Croatia'
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "10c",
      status: "Guess",
      word: "ZAGREB",
      country: "Croatia",
      num: 6,
      letters: "ILREAPNGZOBC",
      img: require("../../../assets/Flags/croatia.png"),
    },
    {
      id: "11",
      status: "Flags",
      capital: "",
      country: "",
    },
  ];
  export default question4En;
  