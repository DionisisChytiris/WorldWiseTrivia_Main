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
        capital: "Μουσκάτ",
        country: "Ομάν",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Η πρωτεύουσα του Κατάρ είναι γνωστή για τους ουρανοξύστες της, τη σύγχρονη αρχιτεκτονική και την εντυπωσιακή παραλιακή προκυμαία του Κορνίς. Είναι ένα κέντρο πολιτισμού και εμπορίου στη Μέση Ανατολή.",
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
    phoneHelp:
      "Η σημαία του Κατάρ είναι αρκετά μοναδική — είναι κυρίως μπορντώ με μια λευκή οδοντωτή λωρίδα στην αριστερή πλευρά.",
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
    phoneHelp:
      "Η πρωτεύουσα των Ηνωμένων Πολιτειών φιλοξενεί εμβληματικά μνημεία όπως ο Λευκός Οίκος και το Καπιτώλιο των ΗΠΑ. Είναι μια πόλη γνωστή για τη πολιτική της σημασία και τα ιστορικά μνημεία.",
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
    phoneHelp:
      "Απλά θυμήσου: κόκκινες και λευκές ρίγες με μια μπλε γωνία γεμάτη αστέρια. Είναι μια κλασική σημαία που όλοι γνωρίζουν!",
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
    phoneHelp:
      'Η πρωτεύουσα της Νορβηγίας είναι γνωστή για τους πράσινους χώρους της, την ιστορία των Βίκινγκς και τα μουσεία όπως το Μουσείο Βικινγκικών Πλοίων. Βρίσκεται στη νότια Νορβηγία, στο άκρο ενός βαθύ φιορδ, περιτριγυρισμένη από δασωμένα λόφους και κοντά στον Όσλοφιόρδ.',
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
    phoneHelp:
      "Η σημαία της Νορβηγίας είναι πραγματικά χαρακτηριστική! Είναι κόκκινη με έναν μπλε σταυρό περιγραμμένο σε λευκό — είναι πολύ αναγνωρίσιμη!",
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
    phoneHelp:
      " Σκέψου πόλεις που βρίσκονται στην Κολομβία. Απόφυγε οποιεσδήποτε πόλεις που δεν ανήκουν στη χώρα!!!",
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
    phoneHelp:
      "Η σημαία της Κολομβίας είναι πολύχρωμη! Έχει τρεις οριζόντιες ρίγες: κίτρινη από πάνω, ακολουθούμενη από μπλε και κόκκινη.",
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
    phoneHelp:
      "Η πρωτεύουσα της Ιορδανίας είναι γνωστή για τα αρχαία ρωμαϊκά ερείπια της, συμπεριλαμβανομένου ενός διάσημου αμφιθεάτρου, και τις πολυσύχναστες αγορές της. Είναι μια πόλη που χρησιμεύει ως πύλη προς τη κοντινή Νεκρά Θάλασσα και την Πέτρα.",
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
    phoneHelp:
      "Σκέψου μια σημαία με μαύρες, λευκές και πράσινες ρίγες, και υπάρχει ένα κόκκινο τρίγωνο στα αριστερά με ένα λευκό αστέρι μέσα!",
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
    phoneHelp:
      "Η πρωτεύουσα της Τσεχίας είναι διάσημη για την μεσαιωνική Παλιά Πόλη της, την εκπληκτική γοτθική αρχιτεκτονική και τα μνημεία όπως το Κάστρο της Πράγας και η Γέφυρα του Καρόλου.",
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
    phoneHelp:
      "Σκέψου μια σημαία με δύο κύρια χρώματα και ένα τρίγωνο στην αριστερή πλευρά. Έχει καθαρό και απλό σχεδιασμό!",
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
    phoneHelp:
      "Αυτή η πόλη βρίσκεται στην βορειοδυτική ακτή του νησιού της Ιάβας, με θέα στη Θάλασσα της Ιάβας, και είναι η μεγαλύτερη και πιο πολυπληθής πόλη της Ινδονησίας.",
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
    phoneHelp:
      "Έχει μια απλή εμφάνιση με δύο ρίγες, παρόμοια χρώματα με τη σημαία της Πολωνίας.",
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
    phoneHelp:
      "Η πρωτεύουσα της Αργεντινής είναι διάσημη για την ευρωπαϊκού στυλ αρχιτεκτονική της, τη ζωντανή μουσική τάγκο και τα μνημεία όπως η Casa Rosada και ο Οβελίσκος.",
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
    phoneHelp:
      "Έχει μια καθαρή εμφάνιση με μπλε και λευκό, συν ένα έμβλημα στη μέση που ξεχωρίζει.",
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
    phoneHelp:
      "Η πρωτεύουσα της Νότιας Κορέας είναι γνωστή για τους σύγχρονους ουρανοξύστες της, τις υψηλής τεχνολογίας και τα ιστορικά παλάτια όπως το Γκιονγκμποκγκούνγκ. Είναι μια πόλη όπου η παράδοση συναντά την προηγμένη τεχνολογία. Μην την μπερδεύεις με την πρωτεύουσα της Ιαπωνίας.",
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
    phoneHelp:
      "Με λευκό φόντο και ένα κόκκινο και μπλε σύμβολο του γιν-γιάνγκ στο κέντρο, αυτή η σημαία περιλαμβάνει επίσης τέσσερις μαύρους τριγράμους σε κάθε γωνία, συμβολίζοντας την αρμονία και την ισορροπία.",
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
        capital: "Ελσίνκι",
        country: "Φιλανδία",
      },
      {
        id: "1",
        capital: "Όσλο",
        country: "Νορβηγία",
      },
      {
        id: "2",
        capital: "Στοκχόλμη",
        country: "Σουηδία",
      },
      {
        id: "3",
        capital: "Κοπεγχάγη",
        country: "Δανία",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Η πρωτεύουσα της Φινλανδίας είναι γνωστή για τον σύγχρονο σχεδιασμό της, τις θαλάσσιες θέες και τα μνημεία όπως ο Καθεδρικός Ναός του Ελσίνκι και η Αγορά. Είναι μια πόλη που αγκαλιάζει τη φύση και την σκανδιναβική απλότητα.",
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
    phoneHelp:
      " Αυτή η σημαία έχει έναν μπλε νορδικό σταυρό σε λευκό φόντο, συμβολίζοντας τις λίμνες της Φινλανδίας και τα χιονισμένα τοπία της.",
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
