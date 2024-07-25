const questions4El = [
  {
    id: "1a",
    status: "Capitals",
    img: 'L',
    country: "Egypt",
    image: require("../../../assets/NaturalMnt/Africa/mountSinai.webp"),
    options: [
      {
        id: "0",
        capital: "Dettifoss Waterfall",
        country: "Iceland",
      },
      {
        id: "1",
        capital: "Εθνικό Πάρκο Μπανφ",
        country: "Καναδάς",
      },
      {
        id: "2",
        capital: "Λίμνη Τιτικάκα",
        country: "Bolivia/Περού",
      },
      {
        id: "3",
        capital: "Mount Sinai",
        country: "Egypt",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "1b",
    status: "Flags",
    country: "Mount Sinai",
    capital: "Egypt",
    options: [
      {
        id: "0",
        country: "Dettifoss Waterfall\nIceland",
        img: require("../../../assets/NaturalMnt/Europe/dettifossWaterfall.webp"),
      },
      {
        id: "1",
        country: "Εθνικό Πάρκο Μπανφ\nΚαναδάς",
        img: require("../../../assets/NaturalMnt/America/BanffNationalPark.webp"),
      },
      {
        id: "2",
        country: "Λίμνη Τιτικάκα\nBolivia/Peru",
        img: require("../../../assets/NaturalMnt/America/lakeTiticaca.webp"),
      },
      {
        id: "3",
        country: "Mount Sinai\nEgypt",
        img: require("../../../assets/NaturalMnt/Africa/mountSinai.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2a",
    status: "Capitals",
    img: 'L',
    country: "ΗΠΑ",
    image: require("../../../assets/NaturalMnt/America/TheNeedles.webp"),
    options: [
      {
        id: "0",
        capital: "Torres del Paine",
        country: "Chile",
      },
      {
        id: "1",
        capital: "Yosemite National Park",
        country: "ΗΠΑ",
      },
      {
        id: "2",
        capital: "The Needles",
        country: "ΗΠΑ",
      },
      {
        id: "3",
        capital: "Παμούκαλε",
        country: "Turkey",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "2b",
    status: "Flags",
    country: "The Needles",
    capital: "ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Torres del Paine\nChile",
        img: require("../../../assets/NaturalMnt/America/torres-del-paine.webp"),
      },
      {
        id: "1",
        country: "Yosemite National Park\nUSA",
        img: require("../../../assets/NaturalMnt/America/yosemite-national-park.webp"),
      },
      {
        id: "2",
        country: "The Needles\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/TheNeedles.webp"),
      },
      {
        id: "3",
        country: "Παμούκαλε\nTurkey",
        img: require("../../../assets/NaturalMnt/Asia/Pamukkale.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "Ecuador",
    image: require("../../../assets/NaturalMnt/America/galapagosIslands.webp"),
    options: [
      {
        id: "0",
        capital: 'Galapagos Islands',
        country: 'Ecuador'
      },
      {
        id: "1",
        capital: 'Bora Bora',
        country: 'French Polynesia'
      },
      {
        id: "2",
        capital: 'Great Barrier Reef',
        country: 'Αυστραλία'
      },
      {
        id: "3",
        capital: 'Halong Bay',
        country: 'Vietnam'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "3b",
    status: "Flags",
    country: "Galapagos Islands",
    capital: "Ecuador",
    options: [
      {
        id: "0",
        country: "Galapagos Islands\nEcuador",
        img: require("../../../assets/NaturalMnt/America/galapagosIslands.webp"),
      },
      {
        id: "1",
        country: "Bora Bora\nFrench Polynesia",
        img: require("../../../assets/NaturalMnt/Asia/bora_bora.webp"),
      },
      {
        id: "2",
        country: "Great Barrier Reef\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/greatBarrierReef.webp"),
      },
      {
        id: "3",
        country: "Halong Bay\nVietnam",
        img: require("../../../assets/NaturalMnt/Asia/halongbay-0.png"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "4a",
    status: "Capitals",
    img: 'L',
    country: "ΗΠΑ",
    image: require("../../../assets/NaturalMnt/America/GreatSmokyMountains.webp"),
    options: [
      {
        id: "0",
        capital: 'Black Forest',
        country: 'Γερμανία'
      },
      {
        id: "1",
        capital: 'Βουνό των Επτά Χρωμάτωνs',
        country: 'Περού'
      },
      {
        id: "2",
        capital: 'Great Smoky Mountains',
        country: 'ΗΠΑ'
      },
      {
        id: "3",
        capital: 'Mount Yasur',
        country: 'Vanuatu'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "4b",
    status: "Flags",
    country: "Great Smoky Mountains",
    capital: "ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Black Forest",
        img: require("../../../assets/NaturalMnt/Europe/blackForest.webp"),
      },
      {
        id: "1",
        country: "Βουνό των Επτά Χρωμάτωνs\nPeru",
        img: require("../../../assets/NaturalMnt/America/rainbowMountain.webp"),
      },
      {
        id: "2",
        country: "Great Smoky Mountains",
        img: require("../../../assets/NaturalMnt/America/GreatSmokyMountains.webp"),
      },
      {
        id: "3",
        country: "Mount Yasur\nVanuatu",
        img: require("../../../assets/NaturalMnt/Oceania/yasur_mount.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "5a",
    status: "Capitals",
    img: 'L',
    country: "Ireland",
    image: require("../../../assets/NaturalMnt/Europe/GiantsCauseway.webp"),
    options: [
      {
        id: "0",
        capital: 'Μπλε Λιμνοθάλασσα',
        country: 'Iceland'
      },
      {
        id: "1",
        capital: 'Ακτή του Γίγαντα',
        country: 'Ireland'
      },
      {
        id: "2",
        capital: 'Avenues of Baobabs',
        country: 'Madagascar'
      },
      {
        id: "3",
        capital: 'Kalandula Falls',
        country: 'Angola'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "5b",
    status: "Flags",
    country: "Ακτή του Γίγαντα",
    capital: "Ireland",
    options: [
      {
        id: "0",
        country: "Μπλε Λιμνοθάλασσα\nIceland",
        img: require("../../../assets/NaturalMnt/Europe/BlueLagoon.webp"),
      },
      {
        id: "1",
        country: "Ακτή του Γίγαντα\nIreland",
        img: require("../../../assets/NaturalMnt/Europe/GiantsCauseway.webp"),
      },
      {
        id: "2",
        country: "Avenues of Baobabs\nMadagascar",
        img: require("../../../assets/NaturalMnt/Africa/avenueofboababs.webp"),
      },
      {
        id: "3",
        country: "Kalandula Falls\nAngola",
        img: require("../../../assets/NaturalMnt/Africa/kalandula-falls-angola.webp"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "Kenya",
    image: require("../../../assets/NaturalMnt/Africa/mountKenya.webp"),
    options: [
      {
        id: "0",
        capital: 'Όρος Βεζούβιος',
        country: 'Italy'
      },
      {
        id: "1",
        capital: 'Blue Mountains',
        country: 'Αυστραλία'
      },
      {
        id: "2",
        capital: 'Mount Kenya',
        country: 'Kenya'
      },
      {
        id: "3",
        capital: 'Όρος Αραράτ',
        country: 'Turkey'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "6b",
    status: "Flags",
    country: "Mount Kenya",
    capital: "kenya",
    options: [
      {
        id: "0",
        country: "Όρος Βεζούβιος\nItaly",
        img: require("../../../assets/NaturalMnt/Europe/mount-vesuvius.webp"),
      },
      {
        id: "1",
        country: "Blue Mountains\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/Australia-Blue-Mountains.webp"),
      },
      {
        id: "2",
        country: "Mount Kenya\nKenya",
        img: require("../../../assets/NaturalMnt/Africa/mountKenya.webp"),
      },
      {
        id: "3",
        country: "Όρος Αραράτ\nTurkey",
        img: require("../../../assets/NaturalMnt/Asia/mountArarat.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7a",
    status: "Capitals",
    img: 'L',
    country: "Καναδάς/ΗΠΑ",
    image: require("../../../assets/NaturalMnt/America/NiagaraFalls.webp"),
    options: [
      {
        id: "0",
        capital: 'Niagara Falls',
        country: 'Καναδάς/ΗΠΑ'
      },
      {
        id: "1",
        capital: 'White Sands National Park',
        country: 'ΗΠΑ'
      },
      {
        id: "2",
        capital: 'Mount Cook',
        country: 'New Zealand'
      },
      {
        id: "3",
        capital: 'Mount Yasur',
        country: 'Vanuatu'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "7b",
    status: "Flags",
    country: "Niagara Falls",
    capital: "Καναδάς/ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Niagara Falls\nΚαναδάς/ΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/NiagaraFalls.webp"),
      },
      {
        id: "1",
        country: "White Sands National Park\nUSA",
        img: require("../../../assets/NaturalMnt/America/white-sandsNationalPark.webp"),
      },
      {
        id: "2",
        country: "Mount Cook\nNew Zealand",
        img: require("../../../assets/NaturalMnt/Oceania/mountcook.webp"),
      },
      {
        id: "3",
        country: "Mount Yasur\nVanuatu",
        img: require("../../../assets/NaturalMnt/Oceania/yasur_mount.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "Chile",
    image: require("../../../assets/NaturalMnt/America/torres-del-paine.webp"),
    options: [
      {
        id: "0",
        capital: 'Sossusvlei',
        country: 'Namibia'
      },
      {
        id: "1",
        capital: 'Παμούκαλε',
        country: 'Turkey'
      },
      {
        id: "2",
        capital: 'Torres de Paine',
        country: 'Chile'
      },
      {
        id: "3",
        capital: 'Wadi Rum',
        country: 'Jordan'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "8b",
    status: "Flags",
    country: "Torres de Paine",
    capital: "Chile",
    options: [
      {
        id: "0",
        country: "Sossusvlei\nNamibia",
        img: require("../../../assets/NaturalMnt/Africa/Sossusvlei-Dunes.webp"),
      },
      {
        id: "1",
        country: "Παμούκαλε\nTurkey",
        img: require("../../../assets/NaturalMnt/Asia/Pamukkale.webp"),
      },
      {
        id: "2",
        country: "Torres de Paine\nChile",
        img: require("../../../assets/NaturalMnt/America/torres-del-paine.webp"),
      },
      {
        id: "3",
        country: "Wadi Rum\nJordan",
        img: require("../../../assets/NaturalMnt/Asia/wadi-rum.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "Spain",
    image: require("../../../assets/NaturalMnt/Europe/mountTeide.webp"),
    options: [
      {
        id: "0",
        capital: 'Ουλουρού',
        country: 'Αυστραλία'
      },
      {
        id: "1",
        capital: 'Εθνικό Πάρκο Φιόρντλαντ',
        country: 'New Zealand'
      },
      {
        id: "2",
        capital: 'Εθνικό Πάρκο Κακαντού',
        country: 'Αυστραλία'
      },
      {
        id: "3",
        capital: 'Όρος Τέιδε',
        country: 'Spain'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "9b",
    status: "Flags",
    country: "Όρος Τέιδε",
    capital: "Spain",
    options: [
      {
        id: "0",
        country: "Ουλουρού\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/Ayers-Rock.webp"),
      },
      {
        id: "1",
        country: "Εθνικό Πάρκο Φιόρντλαντ\nNew Zealand",
        img: require("../../../assets/NaturalMnt/Oceania/fiordlandNationalPark.webp"),
      },
      {
        id: "2",
        country: "Εθνικό Πάρκο Κακαντού\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/kakadu.webp"),
      },
      {
        id: "3",
        country: "Όρος Τέιδε\nSpain",
        img: require("../../../assets/NaturalMnt/Europe/mountTeide.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "10a",
    status: "Capitals",
    img: 'L',
    country: "Slovenia",
    image: require("../../../assets/NaturalMnt/Europe/lake-bled.webp"),
    options: [
      {
        id: "0",
        capital: 'Mount Elbrus',
        country: 'Russia'
      },
      {
        id: "1",
        capital: 'Lake Bled',
        country: 'Slovenia'
      },
      {
        id: "2",
        capital: 'Picos de Europa',
        country: 'Northern Spain'
      },
      {
        id: "3",
        capital: 'Ελβετικές Άλπεις',
        country: 'Switzerland'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "10b",
    status: "Flags",
    country: "Lake Bled",
    capital: "Slovenia",
    options: [
      {
        id: "0",
        country: "Mount Elbrus\nRussia",
        img: require("../../../assets/NaturalMnt/Europe/mount-elbrus.webp"),
      },
      {
        id: "1",
        country: "Lake Bled\nSlovenia",
        img: require("../../../assets/NaturalMnt/Europe/lake-bled.webp"),
      },
      {
        id: "2",
        country: "Picos de Europa\nNorthern Spain",
        img: require("../../../assets/NaturalMnt/Europe/PicosdeEuropa.webp"),
      },
      {
        id: "3",
        country: "Ελβετικές Άλπεις\nSwitzerland",
        img: require("../../../assets/NaturalMnt/Europe/swissapls.jpg"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "11",
    monument: "",
    country: "",
  },
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

export default questions4El;
