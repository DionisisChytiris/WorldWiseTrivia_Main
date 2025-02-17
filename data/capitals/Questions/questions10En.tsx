const question10En = [
  {
    id: "1a",
    status: "Capitals",
    country: "Lithuania",
    image: require("../../../assets/Flags/lithuania.png"),
    options: [
      {
        id: "0",
        capital: 'Riga',
        country: 'Latvia'
      },
      {
        id: "1",
        capital: 'Tallinn',
        country: 'Estonia'
      },
      {
        id: "2",
        capital: 'Minsk',
        country: 'Belarus'
      },
      {
        id: "3",
        capital: 'Vilnius',
        country: 'Lithuania'
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: 'Well, I\'m not sure of the answer, but I\'m torn between Vilnius and Minsk.'
  },
  {
    id: "1b",
    status: "Flags" ,
    capital: "Lithuania",
    country: "Vilnius",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/armenia.png"),
        country: 'Armenia'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/bulgaria.png"),
        country: 'Bulgaria'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/hungary.png"),
        country: 'Hungary'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/lithuania.png"),
        country: 'Lithuania'
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: 'This flag has similar colors to the Bulgarian flag, but the top stripe is yellow instead of white.'
  },
  {
    id: "1c",
    status: "Guess",
    word: "VILNIUS",
    country: "Lithuania",
    num: 6,
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
        capital: 'Nassau',
        country: 'Bahamas'
      },
      {
        id: "1",
        capital: 'Kingston',
        country: 'Jamaica'
      },
      {
        id: "2",
        capital: 'San Juan',
        country: 'Puerto Rico'
      },
      {
        id: "3",
        capital: 'San Jose',
        country: 'Costa Rica'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: 'I think the correct answer is Nassau.'
  },
  {
    id: "2b",
    status: "Flags" ,
    capital: "Bahamas",
    country: "Nassau",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: 'Azerbaijan'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Bahamas.png"),
        country: 'Bahamas'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Palau.png"),
        country: 'Palau'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Fiji.png"),
        country: 'Fiji'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: 'Check out the Bahamian flag! It features three horizontal stripes with a triangle on the left side.'
  },
  {
    id: "2c",
    status: "Guess",
    word: "NASSAU",
    country: "Bahamas",
    num: 4,
    letters: "ILUEAPNSJOBC",
    img: require("../../../assets/Flags/Bahamas.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Bahrain",
    image: require("../../../assets/Flags/Bahrain.png"),
    options: [
      {
        id: "0",
        capital: 'Abu Dhabi',
        country: 'United Arab\nEmirates'
      },
      {
        id: "1",
        capital: 'Doha',
        country: 'Qatar'
      },
      {
        id: "2",
        capital: 'Manama',
        country: 'Bahrain'
      },
      {
        id: "3",
        capital: 'Kuwait',
        country: 'Kuwait'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: 'I’m a bit uncertain, but it\'s either Manama or Kuwait for me.'
  },
  {
    id: "3b",
    status: "Flags",
    capital: "Bahrain",
    country: "Manama",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/qatar.png"),
          country: 'Qatar'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Oman.png"),
          country: 'Oman'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Bahrain.png"),
          country: 'Bahrain'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/jordan.png"),
          country: 'Jordan'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: 'This flag has a red field on the right side with five white serrated edges that create a zigzag pattern.'
  },
  
   {
    id: "3c",
    status: "Guess",
    word: "MANAMA",
    country: "Bahrain",
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
        capital: 'Maputo',
        country: 'Mozambique'
      },
      {
        id: "1",
        capital: 'Harare',
        country: 'Zimbabwe'
      },
      {
        id: "2",
        capital: 'Gaborone',
        country: 'Botswana'
      },
      {
        id: "3",
        capital: 'Windhoek',
        country: 'Namibia'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: 'I\'m not positive, but I\'m leaning toward either Harare or Maputo.'
  },
  {
    id: "4b",
    status: "Flags" ,
    capital: "Mozambique",
    country: "Maputo",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Mozambique.png"),
        country: 'Mozambique'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Zimbabwe.png"),
        country: 'Zimbabwe'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Zambia.png"),
        country: 'Zambia'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/safrica.png"),
        country: 'South Africa'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: 'Check out the Mozambican flag! On the left side, there’s a red triangle that contains a book, a rifle, and a hoe, symbolizing education, defense, and agriculture.'
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
        capital: 'Lusaka',
        country: 'Zambia'
      },
      {
        id: "1",
        capital: 'Gaborone',
        country: 'Botswana'
      },
      {
        id: "2",
        capital: 'Windhoek',
        country: 'Namibia'
      },
      {
        id: "3",
        capital: 'Harare',
        country: 'Zimbabwe'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: 'Well, I\'m not sure of the answer, but I\'m torn between Gaborone and Harare.'
  },
  {
    id: "5b",
    status: "Flags" ,
    capital: "Zambia",
    country: "Lusaka",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Mozambique.png"),
        country: 'Mozambique'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Zambia.png"),
        country: 'Zambia'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/kenya.png"),
        country: 'Kenya'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Ethiopia.png"),
        country: 'Ethiopia'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: 'The Zambian flag has an orange eagle in the upper right corner. The eagle symbolizes freedom and the country\'s ability to rise above challenges.'
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
        capital: 'Maputo',
        country: 'Mozambique'
      },
      {
        id: "1",
        capital: 'Lusaka',
        country: 'Zambia'
      },
      {
        id: "2",
        capital: 'Dodoma',
        country: 'Tanzania'
      },
      {
        id: "3",
        capital: 'Harare',
        country: 'Zimbabwe'
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: 'I\'m unsure of the answer, but I\'m stuck between Harare and Dodoma.'
  },
  {
    id: "6b",
    status: "Flags" ,
    capital: "Zimbabwe",
    country: "Harare",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Ethiopia.png"),
        country: 'Ethiopia'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/kenya.png"),
        country: 'Kenya'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Cameroon.png"),
        country: 'Cameroon'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Zimbabwe.png"),
        country: 'Zimbabwe'
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: 'Check out the Zimbabwean flag! It features seven horizontal stripes with a white triangle on the left side that contains a red five-pointed star and a Zimbabwe Bird.'
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
    country: "Cambodia",
    image: require("../../../assets/Flags/Cambodia.png"),
    options: [
      {
        id: "0",
        capital: 'Bangkok',
        country: 'Thailand'
      },
      {
        id: "1",
        capital: 'Vientiane',
        country: 'Laos'
      },
      {
        id: "2",
        capital: 'Phnom Penh',
        country: 'Cambodia'
      },
      {
        id: "3",
        capital: 'Hanoi',
        country: 'Vietnam'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: 'I am pretty sure the correct answer is Phnom Penh.'
  },
  {
    id: "7b",
    status: "Flags" ,
    capital: "Cambodia",
    country: "Phnom Penh",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/thailand.png"),
        country: 'Thailand'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/vietnam.png"),
        country: 'Vietnam'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Cambodia.png"),
        country: 'Cambodia'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/malaysia.png"),
        country: 'Malaysia'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: 'Take a look at the Cambodian flag! In the center, there’s an image of Angkor Wat, a famous temple, symbolizing the nation’s heritage and pride.'
  },
  {
    id: "7c",
    status: "Guess",
    word: "PHNOMPENH",
    country: "Cambodia",
    num: 6,
    letters: "ILREAPNSMOHC",
    img: require("../../../assets/Flags/Cambodia.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Thailand",
    image: require("../../../assets/Flags/thailand.png"),
    options: [
      {
        id: "0",
        capital: 'Bangkok',
        country: 'Thailand'
      },
      {
        id: "1",
        capital: 'Vientiane',
        country: 'Laos'
      },
      {
        id: "2",
        capital: 'Kathmandu',
        country: 'Nepal'
      },
      {
        id: "3",
        capital: 'Thimphu',
        country: 'Bhutan'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: 'That\'s easy. The capital of Thailand is Bangkok. Key attractions include the Grand Palace, Wat Arun, and bustling markets like Chatuchak. '
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Thailand",
    country: "Bangkok",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/thailand.png"),
          country: 'Thailand'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/costaRica.png"),
          country: 'Costa Rica'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Indonesia.png"),
          country: 'Indonesia'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Cambodia.png"),
          country: 'Cambodia'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: 'Check out the Thai flag! It features five horizontal stripes. The blue stripe is the widest and represents the monarchy, while the red stands for the people and the white symbolizes peace.'
  },
  {
    id: "8c",
    status: "Guess",
    word: "BANGKOK",
    country: "Thailand",
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
        capital: 'Yerevan',
        country: 'Armenia'
      },
      {
        id: "1",
        capital: 'Baku',
        country: 'Azerbaijan'
      },
      {
        id: "2",
        capital: 'Tbilisi',
        country: 'Georgia'
      },
      {
        id: "3",
        capital: 'Tehran',
        country: 'Iran'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: 'That\'s tough. It\'s either Tbilisi or Baku.'
  },
  {
    id: "9b",
    status: "Flags" ,
    capital: "Georgia",
    country: "Tbilisi",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/england.jpg"),
        country: 'England'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/uk.png"),
        country: 'UK'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/georgia.png"),
        country: 'Georgia'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: 'Azerbaijan'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: 'The Georgian flag! It features a white background with red crosses. The design symbolizes Christianity and the country\'s rich cultural heritage.'
  },
  {
    id: "9c",
    status: "Guess",
    word: "TBILISI",
    country: "Georgia",
    num: 5,
    letters: "ILREAPOSTOBN",
    img: require("../../../assets/Flags/georgia.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Solomon Islands",
    image: require("../../../assets/Flags/Solomon-Islands.png"),
    options: [
      {
        id: "0",
        capital: 'Tarawa',
        country: 'Kiribati'
      },
      {
        id: "1",
        capital: 'Honiara',
        country: 'Solomon Islands'
      },
      {
        id: "2",
        capital: 'Suva',
        country: 'Fiji'
      },
      {
        id: "3",
        capital: 'Port Moresby',
        country: 'Papua New \nGuinea'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: 'Sorry, but I have no idea what is the capital of Solomon Islands.'
  },
  {
    id: "10b",
    status: "Flags" ,
    capital: "Solomon Islands",
    country: "Honiara",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Kiribati.png"),
        country: 'Kiribati'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Solomon-Islands.png"),
        country: 'Solomon Islands'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Papua-New-Guinea.png"),
        country: 'Papua New Guinea'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Fiji.png"),
        country: 'Fiji'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: 'Check out the Solomon Islands flag! In the top left corner, there are five white stars representing the islands.'
  },
  {
    id: "10c",
    status: "Guess",
    word: "HONIARA",
    country: "Solomon Islands",
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
export default question10En;
