const questions4El = [
  {
    id: "1a",
    status: "Capitals",
    img: 'L',
    country: "Αίγυπτος",
    image: require("../../../assets/NaturalMnt/Africa/mountSinai.webp"),
    options: [
      {
        id: "0",
        capital: "Καταρράκτης Ντέτιφος",
        country: "Ισλανδία",
      },
      {
        id: "1",
        capital: "Εθνικό Πάρκο Μπανφ",
        country: "Καναδάς",
      },
      {
        id: "2",
        capital: "Λίμνη Τιτικάκα",
        country: "Βολιβία/Περού",
      },
      {
        id: "3",
        capital: "Όρος Σινά",
        country: "Αίγυπτος",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: ''
  },
  {
    id: "1b",
    status: "Flags",
    country: "Όρος Σινά",
    capital: "Αίγυπτος",
    options: [
      {
        id: "0",
        country: "Καταρράκτης Ντέτιφος\nΙσλανδία",
        img: require("../../../assets/NaturalMnt/Europe/dettifoss.jpg"),
      },
      {
        id: "1",
        country: "Εθνικό Πάρκο Μπανφ\nΚαναδάς",
        img: require("../../../assets/NaturalMnt/America/BanffNationalPark.webp"),
      },
      {
        id: "2",
        country: "Λίμνη Τιτικάκα\nΒολιβία/Περού",
        img: require("../../../assets/NaturalMnt/America/lakeTiticaca.webp"),
      },
      {
        id: "3",
        country: "Όρος Σινά\nΑίγυπτος",
        img: require("../../../assets/NaturalMnt/Africa/mountSinai.webp"),
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: ''
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
        capital: "Πύργοι του Πάινε",
        country: "Χιλή",
      },
      {
        id: "1",
        capital: "Εθνικό Πάρκο Γιοσέμιτι",
        country: "ΗΠΑ",
      },
      {
        id: "2",
        capital: "Βελόνες",
        country: "ΗΠΑ",
      },
      {
        id: "3",
        capital: "Παμούκαλε",
        country: "Τουρκία",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "2b",
    status: "Flags",
    country: "Βελόνες",
    capital: "ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Πύργοι του Πάινε\nΧιλή",
        img: require("../../../assets/NaturalMnt/America/torres-del-paine.webp"),
      },
      {
        id: "1",
        country: "Εθνικό Πάρκο Γιοσέμιτι\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/yosemite-national-park.webp"),
      },
      {
        id: "2",
        country: "Βελόνες\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/TheNeedles.webp"),
      },
      {
        id: "3",
        country: "Παμούκαλε\nΤουρκία",
        img: require("../../../assets/NaturalMnt/Asia/Pamukkale.webp"),
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "Ισημερινός",
    image: require("../../../assets/NaturalMnt/America/galapagosIslands.webp"),
    options: [
      {
        id: "0",
        capital: 'Νησιά Γκαλαπάγκος',
        country: 'Ισημερινός'
      },
      {
        id: "1",
        capital: 'Μπόρα Μπόρα',
        country: 'Γαλλική Πολυνησία'
      },
      {
        id: "2",
        capital: 'Μεγάλος Κοραλλιογενής Ύφαλος',
        country: 'Αυστραλία'
      },
      {
        id: "3",
        capital: 'Κόλπος του Χα Λονγκ',
        country: 'Βιετνάμ'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "3b",
    status: "Flags",
    country: "Νησιά Γκαλαπάγκος",
    capital: "Ισημερινός",
    options: [
      {
        id: "0",
        country: "Νησιά Γκαλαπάγκος\nΙσημερινός",
        img: require("../../../assets/NaturalMnt/America/galapagosIslands.webp"),
      },
      {
        id: "1",
        country: "Μπόρα Μπόρα\nΓαλλική Πολυνησία",
        img: require("../../../assets/NaturalMnt/Asia/bora_bora.webp"),
      },
      {
        id: "2",
        country: "Μεγάλος Κοραλλιογενής Ύφαλος\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/greatBarrierReef.webp"),
      },
      {
        id: "3",
        country: "Κόλπος του Χα Λονγκ\nΒιετνάμ",
        img: require("../../../assets/NaturalMnt/Asia/halongbay-0.png"),
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
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
        capital: 'Μαύρο Δάσος',
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
        capital: 'Όρος Γιασούρ',
        country: 'Βανουάτου'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "4b",
    status: "Flags",
    country: "Great Smoky Mountains",
    capital: "ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Μαύρο Δάσος",
        img: require("../../../assets/NaturalMnt/Europe/blackForest.webp"),
      },
      {
        id: "1",
        country: "Βουνό των Επτά Χρωμάτωνs\nΠερού",
        img: require("../../../assets/NaturalMnt/America/rainbowMountain.webp"),
      },
      {
        id: "2",
        country: "Great Smoky Mountains",
        img: require("../../../assets/NaturalMnt/America/GreatSmokyMountains.webp"),
      },
      {
        id: "3",
        country: "Όρος Γιασούρ\nΒανουάτου",
        img: require("../../../assets/NaturalMnt/Oceania/yasur_mount.webp"),
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "5a",
    status: "Capitals",
    img: 'L',
    country: "Ιρλανδία",
    image: require("../../../assets/NaturalMnt/Europe/GiantsCauseway.webp"),
    options: [
      {
        id: "0",
        capital: 'Μπλε Λιμνοθάλασσα',
        country: 'Ισλανδία'
      },
      {
        id: "1",
        capital: 'Ακτή του Γίγαντα',
        country: 'Ιρλανδία'
      },
      {
        id: "2",
        capital: 'Λεωφόρος των Μπαομπάμπ',
        country: 'Μαδαγασκάρη'
      },
      {
        id: "3",
        capital: 'Καταρράκτες Καλαντούλα',
        country: 'Ανγκόλα'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: ''
  },
  {
    id: "5b",
    status: "Flags",
    country: "Ακτή του Γίγαντα",
    capital: "Ιρλανδία",
    options: [
      {
        id: "0",
        country: "Μπλε Λιμνοθάλασσα\nΙσλανδία",
        img: require("../../../assets/NaturalMnt/Europe/BlueLagoon.webp"),
      },
      {
        id: "1",
        country: "Ακτή του Γίγαντα\nΙρλανδία",
        img: require("../../../assets/NaturalMnt/Europe/GiantsCauseway.webp"),
      },
      {
        id: "2",
        country: "Λεωφόρος των Μπαομπάμπ\nΜαδαγασκάρη",
        img: require("../../../assets/NaturalMnt/Africa/avenueofboababs.webp"),
      },
      {
        id: "3",
        country: "Καταρράκτες Καλαντούλα\nΑνγκόλα",
        img: require("../../../assets/NaturalMnt/Africa/kalandula-falls-angola.webp"),
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: ''
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "Κένυα",
    image: require("../../../assets/NaturalMnt/Africa/mountKenya.webp"),
    options: [
      {
        id: "0",
        capital: 'Όρος Βεζούβιος',
        country: 'Ιταλία'
      },
      {
        id: "1",
        capital: 'Μπλε Βουνά',
        country: 'Αυστραλία'
      },
      {
        id: "2",
        capital: 'Όρος Κένυα',
        country: 'Κένυα'
      },
      {
        id: "3",
        capital: 'Όρος Αραράτ',
        country: 'Τουρκία'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "6b",
    status: "Flags",
    country: "Όρος Κένυα",
    capital: "Κένυα",
    options: [
      {
        id: "0",
        country: "Όρος Βεζούβιος\nΙταλία",
        img: require("../../../assets/NaturalMnt/Europe/mount-vesuvius.webp"),
      },
      {
        id: "1",
        country: "Μπλε Βουνά\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/Australia-Blue-Mountains.webp"),
      },
      {
        id: "2",
        country: "Όρος Κένυα\nΚένυα",
        img: require("../../../assets/NaturalMnt/Africa/mountKenya.webp"),
      },
      {
        id: "3",
        country: "Όρος Αραράτ\nΤουρκία",
        img: require("../../../assets/NaturalMnt/Asia/mountArarat.webp"),
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
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
        capital: 'Καταρράκτες του Νιαγάρα',
        country: 'Καναδάς/ΗΠΑ'
      },
      {
        id: "1",
        capital: 'Εθνικό Πάρκο Λευκών Αμμουδιών',
        country: 'ΗΠΑ'
      },
      {
        id: "2",
        capital: 'Όρος Κουκ',
        country: 'Νέα Ζηλανδία'
      },
      {
        id: "3",
        capital: 'Όρος Γιασούρ',
        country: 'Βανουάτου'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "7b",
    status: "Flags",
    country: "Καταρράκτες του Νιαγάρα",
    capital: "Καναδάς/ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Καταρράκτες του Νιαγάρα\nΚαναδάς/ΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/NiagaraFalls.webp"),
      },
      {
        id: "1",
        country: "Εθνικό Πάρκο Λευκών Αμμουδιών\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/white-sandsNationalPark.webp"),
      },
      {
        id: "2",
        country: "Όρος Κουκ\nΝέα Ζηλανδία",
        img: require("../../../assets/NaturalMnt/Oceania/mountcook.webp"),
      },
      {
        id: "3",
        country: "Όρος Γιασούρ\nΒανουάτου",
        img: require("../../../assets/NaturalMnt/Oceania/yasur_mount.webp"),
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "Χιλή",
    image: require("../../../assets/NaturalMnt/America/torres-del-paine.webp"),
    options: [
      {
        id: "0",
        capital: 'Σοσουσβλέι',
        country: 'Ναμίμπια'
      },
      {
        id: "1",
        capital: 'Παμούκαλε',
        country: 'Τουρκία'
      },
      {
        id: "2",
        capital: 'Πύργοι του Πάινε',
        country: 'Χιλή'
      },
      {
        id: "3",
        capital: 'Ουάντι Ραμ',
        country: 'Ιορδανία'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "8b",
    status: "Flags",
    country: "Πύργοι του Πάινε",
    capital: "Χιλή",
    options: [
      {
        id: "0",
        country: "Σοσουσβλέι\nΝαμίμπια",
        img: require("../../../assets/NaturalMnt/Africa/Sossusvlei-Dunes.webp"),
      },
      {
        id: "1",
        country: "Παμούκαλε\nΤουρκία",
        img: require("../../../assets/NaturalMnt/Asia/Pamukkale.webp"),
      },
      {
        id: "2",
        country: "Πύργοι του Πάινε\nΧιλή",
        img: require("../../../assets/NaturalMnt/America/torres-del-paine.webp"),
      },
      {
        id: "3",
        country: "Ουάντι Ραμ\nΙορδανία",
        img: require("../../../assets/NaturalMnt/Asia/wadi-rum.webp"),
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "Ισπανία",
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
        country: 'Νέα Ζηλανδία'
      },
      {
        id: "2",
        capital: 'Εθνικό Πάρκο Κακαντού',
        country: 'Αυστραλία'
      },
      {
        id: "3",
        capital: 'Όρος Τέιδε',
        country: 'Ισπανία'
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: ''
  },
  {
    id: "9b",
    status: "Flags",
    country: "Όρος Τέιδε",
    capital: "Ισπανία",
    options: [
      {
        id: "0",
        country: "Ουλουρού\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/Ayers-Rock.webp"),
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
        country: "Όρος Τέιδε\nΙσπανία",
        img: require("../../../assets/NaturalMnt/Europe/mountTeide.webp"),
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: ''
  },
  {
    id: "10a",
    status: "Capitals",
    img: 'L',
    country: "Σλοβενία",
    image: require("../../../assets/NaturalMnt/Europe/lake-bled.webp"),
    options: [
      {
        id: "0",
        capital: 'Όρος Ελμπρούς',
        country: 'Ρωσία'
      },
      {
        id: "1",
        capital: 'Λίμνη Μπλεντ',
        country: 'Σλοβενία'
      },
      {
        id: "2",
        capital: 'Πίκος ντε Εουρόπα',
        country: 'Ισπανία'
      },
      {
        id: "3",
        capital: 'Ελβετικές Άλπεις',
        country: 'Ελβετία'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: ''
  },
  {
    id: "10b",
    status: "Flags",
    country: "Λίμνη Μπλεντ",
    capital: "Σλοβενία",
    options: [
      {
        id: "0",
        country: "Όρος Ελμπρούς\nΡωσία",
        img: require("../../../assets/NaturalMnt/Europe/mount-elbrus.webp"),
      },
      {
        id: "1",
        country: "Λίμνη Μπλεντ\nΣλοβενία",
        img: require("../../../assets/NaturalMnt/Europe/lake-bled.webp"),
      },
      {
        id: "2",
        country: "Πίκος ντε Εουρόπα\nΙσπανία",
        img: require("../../../assets/NaturalMnt/Europe/PicosdeEuropa.webp"),
      },
      {
        id: "3",
        country: "Ελβετικές Άλπεις\nΕλβετία",
        img: require("../../../assets/NaturalMnt/Europe/swissapls.jpg"),
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: ''
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
