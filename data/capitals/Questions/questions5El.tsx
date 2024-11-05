const question5El = [
  {
    id: "1a",
    status: "Capitals",
    country: "Ελ Σαλβαδόρ",
    image: require("../../../assets/Flags/elSalvador.png"),
    options: [
      {
        id: "0",
        capital: "Σαν Χοσέ",
        country: "Κόστα Ρίκα",
      },
      {
        id: "1",
        capital: "Tεγκουσι-\nκάλπα",
        country: "Ονδούρα",
      },
      {
        id: "2",
        capital: "Μανάγουα",
        country: "Νικαράγουα",
      },
      {
        id: "3",
        capital: "Σαν \nΣαλβαδόρ",
        country: "Ελ Σαλβαδόρ",
      },
    ],
    correctAnswerIndex: 3,
     phoneHelp: 'Η πρωτεύουσα του Ελ Σαλβαδόρ είναι η μεγαλύτερη πόλη της χώρας, γνωστή για τα γύρω ηφαίστεια και τη ζωντανή της ατμόσφαιρα. Το όνομά της ξεκινά με \'Σ\'.!'
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Ελ Σαλβαδόρ",
    country: "Σαν Σαλβαδόρ",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/nicaragua.png"),
        country: "Νικαράγουα",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/uruguay.png"),
        country: "Ουρουγουάη",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/elSalvador.png"),
        country: "Eλ Σαλβαδόρ",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/argentina.png"),
        country: "Aργεντινή",
      },
    ],
    correctAnswerIndex: 2,
     phoneHelp: 'Αυτή η σημαία διαθέτει τρεις οριζόντιες λωρίδες μπλε και λευκού, με ένα έμβλημα στο κέντρο. Αυτό το έμβλημα δεν είναι τρίγωνο.'
  },
  {
    id: "1c",
    status: "Guess",
    word: "ΣΑΝΣΑΛΒΑΔΟΡ",
    country: "Ελ Σαλβαδόρ",
    num: 8,
    letters: "ΚΛΡΔΟΡΣΑΜΝΒΕ",
    img: require("../../../assets/Flags/elSalvador.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Μαλαισία",
    image: require("../../../assets/Flags/malaysia.png"),
    options: [
      {
        id: "0",
        capital: "Τζακάρτα",
        country: "Ινδονησία",
      },
      {
        id: "1",
        capital: "Κουάλα \nΛουμπούρ",
        country: "Μαλαισία",
      },
      {
        id: "2",
        capital: "Μανίλα",
        country: "Φιλιππίνες",
      },
      {
        id: "3",
        capital: "Πνόμ Πεν",
        country: "Καμπότζη",
      },
    ],
    correctAnswerIndex: 1,
      phoneHelp: 'Λοιπόν, δεν είμαι σίγουρος για την απάντηση, αλλά είμαι ανάμεσα στη Τζακάρτα και την Κουάλα Λουμπούρ.'
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Mαλαίσία",
    country: "Kουάλα Λουμπούρ",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/malaysia.png"),
        country: "Μαλαίσία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/philipines.png"),
        country: "Φιλιππίνες",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Cambodia.png"),
        country: "Καμπότζη",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/thailand.png"),
        country: "Ταϊλάνδη",
      },
    ],
    correctAnswerIndex: 0,
     phoneHelp: 'Αυτή η σημαία είναι παρόμοια με τη σημαία των Ηνωμένων Πολιτειών της Αμερικής, αλλά με ένα κίτρινο ημισέληνο και ένα αστέρι στην πάνω αριστερή γωνία.'
  },
  {
    id: "2c",
    status: "Guess",
    word: "ΚΟΥΑΛΑΛΟΥΜΠΟΥΡ",
    country: "Mαλαισία",
    num: 8,
    letters: "ΑΚΛΡΟΥΠΕΜΚΙΝ",
    img: require("../../../assets/Flags/malaysia.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Σουηδία",
    image: require("../../../assets/Flags/sweden.png"),
    options: [
      {
        id: "0",
        capital: "Κοπεγχάγη",
        country: "Δανία",
      },
      {
        id: "1",
        capital: "Όσλο",
        country: "Nορβηγία",
      },
      {
        id: "2",
        capital: "Ελσίνκι",
        country: "Φιλανδία",
      },
      {
        id: "3",
        capital: "Στοκχόλμη",
        country: "Σουηδία",
      },
    ],
    correctAnswerIndex: 3,
      phoneHelp: 'Η πρωτεύουσα της Σουηδίας είναι μια γραφική πόλη διάσημη για τα κανάλια της και τα ιστορικά της κτίρια. Είναι η μεγαλύτερη πόλη της χώρας και ξεκινά με \'Σ\'!'
  },
  {
    id: "3b",
    status: "Flags",
    capital: "Σουηδία",
    country: "Στοκχόλμη",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/norway.png"),
        country: "Νορβηγία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/denmark.png"),
        country: "Δανία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/sweden.png"),
        country: "Σουηδία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/finland.png"),
        country: "Φιλανδία",
      },
    ],
    correctAnswerIndex: 2,
     phoneHelp: 'Αυτή η σημαία διαθέτει έναν σκανδιναβικό σταυρό που εκτείνεται μέχρι τις άκρες, με τα ίδια χρώματα με τη σημαία της Ουκρανίας, συμβολίζοντας την χριστιανική κληρονομιά του έθνους και τους ιστορικούς του δεσμούς με άλλες σκανδιναβικές χώρες.'
  },
  {
    id: "3c",
    status: "Guess",
    word: "ΣΤΟΚΧΟΛΜΗ",
    country: "Σουηδία",
    num: 8,
    letters: "ΠΟΡΤΥΛΜΑΧΣΗΚ",
    img: require("../../../assets/Flags/sweden.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Βιετνάμ",
    image: require("../../../assets/Flags/vietnam.png"),
    options: [
      {
        id: "0",
        capital: "Μπανγκόκ",
        country: "Ταϊλάνδη",
      },
      {
        id: "1",
        capital: "Ανόι",
        country: "Βιετνάμ",
      },
      {
        id: "2",
        capital: "Πνομ Πεν",
        country: "Καμπότζη",
      },
      {
        id: "3",
        capital: "Πεκίνο",
        country: "Κίνα",
      },
    ],
    correctAnswerIndex: 1,
      phoneHelp: 'Σίγουρα η Μπανγκόκ είναι η πρωτεύουσα της Ταϊλάνδης και το Πεκίνο είναι η πρωτεύουσα της Κίνας.'
  },
  {
    id: "4b",
    status: "Flags",
    capital: "Βιετνάμ",
    country: "Ανόι",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/vietnam.png"),
        country: "Βιετνάμ",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/china.png"),
        country: "Κίνα",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/morocco.png"),
        country: "Mαρόκο",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/tunisia.png"),
        country: "Tυνησία",
      },
    ],
    correctAnswerIndex: 0,
      phoneHelp: 'Η σημαία του Βιετνάμ έχει κόκκινο φόντο με ένα μεγάλο αστέρι στο κέντρο. Το κόκκινο αντιπροσωπεύει τον αγώνα για ανεξαρτησία, ενώ το κίτρινο αστέρι συμβολίζει την ενότητα.'
  },
  {
    id: "4c",
    status: "Guess",
    country: "Βιετνάμ",
    word: "ΑΝΟΙ",
    num: 4,
    letters: "ΠΛΚΟΤΕΔΝΑΜΙΥ",
    img: require("../../../assets/Flags/vietnam.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Ελβετία",
    image: require("../../../assets/Flags/switzerland.png"),
    options: [
      {
        id: "0",
        capital: "Άγκυρα",
        country: "Tουρκία",
      },
      {
        id: "1",
        capital: "Ρέικιαβικ",
        country: "Iσλανδία",
      },
      {
        id: "2",
        capital: "Βιέννη",
        country: "Aυστρία",
      },
      {
        id: "3",
        capital: "Βέρνη",
        country: "Ελβετιά",
      },
    ],
    correctAnswerIndex: 3,
      phoneHelp: 'Σκέψου πόλεις που βρίσκονται στην κεντρική Ευρώπη.'
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Ελβετία",
    country: "Bέρνη",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/switzerland.png"),
        country: "Ελβετία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/turkey.png"),
        country: "Tουρκίά",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/taiwan.png"),
        country: "Tαϊβάν",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/poland.png"),
        country: "Πολωνία",
      },
    ],
    correctAnswerIndex: 0,
     phoneHelp: 'Η σημαία της Ελβετίας έχει κόκκινο φόντο με έναν λευκό σταυρό στο κέντρο. Το σχέδιο αντιπροσωπεύει την ενότητα και την ουδετερότητα της Ελβετίας.'
  },
  {
    id: "5c",
    status: "Guess",
    word: "ΒΕΡΝΗ",
    country: "Ελβετία",
    num: 5,
    letters: "ΙΕΤΗΑΠΟΛΜΝΒΡ",
    img: require("../../../assets/Flags/switzerland.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Ισλανδία",
    image: require("../../../assets/Flags/iceland.png"),
    options: [
      {
        id: "0",
        capital: 'Όσλο',
        country: 'Νορβηγία'
      },
      {
        id: "1",
        capital: 'Τάλιν',
        country: 'Εσθονία'
      },
      {
        id: "2",
        capital: 'Ρέικιαβικ',
        country: 'Ισλανδία'
      },
      {
        id: "3",
        capital: 'Στοκχόλμη',
        country: 'Σουηδία'
      },
    ],

    correctAnswerIndex: 2,
      phoneHelp: 'Η πρωτεύουσα της Ισλανδίας είναι μια πολύχρωμη πόλη γνωστή για την μοναδική αρχιτεκτονική της και τις εντυπωσιακές φυσικές της ομορφιές. Είναι η μεγαλύτερη πόλη της χώρας και ξεκινά με \'P\'!'
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Ισλανδία",
    country: "Ρέικιαβικ",
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
        img: require("../../../assets/Flags/iceland.png"),
        country: "Iσλανδία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Fiji.png"),
        country: "Φίτζι",
      },
    ],
    correctAnswerIndex: 2,
     phoneHelp: 'Η σημαία της Ισλανδίας έχει μπλε φόντο με έναν σταυρό περιγραμμένο σε λευκό. Τα χρώματα αντιπροσωπεύουν τα φυσικά χαρακτηριστικά της χώρας: το μπλε για τον ωκεανό, το λευκό για τον πάγο και το χιόνι, και το κόκκινο για τις ηφαιστειακές εκρήξεις.'
  },
  {
    id: "6c",
    status: "Guess",
    word: "ΡΕΙΚΙΑΒΙΚ",
    country: "Iσλανδία",
    num: 6,
    letters: "ΠΡΟΤΙΑΜΝΒΣΕΚ",
    img: require("../../../assets/Flags/iceland.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Ουκρανία",
    image: require("../../../assets/Flags/ukrainer.png"),
    options: [
      {
        id: "0",
        capital: 'Κίεβο',
        country: 'Ουκρανία'
      },
      {
        id: "1",
        capital: 'Τάλιν',
        country: 'Εσθονία'
      },
      {
        id: "2",
        capital: 'Μινσκ',
        country: 'Λευκορωσία'
      },
      {
        id: "3",
        capital: 'Ρίγα',
        country: 'Λετονία'
      },

    ],
    correctAnswerIndex: 0,
       phoneHelp: 'Η πρωτεύουσα της Ουκρανίας είναι μια ζωντανή πόλη γνωστή για την πλούσια ιστορία της, την εντυπωσιακή αρχιτεκτονική και τα πολιτιστικά της αξιοθέατα. Βρίσκεται κατά μήκος του ποταμού Δνείπερου και ξεκινά με \'K\'!'
  },
  {
    id: "7b",
    status: "Flags",
    capital: "Ουκρανία",
    country: "Kίεβο",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/sweden.png"),
        country: "Σουηδία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/ukrainer.png"),
        country: "Ουκρανία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/brazil.png"),
        country: "Bραζιλία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/bolivia.png"),
        country: "Bολιβία",
      },
    ],
    correctAnswerIndex: 1,
     phoneHelp: 'Η σημαία της Ουκρανίας αποτελείται από δύο οριζόντιες λωρίδες. Το μπλε αντιπροσωπεύει τον ουρανό, ενώ το κίτρινο συμβολίζει τα χωράφια σιταριού.'
  },
  {
    id: "7c",
    status: "Guess",
    word: "ΚΙΕΒΟ",
    country: "Ουκρανία",
    num: 5,
    letters: "ΝΜΕΙΤΟΑΠΒΚΛΣ",
    img: require("../../../assets/Flags/ukrainer.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Κένυα",
    image: require("../../../assets/Flags/kenya.png"),
    options: [
      {
        id: "0",
        capital: "Αντίς Αμπέμπα",
        country: "Αιθιοπία",
      },
      {
        id: "1",
        capital: "Λουσάκα",
        country: "Zάμπια",
      },
      {
        id: "2",
        capital: "Χαράρε",
        country: "Zιμπάμπουε",
      },
      {
        id: "3",
        capital: "Nαϊρόμπι",
        country: "Kένυα",
      },
    ],
    correctAnswerIndex: 3,
      phoneHelp: 'Είμαι πολύ κοντά στο να δώσω το Ναϊρόμπι ως τελική απάντηση.'
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Κένυα",
    country: "Nαϊρόμπι",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Ethiopia.png"),
        country: "Αιθιοπία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Zambia.png"),
        country: "Zαμπία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Zimbabwe.png"),
        country: "Zιμπάμπουε",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/kenya.png"),
        country: "Kένυα",
      },
    ],
    correctAnswerIndex: 3,
      phoneHelp: 'Η σημαία της Κένυας διαθέτει τρεις οριζόντιες λωρίδες με λευκά περιθώρια. Το μαύρο αντιπροσωπεύει τον λαό, το κόκκινο συμβολίζει τον αγώνα για ανεξαρτησία, και το πράσινο αντιπροσωπεύει τη γη.'
  },
  {
    id: "8c",
    status: "Guess",
    word: "ΝΑΙΡΟΜΠΙ",
    country: "Kένυα",
    num: 7,
    letters: "ΠΟΣΑΛΜΕΝΣΙΚΡ",
    img: require("../../../assets/Flags/kenya.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Mάλτα",
    image: require("../../../assets/Flags/malta.png"),
    options: [
      {
        id: "0",
        capital: "Mαδρίτη",
        country: "Ισπανία",
      },
      {
        id: "1",
        capital: "Βαλέτα",
        country: "Mάλτα",
      },
      {
        id: "2",
        capital: "Ρώμη",
        country: "Iταλία",
      },
      {
        id: "3",
        capital: "Zάγκρεπ",
        country: "Κροατία",
      },
    ],
    correctAnswerIndex: 1,
      phoneHelp: 'Η πρωτεύουσα της Μάλτας είναι μια ιστορική πόλη γνωστή για την εντυπωσιακή αρχιτεκτονική της και την πλούσια ιστορία της. Βρίσκεται στο νησί με το ίδιο όνομα και ξεκινά με \'B\'!'
  },
  {
    id: "9b",
    status: "Flags",
    capital: "Mάλτα",
    country: "Βαλέτα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/malta.png"),
        country: "Mάλτα",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/poland.png"),
        country: "Πολωνία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/singapore.png"),
        country: "Σιγκαπούρη",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/czechia.png"),
        country: "Τσεχία",
      },
    ],
    correctAnswerIndex: 0,
      phoneHelp: 'Η σημαία της Μάλτας αποτελείται από δύο κάθετες λωρίδες: λευκή από την αριστερή πλευρά και κόκκινη από την άλλη πλευρά. Διαθέτει μια αναπαράσταση του Σταυρού του Γεωργίου στην επάνω αριστερή γωνία, συμβολίζοντας το θάρρος και την τιμή.'
  },
  {
    id: "9c",
    status: "Guess",
    country: "Μάλτα",
    word: "ΒΑΛΕΤΑ",
      num: 5,
      letters: "ΜΝΤΡΕΠΟΛΒΑΥΔ",
    img: require("../../../assets/Flags/malta.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Σερβία",
    image: require("../../../assets/Flags/serbia.png"),
    options: [
      {
        id: "0",
        capital: "Μπρατισλάβα",
        country: "Σλοβακία",
      },
      {
        id: "1",
        capital: "Λιουμπλιάνα",
        country: "Σλοβενία",
      },
      {
        id: "2",
        capital: "Βελιγράδι",
        country: "Σερβία",
      },
      {
        id: "3",
        capital: "Σόφια",
        country: "Bουλγαρία",
      },
    ],
    correctAnswerIndex: 2,
       phoneHelp: 'Η πρωτεύουσα της Σερβίας είναι μια ζωντανή πόλη γνωστή για την έντονη νυχτερινή ζωή της και τα πολιτιστικά της αξιοθέατα. Βρίσκεται στη συμβολή δύο ποταμών, του Σάβα και του Δούναβη, και ξεκινά με \'B\'!'
  },
  {
    id: "10b",
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
        img: require("../../../assets/Flags/slovenia.png"),
        country: "Σλοβενία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/serbia.png"),
        country: "Σερβία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/russia.png"),
        country: "Ρωσία",
      },
    ],
    correctAnswerIndex: 2,
      phoneHelp: 'Η σημαία της Σερβίας αποτελείται από τρεις οριζόντιες λωρίδες, με παρόμοια χρώματα με τη σημαία της Ρωσίας αλλά αναποδογυρισμένα. Τα χρώματα αντιπροσωπεύουν το Πανσλαβικό κίνημα, και το εθνόσημο βρίσκεται στην αριστερή πλευρά.'
  },
  {
    id: "10c",
    status: "Guess",
    word: "ΒΕΛΙΓΡΑΔΙ",
    country: "Σερβία",
    num: 8,
    letters: "ΒΕΝΜΑΛΚΠΡΙΓΔ",
    img: require("../../../assets/Flags/serbia.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question5El;
