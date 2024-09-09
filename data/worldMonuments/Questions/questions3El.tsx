const questions3El = [
  {
    id: "1a",
    status: "Capitals",
    img: 'L',
    country: "Ιταλία",
    image: require("../../../assets/WorldMonuments/Europe/spanish-steps-rome.webp"),
    options: [
      {
        id: "0",
        capital: "Ισπανικά\nΣκαλία",
        country: "Ιταλία",
      },
      {
        id: "1",
        capital: "Φοντάνα\nντι Τρέβι",
        country: "Ιταλία",
      },
      {
        id: "2",
        capital: "Γέφυρα\nτου Ριάλτο",
        country: "Ιταλία",
      },
      {
        id: "3",
        capital: "Κεκλιμένος Πύργος\nτης Πίζας",
        country: "Ιταλία",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "1b",
    status: "Flags",
    country: "Ισπανικά Σκαλία",
    capital: "Ιταλία",
    options: [
      {
        id: "0",
        country: "Ισπανικά Σκαλιά\nΙταλία",
        img: require("../../../assets/WorldMonuments/Europe/spanish-steps-rome.webp"),
      },
      {
        id: "1",
        country: "Φοντάνα ντι Τρέβι\nΙταλία",
        img: require("../../../assets/WorldMonuments/Europe/trevi-fontein-rome.webp"),
      },
      {
        id: "2",
        country: "Γέφυρα του Ριάλτο\nΙταλία",
        img: require("../../../assets/WorldMonuments/Europe/Rialto-Bridge.jpg"),
      },
      {
        id: "3",
        country: "Κεκλιμένος Πύργος της Πίζας\nΙταλία",
        img: require("../../../assets/WorldMonuments/Europe/TowerPisa.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "2a",
    status: "Capitals",
    img: 'L',
    country: "Iταλία",
    image: require("../../../assets/WorldMonuments/Europe/stMark_square_Venice.webp"),
    options: [
      {
        id: "0",
        capital: "Μεδίνα \nΜαρακές",
        country: "Μαρόκο",
      },
      {
        id: "1",
        capital: "Ρεγκιστάν",
        country: "Ουζμπεκιστάν",
      },
      {
        id: "2",
        capital: "Πλατεία \nΑγίου Μάρκου",
        country: "Ιταλία",
      },
      {
        id: "3",
        capital: "Η ρητορική του\nΑγίου Ιωσήφ",
        country: "Καναδάς",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "2b",
    status: "Flags",
    country: "Πλατεία Αγίου Μάρκου",
    capital: "Iταλία",
    options: [
      {
        id: "0",
        country: "Μεδίνα-Μαρακές\nΜαρόκο",
        img: require("../../../assets/WorldMonuments/Africa/medina-marrakech.png"),
      },
      {
        id: "1",
        country: "Ρέγκισταν\nΟυζμπεκιστάν",
        img: require("../../../assets/WorldMonuments/Asia/Registan.png"),
      },
      {
        id: "2",
        country: "Πλατεία Αγίου Μάρκου\nΙταλία",
        img: require("../../../assets/WorldMonuments/Europe/stMark_square_Venice.webp"),
      },
      {
        id: "3",
        country: "Η ρητορική του\nΑγίου Ιωσήφ\nΚαναδάς",
        img: require("../../../assets/WorldMonuments/America/St.-Joseph's-Oratory_Montreal.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "Αίγυπτος",
    image: require("../../../assets/WorldMonuments/Africa/abulShimbel.webp"),
    options: [
      {
        id: "0",
        capital: "Αμπού Σιμπέλ",
        country: "Αίγυπτος",
      },
      {
        id: "1",
        capital: "Όρος Ράσμορ",
        country: "ΗΠΑ",
      },
      {
        id: "2",
        capital: "Κνωσός",
        country: "Ελλάδα",
      },
      {
        id: "3",
        capital: "Στόουνχεντζ",
        country: "Ηνωμένο Βασίλειο",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "3b",
    status: "Flags",
    country: "Αμπού Σιμπέλ",
    capital: "Αίγυπτος",
    options: [
      {
        id: "0",
        country: "Αμπού Σιμπέλ\nΑίγυπτος",
        img: require("../../../assets/WorldMonuments/Africa/abulShimbel.webp"),
      },
      {
        id: "1",
        country: "Όρος Ράσμορ\nΗΠΑ",
        img: require("../../../assets/WorldMonuments/USA/Mount_Rushmore.webp"),
      },
      {
        id: "2",
        country: "Μεγάλη Σφίγγα της Γκίζας\nΑίγυπτος",
        img: require("../../../assets/WorldMonuments/Africa/sphinx.png"),
      },
      {
        id: "3",
        country: "Ο Μεγάλος Βούδας\nΧονγκ Κονγκ",
        img: require("../../../assets/WorldMonuments/Asia/Big-Buddha-Hong-Kong.png"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "4a",
    status: "Capitals",
    img: 'L',
    country: "Μιανμάρ",
    image: require("../../../assets/WorldMonuments/Asia/Bangan-Temples.webp"),
    options: [
      {
        id: "0",
        capital: "Μπορομπου-\nντούρ",
        country: "Iνδονησία",
      },
      {
        id: "1",
        capital: "Ανάκτορο Ποτάλα",
        country: "Θιβέτ",
      },
      {
        id: "2",
        capital: "Μπαγκάν",
        country: "Μιανμάρ",
      },
      {
        id: "3",
        capital: "Ναός Ακσάρνταμ",
        country: "Ινδία",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "4b",
    status: "Flags",
    country: "Μπαγκάν",
    capital: "Μιανμάρ",
    options: [
      {
        id: "0",
        country: "Μπορομπουντούρ\nΙνδονησία",
        img: require("../../../assets/WorldMonuments/Asia/borobudur-temple-Indonesia.webp"),
      },
      {
        id: "1",
        country: "Ανάκτορο Ποτάλα\nΘιβέτ",
        img: require("../../../assets/WorldMonuments/Asia/potalaPalaceTibet.webp"),
      },
      {
        id: "2",
        country: "Μπαγκάν\nΜιανμάρ",
        img: require("../../../assets/WorldMonuments/Asia/Bangan-Temples.webp"),
      },
      {
        id: "3",
        country: "Ναός Ακσάρνταμ\nΙνδία",
        img: require("../../../assets/WorldMonuments/Asia/AkshardhamTempleIndia.png"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "5a",
    status: "Capitals",
    img: 'L',
    country: "Κίνα",
    image: require("../../../assets/WorldMonuments/Asia/terracottArmy.webp"),
    options: [
      {
        id: "0",
        capital: "Αγάλματα\nΜοάι",
        country: "Νησιά Πάσχα",
      },
      {
        id: "1",
        capital: "Ναός Καϊλάσα",
        country: "Ινδία",
      },
      {
        id: "2",
        capital: "Τζεταβανρα-\nμάγια",
        country: "Σρι Λάνκα",
      },
      {
        id: "3",
        capital: "Πήλινος Στρατός",
        country: "Κίνα",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "5b",
    status: "Flags",
    country: "Πήλινος Στρατός",
    capital: "Κίνα",
    options: [
      {
        id: "0",
        country: "Τζεταβανραμάγια\nΣρι Λάνκα",
        img: require("../../../assets/WorldMonuments/Asia/JetavanaramayaSriLanka.webp"),
      },
      {
        id: "1",
        country: "Ναός Καϊλάσα\nΙνδία",
        img: require("../../../assets/WorldMonuments/Asia/kailasa-temple-india.webp"),
      },
      {
        id: "2",
        country: "Αγάλματα Μοάι\nΝησιά του Πάσχα",
        img: require("../../../assets/WorldMonuments/Asia/easter_island.png"),
      },
      {
        id: "3",
        country: "Πήλινος Στρατός\nΚίνα",
        img: require("../../../assets/WorldMonuments/Asia/terracottArmy.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "ΗΠΑ",
    image: require("../../../assets/WorldMonuments/USA/brooklyn-bridge.webp"),
    options: [
      {
        id: "0",
        capital: "Γέφυρα του\nΜπρούκλιν",
        country: "ΗΠΑ",
      },
      {
        id: "1",
        capital: "Γέφυρα Γκόλντεν Γκέιτ",
        country: "ΗΠΑ",
      },
      {
        id: "2",
        capital: "Γέφυρα του Σίδνεϊ",
        country: "Αυστραλία",
      },
      {
        id: "3",
        capital: "Αλκατράζ",
        country: "ΗΠΑ",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "6b",
    status: "Flags",
    country: "Γέφυρα του Μπρούκλιν",
    capital: "ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Γέφυρα του Μπρούκλιν\nΗΠΑ",
        img: require("../../../assets/WorldMonuments/USA/brooklyn-bridge.webp"),
      },
      {
        id: "1",
        country: "Γέφυρα Γκόλντεν Γκέιτ\nΗΠΑ",
        img: require("../../../assets/WorldMonuments/USA/Golden-Gate-Bridge.webp"),
      },
      {
        id: "2",
        country: "Γέφυρα του Σίδνεϊ\nΑυστραλία",
        img: require("../../../assets/WorldMonuments/Oceania/harbour-bridge.webp"),
      },
      {
        id: "3",
        country: "Αλκατράζ\nΗΠΑ",
        img: require("../../../assets/WorldMonuments/USA/alcatraz.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "7a",
    status: "Capitals",
    img: 'L',
    country: "Βραζιλία",
    image: require("../../../assets/WorldMonuments/America/Jesus-Christ-The-Redeemer.png"),
    options: [
      {
        id: "0",
        capital: "Ο Μεγάλος Βούδας",
        country: "Χονγκ Κονγκ",
      },
      {
        id: "1",
        capital: "Άνγκορ Βατ",
        country: "Καμπότζη",
      },
      {
        id: "2",
        capital: "Πέτρα",
        country: "Ιορδανία",
      },
      {
        id: "3",
        capital: "Χριστός Λυτρωτής",
        country: "Βραζιλία",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "7b",
    status: "Flags",
    country: "Χριστός Λυτρωτής",
    capital: "Βραζιλία",
    options: [
      {
        id: "0",
        country: "Ο Μεγάλος Βούδας\nΧονγκ Κονγκ",
        img: require("../../../assets/WorldMonuments/Asia/Big-Buddha-Hong-Kong.png"),
      },
      {
        id: "1",
        country: "Κόπα Καμπάνα\nBραζιλία",
        img: require("../../../assets/WorldMonuments/America/copacabana-beach.webp"),
      },
      {
        id: "2",
        country: "Άγαλμα Μερλιόν\nΣιγκαπούρη",
        img: require("../../../assets/WorldMonuments/Asia/merlion_singapore.webp"),
      },
      {
        id: "3",
        country: "Χριστός Λυτρωτής\nBραζιλία",
        img: require("../../../assets/WorldMonuments/America/Jesus-Christ-The-Redeemer.png"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "ΗΠΑ",
    image: require("../../../assets/WorldMonuments/USA/Golden-Gate-Bridge.webp"),
    options: [
      {
        id: "0",
        capital: "Γέφυρα του\nΜπρούκλιν",
        country: "ΗΠΑ",
      },
      {
        id: "1",
        capital: "Γέφυρα Γκόλντεν Γκέιτ",
        country: "ΗΠΑ",
      },
      {
        id: "2",
        capital: "Γέφυρα του Πύργου",
        country: "Ηνωμένο Βασίλειο",
      },
      {
        id: "3",
        capital: "Γέφυρα του Ριάλτο",
        country: "Ιταλία",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "8b",
    status: "Flags",
    country: "Γέφυρα Γκόλντεν Γκέιτ",
    capital: "ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Γέφυρα του Σίδνεϊ\nΑυστραλία",
        img: require("../../../assets/WorldMonuments/Oceania/harbour-bridge.webp"),
      },
      {
        id: "1",
        country: "Γέφυρα Γκόλντεν Γκέιτ\nΗΠΑ",
        img: require("../../../assets/WorldMonuments/USA/Golden-Gate-Bridge.webp"),
      },
      {
        id: "2",
        country: "Γέφυρα Dom Luís I \nΠορτογαλία",
        img: require("../../../assets/WorldMonuments/Europe/DomLuisBridgePorto.png"),
      },
      {
        id: "3",
        country: "Γέφυρα του Μπρούκλιν\nΗΠΑ",
        img: require("../../../assets/WorldMonuments/USA/brooklyn-bridge.webp"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "Ηνωμένο Βασίλειο",
    image: require("../../../assets/WorldMonuments/Europe/stonehenge.webp"),
    options: [
      {
        id: "0",
        capital: "Παναγία των Παρισίων",
        country: "Ηνωμένο Βασίλειο",
      },
      {
        id: "1",
        capital: "Μετέωρα",
        country: "Ελλάδα",
      },
      {
        id: "2",
        capital: "Στόουνχεντζ",
        country: "Ηνωμένο Βασίλειο",
      },
      {
        id: "3",
        capital: "Κνωσός",
        country: "Ελλάδα",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "9b",
    status: "Flags",
    country: "Στόουνχεντζ",
    capital: "Ηνωμένο Βασίλειο",
    options: [
      {
        id: "0",
        country: "Mον Σαιν Μισέλ\nΓαλλία",
        img: require("../../../assets/WorldMonuments/Europe/Mont-Saint-MichelNormandy.webp"),
      },
      {
        id: "1",
        country: "Ξύλινη εκκλησία Μπόργουντ\nNoρβηγία",
        img: require("../../../assets/WorldMonuments/Europe/borgund-stave-church-Norway.webp"),
      },
      {
        id: "2",
        country: "Στόουνχεντζ\nΗνωμένο Βασίλειο",
        img: require("../../../assets/WorldMonuments/Europe/stonehenge.webp"),
      },
      {
        id: "3",
        country: "Αγάλματα Μοάι\nΝησιά Πάσχα",
        img: require("../../../assets/WorldMonuments/Asia/easterIsland.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "10a",
    status: "Capitals",
    img: 'L',
    country: "Βατικανό",
    image: require("../../../assets/WorldMonuments/Europe/St.-Peters-Basilica-Vatican.webp"),
    options: [
      {
        id: "0",
        capital: "Βασιλική του Αγίου Πέτρου",
        country: "Βατικανό",
      },
      {
        id: "1",
        capital: "Καθεδρικός Ναός του Μιλάνου",
        country: "Ιταλία",
      },
      {
        id: "2",
        capital: "Σαιντ-Σαπέλ",
        country: "Γαλλία",
      },
      {
        id: "3",
        capital: "Ναός του Χυμένου Αίματος",
        country: "Ρωσία",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "10b",
    status: "Flags",
    country: "Βασιλική του Αγίου Πέτρου",
    capital: "Βατικανό",
    options: [
      {
        id: "0",
        country: "Βασιλική του Αγίου Πέτρου\nΒατικανό",
        img: require("../../../assets/WorldMonuments/Europe/St.-Peters-Basilica-Vatican.webp"),
      },
      {
        id: "1",
        country: "Ναός του Χυμένου Αίματος\nΡωσία",
        img: require("../../../assets/WorldMonuments/Europe/stPetersburg.webp"),
      },
      {
        id: "2",
        country: "Σαιντ-Σαπέλ\nΓαλλία",
        img: require("../../../assets/WorldMonuments/Europe/sainte-Chapelle.webp"),
      },
      {
        id: "3",
        country: "Καθεδρικός Ναός Αγίου Βασιλείου\nΡωσία",
        img: require("../../../assets/WorldMonuments/Europe/saint_basils_cathedral.webp"),
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
