const questions1En = [
  {
    id: "1a",
    img: 'L',
    status: "Capitals",
    country: "USA",
    image: require("../../../assets/NaturalMnt/America/yellowstone.png"),
    options: [
      {
        id: "0",
        capital: 'Angel Falls',
        country: 'Venezuela'
      },
      {
        id: "1",
        capital: 'Great Blue Hole',
        country: 'Belize'
      },
      {
        id: "2",
        capital: 'Great Smoky Mountains',
        country: 'USA'
      },
      {
        id: "3",
        capital: 'Yellow Stone National Park',
        country: 'USA'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "1b",
    status: "Flags",
    country: "Yellow Stone National Park",
    capital: "USA",
    options: [
      {
        id: "0",
        country: "Angel Falls \nVenezuela",
        img: require("../../../assets/NaturalMnt/America/Angel-Falls.png"),
      },
      {
        id: "1",
        country: "Great Blue Hole\nBelize",
        img: require("../../../assets/NaturalMnt/America/Great-Blue-Hole.png"),
      },
      {
        id: "2",
        country: "Great Smoky Mountains\nUSA",
        img: require("../../../assets/NaturalMnt/America/GreatSmokyMountains.png"),
      },
      {
        id: "3",
        country: "Yellowstone",
        img: require("../../../assets/NaturalMnt/America/yellowstone.png"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2a",
    status: "Capitals",
    img: 'L',
    country: "Zimbabwe/Zambia",
    image: require("../../../assets/NaturalMnt/Africa/Victoria-Falls.webp"),
    options: [
      {
        id: "0",
        capital: 'Sossuvlei',
        country: 'Namibia'
      },
      {
        id: "1",
        capital: 'Victoria Falls',
        country: 'Zimbabwe/Zambia'
      },
      {
        id: "2",
        capital: 'White Desert National Park',
        country: 'Egypt'
      },
      {
        id: "3",
        capital: 'Mount Kilimanjaro',
        country: 'Tanzania'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "2b",
    status: "Flags",
    country: "Victoria Falls",
    capital: "Zimbabwe/Zambia",
    options: [
      {
        id: "0",
        country: "Sossuvlei\nNamibia",
        img: require("../../../assets/NaturalMnt/Africa/Sossusvlei-Dunes.webp"),
      },
      {
        id: "1",
        country: "Victoria Falls\nZimbabwe/Zambia",
        img: require("../../../assets/NaturalMnt/Africa/Victoria-Falls.webp"),
      },
      {
        id: "2",
        country: "White Desert National Park\nEgypt",
        img: require("../../../assets/NaturalMnt/Africa/Egypt-White-Desert-National.webp"),
      },
      {
        id: "3",
        country: "Mount Kilimanjaro\nTanzania",
        img: require("../../../assets/NaturalMnt/Africa/Kilimanjaro.webp"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "USA",
    image: require("../../../assets/NaturalMnt/America/Antelope-Canyon.webp"),
    options: [
      {
        id: "0",
        capital: 'Arches National Park',
        country: 'USA'
      },
      {
        id: "1",
        capital: 'Cappadocia',
        country: 'Turkey'
      },
      {
        id: "2",
        capital: 'Pamukkale',
        country: 'Turkey'
      },
      {
        id: "3",
        capital: 'Antelope Canyon',
        country: 'USA'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "3b",
    status: "Flags",
    country: "Antelope Canyon",
    capital: "USA",
    options: [
      {
        id: "0",
        country: "Arches National Park\nUSA",
        img: require("../../../assets/NaturalMnt/America/Arches-National-Park.png"),
      },
      {
        id: "1",
        country: "Cappadocia\nTurkey",
        img: require("../../../assets/NaturalMnt/Asia/Cappadocia-valley.png"),
      },
      {
        id: "2",
        country: "Pamukkale\nTurkey",
        img: require("../../../assets/NaturalMnt/Asia/Pamukkale.png"),
      },
      {
        id: "3",
        country: "Antelope Canyon\nUSA",
        img: require("../../../assets/NaturalMnt/America/Antelope-Canyon.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "4a",
    status: "Capitals",
    img: 'L',
    country: "Nepal/China",
    image: require("../../../assets/NaturalMnt/Asia/Mount-Everest.png"),
    options: [
      {
        id: "0",
        capital: 'Mount Everest',
        country: 'Nepal/China'
      },
      {
        id: "1",
        capital: 'Mount Fiji',
        country: 'Japan'
      },
      {
        id: "2",
        capital: 'Mount Otemanu',
        country: 'French Polynesia'
      },
      {
        id: "3",
        capital: 'Cliffs of Moher',
        country: 'Ireland'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "4b",
    status: "Flags",
    country: "Mount Everest",
    capital: "Nepal/China",
    options: [
      {
        id: "0",
        country: "Mount Everest\nNepal/China",
        img: require("../../../assets/NaturalMnt/Asia/Mount-Everest.png"),
      },
      {
        id: "1",
        country: "Mount Fiji\nJapan",
        img: require("../../../assets/NaturalMnt/Asia/mount_fuji.png"),
      },
      {
        id: "2",
        country: "Mount Otemanu\nFrench Polynesia",
        img: require("../../../assets/NaturalMnt/Asia/mountOtemanu.png"),
      },
      {
        id: "3",
        country: "Cliffs of Moher\nIreland",
        img: require("../../../assets/NaturalMnt/Europe/CliffsofMoher.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "5a",
    status: "Capitals",
    img: 'L',
    country: "Belize",
    image: require("../../../assets//NaturalMnt/America/Great-Blue-Hole.png"),
    options: [
      {
        id: "0",
        capital: 'Kauai',
        country: 'Hawaii'
      },
      {
        id: "1",
        capital: 'Lake Titicaca',
        country: 'Bolivia/Peru'
      },
      {
        id: "2",
        capital: 'Great Blue Hole',
        country: 'Belize'
      },
      {
        id: "3",
        capital: 'Ayers Rock',
        country: 'Australia'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "5b",
    status: "Flags",
    country: "Great Blue Hole",
    capital: "Belize",
    options: [
      {
        id: "0",
        country: "Kauai\nHawaii",
        img: require("../../../assets/NaturalMnt/America/KauaiUSA.png"),
      },
      {
        id: "1",
        country: "Lake Titicaca\nBolivia/Peru",
        img: require("../../../assets/NaturalMnt/America/lakeTiticaca.png"),
      },
      {
        id: "2",
        country: "Great Blue Hole\nBelize",
        img: require("../../../assets/NaturalMnt/America/Great-Blue-Hole.png"),
      },
      {
        id: "3",
        country: "Ayers Rock\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/Ayers-Rock.png"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "England",
    image: require("../../../assets/NaturalMnt/Europe/sevensisters.png"),
    options: [
      {
        id: "0",
        capital: 'Trolltunga',
        country: 'Norway'
      },
      {
        id: "1",
        capital: 'Seven Sisters',
        country: 'England'
      },
      {
        id: "2",
        capital: 'Giant\'s Causeway',
        country: 'Ireland'
      },
      {
        id: "3",
        capital: 'Blue Lagoon',
        country: 'Iceland'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6b",
    status: "Flags",
    country: "Seven Sisters",
    capital: "England",
    options: [
      {
        id: "0",
        country: "Trolltunga\nNorway",
        img: require("../../../assets//NaturalMnt/Europe/Trolltunga.png"),
      },
      {
        id: "1",
        country: "Seven Sisters\nEngland",
        img: require("../../../assets/NaturalMnt/Europe/sevensisters.png"),
      },
      {
        id: "2",
        country: "Giant\'s Causeway\nIreland",
        img: require("../../../assets/NaturalMnt/Europe/Giant'sCauseway.png"),
      },
      {
        id: "3",
        country: "Blue Lagoon\nIceland",
        img: require("../../../assets/NaturalMnt/Europe/BlueLagoon.png"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "7a",
    status: "Capitals",
    img: 'L',
    country: "Australia",
    image: require("../../../assets/NaturalMnt/Oceania/12-apostels.webp"),
    options: [
      {
        id: "0",
        capital: 'The Twelve Apostles',
        country: 'Australia'
      },
      {
        id: "1",
        capital: 'Fiordland National Park',
        country: 'New Zealand'
      },
      {
        id: "2",
        capital: 'Kakadu National Park',
        country: 'Australia'
      },
      {
        id: "3",
        capital: 'Cape of Good Hope',
        country: 'South Africa'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "7b",
    status: "Flags",
    country: "The Twelve Apostles",
    capital: "Australia",
    options: [
      {
        id: "0",
        country: "The Twelve Apostles\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/12-apostels.webp"),
      },
      {
        id: "1",
        country: "Fiordland National Park\nNew Zealand",
        img: require("../../../assets/NaturalMnt/Oceania/fiordlandNationalPark.png"),
      },
      {
        id: "2",
        country: "Kakadu National Park\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/Kakadu-National-Park.png"),
      },
      {
        id: "3",
        country: "Cape of Good Hope\nSouth Africa",
        img: require("../../../assets/NaturalMnt/Africa/CapeofGoodHope.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "Japan",
    image: require("../../../assets/NaturalMnt/Asia/mount_fuji.png"),
    options: [
      {
        id: "0",
        capital: 'Mount Ararat',
        country: 'Turkey'
      },
      {
        id: "1",
        capital: 'Mount Fuji',
        country: 'Japan'
      },
      {
        id: "2",
        capital: 'Mount Huang',
        country: 'China'
      },
      {
        id: "3",
        capital: 'Mount Kinabalu',
        country: 'Malaysia'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "8b",
    status: "Flags",
    country: "Mount Fuji",
    capital: "Japan",
    options: [
      {
        id: "0",
        country: "Mount Ararat\nTurkey",
        img: require("../../../assets/NaturalMnt/Asia/mountArarat.png"),
      },
      {
        id: "1",
        country: "Mount Fuji\nJapan",
        img: require("../../../assets/NaturalMnt/Asia/mount_fuji.png"),
      },
      {
        id: "2",
        country: "Mount Huang\nChina",
        img: require("../../../assets/NaturalMnt/Asia/mountHuangshan.png"),
      },
      {
        id: "3",
        country: "Mount Kinabalu\nMalaysia",
        img: require("../../../assets/NaturalMnt/Asia/MountKinabalu.png"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "Turkey",
    image: require("../../../assets/NaturalMnt/Asia/Cappadocia-valley.png"),
    options: [
      {
        id: "0",
        capital: 'Huanglong Scenic Area',
        country: 'China'
      },
      {
        id: "1",
        capital: 'Isle of Skye',
        country: 'Scotland'
      },
      {
        id: "2",
        capital: 'Pulpit Rock',
        country: 'Norway'
      },
      {
        id: "3",
        capital: 'Cappadocia',
        country: 'Turkey'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "9b",
    status: "Flags",
    country: "Cappadocia",
    capital: "Turkey",
    options: [
      {
        id: "0",
        country: "Huanglong Scenic Area\nChina",
        img: require("../../../assets/NaturalMnt/Asia/huanglongScenicArea.png"),
      },
      {
        id: "1",
        country: "Isle of Skye\nScotland",
        img: require("../../../assets/NaturalMnt/Europe/isleofSkye.jpg"),
      },
      {
        id: "2",
        country: "Pulpit Rock\nNorway",
        img: require("../../../assets/NaturalMnt/Europe/pulpitRock.png"),
      },
      {
        id: "3",
        country: "Cappadocia\nTurkey",
        img: require("../../../assets/NaturalMnt/Asia/Cappadocia-valley.png"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "10a",
    status: "Capitals",
    img: 'L',
    country: "Italy",
    image: require("../../../assets/NaturalMnt/Europe/mount-vesuvius.webp"),
    options: [
      {
        id: "0",
        capital: 'Mount Vesuvius',
        country: 'Italy'
      },
      {
        id: "1",
        capital: 'Swiss Alps',
        country: 'Switzerland'
      },
      {
        id: "2",
        capital: 'Mount Teide',
        country: 'Spain'
      },
      {
        id: "3",
        capital: 'Great Sand Dunes National  Park',
        country: 'USA'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "10b",
    status: "Flags",
    country: "Mount Vesuvius",
    capital: "Italy",
    options: [
      {
        id: "0",
        country: "Mount Vesuvius\nItaly",
        img: require("../../../assets/NaturalMnt/Europe/mount-vesuvius.webp"),
      },
      {
        id: "1",
        country: "Swiss Alps\nSwitzerland",
        img: require("../../../assets/NaturalMnt/Europe/swissapls.jpg"),
      },
      {
        id: "2",
        country: "Mount Teide\nSpain",
        img: require("../../../assets/NaturalMnt/Europe/mountTeide.png"),
      },
      {
        id: "3",
        country: "Great Sand Dunes National Park\nUSA",
        img: require("../../../assets/NaturalMnt/America/GreatSandDunesPark.png"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "11",
    monument: "",
    country: "",
  },
  //Dont delete. It s missing status: 'Guess'
  {
    id: "11a",
    monument: "",
    country: "",
  },
  {
    id: "11s",
    monument: "",
    country: "",
  },
  {
    id: "11d",
    monument: "",
    country: "",
  },
  {
    id: "11f",
    monument: "",
    country: "",
  },
  {
    id: "11g",
    monument: "",
    country: "",
  },
  {
    id: "11h",
    monument: "",
    country: "",
  },
  {
    id: "11j",
    monument: "",
    country: "",
  },
  {
    id: "11k",
    monument: "",
    country: "",
  },
  {
    id: "11l",
    monument: "",
    country: "",
  },
  {
    id: "11m",
    monument: "",
    country: "",
  },
];

export default questions1En;
