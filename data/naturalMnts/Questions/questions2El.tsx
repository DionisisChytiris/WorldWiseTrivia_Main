const questions2El = [
  {
    id: "1a",
    status: "Capitals",
    img: 'L',
    country: "Vario",
    image: require("../../../assets/NaturalMnt/America/amazonRainforest.webp"),
    options: [
      {
        id: "0",
        capital: "Εθνικό Πάρκο Μπανφ",
        country: "Καναδάς",
      },
      {
        id: "1",
        capital: "Όρος Ρενιέρ",
        country: "ΗΠΑ",
      },
      {
        id: "2",
        capital: "Βουνό των Επτά Χρωμάτων",
        country: "Περού",
      },
      {
        id: "3",
        capital: "Δάσος Αμαζονίου",
        country: "Διάφορες Νότιοαμερικανικές Χώρες",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "1b",
    status: "Flags",
    country: "Δάσος Αμαζονίου",
    capital: "Διάφορες Νότιοαμερικανικές Χώρες",
    options: [
      {
        id: "0",
        country: "Εθνικό Πάρκο Μπανφ\nΚαναδάς",
        img: require("../../../assets/NaturalMnt/America/BanffNationalPark.webp"),
      },
      {
        id: "1",
        country: "Όρος Ρενιέρ\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/mount rainier.webp"),
      },
      {
        id: "2",
        country: "Βουνό των Επτά Χρωμάτων\nΠερού",
        img: require("../../../assets/NaturalMnt/America/rainbowMountain.webp"),
      },
      {
        id: "3",
        country: "Δάσος Αμαζονίου\nΔιάφορες Νότιοαμερικανικές Χώρες",
        img: require("../../../assets/NaturalMnt/America/amazonRainforest.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2a",
    status: "Capitals",
    img: 'L',
    country: "ΗΠΑ",
    image: require("../../../assets/NaturalMnt/America/Sequoia-National-Park.webp"),
    options: [
      {
        id: "0",
        capital: "The Needles",
        country: "ΗΠΑ",
      },
      {
        id: "1",
        capital: "Black Forest",
        country: "Γερμανία",
      },
      {
        id: "2",
        capital: "Sequoia National Park",
        country: "ΗΠΑ",
      },
      {
        id: "3",
        capital: "Εθνικό Πάρκο Κακαντού",
        country: "Αυστραλία",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "2b",
    status: "Flags",
    country: "Sequoia National Park",
    capital: "ΗΠΑ",
    options: [
      {
        id: "0",
        country: "The Needles\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/TheNeedles.webp"),
      },
      {
        id: "1",
        country: "Black Forest\nΓερμανία",
        img: require("../../../assets/NaturalMnt/Europe/blackForest.webp"),
      },
      {
        id: "2",
        country: "Sequoia National Park\nUSA",
        img: require("../../../assets/NaturalMnt/America/Sequoia-National-Park.webp"),
      },
      {
        id: "3",
        country: "Εθνικό Πάρκο Κακαντού\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/kakadu.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "Vietnam",
    image: require("../../../assets/NaturalMnt/Asia/halongbay-0.png"),
    options: [
      {
        id: "0",
        capital: "Halong Bay",
        country: "Vietnam",
      },
      {
        id: "1",
        capital: "Mount Bromo",
        country: "Indonesia",
      },
      {
        id: "2",
        capital: "Όρος Οτεμανού",
        country: "French Polynesia",
      },
      {
        id: "3",
        capital: "Bora Bora",
        country: "French Polynesia",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "3b",
    status: "Flags",
    country: "Halong Bay",
    capital: "Vietnam",
    options: [
      {
        id: "0",
        country: "Halong Bay\nVietnam",
        img: require("../../../assets/NaturalMnt/Asia/halongbay-0.png"),
      },
      {
        id: "1",
        country: "Mount Bromo\nIndonesia",
        img: require("../../../assets/NaturalMnt/Asia/mountBromo.webp"),
      },
      {
        id: "2",
        country: "Όρος Οτεμανού\nFrench Polynesia",
        img: require("../../../assets/NaturalMnt/Asia/mountOtemanu.png"),
      },
      {
        id: "3",
        country: "Bora Bora\nFrench Polynesia",
        img: require("../../../assets/NaturalMnt/Asia/bora_bora.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "4a",
    status: "Capitals",
    img: 'L',
    country: "South Africa",
    image: require("../../../assets/NaturalMnt/Africa/table-mountain.webp"),
    options: [
      {
        id: "0",
        capital: "Ακρωτήριο της Καλής Ελπίδας",
        country: "South Africa",
      },
      {
        id: "1",
        capital: "Wadi Rum",
        country: "Jordan",
      },
      {
        id: "2",
        capital: "Table Mountain National Park",
        country: "South Africa",
      },
      {
        id: "3",
        capital: "Gobi Desert",
        country: "China/Mongolia",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "4b",
    status: "Flags",
    country: "Table Mountain National Park",
    capital: "South Africa",
    options: [
      {
        id: "0",
        country: "Ακρωτήριο της Καλής Ελπίδας\nSouth Africa",
        img: require("../../../assets/NaturalMnt/Africa/CapeofGoodHope.webp"),
      },
      {
        id: "1",
        country: "Wadi Rum\nJordan",
        img: require("../../../assets/NaturalMnt/Asia/wadi-rum.webp"),
      },
      {
        id: "2",
        country: "Table Mountain National Park\nSouth Africa",
        img: require("../../../assets/NaturalMnt/Africa/table-mountain.webp"),
      },
      {
        id: "3",
        country: "Gobi Desert\nChina/Mongolia",
        img: require("../../../assets/NaturalMnt/Asia/Winter-GobiDesert.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "5a",
    status: "Capitals",
    img: 'L',
    country: "Tanzania",
    image: require("../../../assets/NaturalMnt/Africa/Kilimanjaro.webp"),
    options: [
      {
        id: "0",
        capital: "Mount Kenya",
        country: "Kenya",
      },
      {
        id: "1",
        capital: "Mount Sinai",
        country: "Egypt",
      },
      {
        id: "2",
        capital: "Zhangjiajie",
        country: "China",
      },
      {
        id: "3",
        capital: "Όρος Κιλιμάντζαρο",
        country: "Tanzania",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "5b",
    status: "Flags",
    country: "Όρος Κιλιμάντζαρο",
    capital: "Tanzania",
    options: [
      {
        id: "0",
        country: "Mount Kenya\nKenya",
        img: require("../../../assets/NaturalMnt/Africa/mountKenya.webp"),
      },
      {
        id: "1",
        country: "Mount Sinai\nEgypt",
        img: require("../../../assets/NaturalMnt/Africa/mountSinai.webp"),
      },
      {
        id: "2",
        country: "Zhangjiajie\nChina",
        img: require("../../../assets/NaturalMnt/Asia/zhangjiajie-national-forest-park-china.png"),
      },
      {
        id: "3",
        country: "Όρος Κιλιμάντζαρο\nTanzania",
        img: require("../../../assets/NaturalMnt/Africa/Kilimanjaro.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "Περού",
    image: require("../../../assets/NaturalMnt/America/rainbowMountain.webp"),
    options: [
      {
        id: "0",
        capital: "Βουνό των Επτά Χρωμάτων",
        country: "Περού",
      },
      {
        id: "1",
        capital: "Salar de Uyuni",
        country: "Bolivia",
      },
      {
        id: "2",
        capital: "Torres de Paine",
        country: "Chile",
      },
      {
        id: "3",
        capital: "Jiuzhaigou Valley",
        country: "China",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "6b",
    status: "Flags",
    country: "Βουνό των Επτά Χρωμάτων",
    capital: "Περού",
    options: [
      {
        id: "0",
        country: "Βουνό των Επτά Χρωμάτων\nPeru",
        img: require("../../../assets/NaturalMnt/America/rainbowMountain.webp"),
      },
      {
        id: "1",
        country: "Salar de Uyuni\nBolivia",
        img: require("../../../assets/NaturalMnt/America/SalardeUyuni.webp"),
      },
      {
        id: "2",
        country: "Torres de Paine\nChile",
        img: require("../../../assets/NaturalMnt/America/torres-del-paine.webp"),
      },
      {
        id: "3",
        country: "Jiuzhaigou\nChina",
        img: require("../../../assets/NaturalMnt/Asia/Jiuzhaigou-Valley.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "7a",
    status: "Capitals",
    img: 'L',
    country: "ΗΠΑ",
    image: require("../../../assets/NaturalMnt/America/Arches-National-Park.webp"),
    options: [
      {
        id: "0",
        capital: "Grand Canyon",
        country: "ΗΠΑ",
      },
      {
        id: "1",
        capital: "Marble Caves",
        country: "Chile",
      },
      {
        id: "2",
        capital: "Εθνικό Πάρκο Αψίδων",
        country: "ΗΠΑ",
      },
      {
        id: "3",
        capital: "Mitten Buttes",
        country: "ΗΠΑ",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7b",
    status: "Flags",
    country: "Εθνικό Πάρκο Αψίδων",
    capital: "ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Grand Canyon\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/grandcanyon.webp"),
      },
      {
        id: "1",
        country: "Marble Caves\nChile",
        img: require("../../../assets/NaturalMnt/America/marble-caves-chile.png"),
      },
      {
        id: "2",
        country: "Εθνικό Πάρκο Αψίδων\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/Arches-National-Park.webp"),
      },
      {
        id: "3",
        country: "Mitten Buttes\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/mitten-butte.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "Iceland",
    image: require("../../../assets/NaturalMnt/Europe/BlueLagoon.webp"),
    options: [
      {
        id: "0",
        capital: "Dettifoss Waterfall",
        country: "Iceland",
      },
      {
        id: "1",
        capital: "Μπλε Λιμνοθάλασσα",
        country: "Iceland",
      },
      {
        id: "2",
        capital: "Lake Bled",
        country: "Slovenia",
      },
      {
        id: "3",
        capital: "Mount Elbrus",
        country: "Russia",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "8b",
    status: "Flags",
    country: "Μπλε Λιμνοθάλασσα",
    capital: "Iceland",
    options: [
      {
        id: "0",
        country: "Dettifoss Waterfall\nIceland",
        img: require("../../../assets/NaturalMnt/Europe/dettifossWaterfall.webp"),
      },
      {
        id: "1",
        country: "Μπλε Λιμνοθάλασσα\nIceland",
        img: require("../../../assets/NaturalMnt/Europe/BlueLagoon.webp"),
      },
      {
        id: "2",
        country: "Lake Bled\nSlovenia",
        img: require("../../../assets/NaturalMnt/Europe/lake-bled.webp"),
      },
      {
        id: "3",
        country: "Mount Elbrus\nRussia",
        img: require("../../../assets/NaturalMnt/Europe/mount-elbrus.webp"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "Γερμανία",
    image: require("../../../assets/NaturalMnt/Europe/blackForest.webp"),
    options: [
      {
        id: "0",
        capital: "Moraine Lake",
        country: "Καναδάς",
      },
      {
        id: "1",
        capital: "Niagara Falls",
        country: "ΗΠΑ/Καναδάς",
      },
      {
        id: "2",
        capital: "Black Forest",
        country: "Γερμανία",
      },
      {
        id: "3",
        capital: "Εθνικό Πάρκο Κακαντού",
        country: "Αυστραλία",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "9b",
    status: "Flags",
    country: "Black Forest",
    capital: "Γερμανία",
    options: [
      {
        id: "0",
        country: "Moraine Lake\nΚαναδάς",
        img: require("../../../assets/NaturalMnt/America/Moraine-Lake.webp"),
      },
      {
        id: "1",
        country: "Niagara Falls\nΚαναδάς/ΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/NiagaraFalls.webp"),
      },
      {
        id: "2",
        country: "Black Forest\nΓερμανία",
        img: require("../../../assets/NaturalMnt/Europe/blackForest.webp"),
      },
      {
        id: "3",
        country: "Εθνικό Πάρκο Κακαντού\nAustralia",
        img: require("../../../assets/NaturalMnt/Oceania/kakadu.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "10a",
    status: "Capitals",
    img: 'L',
    country: "Αυστραλία",
    image: require("../../../assets/NaturalMnt/Oceania/oceanroad.webp"),
    options: [
      {
        id: "0",
        capital: "Οι Δώδεκα Απόστολοι",
        country: "Αυστραλία",
      },
      {
        id: "1",
        capital: "Okavango Delta",
        country: "Botswana",
      },
      {
        id: "2",
        capital: "Kalandula Falls",
        country: "Angola",
      },
      {
        id: "3",
        capital: "The Great Ocean Road",
        country: "Αυστραλία",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "10b",
    status: "Flags",
    country: "The Great Ocean Road",
    capital: "Αυστραλία",
    options: [
      {
        id: "0",
        country: "Οι Δώδεκα Απόστολοι\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/12-apostels.webp"),
      },
      {
        id: "1",
        country: "Okavango Delta\nBotswana",
        img: require("../../../assets/NaturalMnt/Africa/Botswana_Okavango_Delta.webp"),
      },
      {
        id: "2",
        country: "Kalandula Falls\nAngola",
        img: require("../../../assets/NaturalMnt/Africa/kalandula-falls-angola.webp"),
      },
      {
        id: "3",
        country: "The Great Ocean Road\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/oceanroad.webp"),
      },
    ],
    correctAnswerIndex: 3,
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
  {
    id: "11",
    monument: "",
    country: "",
  },
];

export default questions2El;
