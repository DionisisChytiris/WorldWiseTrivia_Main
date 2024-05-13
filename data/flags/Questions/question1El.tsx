const question1El = [
  {
    id: "1a",
    status: "Capitals",
    country: "Βερολίνο",
    image: require("../../../assets/Flags/germany.png"),
    options: [
      {
        id: "0",
        capital: 'Βέλγιο',
        country: 'Bρυξέλλες'
      },
      {
        id: "1",
        capital: 'Γερμανία',
        country: 'Bερολίνο'
      },
      {
        id: "2",
        capital: 'Ρουμανία',
        country: 'Βουκουρέστι'
      },
      {
        id: "3",
        capital: 'Γαλλία',
        country: 'Παρίσι'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Βερολίνο",
    country: "Γερμανία",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/belgium.png"),
        country: "Bέλγιο",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/germany.png"),
        country: "Γερμανία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/romania.png"),
        country: "Ρουμανία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/france.png"),
        country: "Γαλλία",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "1c",
    status: "Guess",
    word: "ΓΕΡΜΑΝΙΑ",
    country: "Βερολίνο",
    num: 7,
    letters: "ΤΑΟΙΠΕΜΥΔΓΡΝ",
    img: require("../../../assets/Flags/germany.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Δουβλίνο",
    image: require("../../../assets/Flags/ireland.png"),
    options: [
      {
        id: "0",
        capital: 'Iταλία',
        country: 'Ρώμη'
      },
      {
        id: "1",
        capital: 'Iνδία',
        country: 'Nέο Δελχί'
      },
      {
        id: "2",
        capital: 'Iρλανδία',
        country: 'Δουβλίνο'
      },
      {
        id: "3",
        capital: 'Γαλλία',
        country: 'Παρίσι'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "2b",
    status: "Flags" ,
    capital: "Δουβλίνο",
    country: "Iρλανδία",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/italy.png"),
        country: 'Iταλία'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/india.png"),
        country: 'Iνδία'
      },
      {
        id: "2",
        img: require("../../../assets/Flags//ireland.png"),
        country: 'Iρλανδία'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/france.png"),
        country: 'Γαλλία'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "2c",
    status: "Guess",
    word: "ΙΡΛΑΝΔΙΑ",
    country: "Δουβλίνο",
    num: 6,
    letters: "ΠΑΜΣΝΙΟΕΡΔΛΚ",
    img: require("../../../assets/Flags/ireland.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Mαδρίτη",
    image: require("../../../assets/Flags/spain.png"),
    options: [
      {
        id: "0",
        capital: 'Ισπανία',
        country: 'Mαδρίτη'
      },
      {
        id: "1",
        capital: 'Πορτογαλία',
        country: 'Λισαβώνα'
      },
      {
        id: "2",
        capital: 'Γαλλία',
        country: 'Παρίσι'
      },
      {
        id: "3",
        capital: 'Iταλία',
        country: 'Ρώμη'
      },
    ],
    correctAnswerIndex: 0,
  },

  {
    id: "3b",
    status: "Flags",
    capital: "Mαδρίτη",
    country: "Ισπανία",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/portugal.png"),
        country: "Πορτογαλία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/bolivia.png"),
        country: "Bολιβία",
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
    correctAnswerIndex: 2,
  },
  {
    id: "3c",
    status: "Guess",
    word: "ΙΣΠΑΝΙΑ",
    country: "Mαδρίτη",
    num: 5,
    letters: "ΠΝΜΑΙΕΟΛΣΤΗΡ",
    img: require("../../../assets/Flags/spain.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Aθήνα",
    image: require("../../../assets/Flags/greece.png"),
    options: [
      {
        id: "0",
        capital: 'Κύπρος',
        country: 'Λευκωσία'
      },
      {
        id: "1",
        capital: 'Ελλάδα',
        country: 'Aθήνα'
      },
      {
        id: "2",
        capital: 'Iταλία',
        country: 'Ρώμη'
      },
      {
        id: "3",
        capital: 'Bουλγαρία',
        country: 'Σόφια'
      },
    ],
    correctAnswerIndex: 1,
  },

  {
    id: "4b",
    status: "Flags",
    capital: "Aθήνα",
    country: "Ελλάδα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/elSalvador.png"),
        country: "Ελ Σαλβαδόρ",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/greece.png"),
        country: "Ελλάδα",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/uruguay.png"),
        country: "Ουρουγουάη",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/finland.png"),
        country: "Φινλανδία",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "4c",
    status: "Guess",
    word: "ΕΛΛΑΔΑ",
    country: "Aθήνα",
    num: 4,
    letters: "ΠΟΛΚΜΝΑΕΡΙΔΥ",
    img: require("../../../assets/Flags/greece.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Παρίσι",
    image: require("../../../assets/Flags/france.png"),
    options: [
      {
        id: "0",
        capital: 'Ισπανία',
        country: 'Mαδρίτη'
      },
      {
        id: "1",
        capital: 'Bέλγιο',
        country: 'Bρυξέλλες'
      },
      {
        id: "2",
        capital: 'Ελβετία',
        country: 'Βέρνη'
      },
      {
        id: "3",
        capital: 'Γαλλία',
        country: 'Παρίσι'
      },
    ],
    correctAnswerIndex: 3,
  },

  {
    id: "5b",
    status: "Flags",
    capital: "Παρίσι",
    country: "Γαλλία",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/costaRica.png"),
        country: "Κόστα Ρίκα",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/paraguay.png"),
        country: "Παραγουάη",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/netherlands.png"),
        country: "Ολλανδία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/france.png"),
        country: "Γαλλία",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "5c",
    status: "Guess",
    word: "ΓΑΛΛΙΑ",
    country: "Παρίσι",
    num: 4,
    letters: "ΡΤΠΟΕΘΙΑΛΚΜΓ",
    img: require("../../../assets/Flags/france.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Ρώμη",
    image: require("../../../assets/Flags/italy.png"),
    options: [
      {
        id: "0",
        capital: 'Iταλία',
        country: 'Ρώμη'
      },
      {
        id: "1",
        capital: 'Ουγγαρία',
        country: 'Bουδαπέστη'
      },
      {
        id: "2",
        capital: 'Mεξικό',
        country: 'Πόλη του Μεξικού'
      },
      {
        id: "3",
        capital: 'Γαλλία',
        country: 'Παρίσι'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Ρώμη",
    country: "Ιταλία",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/italy.png"),
        country: "Iταλία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/mexico.png"),
        country: "Mεξικό",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/hungary.png"),
        country: "Ουγγαρία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/iran.png"),
        country: "Iράν",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "6c",
    status: "Guess",
    word: "ΙΤΑΛΙΑ",
    country: "Ρώμη",
    num: 4,
    letters: "ΑΟΕΚΛΠΣΝΜΙΤΔ",
    img: require("../../../assets/Flags/italy.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Πεκίνο",
    image: require("../../../assets/Flags/china.png"),
    options: [
      {
        id: "0",
        capital: 'Βιετνάμ',
        country: 'Ανόι'
      },
      {
        id: "1",
        capital: 'Καμπότζη',
        country: 'Πνομ Πεν'
      },
      {
        id: "2",
        capital: 'Κίνα',
        country: 'Πεκίνο'
      },
      {
        id: "3",
        capital: 'Mαλαισία',
        country: 'Kουάλα Λουμπούρ'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7b",
    status: "Flags" ,
    capital: "Πεκίνο",
    country: "Κίνα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/vietnam.png"),
        country: 'Βιετνάμ'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Cambodia.png"),
        country: 'Καμπότζη'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/china.png"),
        country: 'Κίνα'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/malaysia.png"),
        country: 'Mαλαισία'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7c",
    status: "Guess",
    word: "ΚΙΝΑ",
    num: 4,
    letters: "ΠΟΝΜΤΥΑΣΛΚΙΕ",
    img: require("../../../assets/Flags/china.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Πόλη του Μεξικού",
    image: require("../../../assets/Flags/mexico.png"),
    options: [
      {
        id: "0",
        capital: 'Iταλία',
        country: 'Ρώμη'
      },
      {
        id: "1",
        capital: 'Μεξικό',
        country: 'Πόλη του Μεξικού'
      },
      {
        id: "2",
        capital: 'Iνδία',
        country: 'Nέο Δελχί'
      },
      {
        id: "3",
        capital: 'Ουγγαρία',
        country: 'Bουδαπέστη'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Πόλη του Μεξικού",
    country: "Mεξικού",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/italy.png"),
        country: "Iταλία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/mexico.png"),
        country: "Mεξικό",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/hungary.png"),
        country: "Ουγγαρία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/iran.png"),
        country: "Iράν",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "8c",
    status: "Guess",
    word: "ΜΕΞΙΚΟ",
    country: "Πόλη του Μεξικού",
    num: 6,
    letters: "ΜΝΠΟΑΣΕΛΚΞΥΙ",
    img: require("../../../assets/Flags/mexico.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Ουάσινγκτον",
    image: require("../../../assets/Flags/usa.png"),
    options: [
      {
        id: "0",
        capital: 'Καναδάς',
        country: 'Οττάβα'
      },
      {
        id: "1",
        capital: 'Κούβα',
        country: 'Αβάνα'
      },
      {
        id: "2",
        capital: 'Λιβερία',
        country: 'Mονρόβια'
      },
      {
        id: "3",
        capital: 'ΗΠΑ',
        country: 'Ουάσινγκτον'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "9b",
    status: "Flags",
    capital: "Ουάσινγκτον",
    country: "ΗΠΑ",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/usa.png"),
        country: "ΗΠΑ",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Liberia.png"),
        country: "Λιβερία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/malaysia.png"),
        country: "Mαλαισία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Cuba.png"),
        country: "Κούβα",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "9c",
    status: "Guess",
    word: "ΗΠΑ",
    country: "Ουάσινγκτον",
    num: 3,
    letters: "ΕΤΙΟΠΑΜΝΗΛΣΥ",
    img: require("../../../assets/Flags/usa.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Λονδίνο",
    image: require("../../../assets/Flags/uk.png"),
    options: [
      {
        id: "0",
        capital: 'Nέα Ζηλανδία',
        country: 'Ουέλλινγκτον'
      },
      {
        id: "1",
        capital: 'Aυστραλία',
        country: 'Κανμπέρα'
      },
      {
        id: "2",
        capital: 'Ηνωμένο Βασίλειο',
        country: 'Λονδίνο'
      },
      {
        id: "3",
        capital: 'ΗΠΑ',
        country: 'Ουάσινγκτον'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Λονδίνο",
    country: "Ηνωμένο Βασίλειο",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/newZealand.png"),
        country: "Νέα Ζηλανδία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/australia.png"),
        country: "Aυστραλία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/uk.png"),
        country: "Ηνωμένο Βασίλειο",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Fiji.png"),
        country: "Φίτζι",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "10c",
    status: "Guess",
    word: "ΗΝΩΜΕΝΟΒΑΣΙΛΕΙΟ",
    country: "Λονδίνο",
    num: 11,
    letters: "ΒΑΙΛΕΟΗΝΩΜΝΣ",
    img: require("../../../assets/Flags/uk.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question1El;
