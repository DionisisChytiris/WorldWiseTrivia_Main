const question3En = [
  {
    id: "1a",
    status: "Capitals",
    country: "Qatar",
    image: require("../../../assets/Flags/qatar.png"),
    options: [
      {
        id: "0",
        capital: "Doha",
        country: "Qatar",
      },
      {
        id: "1",
        capital: "Manama",
        country: "Bahrain",
      },
      {
        id: "2",
        capital: "Abu Dhabi",
        country: "United Arab Emirates",
      },
      {
        id: "3",
        capital: "Muscat",
        country: "Oman",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "The capital of Qatar is known for its futuristic skyscrapers, modern architecture, and the stunning Corniche waterfront promenade. It’s a hub of culture and commerce in the Middle East.",
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Qatar",
    country: "Doha",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/qatar.png"),
        country: "Qatar",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/denmark.png"),
        country: "Denmark",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Bahrain.png"),
        country: "Bahrain",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/poland.png"),
        country: "Poland",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "The Qatari flag is pretty unique—it's mostly maroon with a white serrated band on the left side.",
  },
  {
    id: "1c",
    status: "Guess",
    word: "DOHA",
    country: "Qatar",
    num: 4,
    letters: "ILREADNHJOBC",
    img: require("../../../assets/Flags/qatar.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "USA",
    image: require("../../../assets/Flags/usa.png"),
    options: [
      {
        id: "0",
        capital: "Ottawa",
        country: "Canada",
      },
      {
        id: "1",
        capital: "London",
        country: "UK",
      },
      {
        id: "2",
        capital: "Washington",
        country: "USA",
      },
      {
        id: "3",
        capital: "Canberra",
        country: "Australia",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "The capital of the United States is home to iconic landmarks like the White House and the U.S. Capitol. It’s a city known for its political significance and historical monuments.",
  },
  {
    id: "2b",
    status: "Flags",
    capital: "USA",
    country: "Washington \nD.C",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Cuba.png"),
        country: "",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/malaysia.png"),
        country: "",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Liberia.png"),
        country: "",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/usa.png"),
        country: "",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Just remember: red and white stripes with a blue corner filled with stars. It’s a classic flag that everyone knows!",
  },
  {
    id: "2c",
    status: "Guess",
    word: "WASHINGTON",
    country: "USA",
    num: 9,
    letters: "ILHEAPNSWOTG",
    img: require("../../../assets/Flags/usa.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Norway",
    image: require("../../../assets/Flags/norway.png"),
    options: [
      {
        id: "0",
        capital: "Helsinki",
        country: "Finland",
      },
      {
        id: "1",
        capital: "Bergen",
        country: "Norwegian city",
      },
      {
        id: "2",
        capital: "Oslo",
        country: "Norway",
      },
      {
        id: "3",
        capital: "Stockholm",
        country: "Sweden",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      'The capital of Norway is known for its green spaces, Viking history, and museums like the Viking Ship Museum. It is located in the southern part of Norway, at the head of a deep fjord, surrounded by forested hills and close to the Oslofjord."',
  },
  {
    id: "3b",
    status: "Flags",
    capital: "Norway",
    country: "Oslo",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/norway.png"),
        country: "Norway",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/finland.png"),
        country: "Finland",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/sweden.png"),
        country: "Sweden",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/iceland.png"),
        country: "Iceland",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "The Norwegian flag is really distinctive! It’s red with a blue cross outlined in white—super recognizable!",
  },
  {
    id: "3c",
    status: "Guess",
    word: "OSLO",
    country: "Norway",
    num: 3,
    letters: "ILREAPNSJOBC",
    img: require("../../../assets/Flags/norway.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Colombia",
    image: require("../../../assets/Flags/colombia.png"),
    options: [
      {
        id: "0",
        capital: "Quito",
        country: "Ecuador",
      },
      {
        id: "1",
        capital: "Caracas",
        country: "Venezuela",
      },
      {
        id: "2",
        capital: "Lima",
        country: "Peru",
      },
      {
        id: "3",
        capital: "Bogota",
        country: "Colombia",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Think of cities that’s actually in Colombia. Avoid any cities that aren’t part of the country!!!",
  },
  {
    id: "4b",
    status: "Flags",
    capital: "Colombia",
    country: "Bogota",
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
        country: "Romania",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "The Colombian flag is super colorful! It has three horizontal stripes: yellow on top, followed by blue and red.",
  },

  {
    id: "4c",
    status: "Guess",
    word: "BOGOTA",
    country: "Colombia",
    num: 5,
    letters: "ITREANOGSOBC",
    img: require("../../../assets/Flags/colombia.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Jordan",
    image: require("../../../assets/Flags/jordan.png"),
    options: [
      {
        id: "0",
        capital: "Beirut",
        country: "Lebanon",
      },
      {
        id: "1",
        capital: "Muscat",
        country: "Oman",
      },
      {
        id: "2",
        capital: "Damascus",
        country: "Syria",
      },
      {
        id: "3",
        capital: "Amman",
        country: "Jordan",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "The capital of Jordan is known for its ancient Roman ruins, including a famous amphitheater, and its bustling markets. It’s a city that serves as a gateway to the nearby Dead Sea and Petra.",
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Jordan",
    country: "Amman",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/syria.png"),
        country: "Syria",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Oman.png"),
        country: "Oman",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/egypt.png"),
        country: "Egypt",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/jordan.png"),
        country: "Jordan",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Think of a flag with black, white, and green stripes, and there’s a red triangle on the left with a white star inside!",
  },
  {
    id: "5c",
    status: "Guess",
    word: "AMMAN",
    country: "Jordan",
    num: 3,
    letters: "ILREAPNSJOMC",
    img: require("../../../assets/Flags/jordan.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Czechia",
    image: require("../../../assets/Flags/czechia.png"),
    options: [
      {
        id: "0",
        capital: "Budapest",
        country: "Hungary",
      },
      {
        id: "1",
        capital: "Prague",
        country: "Czech Republic",
      },
      {
        id: "2",
        capital: "Ljubljana",
        country: "Slovenia",
      },
      {
        id: "3",
        capital: "Bratislava",
        country: "Slovakia",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "The capital of Czechia is renowned for its medieval Old Town, stunning Gothic architecture, and landmarks like Prague Castle and the Charles Bridge.",
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Czechia",
    country: "Prague",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/chile.png"),
        country: "Chile",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/czechia.png"),
        country: "Czechia",
      },
      {
        id: "2",
        img: require("../../../assets/Flags//philipines.png"),
        country: "Philippines",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/france.png"),
        country: "France",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Think of a flag with two main colors and a triangle on the left side. It has a clean, simple design!",
  },
  {
    id: "6c",
    status: "Guess",
    word: "PRAGUE",
    country: "Czechia",
    num: 6,
    letters: "IUREAPNSJOGC",
    img: require("../../../assets/Flags/czechia.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Indonesia",
    image: require("../../../assets/Flags/Indonesia.png"),
    options: [
      {
        id: "0",
        capital: "Kuala Lumpur",
        country: "Malaysia",
      },
      {
        id: "1",
        capital: "Manila",
        country: "Philippines",
      },
      {
        id: "2",
        capital: "Jakarta",
        country: "Indonesia",
      },
      {
        id: "3",
        capital: "Brunei",
        country: "Brunei",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "This city is located on the northwest coast of the island of Java, overlooking the Java Sea, and is Indonesia’s largest and most populous city.",
  },
  {
    id: "7b",
    status: "Flags",
    capital: "Indonesia",
    country: "Jakarta",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/singapore.png"),
        country: "Singapore",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/malta.png"),
        country: "Malta",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Indonesia.png"),
        country: "Indonesia",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/peru.png"),
        country: "Peru",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "It has a straightforward look with two stripes, similar colors with Polish flag.",
  },
  {
    id: "7c",
    status: "Guess",
    word: "JAKARTA",
    country: "Indonesia",
    num: 5,
    letters: "ILREAKNSJOTC",
    img: require("../../../assets/Flags/Indonesia.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Argentina",
    image: require("../../../assets/Flags/argentina.png"),
    options: [
      {
        id: "0",
        capital: "Montevideo",
        country: "Uruguay",
      },
      {
        id: "1",
        capital: "Asuncion",
        country: "Paraguay",
      },
      {
        id: "2",
        capital: "Panama City",
        country: "Panama",
      },
      {
        id: "3",
        capital: "Buenos Aires",
        country: "Argentina",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "The capital of Argentina is famous for its European-style architecture, vibrant tango music, and landmarks like the Casa Rosada and the Obelisk.",
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Argentina",
    country: "Buenos Aires",
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
        img: require("../../../assets/Flags/uruguay.png"),
        country: "Uruguay",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/elSalvador.png"),
        country: "El Salvador",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "It features a clean look with blue and white, plus an emblem right in the middle that stands out.",
  },
  {
    id: "8c",
    status: "Guess",
    word: "BUENOSAIRES",
    country: "Argentina",
    num: 9,
    letters: "IUREAPNSJOBC",
    img: require("../../../assets/Flags/argentina.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "South Korea",
    image: require("../../../assets/Flags/skorea.png"),
    options: [
      {
        id: "0",
        capital: "Seoul",
        country: "South Korea",
      },
      {
        id: "1",
        capital: "Tokyo",
        country: "Japon",
      },
      {
        id: "2",
        capital: "Beijing",
        country: "China",
      },
      {
        id: "3",
        capital: "Hanoi",
        country: "Vietnam",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "The capital of South Korea is known for its modern skyscrapers, high-tech innovations, and historic palaces like Gyeongbokgung. It’s a city where tradition meets cutting-edge technology. Don't confuse it with the Japanese capital.",
  },
  {
    id: "9b",
    status: "Flags",
    capital: "South Korea",
    country: "Seoul",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/skorea.png"),
        country: "South Korea",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/japan.png"),
        country: "Japon",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Palau.png"),
        country: "Palau",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/taiwan.png"),
        country: "Taiwan",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Featuring a white background with a red and blue yin-yang symbol in the center, this flag also includes four black trigrams in each corner, symbolizing harmony and balance.",
  },

  {
    id: "9c",
    status: "Guess",
    word: "SEOUL",
    country: "South Korea",
    num: 5,
    letters: "ILREAPYSUOBC",
    img: require("../../../assets/Flags/skorea.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Finland",
    image: require("../../../assets/Flags/finland.png"),
    options: [
      {
        id: "0",
        capital: "Helsinki",
        country: "Finland",
      },
      {
        id: "1",
        capital: "Oslo",
        country: "Norway",
      },
      {
        id: "2",
        capital: "Stockholm",
        country: "Sweden",
      },
      {
        id: "3",
        capital: "Copenhagen",
        country: "Denmark",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "The capital of Finland is known for its modern design, waterfront views, and landmarks like the Helsinki Cathedral and the Market Square. It’s a city that embraces nature and Nordic simplicity.",
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Finland",
    country: "Helsinki",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/sweden.png"),
        country: "Sweden",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/iceland.png"),
        country: "Iceland",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/finland.png"),
        country: "Finland",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/denmark.png"),
        country: "Denmark",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "This flag features a blue Nordic cross on a white background, symbolizing Finland's lakes and snow-covered landscapes.",
  },
  {
    id: "10c",
    status: "Guess",
    word: "HELSINKI",
    country: "Finland",
    num: 7,
    letters: "ILREAPNSKOHC",
    img: require("../../../assets/Flags/finland.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question3En;
