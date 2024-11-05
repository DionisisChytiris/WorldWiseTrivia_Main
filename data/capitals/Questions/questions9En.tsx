const question9En = [
  {
    id: "1a",
    status: "Capitals",
    country: "Estonia",
    image: require("../../../assets/Flags/estonia.png"),
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
        capital: 'Vilnius',
        country: 'Lithuania'
      },
      {
        id: "3",
        capital: 'Minsk',
        country: 'Belarus'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: 'All I know is that Vilnius is the capital of Lithuania and Riga is the capital of Latvia.'
  },
  {
    id: "1b",
    status: "Flags" ,
    capital: "Estonia",
    country: "Tallinn",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/nicaragua.png"),
        country: 'Nicaragua'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/estonia.png"),
        country: 'Estonia'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: 'Azerbaijan'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/finland.png"),
        country: 'Finland'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: 'This flag has three horizontal stripes with no any emblem on it. Its colors represent the sky, the soil, and the country\'s quest for freedom.'
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
    country: "Moldova",
    image: require("../../../assets/Flags/Moldova.png"),
    options: [
      {
        id: "0",
        capital: 'Chisinau',
        country: 'Moldavia'
      },
      {
        id: "1",
        capital: 'Bucharest',
        country: 'Romania'
      },
      {
        id: "2",
        capital: 'Kyiv',
        country: 'Ukraine'
      },
      {
        id: "3",
        capital: 'Odessa',
        country: 'Ukrainian city'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: 'Well, Odessa is not a capital. I think the first answer is the correct one.'
  },
  {
    id: "2b",
    status: "Flags" ,
    capital: "Moldova",
    country: "Chisinau",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Moldova.png"),
        country: 'Moldova'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/colombia.png"),
        country: 'Colombia'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/romania.png"),
        country: 'Romania'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/venezuela.png"),
        country: 'Venezuela'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: 'The Moldovan flag is similar to the Romanian flag. The key difference is in the middle stripe.'
  },
  {
    id: "2c",
    status: "Guess",
    word: "CHISINAU",
    country: "Moldova",
    num: 7,
    letters: "ILUEAPNSHOBC",
    img: require("../../../assets/Flags/Moldova.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Philippines",
    image: require("../../../assets/Flags/philipines.png"),
    options: [
      {
        id: "0",
        capital: 'Kuala \nLumpur',
        country: 'Malaysia'
      },
      {
        id: "1",
        capital: 'Jakarta',
        country: 'Indonesia'
      },
      {
        id: "2",
        capital: 'Manila',
        country: 'Philippines'
      },
      {
        id: "3",
        capital: 'Phnom \nPenh',
        country: 'Cambodia'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: 'Well, I\'m not sure of the answer, but I\'m torn between Jakarta and Manila.'
  },
  {
    id: "3b",
    status: "Flags",
    capital: "Philippines",
    country: "Manila",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Cuba.png"),
          country: 'Cuba'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/chile.png"),
          country: 'Chile'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/philipines.png"),
          country: 'Philippines'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/czechia.png"),
          country: 'Czechia'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: 'Check out the Philippine flag! It has two horizontal bands: blue and red. On the left side, there’s a white triangle featuring a yellow sun with eight rays and three stars.'
  },
  
   {
    id: "3c",
    status: "Guess",
    word: "MANILA",
    country: "Philippines",
    num: 5,
    letters: "ILUEANSGMOBR",
    img: require("../../../assets/Flags/philipines.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Fiji",
    image: require("../../../assets/Flags/Fiji.png"),
    options: [
      {
        id: "0",
        capital: 'Manila',
        country: 'Philippines'
      },
      {
        id: "1",
        capital: 'Ngerulmud',
        country: 'Palau'
      },
    
      {
        id: "2",
        capital: 'Honiara',
        country: 'Solomon Islands'
      },
      {
        id: "3",
        capital: 'Suva',
        country: 'Fiji'
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: 'I think Suva is the correct answer.'
  },
  {
    id: "4b",
    status: "Flags" ,
    capital: "Fiji",
    country: "Suva",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/uk.png"),
        country: 'UK'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/usa.png"),
        country: 'USA'
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
    correctAnswerIndex: 3,
    phoneHelp: 'Check out the Fijian flag! It features a blue field with a Union Jack in the top left corner. On the right side, there’s a shield, depicting a lion, sugarcane, and a coconut palm.'
  },
   {
    id: "4c",
    status: "Guess",
    word: "SUVA",
    country: 'Fiji',
    num: 4,
    letters: "ILUEATSVJOBR",
    img: require("../../../assets/Flags/Fiji.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Cameroon",
    image: require("../../../assets/Flags/Cameroon.png"),
    options: [
      {
        id: "0",
        capital: 'Luanda',
        country: 'Angola'
      },
      {
        id: "1",
        capital: 'Yaounde',
        country: 'Cameroon'
      },
     
      {
        id: "2",
        capital: 'Monrovia',
        country: 'Liberia'
      },
      {
        id: "3",
        capital: 'Abuja',
        country: 'Nigeria'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: 'Well, I\'m not sure of the answer, but I\'m torn between Abuja and Yaounde.'
  },
  {
    id: "5b",
    status: "Flags" ,
    capital: "Cameroon",
    country: "Yaounde",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/senegal.png"),
        country: 'Senegal'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Cameroon.png"),
        country: 'Cameroon'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Ghana.png"),
        country: 'Ghana'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Zambia.png"),
        country: 'Zambia'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: 'This flag has three vertical stripes. In the middle stripe, there’s a small star, representing unity and the country’s rich natural resources.'
  },
  {
    id: "5c",
    status: "Guess",
    word: "YAOUNDE",
    country: "Cameroon",
    num: 7,
    letters: "ILUEAPNYDOBC",
    img: require("../../../assets/Flags/Cameroon.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Algeria",
    image: require("../../../assets/Flags/Algeria.png"),
    options: [
      {
        id: "0",
        capital: 'Algiers',
        country: 'Algeria'
      },
      {
        id: "1",
        capital: 'Lebanon',
        country: 'Beirut'
      },
      {
        id: "2",
        capital: 'Libya',
        country: 'Tripoli'
      },
      {
        id: "3",
        capital: 'Cairo',
        country: 'Egypt'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: 'Some countries have capitals with names similar to the country’s name.'
  },
  {
    id: "6b",
    status: "Flags" ,
    capital: "Algeria",
    country: "Algiers",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Algeria.png"),
        country: 'Algiers'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/pakistan.png"),
        country: 'Pakistan'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: 'Azerbaijan'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/safrica.png"),
        country: 'South Africa'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: 'Check out the Algerian flag! It has two vertical sections. In the center, there’s a crescent and a  star, symbolizing Islam and the country’s struggle for independence.'
  },
  {
    id: "6c",
    status: "Guess",
    word: "ALGIERS",
    country: "Algeria",
    num: 7,
    letters: "ILREAPNSGOBC",
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
        capital: 'Asuncion',
        country: 'Paraguay'
      },
      {
        id: "1",
        capital: 'La Paz',
        country: 'Bolivia'
      },
      {
        id: "2",
        capital: 'Quito',
        country: 'Ecuador'
      },
      {
        id: "3",
        capital: 'Montevideo',
        country: 'Uruguay'
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: 'The capital of Uruguay, is known for its historic architecture, coastal views, and vibrant cultural scene, blending colonial charm with modern life. It starts with the letter \'M\'!'
  },
  {
    id: "7b",
    status: "Flags" ,
    capital: "Uruguay",
    country: "Montevideo",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/nicaragua.png"),
        country: 'Nicaragua'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Panama.png"),
        country: 'Panama'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/argentina.png"),
        country: 'Argentina'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/uruguay.png"),
        country: 'Uruguay'
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: 'Take a look at the Uruguayan flag! On the top left corner there’s a golden sun with a face, representing the sun of May and the country\'s independence.'
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
        capital: 'Havana',
        country: 'Cuba'
      },
      {
        id: "1",
        capital: 'Port-au-Prince',
        country: 'Haiti'
      },
      {
        id: "2",
        capital: 'Kingston',
        country: 'Jamaica'
      },
      {
        id: "3",
        capital: 'Tegucigalpa',
        country: 'Honduras'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: 'Jamaica is a Caribbean island nation celebrated for its stunning beaches, reggae music, and vibrant culture. Its capital is the cultural heart, known for its music history and lively atmosphere. It starts with the letter \'K\'!'
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
          country: 'Kenya'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/canada.png"),
          country: 'Canada'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/jamaica.png"),
          country: 'Jamaica'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Solomon-Islands.png"),
          country: 'Solomon Islands'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: 'Check out the Jamaican flag! It has a diagonal cross that divides the flag into triangles.'
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
    country: "Oman",
    image: require("../../../assets/Flags/Oman.png"),
    options: [
      {
        id: "0",
        capital: 'Muscat',
        country: 'Oman'
      },
      {
        id: "1",
        capital: 'Beirut',
        country: 'Lebanon'
      },
      {
        id: "2",
        capital: 'Amman',
        country: 'Jordan'
      },
      {
        id: "3",
        capital: "Sana'a",
        country: 'Yemen'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: 'Well, I\'m not sure of the answer, but I\'m torn between Amman and Muscat.'
  },
  {
    id: "9b",
    status: "Flags" ,
    capital: "Oman",
    country: "Muscat",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Oman.png"),
        country: 'Oman'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/United-Arab-Emirates.png"),
        country: 'United Arab\nEmirates'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/bulgaria.png"),
        country: 'Bulgaria'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/jordan.png"),
        country: 'Jordan'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: 'Take a look at the Omani flag! It has three horizontal stripes and a vertical stripe featuring the national coat of arms, which includes a Khanjar (dagger) and two crossed swords, symbolizing Oman’s heritage and strength.'
  },
  {
    id: "9c",
    status: "Guess",
    word: "MUSCAT",
    country: "Oman",
    num: 6,
    letters: "ILUEAMYSTONC",
    img: require("../../../assets/Flags/Oman.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Lebanon",
    image: require("../../../assets/Flags/lebanon.png"),
    options: [
      {
        id: "0",
        capital: 'Doha',
        country: 'Qatar'
      },
      {
        id: "1",
        capital: 'Beirut',
        country: 'Lebanon'
      },
      {
        id: "2",
        capital: 'Riyadh',
        country: 'Saudi Arabia'
      },
      {
        id: "3",
        capital: 'Muscat',
        country: 'Oman'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: 'Well, I\'m not sure of the answer, but I\'m torn between Muscat and Beirut.'
  },
  {
    id: "10b",
    status: "Flags" ,
    capital: "Lebanon",
    country: "Beirut",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/peru.png"),
        country: 'Peru'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/lebanon.png"),
        country: 'Lebanon'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/austria.png"),
        country: 'Austria'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/canada.png"),
        country: 'Canada'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: 'In the center of this flag, there’s a green cedar tree, which symbolizes peace and the country’s resilience.'
  },
  {
    id: "10c",
    status: "Guess",
    word: "BEIRUT",
    country: "Lebanon",
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
export default question9En;
