const question1El = [
    {
      id: "1a",
      status: "Capitals",
      country: "Ιταλία",
      image: require("../../../assets/Flags/italy.png"),
      options: [
        {
          id: "0",
          capital: 'Παρίσι',
          country: 'Γαλλία'
        },
        {
          id: "1",
          capital: 'Ρώμη',
          country: 'Ιταλία'
        },
        {
          id: "2",
          capital: 'Μαδρίτη',
          country: 'Ισπανία'
        },
        {
          id: "3",
          capital: 'Μιλάνο',
          country: 'Ιταλική πόλη'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "1b",
      status: "Flags" ,
      capital: "Ιταλία",
      country: "Ρώμη",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/france.png"),
          country: 'Γαλλία'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/italy.png"),
          country: 'Ιταλία'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/spain.png"),
          country: 'Ισπανία'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/lithuania.png"),
          country: 'Λιθουανία'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "1c",
      status: "Guess",
      word: "ΡΩΜΗ",
      country: "Ιταλία",
      num: 4,
      letters: "ΗΕΔΡΑNΥΠΟΩΝΜ",
      img: require("../../../assets/Flags/italy.png"),
    },
    {
      id: "2a",
      status: "Capitals",
      country: "Ηνωμένο Βασίλειο",
      image: require("../../../assets/Flags/uk.png"),
      options: [
        {
          id: "0",
          capital: 'Λονδίνο',
          country: 'Ημωμένο Βασίλειο'
        },
        {
          id: "1",
          capital: 'Παρίσι',
          country: 'Γαλλία'
        },
        {
          id: "2",
          capital: 'Μαδρίτη',
          country: 'Ισπανία'
        },
        {
          id: "3",
          capital: 'Βερολίνο',
          country: 'Γερμανία'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "2b",
      status: "Flags" ,
      capital: "Ηνωμένο Βασίλειο",
      country: "Λονδίνο",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/uk.png"),
          country: 'Ηνωμένο Βασίλειο'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/france.png"),
          country: 'Γαλλία'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/netherlands.png"),
          country: 'Ολλανδία'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/australia.png"),
          country: 'Αυστραλία'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "2c",
      status: "Guess",
      word: "ΛΟΝΔΙΝΟ",
      country: "Ηνωμένο Βασίλειο",
      num: 5,
      letters: "ΕΛΣΑΙΒΝΔΥΠΚΟ",
      img: require("../../../assets/Flags/uk.png"),
    },
    {
      id: "3a",
      status: "Capitals",
      country: "Ισπανία",
      image: require("../../../assets/Flags/spain.png"),
      options: [
        {
          id: "0",
          capital: 'Παρίσι',
          country: 'Γαλλία'
        },
        {
          id: "1",
          capital: 'Ρώμη',
          country: 'Ιταλία'
        },
        {
          id: "2",
          capital: 'Μαδρίτη',
          country: 'Ισπανία'
        },
        {
          id: "3",
          capital: 'Μιλάνο',
          country: 'Ιταλική πόλη'
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "3b",
      status: "Flags",
      capital: "Ισπανία",
      country: "Μαδρίτη",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/portugal.png"),
          country: 'Πορτογαλία'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/bolivia.png"),
          country: 'Βολιβία'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/spain.png"),
          country: 'Ισπανία'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/lithuania.png"),
          country: 'Λιθουανία'
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "3c",
      status: "Guess",
      word: "ΜΑΔΡΙΤΗ",
      country: "Ισπανία",
      num: 7,
      letters: "ΡΣΟΗΤΙΜΑΔΡΕΛ",
      img: require("../../../assets/Flags/spain.png"),
    },
    {
      id: "4a",
      status: "Capitals",
      country: "Ιρλανδία",
      image: require("../../../assets/Flags/ireland.png"),
      options: [
        {
          id: "0",
          capital: 'Λονδίνο',
          country: 'Ηνωμένο Βασίλειο'
        },
        {
          id: "1",
          capital: 'Παρίσι',
          country: 'Γαλλία'
        },
        {
          id: "2",
          capital: 'Μαδρίτη',
          country: 'Ισπανία'
        },
        {
          id: "3",
          capital: 'Δουβλίνο',
          country: 'Ιρλανδία'
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "4b",
      status: "Flags" ,
      capital: "Ιρλανδία",
      country: "Δουβλίνο",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/portugal.png"),
          country: 'Πορτογαλία'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/ireland.png"),
          country: 'Ιρλανδία'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/india.png"),
          country: 'Ινδία'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/hungary.png"),
          country: 'Ουγγαρία'
        },
      ],
      correctAnswerIndex: 1,
    },
     {
      id: "4c",
      status: "Guess",
      word: "ΔΟΥΒΛΙΝΟ",
      country: "Ιρλανδία",
      num: 7,
      letters: "ΠΥΛΔΟΒΑΜΝΙΤΕ",
      img: require("../../../assets/Flags/ireland.png"),
    },
    {
      id: "5a",
      status: "Capitals",
      country: "Ιαπωνία",
      image: require("../../../assets/Flags/japan.png"),
      options: [
        {
          id: "0",
          capital: 'Ταϊπέι',
          country: 'Ταϊβάν'
        },
        {
          id: "1",
          capital: 'Πεκίνο',
          country: 'Κίνα'
        },
        {
          id: "2",
          capital: 'Σεούλ',
          country: 'Νότια Κορέα'
        },
        {
          id: "3",
          capital: 'Τόκιο',
          country: 'Ιαπωνία'
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "5b",
      status: "Flags" ,
      capital: "Ιαπωνία",
      country: "Τόκιο",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/skorea.png"),
          country: 'Νότια Κορέα'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/Palau.png"),
          country: 'Παλάου'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/Laos.png"),
          country: 'Λάος'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/japan.png"),
          country: 'Ιαπωνία'
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "5c",
      status: "Guess",
      word: "ΤΟΚΙΟ",
      country: "Ιαπωνία",
      num: 4,
      letters: "ΑΚΛΡΙΟΠΝΜΣΤΕ",
      img: require("../../../assets/Flags/japan.png"),
    },
    {
      id: "6a",
      status: "Capitals",
      country: "Περού",
      image: require("../../../assets/Flags/peru.png"),
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
          capital: 'Ασουνσιόν',
          country: 'Παραγουάη'
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "6b",
      status: "Flags" ,
      capital: "Περού",
      country: "Λίμα",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/peru.png"),
          country: 'Περού'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/austria.png"),
          country: 'Αυστρία'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/latvia.png"),
          country: 'Λετονία'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/poland.png"),
          country: 'Πολωνία'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "6c",
      status: "Guess",
      word: "ΛΙΜΑ",
      country: "Περού",
      num: 4,
      letters: "ΠΑΛΙΚΟΕΤΥΣΝΜ",
      img: require("../../../assets/Flags/peru.png"),
    },
    {
      id: "7a",
      status: "Capitals",
      country: "Κίνα",
      image: require("../../../assets/Flags/china.png"),
      options: [
        {
          id: "0",
          capital: 'Πεκίνο',
          country: 'Κίνα'
        },
        {
          id: "1",
          capital: 'Ανόι',
          country: 'Βιετνάμ'
        },
        {
          id: "2",
          capital: 'Τόκιο',
          country: 'Ιαπωνία'
        },
        {
          id: "3",
          capital: 'Σεούλ',
          country: 'Νότια Κορέα'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "7b",
      status: "Flags" ,
      capital: "Κίνα",
      country: "Πεκίνο",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/morocco.png"),
          country: 'Μαρόκο'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/turkey.png"),
          country: 'Tουρκία'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/china.png"),
          country: 'Κίνα'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/vietnam.png"),
          country: 'Βιετνάμ'
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "7c",
      status: "Guess",
      word: "ΠΕΚΙΝΟ",
      country: "Κίνα",
      num: 6,
      letters: "ΑΠΟΝΕΜΙΚΛΣΡΝ",
      img: require("../../../assets/Flags/china.png"),
    },
    {
      id: "8a",
      status: "Capitals",
      country: "Αίγυπτος",
      image: require("../../../assets/Flags/egypt.png"),
      options: [
        {
          id: "0",
          capital: 'Βαδγάτη',
          country: 'Ιράκ'
        },
        {
          id: "1",
          capital: 'Κάιρο',
          country: 'Αίγυπτος'
        },
        {
          id: "2",
          capital: 'Δαμασκός',
          country: 'Συρία'
        },
        {
          id: "3",
          capital: 'Άμπου Ντάμπι',
          country: 'Ηνωμένα Αραβικά \nΕμιράτα'
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "8b",
      status: "Flags",
      capital: "Αίγυπτος",
      country: "Κάιρο",
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
      correctAnswerIndex: 1,
    },
    {
      id: "8c",
      status: "Guess",
      word: "ΚΑΙΡΟ",
      country: "Αίγυπτος",
      num: 5,
      letters: "ΠΟΑΛΡΙΚΜΝΕΥΔ",
      img: require("../../../assets/Flags/egypt.png"),
    },
    {
      id: "9a",
      status: "Capitals",
      country: "Γαλλία",
      image: require("../../../assets/Flags/france.png"),
      options: [
        {
          id: "0",
          capital: 'Παρίσι',
          country: 'Γαλλία'
        },
        {
          id: "1",
          capital: 'Γαλλία',
          country: 'Ηνωμένο Βασίλειο'
        },
        {
          id: "2",
          capital: 'Μαδρίτη',
          country: 'Ισπανία'
        },
        {
          id: "3",
          capital: 'Βερολίνο',
          country: 'Γερμανία'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "9b",
      status: "Flags" ,
      capital: "Γαλλία",
      country: "Παρίσι",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/netherlands.png"),
          country: 'Ολλανδία'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/Cuba.png"),
          country: 'Κούβα'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/france.png"),
          country: 'Γαλλία'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/russia.png"),
          country: 'Ρωσία'
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "9c",
      status: "Guess",
      word: "ΠΑΡΙΣΙ",
      country: "Γαλλία",
      num: 5,
      letters: "ΤΙΠΑΡΣΥΝΜΟΛΚ",
      img: require("../../../assets/Flags/france.png"),
    },
    {
      id: "10a",
      status: "Capitals",
      country: "Αυστραλία",
      image: require("../../../assets/Flags/australia.png"),
      options: [
        {
          id: "0",
          capital: 'Ουέλλινγκτον',
          country: 'Νέα Ζηλανδία'
        },
        {
          id: "1",
          capital: 'Μελβούρνη',
          country: 'Αυστραλία'
        },
        {
          id: "2",
          capital: 'Σίδνεϋ',
          country: 'Αυστραλία'
        },
        {
          id: "3",
          capital: 'Καμπέρα',
          country: 'Αυστραλία'
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "10b",
      status: "Flags" ,
      capital: "Αυστραλία",
      country: "Καμπέρα",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/australia.png"),
          country: 'Australia'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/uk.png"),
          country: 'Ηνωμένο Βασίλειο'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/newZealand.png"),
          country: 'Nέα Ζηλανδία'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/Fiji.png"),
          country: 'Φίτζι'
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "10c",
      status: "Guess",
      word: "ΚΑΜΠΕΡΑ",
      country: "Αυστραλία",
      num: 6,
      letters: "ΜΝΕΡΟΑΠΣΛΚΙΥ",
      img: require("../../../assets/Flags/australia.png"),
    },
    {
      id: "11",
      status: "Flags",
      capital: "",
      country: "",
    },
  ];
  export default question1El;
  