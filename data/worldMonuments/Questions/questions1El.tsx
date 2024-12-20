const questions1El = [
  {
    id: "1a",
    img: 'L',
    status: "Capitals",
    country: "Γαλλία",
    image: require("../../../assets/WorldMonuments/Europe/eiffelTower.webp"),
    options: [
      {
        id: "0",
        capital: 'Ακρόπολη',
        country: 'Ελλάδα'
      },
      {
        id: "1",
        capital: 'Κεκλιμένος Πύργος\nτης Πίζας',
        country: 'Ιταλία'
      },
      {
        id: "2",
        capital: 'Πύργος του Άιφελ',
        country: 'Γαλλία'
      },
      {
        id: "3",
        capital: 'Αψίδα του Θριάμβου',
        country: 'Γαλλία'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "1b",
    status: "Flags",
    country: "Πύργος του Άιφελ",
    capital: "Γαλλία",
    options: [
      {
        id: "0",
        country: "Ακρόπολη\nΕλλάδα",
        img: require("../../../assets/WorldMonuments/Europe/Acropolis.webp"),
      },
      {
        id: "1",
        country: "Αψίδα του Θριάμβου\nΓαλλία",
        img: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.webp"),
      },
      {
        id: "2",
        country: "Πύργος του Άιφελ\nΓαλλία",
        img: require("../../../assets/WorldMonuments/Europe/eiffelTower.webp"),
      },
      {
        id: "3",
        country: "Κεκλιμένος Πύργος της Πίζας\nΙταλία",
        img: require("../../../assets/WorldMonuments/Europe/TowerPisa.webp"),
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "2a",
    status: "Capitals",
    img: 'L',
    country: "ΗΠΑ",
    image: require("../../../assets/WorldMonuments/USA/statue-of-liberty.webp"),
    options: [
      {
        id: "0",
        capital: 'Κοιλάδα των Βασιλέων',
        country: 'Αίγυπτος'
      },
      {
        id: "1",
        capital: 'Άγαλμα της Ελευθερίας',
        country: 'ΗΠΑ'
      },
      {
        id: "2",
        capital: 'Το Άγαλμα του\nΧριστού Λυτρωτή',
        country: 'Βραζιλία'
      },
      {
        id: "3",
        capital: 'Καπιτώλιο των\nΗνωμένων Πολιτειών',
        country: 'ΗΠΑ'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: ''
  },
  {
    id: "2b",
    status: "Flags",
    country: "Άγαλμα της Ελευθερίας",
    capital: "ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Κοιλάδα των Βασιλέων\nΑίγυπτος",
        img: require("../../../assets/WorldMonuments/Africa/Luxor.jpg"),
      },
      {
        id: "1",
        country: "Άγαλμα της Ελευθερίας\nΗΠΑ",
        img: require("../../../assets/WorldMonuments/USA/statue-of-liberty.webp"),
      },
      {
        id: "2",
        country: "Το Άγαλμα του\nΧριστού Λυτρωτή\nΒραζιλία",
        img: require("../../../assets/WorldMonuments/America/Jesus-Christ-The-Redeemer.png"),
      },
      {
        id: "3",
        country: "Καπιτώλιο των\nΗνωμένων Πολιτειών\nΗΠΑ",
        img: require("../../../assets/WorldMonuments/USA/capitol-building.png"),
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: ''
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "Αίγυπτος",
    image: require("../../../assets/WorldMonuments/Africa/Pyramids.png"),
    options: [
      {
        id: "0",
        capital: 'Πύργος της Πίζας',
        country: 'Ιταλία'
      },
      {
        id: "1",
        capital: 'Κολοσσαίο',
        country: 'Ιταλία'
      },
      {
        id: "2",
        capital: 'Μεγάλη Σφίγγα της Γκίζας',
        country: 'Αίγυπτος'
      },
      {
        id: "3",
        capital: 'Πυραμίδες της Γκίζας',
        country: 'Αίγυπτος'
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: ''
  },
  {
    id: "3b",
    status: "Flags",
    country: "Πυραμίδες της Γκίζας",
    capital: "Αίγυπτος",
    options: [
      {
        id: "0",
        country: "Πύργος της Πίζας\nΙταλία",
        img: require("../../../assets/WorldMonuments/Europe/TowerPisa.webp"),
      },
      {
        id: "1",
        country: "Κολοσσαίο\nΙταλία",
        img: require("../../../assets/WorldMonuments/Europe/colosseum.webp"),
      },
      {
        id: "2",
        country: "Μεγάλη Σφίγγα της Γκίζας\nΑίγυπτος",
        img: require("../../../assets/WorldMonuments/Africa/sphinx.jpg"),
      },
      {
        id: "3",
        country: "Πυραμίδες της Γκίζας\nΑίγυπτος",
        img: require("../../../assets/WorldMonuments/Africa/Pyramids.png"),
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: ''
  },
  {
    id: "4a",
    status: "Capitals",
    img: 'L',
    country: "Ινδία",
    image: require("../../../assets/WorldMonuments/Asia/TajMajal.webp"),
    options: [
      {
        id: "0",
        capital: 'Ταζ Μαζάλ',
        country: 'Ινδία'
      },
      {
        id: "1",
        capital: 'Κάστρο Μπραν',
        country: 'Ρουμανία'
      },
      {
        id: "2",
        capital: 'Καθεδρικός Ναός\nΠόλης Μεξικού',
        country: 'Mεξικό'
      },
      {
        id: "3",
        capital: 'Καρκασσόν',
        country: 'Γαλλία'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "4b",
    status: "Flags",
    country: "Ταζ Μαζάλ",
    capital: "Ινδία",
    options: [
      {
        id: "0",
        country: "Ταζ Μαζάλ\nIνδία",
        img: require("../../../assets/WorldMonuments/Asia/TajMajal.webp"),
      },
      {
        id: "1",
        country: "Κάστρο Μπραν\nΡουμανία",
        img: require("../../../assets/WorldMonuments/Europe/Bran-CastleDracula.webp"),
      },
      {
        id: "2",
        country: "Καθεδρικός Ναός Πόλης Μεξικού\nMεξικό",
        img: require("../../../assets/WorldMonuments/America/Metropolitan-Cathedral_Mexico.webp"),
      },
      {
        id: "3",
        country: "Καρκασσόν\nΓαλλία",
        img: require("../../../assets/WorldMonuments/Europe/Carcason.webp"),
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "5a",
    status: "Capitals",
    img: 'L',
    country: "Αυστραλία",
    image: require("../../../assets/WorldMonuments/Oceania/SydneyOperaHouse.webp"),
    options: [
      {
        id: "0",
        capital: 'Καθεδρικός ναός Φλωρεντίας',
        country: 'Ιταλία'
      },
      {
        id: "1",
        capital: 'Ατόμιουμ',
        country: 'Βέλγιο'
      },
      {
        id: "2",
        capital: 'Όπερα του Σίδνεϊ',
        country: 'Αυστραλία'
      },
      {
        id: "3",
        capital: 'Γέφυρα του Ριάλτο',
        country: 'Iταλία'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "5b",
    status: "Flags",
    country: "Όπερα του Σίδνεϊ",
    capital: "Aυστραλία",
    options: [
      {
        id: "0",
        country: "Καθεδρικός ναός Φλωρεντίας\nΙταλία",
        img: require("../../../assets/WorldMonuments/Europe/duomo-florence.webp"),
      },
      {
        id: "1",
        country: "Μεγάλο Τζαμί της Ντζενέ\nΜάλι",
        img: require("../../../assets/WorldMonuments/Africa/mosque-of-djenne.webp"),
      },
      {
        id: "2",
        country: "Όπερα του Σίδνεϊ\nΑυστραλία",
        img: require("../../../assets/WorldMonuments/Oceania/SydneyOperaHouse.webp"),
      },
      {
        id: "3",
        country: "Ατόμιουμ\nΒέλγιο",
        img: require("../../../assets/WorldMonuments/Europe/Atomium.webp"),
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "Γαλλία",
    image: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.webp"),
    options: [
      {
        id: "0",
        capital: 'Πύλη του \nΒρανδεμβού-\nργου',
        country: 'Γερμανία'
      },
      {
        id: "1",
        capital: 'Αψίδα του Θριάμβου',
        country: 'Γαλλία'
      },
      {
        id: "2",
        capital: 'Πύργος του Άιφελ',
        country: 'Γαλλία'
      },
      {
        id: "3",
        capital: 'Καθεδρικός ναός Μιλάνου',
        country: 'Iταλία'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: ''
  },
  {
    id: "6b",
    status: "Flags",
    country: "Αψίδα του Θριάμβου",
    capital: "Γαλλία",
    options: [
      {
        id: "0",
        country: "Πύλη του Βρανδεμβούργου\nΓερμανία",
        img: require("../../../assets/WorldMonuments/Europe/Brandenburg-Gate-Berlin.webp"),
      },
      {
        id: "1",
        country: "Αψίδα του Θριάμβου\nΓαλλία",
        img: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.webp"),
      },
      {
        id: "2",
        country: "Πύργος του Άιφελ\nΓαλλία",
        img: require("../../../assets/WorldMonuments/Europe/eiffelTower.webp"),
      },
      {
        id: "3",
        country: "Γέφυρα του Ριάλτο\nΙταλία",
        img: require("../../../assets/WorldMonuments/Europe/Rialto-bridge.webp"),
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: ''
  },
  {
    id: "7a",
    status: "Capitals",
    img: 'L',
    country: "Ελλάδα",
    image: require("../../../assets/WorldMonuments/Europe/Acropolis.webp"),
    options: [
      {
        id: "0",
        capital: 'Ακρόπολη',
        country: 'Ελλάδα'
      },
      {
        id: "1",
        capital: 'Έφεσος',
        country: 'Tουρκία'
      },
      {
        id: "2",
        capital: 'Περσέπολη',
        country: 'Iράν'
      },
      {
        id: "3",
        capital: 'Αμφιθέατρο\nτης Αρλ',
        country: 'Γαλλία'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "7b",
    status: "Flags",
    country: "Ακρόπολη",
    capital: "Ελλάδα",
    options: [
      {
        id: "0",
        country: "Ακρόπολη\nΕλλάδα",
        img: require("../../../assets/WorldMonuments/Europe/Acropolis.webp"),
      },
      {
        id: "1",
        country: "Έφεσος\nTουρκία",
        img: require("../../../assets/WorldMonuments/Asia/ephesos.webp"),
      },
      {
        id: "2",
        country: "Περσέπολη\nΙράν",
        img: require("../../../assets/WorldMonuments/Asia/persepolis.png"),
      },
      {
        id: "3",
        country: "Αμφιθέατρο της Αρλ\nΓαλλία",
        img: require("../../../assets/WorldMonuments/Europe/AmpitheatreofArles.png"),
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "Περού",
    image: require("../../../assets/WorldMonuments/America/MachuPicchu.webp"),
    options: [
      {
        id: "0",
        capital: 'Μάτσου\nΠίτσου',
        country: 'Περού'
      },
      {
        id: "1",
        capital: 'Τουλούμ',
        country: 'Mεξικό'
      },
      {
        id: "2",
        capital: 'Tικάλ',
        country: 'Γουατεμάλα'
      },
      {
        id: "3",
        capital: 'Τσιτσέν Ιτζά',
        country: 'Mεξικό'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "8b",
    status: "Flags",
    country: "Μάτσου Πίτσου",
    capital: "Περού",
    options: [
      {
        id: "0",
        country: "Μάτσου Πίτσου\nΠερού",
        img: require("../../../assets/WorldMonuments/America/MachuPicchu.webp"),
      },
      {
        id: "1",
        country: "Τουλούμ\nMεξικό",
        img: require("../../../assets/WorldMonuments/America/Tulum.jpg"),
      },
      {
        id: "2",
        country: "Tικάλ\nΓουατεμάλα",
        img: require("../../../assets/WorldMonuments/America/Tikal.jpg"),
      },
      {
        id: "3",
        country: "Τσιτσέν Ιτζά\nΜεξικό",
        img: require("../../../assets/WorldMonuments/America/chichen-itza_mexico.png"),
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "Ιταλία",
    image: require("../../../assets/WorldMonuments/Europe/colosseum.webp"),
    options: [
      {
        id: "0",
        capital: 'Ανάκτορο των Βερσαλλιών',
        country: 'Γαλλία'
      },
      {
        id: "1",
        capital: 'Αψίδα του Θριάμβου',
        country: 'Γαλλία'
      },
      {
        id: "2",
        capital: 'Κνωσός',
        country: 'Ελλάδα'
      },
      {
        id: "3",
        capital: 'Κολοσσαίο',
        country: 'Iταλία'
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: ''
  },
  {
    id: "9b",
    status: "Flags",
    country: "Κολοσσαίο",
    capital: "Iταλία",
    options: [
      {
        id: "0",
        country: "Ανάκτορο των Βερσαλλιών\nΓαλλία",
        img: require("../../../assets/WorldMonuments/Europe/Palace-of-Versailles-France.jpg"),
      },
      {
        id: "1",
        country: "Κνωσός\nΕλλάδα",
        img: require("../../../assets/WorldMonuments/Europe/knossos.jpg"),
      },
      {
        id: "2",
        country: "Αψίδα του Θριάμβου\nΓαλλία",
        img: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.webp"),
      },
      {
        id: "3",
        country: "Κολοσσαίο\nΙταλία",
        img: require("../../../assets/WorldMonuments/Europe/colosseum.webp"),
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: ''
  },
  {
    id: "10a",
    status: "Capitals",
    img: 'L',
    country: "Κίνα",
    image: require("../../../assets/WorldMonuments/Asia/theGreatWallChina.png"),
    options: [
      {
        id: "0",
        capital: 'Σινικό Τείχος',
        country: 'Κίνα'
      },
      {
        id: "1",
        capital: 'Ο μεγάλος δρόμος του ωκεανού',
        country: 'Aυστραλία'
      },
      {
        id: "2",
        capital: 'Απαγορευμένη Πόλη',
        country: 'Κίνα'
      },
      {
        id: "3",
        capital: 'Ναός του Ουρανού',
        country: 'Κίνα'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "10b",
    status: "Flags",
    country: "Σινικό Τείχος",
    capital: "Κίνα",
    options: [
      {
        id: "0",
        country: "Σινικό Τείχος\nΚίνα",
        img: require("../../../assets/WorldMonuments/Asia/theGreatWallChina.png"),
      },
      {
        id: "1",
        country: "Ο μεγάλος δρόμος του ωκεανού\nΑυστραλία",
        img: require("../../../assets/WorldMonuments/Oceania/greatoceanroad.jpg"),
      },
      {
        id: "2",
        country: "Απαγορευμένη Πόλη\nΚίνα",
        img: require("../../../assets/WorldMonuments/Asia/forbidden-city.jpg"),
      },
      {
        id: "3",
        country: "Ναός του Ουρανού\nΚίνα",
        img: require("../../../assets/WorldMonuments/Asia/temple-of-heaven-in-beijing.webp"),
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "11",
    monument: "",
    country: "",
  },
    //Dont delete. It s missing status: 'Guess' section
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
