const question3El = [
  {
    id: "1a",
    status: "Capitals",
    country: "Κατάρ",
    image: require("../../../assets/Flags/qatar.png"),
    options: [
      {
        id: "0",
        capital: "Ντόχα",
        country: "Κατάρ",
      },
      {
        id: "1",
        capital: "Μανάμα",
        country: "Μπαχρέιν",
      },
      {
        id: "2",
        capital: "Αμπου \nΝτάμπι",
        country: "Ηνωμένα Αραβικά \nΕμιράτα",
      },
      {
        id: "3",
        capital: "Muscat",
        country: "Ομάν",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Κατάρ",
    country: "Ντόχα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/qatar.png"),
        country: "Κατάρ",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/denmark.png"),
        country: "Δανία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Bahrain.png"),
        country: "Μπαχρέιν",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/poland.png"),
        country: "Πολωνία",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "1c",
    status: "Guess",
    word: "ΝΤΟΧΑ",
    country: "Κατάρ",
    num: 5,
    letters: "ΛΖΧΑΟΕΡΙΠΜΝΤ",
    img: require("../../../assets/Flags/qatar.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "ΗΠΑ",
    image: require("../../../assets/Flags/usa.png"),
    options: [
      {
        id: "0",
        capital: "Οττάβα",
        country: "Καναδάς",
      },
      {
        id: "1",
        capital: "Λονδίνο",
        country: "Ηνωμένο Βασίλειο",
      },
      {
        id: "2",
        capital: "Ουάσινγκτον",
        country: "ΗΠΑ",
      },
      {
        id: "3",
        capital: "Καμπέρα",
        country: "Aυστραλία",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Ηνωμένες Πολιτείες",
    country: "Ουάσινγκτον",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Cuba.png"),
        country: "Κούβα",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/malaysia.png"),
        country: "Μαλαισία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Liberia.png"),
        country: "Λιβερία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/usa.png"),
        country: "ΗΠΑ",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2c",
    status: "Guess",
    word: "ΟΥΑΣΙΝΓΚΤΟΝ",
    country: "ΗΠΑ",
    num: 9,
    letters: "ΑΟΤΚΕΥΣΛΜΝΓΙ",
    img: require("../../../assets/Flags/usa.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Νορβηγία",
    image: require("../../../assets/Flags/norway.png"),
    options: [
      {
        id: "0",
        capital: "Ελσίνκι",
        country: "Φιλανδία",
      },
      {
        id: "1",
        capital: "Μπέργκεν",
        country: "Νορβηγική πόλη",
      },
      {
        id: "2",
        capital: "Όσλο",
        country: "Νορβηγία",
      },
      {
        id: "3",
        capital: "Στοκχόλμη",
        country: "Σουηδία",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "3b",
    status: "Flags",
    capital: "Νορβηγία",
    country: "Όσλο",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/norway.png"),
        country: "Νορβηγία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/finland.png"),
        country: "Φιλανδία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/sweden.png"),
        country: "Σουηδία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/iceland.png"),
        country: "Ισλανδία",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "3c",
    status: "Guess",
    word: "ΟΣΛΟ",
    country: "Νορβηγία",
    num: 3,
    letters: "ΠΑΡΕΥΓΟΙΝΜΛΣ",
    img: require("../../../assets/Flags/norway.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Κολομβία",
    image: require("../../../assets/Flags/colombia.png"),
    options: [
      {
        id: "0",
        capital: "Κίτο",
        country: "Ισημερινός",
      },
      {
        id: "1",
        capital: "Καράκας",
        country: "Βενεζουέλα",
      },
      {
        id: "2",
        capital: "Λίμα",
        country: "Περού",
      },
      {
        id: "3",
        capital: "Μπογκοτά",
        country: "Κολομβία",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "4b",
    status: "Flags",
    capital: "Κολομβία",
    country: "Μπογκοτά",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/venezuela.png"),
        country: "Βενεζουέλα",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/colombia.png"),
        country: "Κολομβία",
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
    correctAnswerIndex: 1,
  },

  {
    id: "4c",
    status: "Guess",
    country: "Κολομβία",
    word: "ΜΠΟΓΚΟΤΑ",
    num: 7,
    letters: "ΠΓΤΡΕΜΚΑΟΔΥΛ",

    img: require("../../../assets/Flags/colombia.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Ιορδανία",
    image: require("../../../assets/Flags/jordan.png"),
    options: [
      {
        id: "0",
        capital: "Βηρυτός",
        country: "Λίβανος",
      },
      {
        id: "1",
        capital: "Μουσκάτ",
        country: "Ομάν",
      },
      {
        id: "2",
        capital: "Δαμασκός",
        country: "Συρία",
      },
      {
        id: "3",
        capital: "Αμμάν",
        country: "Ιορδανία",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Ιορδανιά",
    country: "Αμμάν",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/syria.png"),
        country: "Συρία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Oman.png"),
        country: "Ομάν",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/egypt.png"),
        country: "Αίγυπτος",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/jordan.png"),
        country: "Ιορδανία",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "5c",
    status: "Guess",
    word: "ΑΜΜΑΝ",
    country: "Ιορδανία",
    num: 3,
    letters: "ΠΟΑΛΕΜΝΣΗΙΚΧ",
    img: require("../../../assets/Flags/jordan.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Τσεχία",
    image: require("../../../assets/Flags/czechia.png"),
    options: [
      {
        id: "0",
        capital: "Βουδαπέστη",
        country: "Ουγγαρία",
      },
      {
        id: "1",
        capital: "Πράγα",
        country: "Τσεχία",
      },
      {
        id: "2",
        capital: "Λιουμπλιάνα",
        country: "Σλοβενία",
      },
      {
        id: "3",
        capital: "Μπρατισλάβα",
        country: "Σλοβακία",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Τσεχία",
    country: "Πράγα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/chile.png"),
        country: "Χιλή",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/czechia.png"),
        country: "Τσεχία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags//philipines.png"),
        country: "Φιλιππίνες",
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
    id: "6c",
    status: "Guess",
    word: "ΠΡΑΓΑ",
    country: "Τσεχία",
    num: 4,
    letters: "ΠΑΛΜΣΝΕΙΟΔΡΓ",
    img: require("../../../assets/Flags/czechia.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Ινδονησία",
    image: require("../../../assets/Flags/Indonesia.png"),
    options: [
      {
        id: "0",
        capital: "Κουάλα \nΛουμπούρ",
        country: "Μαλαισία",
      },
      {
        id: "1",
        capital: "Μανίλα",
        country: "Φιλιππίνες",
      },
      {
        id: "2",
        capital: "Τζακάρτα",
        country: "Ινδονησία",
      },
      {
        id: "3",
        capital: "Μπαντάρ Σερί \nΜπεγκαβάν",
        country: "Μπρούνει",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7b",
    status: "Flags",
    capital: "Iνδονησία",
    country: "Τζακάρτα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/singapore.png"),
        country: "Σιγκαπούρη",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/malta.png"),
        country: "Mάλτα",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Indonesia.png"),
        country: "Iνδονησία",
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
    word: "ΤΖΑΚΑΡΤΑ",
    country: "Ινδονησία",
    num: 5,
    letters: "ΤΟΑΠΜΝΡΖΚΕΙΥ",
    img: require("../../../assets/Flags/Indonesia.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Αργεντινή",
    image: require("../../../assets/Flags/argentina.png"),
    options: [
      {
        id: "0",
        capital: "Mοντεβιδέο",
        country: "Ουρουγουάη",
      },
      {
        id: "1",
        capital: "Ασουνσιόν",
        country: "Παραγουάη",
      },
      {
        id: "2",
        capital: "Πόλη του Παναμά",
        country: "Παναμάς",
      },
      {
        id: "3",
        capital: "Μπουένος Άιρες",
        country: "Aργεντινή",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Αργεντινή",
    country: "Μπουένος \nΆιρες",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/paraguay.png"),
        country: "Παραγουάη",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/argentina.png"),
        country: "Aργεντινή",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/uruguay.png"),
        country: "Ουρουγουάη",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/elSalvador.png"),
        country: "Ελ Σαλβαδόρ",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "8c",
    status: "Guess",
    word: "ΜΠΟΥΕΝΟΣΑΙΡΕΣ",
    country: "Aργεντινή",
    num: 10,
    letters: "ΔΕΜΑΠΥΟΝΡΣΙΖ",
    img: require("../../../assets/Flags/argentina.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Νότια Κορέα",
    image: require("../../../assets/Flags/skorea.png"),
    options: [
      {
        id: "0",
        capital: "Σεούλ",
        country: "Νότια Κορέα",
      },
      {
        id: "1",
        capital: "Tόκιο",
        country: "Ιαπωνία",
      },
      {
        id: "2",
        capital: "Πεκίνο",
        country: "Κίνα",
      },
      {
        id: "3",
        capital: "Ανόι",
        country: "Βιετνάμ",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "9b",
    status: "Flags",
    capital: "Νότια Κορέα",
    country: "Σεούλ",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/skorea.png"),
        country: "Νότια Κορέα",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/japan.png"),
        country: "Ιαπωνία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Palau.png"),
        country: "Παλάου",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/taiwan.png"),
        country: "Tαϊβάν",
      },
    ],
    correctAnswerIndex: 0,
  },

  {
    id: "9c",
    status: "Guess",
    country: "Νότια Κορέα",
    word: "ΣΕΟΥΛ",
    num: 5,
    letters: "ΠΟΤΥΕΜΛΝΑΣΓΔ",
    img: require("../../../assets/Flags/skorea.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Φιλανδία",
    image: require("../../../assets/Flags/finland.png"),
    options: [
      {
        id: "0",
        capital: 'Ελσίνκι',
        country: 'Φιλανδία'
      },
      {
        id: "1",
        capital: 'Όσλο',
        country: 'Νορβηγία'
      },
      {
        id: "2",
        capital: 'Στοκχόλμη',
        country: 'Σουηδία'
      },
      {
        id: "3",
        capital: 'Κοπεγχάγη',
        country: 'Δανία'
      },

    ],
    correctAnswerIndex: 0,
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Φιλανδία",
    country: "Ελσίνκι",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/sweden.png"),
        country: "Σουηδία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/iceland.png"),
        country: "Iσλανδία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/finland.png"),
        country: "Φιλανδία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/denmark.png"),
        country: "Δανία",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "10c",
    status: "Guess",
    word: "ΕΛΣΙΝΚΙ",
    country: "Φιλανδία",
    num: 6,
    letters: "ΕΡΤΙΑΠΛΣΜΝΔΚ",
    img: require("../../../assets/Flags/finland.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question3El;
