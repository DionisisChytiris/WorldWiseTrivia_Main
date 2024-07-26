const questions3El = [
  {
    id: "1a",
    status: "Capitals",
    img: 'L',
    country: "ΗΠΑ",
    image: require("../../../assets/NaturalMnt/America/grandcanyon.webp"),
    options: [
      {
        id: "0",
        capital: "Γκραν Κάνιον",
        country: "ΗΠΑ",
      },
      {
        id: "1",
        capital: "Angel Falls",
        country: "Venezuela",
      },
      {
        id: "2",
        capital: "Φαράγγι Αντίλοπα",
        country: "ΗΠΑ",
      },
      {
        id: "3",
        capital: "Chapada Diamantina National Park",
        country: "Brazil",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "1b",
    status: "Flags",
    country: "Γκραν Κάνιον",
    capital: "ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Γκραν Κάνιον\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/grandcanyon.webp"),
      },
      {
        id: "1",
        country: "Angel Falls\nVenezuela",
        img: require("../../../assets/NaturalMnt/America/Angel-Falls.webp"),
      },
      {
        id: "2",
        country: "Φαράγγι Αντίλοπα\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/Antelope-Canyon.webp"),
      },
      {
        id: "3",
        country: "Chapada Diamantina National Park\nBrazil",
        img: require("../../../assets/NaturalMnt/America/chadadaDiamantina.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "2a",
    status: "Capitals",
    img: 'L',
    country: "Αυστραλία",
    image: require("../../../assets/NaturalMnt/Oceania/Ayers-Rock.webp"),
    options: [
      {
        id: "0",
        capital: "Iguazu Falls",
        country: "Argentine/Brazil",
      },
      {
        id: "1",
        capital: "Καουάι",
        country: "Hawaii",
      },
      {
        id: "2",
        capital: "Ουλουρού",
        country: "Αυστραλία",
      },
      {
        id: "3",
        capital: "Εθνικό Πάρκο Όρος Τέιμπλ",
        country: "Νότια Αφρική",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "2b",
    status: "Flags",
    country: "Ουλουρού",
    capital: "Αυστραλία",
    options: [
      {
        id: "0",
        country: "Iguazu Falls\nArgentine/Brazil",
        img: require("../../../assets/NaturalMnt/America/iguazufalls.webp"),
      },
      {
        id: "1",
        country: "Καουάι\nHawaii",
        img: require("../../../assets/NaturalMnt/America/KauaiUSA.webp"),
      },
      {
        id: "2",
        country: "Ουλουρού\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/Ayers-Rock.webp"),
      },
      {
        id: "3",
        country: "Εθνικό Πάρκο Όρος Τέιμπλ\nSouth Africa",
        img: require("../../../assets/NaturalMnt/Africa/table-mountain.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "Ireland",
    image: require("../../../assets/NaturalMnt/Europe/CliffsofMoher.webp"),
    options: [
      {
        id: "0",
        capital: "Απότομες Ακτές του Μόχερ",
        country: "Ireland",
      },
      {
        id: "1",
        capital: "Ακτή του Γίγαντα",
        country: "Ireland",
      },
      {
        id: "2",
        capital: "Νήσος Σκάι",
        country: "Scotland",
      },
      {
        id: "3",
        capital: "Aurora",
        country: "Near the Arctic and Antarctic",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "3b",
    status: "Flags",
    country: "Απότομες Ακτές του Μόχερ",
    capital: "Ireland",
    options: [
      {
        id: "0",
        country: "Απότομες Ακτές του Μόχερ\nIreland",
        img: require("../../../assets/NaturalMnt/Europe/CliffsofMoher.webp"),
      },
      {
        id: "1",
        country: "Ακτή του Γίγαντα\nIreland",
        img: require("../../../assets/NaturalMnt/Europe/GiantsCauseway.webp"),
      },
      {
        id: "2",
        country: "Νήσος Σκάι\nScotland",
        img: require("../../../assets/NaturalMnt/Europe/isleofSkye.webp"),
      },
      {
        id: "3",
        country: "Aurora\nNear the Arctic and Antarctic",
        img: require("../../../assets/NaturalMnt/Europe/Northern-Lights-Desktop-Wallpaper.jpg"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "4a",
    status: "Capitals",
    img: 'L',
    country: "Italy",
    image: require("../../../assets/NaturalMnt/Europe/mountEtna.webp"),
    options: [
      {
        id: "0",
        capital: "Όρος Τέιδε",
        country: "Spain",
      },
      {
        id: "1",
        capital: "Μπόρα Μπόρα",
        country: "Γαλλική Πολυνησία",
      },
      {
        id: "2",
        capital: "Mount Etna",
        country: "Italy",
      },
      {
        id: "3",
        capital: "Όρος Φούτζι",
        country: "Japan",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "4b",
    status: "Flags",
    country: "Mount Etna",
    capital: "Italy",
    options: [
      {
        id: "0",
        country: "Όρος Τέιδε\nSpain",
        img: require("../../../assets/NaturalMnt/Europe/mountTeide.webp"),
      },
      {
        id: "1",
        country: "Μπόρα Μπόρα\nΓαλλική Πολυνησία",
        img: require("../../../assets/NaturalMnt/Asia/bora_bora.webp"),
      },
      {
        id: "2",
        country: "Mount Etna\nItaly",
        img: require("../../../assets/NaturalMnt/Europe/mountEtna.webp"),
      },
      {
        id: "3",
        country: "Όρος Φούτζι\nJapan",
        img: require("../../../assets/NaturalMnt/Asia/mount_fuji.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "5a",
    status: "Capitals",
    img: 'L',
    country: "Αυστραλία",
    image: require("../../../assets/NaturalMnt/Oceania/lakehillier.webp"),
    options: [
      {
        id: "0",
        capital: "Nile",
        country: "Αίγυπτος",
      },
      {
        id: "1",
        capital: "Lake Bled",
        country: "Σλοβενία",
      },
      {
        id: "2",
        capital: "Plitvice Lakes",
        country: "Croatia",
      },
      {
        id: "3",
        capital: "Lake Hillier",
        country: "Αυστραλία",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "5b",
    status: "Flags",
    country: "Lake Hillier",
    capital: "Αυστραλία",
    options: [
      {
        id: "0",
        country: "Nile\nΑίγυπτος",
        img: require("../../../assets/NaturalMnt/Africa/RiverNile.webp"),
      },
      {
        id: "1",
        country: "Lake Bled\nΣλοβενία",
        img: require("../../../assets/NaturalMnt/Europe/lake-bled.webp"),
      },
      {
        id: "2",
        country: "Plitvice Lakes\nCroatia",
        img: require("../../../assets/NaturalMnt/Europe/Plitvice-lakes.webp"),
      },
      {
        id: "3",
        country: "Lake Hillier\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/lakehillier.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "Τανζανία",
    image: require("../../../assets/NaturalMnt/Africa/serengeti-national-park.webp"),
    options: [
      {
        id: "0",
        capital: "Serengeti National Park",
        country: "Τανζανία",
      },
      {
        id: "1",
        capital: "Danakil Depression",
        country: "Ethiopia",
      },
      {
        id: "2",
        capital: "Charyn Canyon",
        country: "Kazakhstan",
      },
      {
        id: "3",
        capital: "Περιοχή Τοπίων Χουάνγκλονγκ",
        country: "Κίνα",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "6b",
    status: "Flags",
    country: "Serengeti National Park",
    capital: "Τανζανία",
    options: [
      {
        id: "0",
        country: "Serengeti National Park\nTanzania",
        img: require("../../../assets/NaturalMnt/Africa/serengeti-national-park.webp"),
      },
      {
        id: "1",
        country: "Danakil Depression\nEthiopia",
        img: require("../../../assets/NaturalMnt/Africa/The Danakil DepressionEthiopia.webp"),
      },
      {
        id: "2",
        country: "Charyn Canyon\nKazakhstan",
        img: require("../../../assets/NaturalMnt/Asia/charynCanyon.webp"),
      },
      {
        id: "3",
        country: "Περιοχή Τοπίων Χουάνγκλονγκ\nChina",
        img: require("../../../assets/NaturalMnt/Asia/huanglongScenicArea.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "7a",
    status: "Capitals",
    img: 'L',
    country: "ΗΠΑ",
    image: require("../../../assets/NaturalMnt/America/mitten-butte.webp"),
    options: [
      {
        id: "0",
        capital: "Ουλουρού",
        country: "Αυστραλία",
      },
      {
        id: "1",
        capital: "Πέτρινος Αμβώνας",
        country: "Norway",
      },
      {
        id: "2",
        capital: "Santorini Caldera",
        country: "Greece",
      },
      {
        id: "3",
        capital: "Λόφοι Μίτεν",
        country: "ΗΠΑ",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "7b",
    status: "Flags",
    country: "Λόφοι Μίτεν",
    capital: "ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Ουλουρού",
        img: require("../../../assets/NaturalMnt/Oceania/Ayers-Rock.webp"),
      },
      {
        id: "1",
        country: "Πέτρινος Αμβώνας\nNorway",
        img: require("../../../assets/NaturalMnt/Europe/pulpitRock.webp"),
      },
      {
        id: "2",
        country: "Santorini Caldera\nGreece",
        img: require("../../../assets/NaturalMnt/Europe/Santorini-Caldera.jpg"),
      },
      {
        id: "3",
        country: "Λόφοι Μίτεν\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/mitten-butte.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "Venezuela",
    image: require("../../../assets/NaturalMnt/America/Angel-Falls.webp"),
    options: [
      {
        id: "0",
        capital: "Εθνικό Πάρκο Μεγάλων Αμμόλοφων",
        country: "ΗΠΑ",
      },
      {
        id: "1",
        capital: "Angel Falls",
        country: "Venezuela",
      },
      {
        id: "2",
        capital: "Great Smoky Mountains",
        country: "ΗΠΑ",
      },
      {
        id: "3",
        capital: "Mount Κένυα",
        country: "Κένυα",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "8b",
    status: "Flags",
    country: "Angel Falls",
    capital: "Venezuela",
    options: [
      {
        id: "0",
        country: "Εθνικό Πάρκο Μεγάλων Αμμόλοφων\nUSA",
        img: require("../../../assets/NaturalMnt/America/GreatSandDunesPark.webp"),
      },
      {
        id: "1",
        country: "Angel Falls\nVenezuela",
        img: require("../../../assets/NaturalMnt/America/Angel-Falls.webp"),
      },
      {
        id: "2",
        country: "Great Smoky Mountains\nUSA",
        img: require("../../../assets/NaturalMnt/America/GreatSmokyMountains.webp"),
      },
      {
        id: "3",
        country: "Mount Κένυα\nΚένυα",
        img: require("../../../assets/NaturalMnt/Africa/mountKenya.webp"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "Νότια Αφρική",
    image: require("../../../assets/NaturalMnt/Africa/CapeofGoodHope.webp"),
    options: [
      {
        id: "0",
        capital: "Εθνικό Πάρκο Λευκής Ερήμου",
        country: "Αίγυπτος",
      },
      {
        id: "1",
        capital: "Σαλάρ ντε Ουγιούνι",
        country: "Βολιβία",
      },
      {
        id: "2",
        capital: "Ακρωτήριο της Καλής Ελπίδας",
        country: "Νότια Αφρική",
      },
      {
        id: "3",
        capital: "Οι Δώδεκα Απόστολοι",
        country: "Αυστραλία",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "9b",
    status: "Flags",
    country: "Ακρωτήριο της Καλής Ελπίδας",
    capital: "Νότια Αφρική",
    options: [
      {
        id: "0",
        country: "Εθνικό Πάρκο Λευκής Ερήμου\nEgypt",
        img: require("../../../assets/NaturalMnt/Africa/Egypt-White-Desert-National.webp"),
      },
      {
        id: "1",
        country: "Σαλάρ ντε Ουγιούνι\nΒολιβία",
        img: require("../../../assets/NaturalMnt/America/SalardeUyuni.webp"),
      },
      {
        id: "2",
        country: "Ακρωτήριο της Καλής Ελπίδας\nSouth Africa",
        img: require("../../../assets/NaturalMnt/Africa/CapeofGoodHope.webp"),
      },
      {
        id: "3",
        country: "Οι Δώδεκα Απόστολοι\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/12-apostels.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "10a",
    status: "Capitals",
    img: 'L',
    country: "Αίγυπτος",
    image: require("../../../assets/NaturalMnt/Africa/RiverNile.webp"),
    options: [
      {
        id: "0",
        capital: "River Nile",
        country: "Αίγυπτος",
      },
      {
        id: "1",
        capital: "Okavango Delta",
        country: "Botswana",
      },
      {
        id: "2",
        capital: "Δάσος Αμαζονίου",
        country: "Διάφορες Νότιοαμερικανικές Χώρες",
      },
      {
        id: "3",
        capital: "Μεγάλη Μπλε Τρύπα",
        country: "Μπελίζ",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "10b",
    status: "Flags",
    country: "River Nile",
    capital: "Αίγυπτος",
    options: [
      {
        id: "0",
        country: "River Nile\nΑίγυπτος",
        img: require("../../../assets/NaturalMnt/Africa/RiverNile.webp"),
      },
      {
        id: "1",
        country: "Okavango Delta\nBotswana",
        img: require("../../../assets/NaturalMnt/Africa/Botswana_Okavango_Delta.webp"),
      },
      {
        id: "2",
        country: "Δάσος Αμαζονίου\nΔιάφορες Νότιοαμερικανικές Χώρες",
        img: require("../../../assets/NaturalMnt/America/amazonRainforest.webp"),
      },
      {
        id: "3",
        country: "Μεγάλη Μπλε Τρύπα\nBelize",
        img: require("../../../assets/NaturalMnt/America/Great-Blue-Hole.webp"),
      },
    ],
    correctAnswerIndex: 0,
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

export default questions3El;
