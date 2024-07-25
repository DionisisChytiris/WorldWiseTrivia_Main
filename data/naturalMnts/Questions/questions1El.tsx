const questions1El = [
  {
    id: "1a",
    img: 'L',
    status: "Capitals",
    country: "ΗΠΑ",
    image: require("../../../assets/NaturalMnt/America/yellowstone.webp"),
    options: [
      {
        id: "0",
        capital: 'Καταρράκτες Έιντζελ',
        country: 'Βενεζουέλα'
      },
      {
        id: "1",
        capital: 'Μεγάλη Μπλε Τρύπα',
        country: 'Μπελίζ'
      },
      {
        id: "2",
        capital: 'Great Smoky Mountains',
        country: 'ΗΠΑ'
      },
      {
        id: "3",
        capital: 'Εθνικό Πάρκο Γιέλοουστουν',
        country: 'ΗΠΑ'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "1b",
    status: "Flags",
    country: "Εθνικό Πάρκο Γιέλοουστουν",
    capital: "ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Καταρράκτες Έιντζελ\nΒενεζουέλα",
        img: require("../../../assets/NaturalMnt/America/Angel-Falls.webp"),
      },
      {
        id: "1",
        country: "Μεγάλη Μπλε Τρύπα\nΜπελίζ",
        img: require("../../../assets/NaturalMnt/America/Great-Blue-Hole.webp"),
      },
      {
        id: "2",
        country: "Great Smoky Mountains\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/GreatSmokyMountains.webp"),
      },
      {
        id: "3",
        country: "Εθνικό Πάρκο Γιέλοουστουν",
        img: require("../../../assets/NaturalMnt/America/yellowstone.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2a",
    status: "Capitals",
    img: 'L',
    country: "Ζιμπάμπουε/Ζάμπια",
    image: require("../../../assets/NaturalMnt/Africa/Victoria-Falls.webp"),
    options: [
      {
        id: "0",
        capital: 'Σοσουσβλέι',
        country: 'Ναμίμπια'
      },
      {
        id: "1",
        capital: 'Καταρράκτες Βικτώρια',
        country: 'Ζιμπάμπουε/Ζάμπια'
      },
      {
        id: "2",
        capital: 'Εθνικό Πάρκο Λευκής Ερήμου',
        country: 'Αίγυπτος'
      },
      {
        id: "3",
        capital: 'Όρος Κιλιμάντζαρο',
        country: 'Τανζανία'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "2b",
    status: "Flags",
    country: "Καταρράκτες Βικτώρια",
    capital: "Ζιμπάμπουε/Ζάμπια",
    options: [
      {
        id: "0",
        country: "Σοσουσβλέι\nΝαμίμπια",
        img: require("../../../assets/NaturalMnt/Africa/Sossusvlei-Dunes.webp"),
      },
      {
        id: "1",
        country: "Καταρράκτες Βικτώρια\nΖιμπάμπουε/Ζάμπια",
        img: require("../../../assets/NaturalMnt/Africa/Victoria-Falls.webp"),
      },
      {
        id: "2",
        country: "Εθνικό Πάρκο Λευκής Ερήμου\nΑίγυπτος",
        img: require("../../../assets/NaturalMnt/Africa/Egypt-White-Desert-National.webp"),
      },
      {
        id: "3",
        country: "Όρος Κιλιμάντζαρο\nΤανζανία",
        img: require("../../../assets/NaturalMnt/Africa/Kilimanjaro.webp"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "ΗΠΑ",
    image: require("../../../assets/NaturalMnt/America/Antelope-Canyon.webp"),
    options: [
      {
        id: "0",
        capital: 'Εθνικό Πάρκο Αψίδων',
        country: 'ΗΠΑ'
      },
      {
        id: "1",
        capital: 'Καππαδοκία',
        country: 'Τουρκία'
      },
      {
        id: "2",
        capital: 'Παμούκαλε',
        country: 'Τουρκία'
      },
      {
        id: "3",
        capital: 'Φαράγγι Αντίλοπα',
        country: 'ΗΠΑ'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "3b",
    status: "Flags",
    country: "Φαράγγι Αντίλοπα",
    capital: "ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Εθνικό Πάρκο Αψίδων\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/Arches-National-Park.webp"),
      },
      {
        id: "1",
        country: "Καππαδοκία\nΤουρκία",
        img: require("../../../assets/NaturalMnt/Asia/Cappadocia-valley.webp"),
      },
      {
        id: "2",
        country: "Παμούκαλε\nΤουρκία",
        img: require("../../../assets/NaturalMnt/Asia/Pamukkale.webp"),
      },
      {
        id: "3",
        country: "Φαράγγι Αντίλοπα\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/Antelope-Canyon.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "4a",
    status: "Capitals",
    img: 'L',
    country: "Νεπάλ/Κίνα",
    image: require("../../../assets/NaturalMnt/Asia/Mount-Everest.webp"),
    options: [
      {
        id: "0",
        capital: 'Όρος Έβερεστ',
        country: 'Νεπάλ/Κίνα'
      },
      {
        id: "1",
        capital: 'Όρος Φούτζι',
        country: 'Ιαπωνία'
      },
      {
        id: "2",
        capital: 'Όρος Οτεμανού',
        country: 'Γαλλική Πολυνησία'
      },
      {
        id: "3",
        capital: 'Απότομες Ακτές του Μόχερ',
        country: 'Ιρλανδία'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "4b",
    status: "Flags",
    country: "Όρος Έβερεστ",
    capital: "Νεπάλ/Κίνα",
    options: [
      {
        id: "0",
        country: "Όρος Έβερεστ\nΝεπάλ/Κίνα",
        img: require("../../../assets/NaturalMnt/Asia/Mount-Everest.webp"),
      },
      {
        id: "1",
        country: "Όρος Φούτζι\nΙαπωνία",
        img: require("../../../assets/NaturalMnt/Asia/mount_fuji.webp"),
      },
      {
        id: "2",
        country: "Όρος Οτεμανού\nΓαλλική Πολυνησία",
        img: require("../../../assets/NaturalMnt/Asia/mountOtemanu.png"),
      },
      {
        id: "3",
        country: "Απότομες Ακτές του Μόχερ\nΙρλανδία",
        img: require("../../../assets/NaturalMnt/Europe/CliffsofMoher.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "5a",
    status: "Capitals",
    img: 'L',
    country: "Μπελίζ",
    image: require("../../../assets//NaturalMnt/America/Great-Blue-Hole.webp"),
    options: [
      {
        id: "0",
        capital: 'Καουάι',
        country: 'Χαβάη'
      },
      {
        id: "1",
        capital: 'Λίμνη Τιτικάκα',
        country: 'Βολιβία/Περού'
      },
      {
        id: "2",
        capital: 'Μεγάλη Μπλε Τρύπα',
        country: 'Μπελίζ'
      },
      {
        id: "3",
        capital: 'Ουλουρού',
        country: 'Αυστραλία'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "5b",
    status: "Flags",
    country: "Μεγάλη Μπλε Τρύπα",
    capital: "Μπελίζ",
    options: [
      {
        id: "0",
        country: "Καουάι\nΧαβάη",
        img: require("../../../assets/NaturalMnt/America/KauaiUSA.webp"),
      },
      {
        id: "1",
        country: "Λίμνη Τιτικάκα\nΒολιβία/Περού",
        img: require("../../../assets/NaturalMnt/America/lakeTiticaca.webp"),
      },
      {
        id: "2",
        country: "Μεγάλη Μπλε Τρύπα\nΜπελίζ",
        img: require("../../../assets/NaturalMnt/America/Great-Blue-Hole.webp"),
      },
      {
        id: "3",
        country: "Ουλουρού\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/Ayers-Rock.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "Αγγλία",
    image: require("../../../assets/NaturalMnt/Europe/sevensisters.webp"),
    options: [
      {
        id: "0",
        capital: 'Τρολτούγκα',
        country: 'Νορβηγία'
      },
      {
        id: "1",
        capital: 'Απότομες Ακτές του Seven Sisters',
        country: 'Αγγλία'
      },
      {
        id: "2",
        capital: 'Ακτή του Γίγαντα',
        country: 'Ιρλανδία'
      },
      {
        id: "3",
        capital: 'Μπλε Λιμνοθάλασσα',
        country: 'Ισλανδία'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6b",
    status: "Flags",
    country: "Απότομες Ακτές του Seven Sisters",
    capital: "Αγγλία",
    options: [
      {
        id: "0",
        country: "Τρολτούγκα\nΝορβηγία",
        img: require("../../../assets//NaturalMnt/Europe/Trolltunga.webp"),
      },
      {
        id: "1",
        country: "Απότομες Ακτές του Seven Sisters\nΑγγλία",
        img: require("../../../assets/NaturalMnt/Europe/sevensisters.webp"),
      },
      {
        id: "2",
        country: "Ακτή του Γίγαντα\nΙρλανδία",
        img: require("../../../assets/NaturalMnt/Europe/GiantsCauseway.webp"),
      },
      {
        id: "3",
        country: "Μπλε Λιμνοθάλασσα\nΙσλανδία",
        img: require("../../../assets/NaturalMnt/Europe/BlueLagoon.webp"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "7a",
    status: "Capitals",
    img: 'L',
    country: "Αυστραλία",
    image: require("../../../assets/NaturalMnt/Oceania/12-apostels.webp"),
    options: [
      {
        id: "0",
        capital: 'Οι Δώδεκα Απόστολοι',
        country: 'Αυστραλία'
      },
      {
        id: "1",
        capital: 'Εθνικό Πάρκο Φιόρντλαντ',
        country: 'Νέα Ζηλανδία'
      },
      {
        id: "2",
        capital: 'Εθνικό Πάρκο Κακαντού',
        country: 'Αυστραλία'
      },
      {
        id: "3",
        capital: 'Ακρωτήριο της Καλής Ελπίδας',
        country: 'Νότια Αφρική'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "7b",
    status: "Flags",
    country: "Οι Δώδεκα Απόστολοι",
    capital: "Αυστραλία",
    options: [
      {
        id: "0",
        country: "Οι Δώδεκα Απόστολοι\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/12-apostels.webp"),
      },
      {
        id: "1",
        country: "Εθνικό Πάρκο Φιόρντλαντ\nΝέα Ζηλανδία",
        img: require("../../../assets/NaturalMnt/Oceania/fiordlandNationalPark.webp"),
      },
      {
        id: "2",
        country: "Εθνικό Πάρκο Κακαντού\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/kakadu.webp"),
      },
      {
        id: "3",
        country: "Ακρωτήριο της Καλής Ελπίδας\nΝότια Αφρική",
        img: require("../../../assets/NaturalMnt/Africa/CapeofGoodHope.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "Ιαπωνία",
    image: require("../../../assets/NaturalMnt/Asia/mount_fuji.webp"),
    options: [
      {
        id: "0",
        capital: 'Όρος Αραράτ',
        country: 'Τουρκία'
      },
      {
        id: "1",
        capital: 'Όρος Φούτζι',
        country: 'Ιαπωνία'
      },
      {
        id: "2",
        capital: 'Όρος Χουάνγκ',
        country: 'Κίνα'
      },
      {
        id: "3",
        capital: 'Όρος Κιναμπάλου',
        country: 'Μαλαισία'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "8b",
    status: "Flags",
    country: "Όρος Φούτζι",
    capital: "Ιαπωνία",
    options: [
      {
        id: "0",
        country: "Όρος Αραράτ\nΤουρκία",
        img: require("../../../assets/NaturalMnt/Asia/mountArarat.webp"),
      },
      {
        id: "1",
        country: "Όρος Φούτζι\nΙαπωνία",
        img: require("../../../assets/NaturalMnt/Asia/mount_fuji.webp"),
      },
      {
        id: "2",
        country: "Όρος Χουάνγκ\nΚίνα",
        img: require("../../../assets/NaturalMnt/Asia/mountHuangshan.webp"),
      },
      {
        id: "3",
        country: "Όρος Κιναμπάλου\nΜαλαισία",
        img: require("../../../assets/NaturalMnt/Asia/MountKinabalu.webp"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "Τουρκία",
    image: require("../../../assets/NaturalMnt/Asia/Cappadocia-valley.webp"),
    options: [
      {
        id: "0",
        capital: 'Περιοχή Τοπίων Χουάνγκλονγκ',
        country: 'Κίνα'
      },
      {
        id: "1",
        capital: 'Νήσος Σκάι',
        country: 'Σκωτία'
      },
      {
        id: "2",
        capital: 'Πέτρινος Αμβώνας',
        country: 'Νορβηγία'
      },
      {
        id: "3",
        capital: 'Καππαδοκία',
        country: 'Τουρκία'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "9b",
    status: "Flags",
    country: "Καππαδοκία",
    capital: "Τουρκία",
    options: [
      {
        id: "0",
        country: "Περιοχή Τοπίων Χουάνγκλονγκ\nΚίνα",
        img: require("../../../assets/NaturalMnt/Asia/huanglongScenicArea.webp"),
      },
      {
        id: "1",
        country: "Νήσος Σκάι\nΣκωτία",
        img: require("../../../assets/NaturalMnt/Europe/isleofSkye.webp"),
      },
      {
        id: "2",
        country: "Πέτρινος Αμβώνας\nΝορβηγία",
        img: require("../../../assets/NaturalMnt/Europe/pulpitRock.webp"),
      },
      {
        id: "3",
        country: "Καππαδοκία\nΤουρκία",
        img: require("../../../assets/NaturalMnt/Asia/Cappadocia-valley.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "10a",
    status: "Capitals",
    img: 'L',
    country: "Ιταλία",
    image: require("../../../assets/NaturalMnt/Europe/mount-vesuvius.webp"),
    options: [
      {
        id: "0",
        capital: 'Όρος Βεζούβιος',
        country: 'Ιταλία'
      },
      {
        id: "1",
        capital: 'Ελβετικές Άλπεις',
        country: 'Ελβετία'
      },
      {
        id: "2",
        capital: 'Όρος Τέιδε',
        country: 'Ισπανία'
      },
      {
        id: "3",
        capital: 'Εθνικό Πάρκο Μεγάλων Αμμόλοφων',
        country: 'ΗΠΑ'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "10b",
    status: "Flags",
    country: "Όρος Βεζούβιος",
    capital: "Ιταλία",
    options: [
      {
        id: "0",
        country: "Όρος Βεζούβιος\nΙταλία",
        img: require("../../../assets/NaturalMnt/Europe/mount-vesuvius.webp"),
      },
      {
        id: "1",
        country: "Ελβετικές Άλπεις\nΕλβετία",
        img: require("../../../assets/NaturalMnt/Europe/swissapls.jpg"),
      },
      {
        id: "2",
        country: "Όρος Τέιδε\nΙσπανία",
        img: require("../../../assets/NaturalMnt/Europe/mountTeide.webp"),
      },
      {
        id: "3",
        country: "Εθνικό Πάρκο Μεγάλων Αμμόλοφων\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/GreatSandDunesPark.webp"),
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

export default questions1El;
