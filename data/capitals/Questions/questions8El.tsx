const question8El = [
  {
    id: "1a",
    status: "Capitals",
    country: "Βολιβία",
    image: require("../../../assets/Flags/bolivia.png"),
    options: [
      {
        id: "0",
        capital: "Κίτο",
        country: "Ισημερινός",
      },
      {
        id: "1",
        capital: "Λίμα",
        country: "Περού",
      },
      {
        id: "2",
        capital: "Καράκας",
        country: "Βενεζουέλα",
      },
      {
        id: "3",
        capital: "Λα Παζ",
        country: "Βολιβία",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Λοιπόν, δεν είμαι σίγουρος για την απάντηση, αλλά είμαι διχασμένος ανάμεσα στη Λα Παζ και τη Λίμα.",
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Bολιβία",
    country: "Λα Παζ",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/senegal.png"),
        country: "Σενεγάλη",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/brazil.png"),
        country: "Bραζιλία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/ecuador.png"),
        country: "Ισημερινός",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/bolivia.png"),
        country: "Bολιβία",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
     "Η σημαία της Βολιβίας έχει τρεις οριζόντιες λωρίδες: κόκκινη, κίτρινη και πράσινη, με ένα έμβλημα στο κέντρο.",
  },
  {
    id: "1c",
    status: "Guess",
    word: "ΛΑΠΑΖ",
    country: "Bολιβία",
    num: 4,
    letters: "ΠΑΜΕΔΧΖΛΟΙΥΝ",
    img: require("../../../assets/Flags/bolivia.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Ρωσία",
    image: require("../../../assets/Flags/russia.png"),
    options: [
      {
        id: "0",
        capital: "Mόσχα",
        country: "Ρωσία",
      },
      {
        id: "1",
        capital: "Βελιγράδι",
        country: "Σερβία",
      },
      {
        id: "2",
        capital: "Zάγκρεπ",
        country: "Κροατία",
      },
      {
        id: "3",
        capital: "Λιουμπλιάνα",
        country: "Σλοβενία",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
     "Οι κύριες ατραξιόν της πρωτεύουσας αυτής περιλαμβάνουν την εμβληματική Κόκκινη Πλατεία, το Κρεμλίνο και τον Καθεδρικό Ναό του Αγίου Βασιλείου. Η πόλη διαθέτει ένα εντυπωσιακό μετρό, διάσημα θέατρα όπως το Μπολσόι και μια ζωντανή καλλιτεχνική σκηνή.",
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Ρωσία",
    country: "Mόσχα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/russia.png"),
        country: "Ρωσία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/slovakia.png"),
        country: "Σλοβακία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/finland.png"),
        country: "Φιλανδία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/skorea.png"),
        country: "Νότια Κορέα",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "h σημαία της Ρωσίας έχει τρεις οριζόντιες λωρίδες: λευκή στην κορυφή, μπλε στη μέση και κόκκινη στο κάτω μέρος.",
  },
  {
    id: "2c",
    status: "Guess",
    word: "ΜΟΣΧΑ",
    country: "Ρωσία",
    num: 5,
    letters: "ΑΚΡΕΟΠΣΧΜΙΓΝ",
    img: require("../../../assets/Flags/russia.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Τουρκία",
    image: require("../../../assets/Flags/turkey.png"),
    options: [
      {
        id: "0",
        capital: "Αμμάν",
        country: "Ιορδανία",
      },
      {
        id: "1",
        capital: "Δαμασκός",
        country: "Συρία",
      },
      {
        id: "2",
        capital: "Άγκυρα",
        country: "Tουρκία",
      },
      {
        id: "3",
        capital: "Bηρυτός",
        country: "Λίβανος",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: "Είμαι σχεδόν σίγουρος ότι η σωστή απάντηση είναι η Άγκυρα.",
  },
  {
    id: "3b",
    status: "Flags",
    capital: "Τουρκία",
    country: "Άγκυρα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/tunisia.png"),
        country: "Τυνησία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/libya.png"),
        country: "Λιβύη",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/turkey.png"),
        country: "Tουρκία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Algeria.png"),
        country: "Aλγερία",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "H σημαία της Τουρκίας έχει φωτεινό κόκκινο φόντο με μια λευκή ημισέληνο και ένα αστέρι στο κέντρο.",
  },

  {
    id: "3c",
    status: "Guess",
    word: "ΑΓΚΥΡΑ",
    country: "Tουρκία",
    num: 5,
    letters: "ΚΠΡΥΙΑΚΕΝΜΓΟ",
    img: require("../../../assets/Flags/turkey.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Νικαράγουα",
    image: require("../../../assets/Flags/nicaragua.png"),
    options: [
      {
        id: "0",
        capital: "Ασουνσιόν",
        country: "Παραγουάη",
      },
      {
        id: "1",
        capital: "Moντεβιδέο",
        country: "Ουρουγουάη",
      },
      {
        id: "2",
        capital: "Μανάγουα",
        country: "Nικαράγουα",
      },
      {
        id: "3",
        capital: "Κοστα Ρίκα",
        country: "Σαν Χοσέ",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Λοιπόν, δεν είμαι σίγουρος για την απάντηση, αλλά είμαι ανάμεσα στη Μανάγκουα και το Σαν Χοσέ.",
  },
  {
    id: "4b",
    status: "Flags",
    capital: "Νικαράγουα",
    country: "Mανάγουα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/uruguay.png"),
        country: "Ουρουγουάη",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/guatemala.png"),
        country: "Γουατεμάλα",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/nicaragua.png"),
        country: "Nικαράγουα",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/paraguay.png"),
        country: "Παραγουάη",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Αυτή η σημαία έχει τρεις οριζόντιες λωρίδες: μπλε και λευκή. Στη μεσαία λωρίδα υπάρχει ένα έμβλημα, το οποίο απεικονίζει ένα τρίγωνο με ένα ηφαίστειο, συμβολίζοντας τους πλούσιους φυσικούς πόρους της χώρας.",
  },
  {
    id: "4c",
    status: "Guess",
    country: "Νικαράγουα",
    word: "ΜΑΝΑΓΟΥΑ",
    num: 6,
    letters: "ΠΟΤΡΕΥΓΚΛΑΜΝ",
    img: require("../../../assets/Flags/nicaragua.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Αρμενία",
    image: require("../../../assets/Flags/armenia.png"),
    options: [
      {
        id: "0",
        capital: "Τιφλίδα",
        country: "Γεωργία",
      },
      {
        id: "1",
        capital: "Άγκυρα",
        country: "Tουρκία",
      },
      {
        id: "2",
        capital: "Tεχεράνη",
        country: "Iράν",
      },
      {
        id: "3",
        capital: "Γερεβάν",
        country: "Aρμενία",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Λοιπόν, δεν είμαι σίγουρος για την απάντηση, αλλά είμαι ανάμεσα στην Ερεβάν και την Τυφλίδα.",
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Αρμενία",
    country: "Γερεβάν",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/lithuania.png"),
        country: "Λιθουανία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: "Aζερμπαϊτζάν",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/georgia.png"),
        country: "Γεωργία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/armenia.png"),
        country: "Aρμενία",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Ρίξε μια ματιά στη σημαία της Αρμενίας! Έχει τρεις οριζόντιες λωρίδες: κόκκινη στην κορυφή, μπλε στη μέση και πορτοκαλί στο κάτω μέρος.",
  },
  {
    id: "5c",
    status: "Guess",
    word: "ΓΕΡΕΒΑΝ",
    country: "Aρμενία",
    num: 6,
    letters: "ΓΠΕΑΜΚΝΡΒΟΙΥ",
    img: require("../../../assets/Flags/armenia.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Νιγηρία",
    image: require("../../../assets/Flags/nigeria.png"),
    options: [
      {
        id: "0",
        capital: "Ντακάρ",
        country: "Σενεγάλη",
      },
      {
        id: "1",
        capital: "Γιαουντέ",
        country: "Καμερούν",
      },
      {
        id: "2",
        capital: "Αμπούχα",
        country: "Νιγηρία",
      },
      {
        id: "3",
        capital: "Άκκρα",
        country: "Γκάνα",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: "Είμαι σίγουρος ότι η σωστή απάντηση είναι η Αμπούτζα.",
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Nigeria",
    country: "Αμπούχα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Cameroon.png"),
        country: "Καμερούν",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/nigeria.png"),
        country: "Nιγηρία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/jamaica.png"),
        country: "Τζαμάικα",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Ghana.png"),
        country: "Γκάνα",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Ρίξε μια ματιά στη σημαία της Νιγηρίας! Έχει τρεις κατακόρυφες λωρίδες: πράσινες στα πλάγια και λευκή στη μέση.",
  },
  {
    id: "6c",
    status: "Guess",
    word: "ΑΜΠΟΥΧΑ",
    country: "Nιγηρία",
    num: 6,
    letters: "ΤΑΥΟΠΜΝΓΛΙΧΕ",
    img: require("../../../assets/Flags/nigeria.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Νότια Αφρική",
    image: require("../../../assets/Flags/safrica.png"),
    options: [
      {
        id: "0",
        capital: "Λουάντα",
        country: "Ανγκόλα",
      },
      {
        id: "1",
        capital: "Ντοντόμα",
        country: "Tανζανία",
      },
      {
        id: "2",
        capital: "Πρετόρια",
        country: "Νότια Αφρική",
      },
      {
        id: "3",
        capital: "Γκαμπορόνε",
        country: "Μποτσουάνα",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Λοιπόν, δεν είμαι σίγουρος για την απάντηση, αλλά είμαι ανάμεσα στην Πρετόρια και την Ντόδομα.",
  },
  {
    id: "7b",
    status: "Flags",
    capital: "Νότια Αφρική",
    country: "Πρετόρια",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Zambia.png"),
        country: "Zάμπια",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Zimbabwe.png"),
        country: "Zιμπάμπουε",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/safrica.png"),
        country: "Νότια Αφρική",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/angola.png"),
        country: "Aνγκόλα",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Αυτή η σημαία έχει ένα μοναδικό σχέδιο με σχήμα 'Y' στο κέντρο. Τα χρώματα αντιπροσωπεύουν την ποικιλία και την ενότητα της χώρας.",
  },
  {
    id: "7c",
    status: "Guess",
    word: "ΠΡΕΤΟΡΙΑ",
    country: "Νότια Αφρική",
    num: 7,
    letters: "ΠΑΜΡΕΙΤΟΝΓΥΛ",
    img: require("../../../assets/Flags/safrica.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Τυνησία",
    image: require("../../../assets/Flags/tunisia.png"),
    options: [
      {
        id: "0",
        capital: "Τύνιδα",
        country: "Tυνισία",
      },
      {
        id: "1",
        capital: "Αλγέρι",
        country: "Aλγερία",
      },
      {
        id: "2",
        capital: "Τρίπολι",
        country: "Λιβύη",
      },
      {
        id: "3",
        capital: "Ραμπάτ",
        country: "Mαρόκο",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Ορισμένες χώρες έχουν πρωτεύουσες με ονόματα παρόμοια με το όνομα της χώρας.",
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Τυνησία",
    country: "Τύνιδα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/tunisia.png"),
        country: "Τυνησία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/turkey.png"),
        country: "Tουρκία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Algeria.png"),
        country: "Aλγερία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags//libya.png"),
        country: "Λιβύη",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Ρίξε μια ματιά στη σημαία της Τυνησίας! Υπάρχει μια κόκκινη ημισέληνος και ένα κόκκινο αστέρι. Η σημαία είναι παρόμοια με τη σημαία της Τουρκίας.",
  },
  {
    id: "8c",
    status: "Guess",
    word: "ΤΥΝΙΔΑ",
    country: "Tυνησία",
    num: 6,
    letters: "ΤΝΙΗΔΠΑΟΕΛΜΥ",
    img: require("../../../assets/Flags/tunisia.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Σερβία",
    image: require("../../../assets/Flags/serbia.png"),
    options: [
      {
        id: "0",
        capital: "Tίρανα",
        country: "Aλβανία",
      },
      {
        id: "1",
        capital: "Σόφια",
        country: "Bουλγαρία",
      },
      {
        id: "2",
        capital: "Zάγκρεπ",
        country: "Κροατία",
      },
      {
        id: "3",
        capital: "Bελιγράδι",
        country: "Σερβία",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Λοιπόν, δεν είμαι σίγουρος για την απάντηση, αλλά είμαι ανάμεσα στη Ζάγκρεμπ και το Βελιγράδι.",
  },
  {
    id: "9b",
    status: "Flags",
    capital: "Σερβία",
    country: "Bελιγράδι",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/slovakia.png"),
        country: "Σλοβακία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/croatia.png"),
        country: "Κροατία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/bulgaria.png"),
        country: "Bουλγαρία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/serbia.png"),
        country: "Σερβία",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Αυτή η σημαία έχει τρεις οριζόντιες λωρίδες σε χρώματα παρόμοια με αυτά των ρωσικών και κροατικών σημαιών. Στην αριστερή πλευρά, υπάρχει το εθνικό έμβλημα που απεικονίζει έναν διπλό αετό και ένα στέμμα.",
  },
  {
    id: "9c",
    status: "Guess",
    country: "Σερβία",
    word: "ΒΕΛΙΓΡΑΔΙ",
    num: 8,
    letters: "ΠΟΕΡΓΙΔΛΑΒΜΣ",
    img: require("../../../assets/Flags/serbia.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Αωγκόλα",
    image: require("../../../assets/Flags/angola.png"),
    options: [
      {
        id: "0",
        capital: "Ντακάρ",
        country: "Σενεγάλη",
      },
      {
        id: "1",
        capital: "Άκκρα",
        country: "Γκάνα",
      },
      {
        id: "2",
        capital: "Αμπούχα",
        country: "Νιγηρία",
      },
      {
        id: "3",
        capital: "Λουάντα",
        country: "Ανγκόλα",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Αυτή είναι μια δύσκολη ερώτηση. Δεν έχω ιδέα ποια είναι η σωστή απάντηση.",
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Ανγκόλα",
    country: "Λουάντα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/kenya.png"),
        country: "Κένυα",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/angola.png"),
        country: "Aνγκόλα",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Ethiopia.png"),
        country: "Αιθιοπία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Cameroon.png"),
        country: "Καμερούν",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Η σημαία της Αγκόλας στο κέντρο υπάρχει ένα έμβλημα που απεικονίζει έναν μισό τροχό, ένα ματσέτα και ένα αστέρι, συμβολίζοντας τη βιομηχανία, τη γεωργία και την πρόοδο.",
  },
  {
    id: "10c",
    status: "Guess",
    word: "ΛΟΥΑΝΤΑ",
    country: "Aνγκόλα",
    num: 6,
    letters: "ΤΑΠΜΥΟΔΛΝΕΙΚ",
    img: require("../../../assets/Flags/angola.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question8El;
