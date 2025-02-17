const question6El = [
  {
    id: "1a",
    status: "Capitals",
    country: "Ουγγαρία",
    image: require("../../../assets/Flags/hungary.png"),
    options: [
      {
        id: "0",
        capital: "Βουδαπέστη",
        country: "Ουγγαρία",
      },
      {
        id: "1",
        capital: "Βουκουρέστι",
        country: "Ρουμανία",
      },
      {
        id: "2",
        capital: "Μπρατισλάβα",
        country: "Σλοβακία",
      },
      {
        id: "3",
        capital: "Λιουμπλιάνα",
        country: "Σλοβενία",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Η πρωτεύουσα της Ουγγαρίας είναι μια εντυπωσιακή πόλη γνωστή για τα θερμά της λουτρά και την όμορφη αρχιτεκτονική της κατά μήκος του ποταμού Δούναβη. Ξεκινά με 'B'!",
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Ουγγαρία",
    country: "Bουδαπέστη",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/italy.png"),
        country: "Iταλία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/hungary.png"),
        country: "Ουγγαρία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/mexico.png"),
        country: "Mέξικο",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/bulgaria.png"),
        country: "Bουλγαρία",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Κοίταξε για το απλό σχέδιο με τρεις οριζόντιες λωρίδες, χωρίς κανένα έμβλημα.",
  },
  {
    id: "1c",
    status: "Guess",
    word: "ΒΟΥΔΑΠΕΣΤΗ",
    country: "Ουγγαρία",
    num: 10,
    letters: "ΠΕΣΤΗΑΒΟΛΥΔΜ",
    img: require("../../../assets/Flags/hungary.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Νέα Ζήλανδία",
    image: require("../../../assets/Flags/newZealand.png"),
    options: [
      {
        id: "0",
        capital: "Όκλαντ",
        country: "Νέα Ζηλανδία",
      },
      {
        id: "1",
        capital: "Καμπέρα",
        country: "Αυστραλία",
      },
      {
        id: "2",
        capital: "Πέρθ",
        country: "Αυστραλία",
      },
      {
        id: "3",
        capital: "Ουέλλινγκτον",
        country: "Νέα Ζηλανδία",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Σκέψου τις πόλεις που είναι πρωτεύουσες. Μόνο δύο από τις επιλογές είναι πρωτεύουσες.",
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Νέα Ζηλανδία",
    country: "Ουέλλινγκτον",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/australia.png"),
        country: "Αυστραλία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/uk.png"),
        country: "Ηνωμένο Βασίλειο",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/newZealand.png"),
        country: "Νέα Ζηλανδία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Fiji.png"),
        country: "Φίτζι",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Κοίταξε για μια σκούρα μπλε σημαία με τέσσερις αστέρες περιγραμμένους σε λευκό. Αυτή η σημαία του Νοτίου Ημισφαιρίου διαθέτει επίσης ένα οικείο σύμβολο σε μία γωνία!",
  },
  {
    id: "2c",
    status: "Guess",
    word: "ΟΥΕΛΛΙΝΓΚΤΟΝ",
    country: "Νέα Ζηλανδία",
    num: 9,
    letters: "ΠΛΡΥΑΓΚΝΟΤΕΙ",
    img: require("../../../assets/Flags/newZealand.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Πακιστάν",
    image: require("../../../assets/Flags/pakistan.png"),
    options: [
      {
        id: "0",
        capital: "Ντάκα",
        country: "Μπανγκλαντές",
      },
      {
        id: "1",
        capital: "Ισλαμαμπάντ",
        country: "Πακιστάν",
      },
      {
        id: "2",
        capital: "Κατμαντού",
        country: "Νεπάλ",
      },
      {
        id: "3",
        capital: "Τιμπού",
        country: "Μπουτάν",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Η πρωτεύουσα του Πακιστάν προέρχεται από την αραβική λέξη 'Ισλάμ', που σημαίνει 'ειρήνη' ή 'υποταγή στον Θεό', και 'αμπάντ', που σημαίνει 'πόλη'. Έτσι, το 'Ισλαμαμπάντ' μπορεί να μεταφραστεί ως 'Πόλη του Ισλάμ'.",
  },
  {
    id: "3b",
    status: "Flags",
    capital: "Πακιστάν",
    country: "Iσλαμαμπάντ",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/pakistan.png"),
        country: "Πακιστάν",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Algeria.png"),
        country: "Aλγερία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: "Αζερμπαϊτζάν",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/tunisia.png"),
        country: "Τυνησία",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Η σημαία του Πακιστάν διαθέτει ένα πράσινο πεδίο με μια λευκή κάθετη λωρίδα στην αριστερή πλευρά. Στο κέντρο του πράσινου, θα βρείτε ένα λευκό ημισέληνο και ένα πεντάκτινο αστέρι, που συμβολίζουν την πρόοδο και το φως.",
  },
  {
    id: "3c",
    status: "Guess",
    word: "ΙΣΛΑΜΑΜΠΑΝΤ",
    country: "Πακιστάν",
    num: 8,
    letters: "ΠΝΜΛΕΙΑΟΣΝΤΥ",
    img: require("../../../assets/Flags/pakistan.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Βενεζουέλα",
    image: require("../../../assets/Flags/venezuela.png"),
    options: [
      {
        id: "0",
        capital: "Μπογκοτά",
        country: "Κολομβία",
      },
      {
        id: "1",
        capital: "Παραμαρίμπο",
        country: "Σουρινάμ",
      },
      {
        id: "2",
        capital: "Καράκας",
        country: "Βενεζουέλα",
      },
      {
        id: "3",
        capital: "Τζώρτζταουν",
        country: "Γουιάνα",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Λοιπόν, δεν είμαι σίγουρος για την απάντηση, αλλά είμαι διχασμένος ανάμεσα στην Καράκας και τη Μπογκοτά.",
  },
  {
    id: "4b",
    status: "Flags",
    capital: "Βενεζουέλα",
    country: "Καράκας",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/romania.png"),
        country: "Ρουμανία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/ecuador.png"),
        country: "Ισημερινός",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/colombia.png"),
        country: "Κολομβία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/venezuela.png"),
        country: "Βενεζουέλα",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Αυτή η σημαία αποτελείται από τρεις οριζόντιες λωρίδες, με παρόμοια χρώματα με τη σημαία της Κολομβίας. Η μεσαία λωρίδα έχει ένα ημισέληνο με οκτώ λευκά αστέρια, που συμβολίζουν τις επαρχίες της χώρας.",
  },
  {
    id: "4c",
    status: "Guess",
    country: "Βενεζουέλα",
    word: "ΚΑΡΑΚΑΣ",
    num: 4,
    letters: "ΑΠΟΙΛΚΕΡΥΔΣΝ",
    img: require("../../../assets/Flags/venezuela.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Σλοβενία",
    image: require("../../../assets/Flags/slovenia.png"),
    options: [
      {
        id: "0",
        capital: "Μπρατισλάβα",
        country: "Σλοβακία",
      },
      {
        id: "1",
        capital: "Βελιγράδι",
        country: "Σερβία",
      },
      {
        id: "2",
        capital: "Ζάγκρεπ",
        country: "Κροατία",
      },
      {
        id: "3",
        capital: "Λιουμπλιάνα",
        country: "Σλοβενία",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: "Νομίζω ότι η σωστή απάντηση είναι η Λιουμπλιάνα.",
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Σλοβενία",
    country: "Λιουμπλιάνα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/costaRica.png"),
        country: "Κόστα Ρίκα",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/slovakia.png"),
        country: "Σλοβακία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/slovenia.png"),
        country: "Σλοβενία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/czechia.png"),
        country: "Τσεχία",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Η σημαία της Σλοβενίας έχει τρεις οριζόντιες λωρίδες: λευκή στην κορυφή, μπλε στη μέση και κόκκινη στο κάτω μέρος. Στην επάνω αριστερή γωνία, υπάρχει ένα εθνόσημο που απεικονίζει το βουνό Τρίγκλαβ και τρία αστέρια.",
  },
  {
    id: "5c",
    status: "Guess",
    word: "ΛΙΟΥΜΠΛΙΑΝΑ",
    country: "Σλοβενία",
    num: 8,
    letters: "ΠΟΑΤΙΣΝΛΕΜΝΥ",
    img: require("../../../assets/Flags/slovenia.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Ινδία",
    image: require("../../../assets/Flags/india.png"),
    options: [
      {
        id: "0",
        capital: "Κατμαντού",
        country: "Νεπάλ",
      },
      {
        id: "1",
        capital: "Μουμπάι",
        country: "Ινδική πόλη",
      },
      {
        id: "2",
        capital: "Νέο Δελχί",
        country: "Ινδία",
      },
      {
        id: "3",
        capital: "Κολκάτα",
        country: "Ινδική πόλη",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Η πρωτεύουσα της Ινδίας είναι μια πολυσύχναστη πόλη γνωστή για την πλούσια ιστορία της, την ποικιλόμορφη κουλτούρα της και τα σημαντικά αξιοθέατα όπως η Πύλη της Ινδίας και το Προεδρικό Μέγαρο. Μόνο δύο από τις επιλογές είναι πρωτεύουσες. Μία από αυτές είναι η πρωτεύουσα του Νεπάλ.",
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Ινδία",
    country: "Nέο Δελχί",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/iran.png"),
        country: "Iράν",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/india.png"),
        country: "Iνδία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/hungary.png"),
        country: "Ουγγαρία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/ireland.png"),
        country: "Iρλανδία",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Λοιπόν, αυτή η σημαία έχει παρόμοια χρώματα με τη σημαία της Ιρλανδίας. Στη μέση της λευκής λωρίδας, θα δεις έναν μπλε τροχό με 24 ακτίνες που ονομάζεται Τσάκρα Άσοκα, που αντιπροσωπεύει την πρόοδο και την αλήθεια.",
  },
  {
    id: "6c",
    status: "Guess",
    word: "ΝΕΟΔΕΛΧΙ",
    country: "Ινδία",
    num: 7,
    letters: "ΑΠΕΡΙΧΛΚΒΟΔΝ",
    img: require("../../../assets/Flags/india.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Κόστα Ρίκα",
    image: require("../../../assets/Flags/costaRica.png"),
    options: [
      {
        id: "0",
        capital: "Σαν Χοσέ",
        country: "Κόστα Ρίκα",
      },
      {
        id: "1",
        capital: "Σαν Σαλβαδόρ",
        country: "Ελ Σαλβαδόρ",
      },
      {
        id: "2",
        capital: "Μανάγουα",
        country: "Νικαράγουα",
      },
      {
        id: "3",
        capital: "Σαν Χουάν",
        country: "Πουέρτο Ρίκο",
      },
    ],

    correctAnswerIndex: 0,
    phoneHelp:
      "Λοιπόν, δεν είμαι σίγουρος για την απάντηση, αλλά είμαι διχασμένος ανάμεσα στο Σαν Χουάν και το Σαν Χοσέ.",
  },
  {
    id: "7b",
    status: "Flags",
    capital: "Κόστα Ρίκα",
    country: "Σαν Χοσέ",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/thailand.png"),
        country: "Tαϊλάνδη",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/puertoRico.jpg"),
        country: "Πουέρτο Ρίκο",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/dominican.png"),
        country: "Δομινικανή Δημοκρατία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/costaRica.png"),
        country: "Κόστα Ρίκα",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Αυτή η σημαία διαθέτει πέντε οριζόντιες λωρίδες. Υπάρχουν δύο πιο λεπτές λευκές λωρίδες πάνω και κάτω από την κόκκινη, που συμβολίζουν την ειρήνη και την ευτυχία.",
  },
  {
    id: "7c",
    status: "Guess",
    word: "ΣΑΝΧΟΣΕ",
    country: "Κόστα Ρίκα",
    num: 6,
    letters: "ΚΛΟΝΑΤΙΣΕΡΧΥ",
    img: require("../../../assets/Flags/costaRica.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Σαουδική Αραβία",
    image: require("../../../assets/Flags/saudi-arabia.png"),
    options: [
      {
        id: "0",
        capital: "Ριάντ",
        country: "Σαουδική Αραβία",
      },
      {
        id: "1",
        capital: "Mουσκάτ",
        country: "Oμάν",
      },
      {
        id: "2",
        capital: "Σαναά",
        country: "Yεμένη",
      },
      {
        id: "3",
        capital: "Αμμάν",
        country: "Ιορδανία",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Η πρωτεύουσα της Σαουδικής Αραβίας είναι μια σύγχρονη πόλη γνωστή για τον εντυπωσιακό της ορίζοντα και τα σημαντικά πολιτιστικά της αξιοθέατα, συμπεριλαμβανομένου του Κέντρου Βασιλείου και του Φρουρίου Μασμάκ. Ξεκινά με 'P'!",
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Σαουδική Αραβία",
    country: "Ριάντ",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/bangladesh.png"),
        country: "Μπανγκλαντές",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/jordan.png"),
        country: "Ιορδανία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/saudi-arabia.png"),
        country: "Σαουδική Αραβία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/United-Arab-Emirates.png"),
        country: "Ηνωμένα Αραβικά \nΕμιράτα",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Ρίξε μια ματιά στη σημαία της Σαουδικής Αραβίας! Είναι όλη πράσινη με μια λευκή αραβική επιγραφή και ένα σπαθί από κάτω. Η επιγραφή είναι η σαχάντα, μια δήλωση πίστης, που συμβολίζει τη δύναμη και την ενότητα.",
  },
  {
    id: "8c",
    status: "Guess",
    word: "ΡΙΑΝΤ",
    country: "Σαουδική Αραβία",
    num: 5,
    letters: "ΠΑΟΣΗΤΜΕΙΡΝΛ",
    img: require("../../../assets/Flags/saudi-arabia.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Πουέρτο Ρίκο",
    image: require("../../../assets/Flags/puertoRico.jpg"),
    options: [
      {
        id: "0",
        capital: "Σαν Ντομίνγκο",
        country: "Δομινικανή Δημοκρατία",
      },
      {
        id: "1",
        capital: "Σαν Χοσέ",
        country: "Κόστα Ρίκα",
      },
      {
        id: "2",
        capital: "Σαν \nΣαλβαδόρ",
        country: "Ελ Σαλβαδόρ",
      },
      {
        id: "3",
        capital: "Σαν Χουάν",
        country: "Πουέρτο Ρίκο",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Λοιπόν, δεν είμαι σίγουρος για την απάντηση, αλλά είμαι ανάμεσα στο Σαν Χουάν και τη Σάντο Ντομίγκο.",
  },
  {
    id: "9b",
    status: "Flags",
    capital: "Πουέρτο Ρίκο",
    country: "Σαν Χουάν",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/dominican.png"),
        country: "Δομινικανή Δημοκρατία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Panama.png"),
        country: "Παναμάς",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Cuba.png"),
        country: "Κούβα",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/puertoRico.jpg"),
        country: "Πουέρτο Ρίκο",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Η σημαία του Πουέρτο Ρίκο έχει πέντε οριζόντιες λωρίδες. Υπάρχει ένα μπλε τρίγωνο αριστερά με ένα λευκό αστέρι μέσα, που αντιπροσωπεύει την ανεξαρτησία και την ελευθερία του νησιού.",
  },
  {
    id: "9c",
    status: "Guess",
    word: "ΣΑΝΧΟΥΑΝ",
    country: "Πουέρτο Ρίκο",
    num: 6,
    letters: "ΣΑΠΟΕΥΡΙΜΝΤΧ",
    img: require("../../../assets/Flags/puertoRico.jpg"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Παραγουάη",
    image: require("../../../assets/Flags/paraguay.png"),
    options: [
      {
        id: "0",
        capital: "Ασουνσιόν",
        country: "Παραγουάη",
      },
      {
        id: "1",
        capital: "Mανάγουα",
        country: "Nικαράγουα",
      },
      {
        id: "2",
        capital: "Σαν Σαλβαδόρ",
        country: "Eλ Σαλβαδόρ",
      },
      {
        id: "3",
        capital: "Πόλη της Γουατεμάλα",
        country: "Γουατεμάλα",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Η πρωτεύουσα της Παραγουάης είναι μια πολυσύχναστη πόλη γνωστή για τη σύγχρονη αρχιτεκτονική της και την πλούσια ιστορία της, που βρίσκεται κατά μήκος του ποταμού Παραγουάη. Ξεκινά με 'A'!",
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Παραγουάη",
    country: "Aσουνσιόν",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/paraguay.png"),
        country: "Παραγουάη",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/netherlands.png"),
        country: "Ολλανδία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/france.png"),
        country: "Γαλλία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/costaRica.png"),
        country: "Κόστα Ρίκα",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Πρόσεξε το μοναδικό έμβλημα από τη μία πλευρά και τις κόκκινες, λευκές και μπλε λωρίδες. Αυτή η νότια αμερικανική χώρα ξεχωρίζει με τον διπλής όψης σχεδιασμό της!",
  },
  {
    id: "10c",
    status: "Guess",
    word: "ΑΣΟΥΝΣΙΟΝ",
    country: "Παραγουάη",
    num: 7,
    letters: "ΤΥΑΟΠΣΝΜΛΕΙΒ",
    img: require("../../../assets/Flags/paraguay.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question6El;
