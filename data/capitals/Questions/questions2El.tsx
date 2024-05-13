const question2El = [
  {
    id: "1a",
    status: "Capitals",
    country: "Γερμανία",
    image: require("../../../assets/Flags/germany.png"),
    options: [
      {
        id: "0",
        capital: 'Μόναχο',
        country: 'Γερμανική πόλη'
      },
      {
        id: "1",
        capital: 'Βιέννη',
        country: 'Αυστρία'
      },
      {
        id: "2",
        capital: 'Βερολίνο',
        country: 'Γερμανία'
      },
      {
        id: "3",
        capital: 'Βέρνη',
        country: 'Ελβετία'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Γερμανία",
    country: "Bερολίνο",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/belgium.png"),
        country: "Βέλγιο",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/germany.png"),
        country: "Γερμανία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/spain.png"),
        country: "Ισπανία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/lithuania.png"),
        country: "Λιθουανία",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "1c",
    status: "Guess",
    word: "ΒΕΡΟΛΙΝΟ",
    country: "Γερμανία",
    num: 7,
    letters: "ΝΟΠΛΙΥΕΝΡΚΑΒ",
    img: require("../../../assets/Flags/germany.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Αυστρία",
    image: require("../../../assets/Flags/austria.png"),
    options: [
      {
        id: "0",
        capital: "Βιέννη",
        country: "Aυστρία",
      },
      {
        id: "1",
        capital: "Παρίσι",
        country: "Γαλλία",
      },
      {
        id: "2",
        capital: "Βαρσοβία",
        country: "Πολωνία",
      },
      {
        id: "3",
        capital: "Bερολίνο",
        country: "Γερμανία",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Αυστρία",
    country: "Βιέννη",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/austria.png"),
        country: "Αυστρία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/poland.png"),
        country: "Πολωνία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/malta.png"),
        country: "Mάλτα",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/singapore.png"),
        country: "Σιγκαπούρη",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "2c",
    status: "Guess",
    word: "ΒΙΕΝΝΗ",
    country: "Aυστρία",
    num: 5,
    letters: "ΙΕΝΠΚΛΑΜΒΗΥΜ",
    img: require("../../../assets/Flags/austria.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Μαρόκο",
    image: require("../../../assets/Flags/morocco.png"),
    options: [
      {
        id: "0",
        capital: 'Ραμπάτ',
        country: 'Μαρόκο'
      },
      {
        id: "1",
        capital: 'Τρίπολη',
        country: 'Λιβύη'
      },
      {
        id: "2",
        capital: 'Μαρακές',
        country: 'Μαρόκο'
      },
      {
        id: "3",
        capital: 'Καζαμπλάνκα',
        country: 'Μαρόκο'
      },

    ],
    correctAnswerIndex: 0,
  },
  {
    id: "3b",
    status: "Flags",
    capital: "Μαρόκο",
    country: "Ραμπάτ",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/portugal.png"),
        country: "Πορτογαλία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/vietnam.png"),
        country: "Βιετνάμ",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/morocco.png"),
        country: "Μαρόκο",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/turkey.png"),
        country: "Tουρκία",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "3c",
    status: "Guess",
    word: "ΡΑΜΠΑΤ",
    country: "Mαρόκο",
    num: 5,
    letters: "ΠΡΛΤΚΙΕΑΟΝΜΣ",
    img: require("../../../assets/Flags/morocco.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Ελλάδα",
    image: require("../../../assets/Flags/greece.png"),
    options: [
      {
        id: "0",
        capital: "Σόφια",
        country: "Bουλγαρία",
      },
      {
        id: "1",
        capital: "Ρώμη",
        country: "Iταλία",
      },
      {
        id: "2",
        capital: "Αθήνα",
        country: "Ελλάδα",
      },
      {
        id: "3",
        capital: "Λευκωσία",
        country: "Κύπρος",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "4b",
    status: "Flags",
    capital: "Ελλάδα",
    country: "Αθήνα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/finland.png"),
        country: "Φιλανδία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/elSalvador.png"),
        country: "Ελ Σαλβαδόρ",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/argentina.png"),
        country: "Αργεντινή",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/greece.png"),
        country: "Ελλάδα",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "4c",
    status: "Guess",
    word: "ΑΘΗΝΑ",
    country: "Ελλάδα",
    num: 4,
    letters: "ΠΟΕΤΘΑΜΝΗΥΔΖ",
    img: require("../../../assets/Flags/greece.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Κούβα",
    image: require("../../../assets/Flags/Cuba.png"),
    options: [
      {
        id: "0",
        capital: 'Κίνγκστον',
        country: 'Τζαμάικα'
      },
      {
        id: "1",
        capital: 'Νασσάου',
        country: 'Μπαχάμες'
      },
      {
        id: "2",
        capital: 'Μπριτζτάουν',
        country: 'Μπαρμπάντος'
      },
      {
        id: "3",
        capital: 'Αβάνα',
        country: 'Κούβα'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Κούβα",
    country: "Αβάνα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/philipines.png"),
        country: "Φιλιππίνες",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Cuba.png"),
        country: "Κούβα",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/chile.png"),
        country: "Χιλή",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/puertoRico.jpg"),
        country: "Πουέρτο Ρίκο",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "5c",
    status: "Guess",
    word: "ΑΒΑΝΑ",
    country: "Κούβα",
    num: 3,
    letters: "ΝΜΕΙΑΟΠΝΒΚΛΥ",
    img: require("../../../assets/Flags/Cuba.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Εκουαδόρ",
    image: require("../../../assets/Flags/ecuador.png"),
    options: [
      {
        id: "0",
        capital: 'Κίτο',
        country: 'Ισημερινός'
      },
      {
        id: "1",
        capital: 'Μπογκοτά',
        country: 'Κολομβία'
      },
      {
        id: "2",
        capital: 'Λίμα',
        country: 'Περού'
      },
      {
        id: "3",
        capital: 'Aσουνσιόν',
        country: 'Παραγουάη'
      },

    ],
    correctAnswerIndex: 0,
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Ισημερινός",
    country: "Κίτο",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/colombia.png"),
        country: "Κολομβία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/venezuela.png"),
        country: "Βενεζουέλα",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/ecuador.png"),
        country: "Ισημερινός",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/romania.png"),
        country: "Ρουμανία",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "6c",
    status: "Guess",
    word: "ΚΙΤΟ",
    country: "Ισημερινός",
    num: 4,
    letters: "ΠΟΛΙΡΑΕΝΤΛΚΥ",
    img: require("../../../assets/Flags/ecuador.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Μεξικό",
    image: require("../../../assets/Flags/mexico.png"),
    options: [
      {
        id: "0",
        capital: 'Κανκούν',
        country: 'Μεξικανική\nπόλη'
      },
      {
        id: "1",
        capital: 'Ακαπούλκο',
        country: 'Μεξικανική\nπόλη'
      },
      {
        id: "2",
        capital: 'Πόλη του \nΜεξικού',
        country: 'Μεξικό'
      },
      {
        id: "3",
        capital: 'Γκουαντα-\nλαχάρα',
        country: 'Μεξικανική\nπόλη'
      },

    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7b",
    status: "Flags",
    capital: "Μεξικό",
    country: "Πόλη του Μεξικού",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/italy.png"),
        country: "Ιταλία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/hungary.png"),
        country: "Ουγγαρία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/mexico.png"),
        country: "Μεξικό",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/peru.png"),
        country: "Περού",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7c",
    status: "Guess",
    word: "ΜΕΞΙΚΟ",
    country: "Μεξικό",
    num: 6,
    letters: "ΠΟΛΑΚΕΥΓΞΙΚΜ",
    img: require("../../../assets/Flags/mexico.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Συρία",
    image: require("../../../assets/Flags/syria.png"),
    options: [
      {
        id: "0",
        capital: "Δαμασκός",
        country: "Συρία",
      },
      {
        id: "1",
        capital: "Αμμάν",
        country: "Ιορδανία",
      },
      {
        id: "2",
        capital: "Βαγδάτη",
        country: "Iράκ",
      },
      {
        id: "3",
        capital: "Tεχεράνη",
        country: "Iράν",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Συρία",
    country: "Δαμασκός",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/iraq.png"),
        country: 'Ιράκ'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/egypt.png"),
        country: 'Αίγυπτος'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/syria.png"),
        country: 'Συρία'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/United-Arab-Emirates.png"),
        country: 'Ηνωμένα Αραβικά \nΕμιράτα'
      },

    ],
    correctAnswerIndex: 2,
  },
  {
    id: "8c",
    status: "Guess",
    word: "ΔΑΜΑΣΚΟΣ",
    country: "Συρία",
    num: 6,
    letters: "ΔΚΑΜΠΟΕΙΝΣΥΛ",
    img: require("../../../assets/Flags/syria.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Πορτογαλία",
    image: require("../../../assets/Flags/portugal.png"),
    options: [
      {
        id: "0",
        capital: "Μαδρίτη",
        country: "Ισπανία",
      },
      {
        id: "1",
        capital: "Λισαβόνα",
        country: "Πορτογαλία",
      },
      {
        id: "2",
        capital: "Παρίσι",
        country: "Γαλλία",
      },
      {
        id: "3",
        capital: "Ρώμη",
        country: "Iταλία",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "9b",
    status: "Flags",
    capital: "Πορτογαλία",
    country: "Λισαβόνα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/lithuania.png"),
        country: "Λιθουανία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/portugal.png"),
        country: "Πορτογαλία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/brazil.png"),
        country: "Bραζιλία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/italy.png"),
        country: "Iταλία",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "9c",
    status: "Guess",
    word: "ΛΙΣΑΒΟΝΑ",
    country: "Πορτογαλία",
    num: 7,
    letters: "ΠΛΒΝΑΟΜΡΣΕΚΙ",
    img: require("../../../assets/Flags/portugal.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Ολλανδία",
    image: require("../../../assets/Flags/netherlands.png"),
    options: [
      {
        id: "0",
        capital: "Βαρσοβία",
        country: "Πολωνία",
      },
      {
        id: "1",
        capital: "Άμστερνταμ",
        country: "Ολλανδία",
      },
      {
        id: "2",
        capital: "Βρυξέλλες",
        country: "Bέλγιο",
      },
      {
        id: "3",
        capital: "Βερολίνο",
        country: "Γερμανία",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Ολλανδία",
    country: "Άμστερνταμ",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/paraguay.png"),
        country: "Παραγουάη",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/russia.png"),
        country: "Ρωσία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/serbia.png"),
        country: "Σερβία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/netherlands.png"),
        country: "Ολλανδία",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "10c",
    status: "Guess",
    word: "ΑΜΣΤΕΡΝΤΑΜ",
    country: "Ολλανδία",
    num: 7,
    letters: "ΤΜΚΑΠΟΛΝΕΙΣΡ",
    img: require("../../../assets/Flags/netherlands.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question2El;
