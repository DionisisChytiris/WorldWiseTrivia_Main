const question2El = [
  {
    id: "1a",
    status: "Capitals",
    country: "Τόκιο",
    image: require("../../../assets/Flags/japan.png"),
    options: [
      {
        id: "0",
        capital: 'Ιαπωνία',
        country: 'Tόκιο'
      },
      {
        id: "1",
        capital: 'Νότια Κορέα',
        country: 'Σεούλ'
      },
      {
        id: "2",
        capital: 'Κίνα',
        country: 'Πεκίνο'
      },
      {
        id: "3",
        capital: 'Βιετνάμ',
        country: 'Ανόι'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Tόκιο",
    country: "Ιαπωνία",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/japan.png"),
        country: "Ιαπωνία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/skorea.png"),
        country: "Νότια Κορέα",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/vietnam.png"),
        country: "Βιετνάμ",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/china.png"),
        country: "Κίνα",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "1c",
    status: "Guess",
    word: "ΙΑΠΩΝΙΑ",
    country: "Tόκιο",
    num: 5,
    letters: "ΠΟΑΙΕΜΩΛΝΥΚΡ",
    img: require("../../../assets/Flags/japan.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Λίμα",
    image: require("../../../assets/Flags/peru.png"),
    options: [
      {
        id: "0",
        capital: 'Ισημερινός',
        country: 'Κίτο'
      },
      {
        id: "1",
        capital: 'Aυστρία',
        country: 'Βιέννη'
      },
      {
        id: "2",
        capital: 'Περού',
        country: 'Λίμα'
      },
      {
        id: "3",
        capital: 'Πολωνία',
        country: 'Βαρσοβία'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Λίμα",
    country: "Περού",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/austria.png"),
        country: "Aυστρία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/poland.png"),
        country: "Πολωνία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/peru.png"),
        country: "Περού",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Indonesia.png"),
        country: "Iνδονησία",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "2c",
    status: "Guess",
    word: "ΠΕΡΟΥ",
    country: "Λίμα",
    num: 5,
    letters: "ΡΟΠΛΚΝΜΑΙΕΥΗ",
    img: require("../../../assets/Flags/peru.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Κάιρο",
    image: require("../../../assets/Flags/egypt.png"),
    options: [
      {
        id: "0",
        capital: 'Λιβύη',
        country: 'Tρίπολη'
      },
      {
        id: "1",
        capital: 'Αίγυπτος',
        country: 'Κάιρο'
      },
      {
        id: "2",
        capital: 'Aλγερία',
        country: 'Aλγέρι'
      },
      {
        id: "3",
        capital: 'Λίβανος',
        country: 'Βηρυτός'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: ''
  },

  {
    id: "3b",
    status: "Flags",
    capital: "Κάιρο",
    country: "Αίγυπτος",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/syria.png"),
        country: "Συρία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/egypt.png"),
        country: "Αίγυπτος",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/jordan.png"),
        country: "Ιορδανία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/iraq.png"),
        country: "Ιράκ",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: ''
  },
  {
    id: "3c",
    status: "Guess",
    word: "ΑΙΓΥΠΤΟΣ",
    country: "Κάιρο",
    num: 8,
    letters: "ΠΟΜΛΝΑΙΥΤΓΣΕ",
    img: require("../../../assets/Flags/egypt.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Καμπέρα",
    image: require("../../../assets/Flags/australia.png"),
    options: [
      {
        id: "0",
        capital: 'Αυστραλία',
        country: 'Καμπέρα'
      },
      {
        id: "1",
        capital: 'Νέα Ζηλανδία',
        country: 'Ουέλλινγκτον'
      },
      {
        id: "2",
        capital: 'Ηνωμένο Βασίλειο',
        country: 'Λονδίνο'
      },
      {
        id: "3",
        capital: 'Φίτζι',
        country: 'Σούβα'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "4b",
    status: "Flags",
    capital: "Καμπέρα",
    country: "Αυστραλία",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/australia.png"),
        country: "Aυστραλία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Fiji.png"),
        country: "Φίτζι",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/uk.png"),
        country: "Ηνωμένο Βασίλειο",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/newZealand.png"),
        country: "Νέα Ζηλανδία",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "4c",
    status: "Guess",
    word: "ΑΥΣΤΡΑΛΙΑ",
    country: "Καμπέρα",
    num: 7,
    letters: "ΑΜΝΤΡΠΛΕΥΣΙΟ",
    img: require("../../../assets/Flags/australia.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Λισαβώνα",
    image: require("../../../assets/Flags/portugal.png"),
    options: [
      {
        id: "0",
        capital: 'Βραζιλία',
        country: 'Μπραζίλια'
      },
      {
        id: "1",
        capital: 'Ισπανία',
        country: 'Mαδρίτη'
      },
      {
        id: "2",
        capital: 'Iταλία',
        country: 'Ρώμη'
      },
      {
        id: "3",
        capital: 'Πορτογαλία',
        country: 'Λισαβώνα'
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: ''
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Λισαβώνα",
    country: "Πορτογαλία",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/italy.png"),
        country: "Iταλία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/spain.png"),
        country: "Ισπανία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/brazil.png"),
        country: "Βραζιλία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/portugal.png"),
        country: "Πορτογαλία",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: ''
  },
  {
    id: "5c",
    status: "Guess",
    word: "ΠΟΡΤΟΓΑΛΙΑ",
    country: "Λισαβώνα",
    num: 8,
    letters: "ΠΜΕΝΑΡΓΚΛΟΤΙ",
    img: require("../../../assets/Flags/portugal.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Βιέννη",
    image: require("../../../assets/Flags/austria.png"),
    options: [
      {
        id: "0",
        capital: 'Μάλτα',
        country: 'Βαλέτα'
      },
      {
        id: "1",
        capital: 'Aυστρία',
        country: 'Βιέννη'
      },
      {
        id: "2",
        capital: 'Πολωνία',
        country: 'Βαρσοβία'
      },
      {
        id: "3",
        capital: 'Iνδονησία',
        country: 'Τζακάρτα'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: ''
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Βιέννη",
    country: "Aυστρία",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Indonesia.png"),
        country: "Iνδονησία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/austria.png"),
        country: "Aυστρία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/poland.png"),
        country: "Πολωνία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/malta.png"),
        country: "Mάλτα",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: ''
  },
  {
    id: "6c",
    status: "Guess",
    word: "ΑΥΣΤΡΙΑ",
    country: "Βιέννη",
    num: 6,
    letters: "ΠΟΑΝΜΡΤΙΣΚΛΥ",
    img: require("../../../assets/Flags/austria.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Ραμπάτ",
    image: require("../../../assets/Flags/morocco.png"),
    options: [
      {
        id: "0",
        capital: 'Βιετνάμ',
        country: 'Ανόι'
      },
      {
        id: "1",
        capital: 'Aλγερία',
        country: 'Aλγέρι'
      },
      {
        id: "2",
        capital: 'Mαρόκο',
        country: 'Ραμπάτ'
      },
      {
        id: "3",
        capital: 'Κίνα',
        country: 'Πεκίνο'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "7b",
    status: "Flags" ,
    capital: "Ραμπάτ",
    country: "Mαρόκο",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/turkey.png"),
        country: 'Tουρκία'
      },
      {
        id: "1",
        img: require("../../../assets/Flags/vietnam.png"),
        country: 'Βιετνάμ'
      },
      {
        id: "2",
        img: require("../../../assets/Flags/morocco.png"),
        country: 'Mαρόκο'
      },
      {
        id: "3",
        img: require("../../../assets/Flags/tunisia.png"),
        country: 'Tυνησία'
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: ''
  },
  {
    id: "7c",
    status: "Guess",
    word: "ΜΑΡΟΚΟ",
    country: "Ραμπάτ",
    num: 5,
    letters: "ΕΙΟΠΑΛΚΝΜΤΥΡ",
    img: require("../../../assets/Flags/morocco.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Δαμασκός",
    image: require("../../../assets/Flags/syria.png"),
    options: [
      {
        id: "0",
        capital: 'Συρία',
        country: 'Δαμασκός'
      },
      {
        id: "1",
        capital: 'Λίβανος',
        country: 'Βηρυτός'
      },
      {
        id: "2",
        capital: 'Ιορδανία',
        country: 'Aμμάν'
      },
      {
        id: "3",
        capital: 'Aφγανιστάν',
        country: 'Kαμπούλ'
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Δαμασκός",
    country: "Συρία",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/syria.png"),
        country: "Συρία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/egypt.png"),
        country: "Αίγυτπος",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Oman.png"),
        country: "Ομάν",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/jordan.png"),
        country: "Ιορδανία",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp: ''
  },
  {
    id: "8c",
    status: "Guess",
    word: "ΣΥΡΙΑ",
    country: "Δαμασκός",
    num: 5,
    letters: "ΚΟΠΑΛΣΔΜΥΡΙΝ",
    img: require("../../../assets/Flags/syria.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Αβάνα",
    image: require("../../../assets/Flags/Cuba.png"),
    options: [
      {
        id: "0",
        capital: 'Μπαχάμες',
        country: 'Nασσάου'
      },
      {
        id: "1",
        capital: 'Αϊτή',
        country: 'Πορτ-ο-Πρενς'
      },
      {
        id: "2",
        capital: 'Πουέρτο Ρίκο',
        country: 'Σαν Χουάν'
      },
      {
        id: "3",
        capital: 'Κούβα',
        country: 'Αβάνα'
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: ''
  },
  {
    id: "9b",
    status: "Flags",
    capital: "Αβάνα",
    country: "Κούβα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags//czechia.png"),
        country: "Τσεχία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/philipines.png"),
        country: "Φιλιππίνες",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/chile.png"),
        country: "Χιλή",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Cuba.png"),
        country: "Κούβα",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: ''
  },
  {
    id: "9c",
    status: "Guess",
    word: "ΚΟΥΒΑ",
    country: "Αβάνα",
    num: 5,
    letters: "ΠΑΟΜΕΚΛΥΝΔΒΣ",
    img: require("../../../assets/Flags/Cuba.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Άμστερνταμ",
    image: require("../../../assets/Flags/netherlands.png"),
    options: [
      {
        id: "0",
        capital: 'Γαλλία',
        country: 'Παρίσι'
      },
      {
        id: "1",
        capital: 'Ολλανδία',
        country: 'Άμστερνταμ'
      },
      {
        id: "2",
        capital: 'Σερβία',
        country: 'Bελιγράδι'
      },
      {
        id: "3",
        capital: 'Ιταλία',
        country: 'Ρώμη'
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: ''
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Άμστερνταμ",
    country: "Ολλανδία",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/france.png"),
        country: "Γαλλία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/netherlands.png"),
        country: "Ολλανδία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/thailand.png"),
        country: "Ταϊλάνδη",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/philipines.png"),
        country: "Φιλιππίνες",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: ''
  },
  {
    id: "10c",
    status: "Guess",
    word: "ΟΛΛΑΝΔΙΑ",
    country: "Άμστερνταμ",
    num: 6,
    letters: "ΜΠΑΟΕΗΛΣΤΝΔΙ",
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
