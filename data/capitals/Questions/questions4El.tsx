const question4El = [
  {
    id: "1a",
    status: "Capitals",
    country: "Χιλή",
    image: require("../../../assets/Flags/chile.png"),
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
        capital: "Ασουνσιόν",
        country: "Παραγουάη",
      },
      {
        id: "3",
        capital: "Σαντιάγο",
        country: "Χιλη",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp: "Είμαι σχεδόν σίγουρος ότι η σωστή απάντηση είναι το Σαντιάγο.",
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Χιλή",
    country: "Σαντιάγο",
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
        img: require("../../../assets/Flags/philipines.png"),
        country: "Φιλιππίνες",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Cuba.png"),
        country: "Κούβα",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Αυτή η σημαία έχει δύο οριζόντιες λωρίδες, με ένα μπλε τετράγωνο στην επάνω αριστερή γωνία που περιέχει ένα λευκό αστέρι, συμβολίζοντας την ανεξαρτησία και την τιμή.",
  },
  {
    id: "1c",
    status: "Guess",
    word: "ΣΑΝΤΙΑΓΟ",
    country: "Chile",
    num: 7,
    letters: "ΠΡΤΥΑΟΝΜΣΛΙΓ",
    img: require("../../../assets/Flags/chile.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Βέλγιο",
    image: require("../../../assets/Flags/belgium.png"),
    options: [
      {
        id: "0",
        capital: "Βερολίνο",
        country: "Γερμανία",
      },
      {
        id: "1",
        capital: "Βρυξέλλες",
        country: "Βέλγιο",
      },
      {
        id: "2",
        capital: "Άμστερνταμ",
        country: "Ολλανδία",
      },
      {
        id: "3",
        capital: "Παρίσι",
        country: "Γαλλία",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Η πρωτεύουσα του Βελγίου είναι διάσημη για το γεγονός ότι είναι η έδρα της Ευρωπαϊκής Ένωσης και του ΝΑΤΟ, με μνημεία όπως η Γκραν Πλας και το Ατόμιουμ.",
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Βέλγιο",
    country: "Βρυξέλλες",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/belgium.png"),
        country: "Βέλγιο",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/hungary.png"),
        country: "Ουγγαρία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/germany.png"),
        country: "Γερμανία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/italy.png"),
        country: "Iταλία",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Αυτή η σημαία αποτελείται από τρεις κατακόρυφες ρίγες: μαύρη, κίτρινη και κόκκινη, που συμβολίζουν τη δύναμη, τον πλούτο και την ανδρεία.",
  },
  {
    id: "2c",
    status: "Guess",
    word: "ΒΡΥΞΕΛΛΕΣ",
    country: "Bέλγιο",
    num: 7,
    letters: "ΠΟΕΡΤΥΙΑΣΞΒΛ",
    img: require("../../../assets/Flags/belgium.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Παναμάς",
    image: require("../../../assets/Flags/Panama.png"),
    options: [
      {
        id: "0",
        capital: "Σαν Χοσέ",
        country: "Κόστα Ρίκα",
      },
      {
        id: "1",
        capital: "Πόλη του \nΠαναμά",
        country: "Παναμάς",
      },
      {
        id: "2",
        capital: "Μπογκοτά",
        country: "Κολομβία",
      },
      {
        id: "3",
        capital: "Καράκας",
        country: "Βενεζουέλα",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Η πρωτεύουσα του Παναμά είναι γνωστή για την σύγχρονη γραμμή του ορίζοντα, την ιστορική περιοχή Κασκο Βιέχο και την εγγύτητά της με το διάσημο κανάλι του Παναμά.",
  },
  {
    id: "3b",
    status: "Flags",
    capital: "Παναμάς",
    country: "Πόλη του Παναμά",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Cuba.png"),
        country: "Κούβα",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/puertoRico.jpg"),
        country: "Πουέρτο Ρίκο",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Panama.png"),
        country: "Παναμάς",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/dominican.png"),
        country: "Δομινικανή \nΔημοκρατία",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Αυτή η σημαία είναι χωρισμένη σε τέσσερις τομείς: δύο λευκές ενότητες με ένα μπλε αστέρι σε μία και ένα κόκκινο αστέρι στην άλλη, μαζί με κόκκινες και μπλε τετράγωνες περιοχές, συμβολίζοντας την πολιτική ισορροπία και την ειρήνη.",
  },
  {
    id: "3c",
    status: "Guess",
    word: "ΠΑΝΑΜΑΣ",
    country: "Παναμάς",
    num: 5,
    letters: "ΠΑΟΕΛΡΜΣΙΟΥΝ",
    img: require("../../../assets/Flags/Panama.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Λιβύη",
    image: require("../../../assets/Flags/libya.png"),
    options: [
      {
        id: "0",
        capital: "Τρίπολη",
        country: "Λιβύη",
      },
      {
        id: "1",
        capital: "Αλγέρι",
        country: "Αλγερία",
      },
      {
        id: "2",
        capital: "Ραμπάτ",
        country: "Μαρόκο",
      },
      {
        id: "3",
        capital: "Τύνιδα",
        country: "Tυνησία",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Η πρωτεύουσα της Λιβύης είναι μια πολυσύχναστη παράκτια πόλη κατά μήκος της Μεσογείου. Γνωστή για την ιστορική της αρχιτεκτονική, είναι επίσης η μεγαλύτερη πόλη της χώρας. Κοίταξε για ένα όνομα που αρχίζει με 'Τ'!",
  },
  {
    id: "4b",
    status: "Flags",
    capital: "Λιβύη",
    country: "Τρίπολη",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/libya.png"),
        country: "Λιβύη",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Algeria.png"),
        country: "Αλγερία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/pakistan.png"),
        country: "Πακιστάν",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: "Aζερμπαϊτζάν",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Αυτή η σημαία έχει τρεις οριζόντιες ρίγες με μια λευκή ημισέληνο και αστέρι στο κέντρο της μαύρης ρίγας, συμβολίζοντας το Ισλάμ και την ενότητα.",
  },
  {
    id: "4c",
    status: "Guess",
    country: "Λιβύη",
    word: "ΤΡΙΠΟΛΗ",
    num: 7,
    letters: "ΡΠΛΚΝΟΑΤΗΙΣΔ",
    img: require("../../../assets/Flags/libya.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Πολωνία",
    image: require("../../../assets/Flags/poland.png"),
    options: [
      {
        id: "0",
        capital: "Κρακοβία",
        country: "Πολωνία",
      },
      {
        id: "1",
        capital: "Πράγα",
        country: "Τσεχία",
      },
      {
        id: "2",
        capital: "Κίεβο",
        country: "Ουκρανία",
      },
      {
        id: "3",
        capital: "Βαρσοβία",
        country: "Πολωνία",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Η πρωτεύουσα της Πολωνίας είναι μια πόλη πλούσια σε ιστορία, που βρίσκεται κατά μήκος του ποταμού Βιστούλα. Είναι μία από τις μεγαλύτερες πόλεις της χώρας και αρχίζει με 'W'!",
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Πολωνία",
    country: "Βαρσοβία",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/malta.png"),
        country: "Μάλτα",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/singapore.png"),
        country: "Σιγκαπούρη",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/austria.png"),
        country: "Αυστρία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/poland.png"),
        country: "Πολωνία",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Αυτή η σημαία έχει δύο οριζόντιες ρίγες: λευκή από πάνω και κόκκινη από κάτω, που αντιπροσωπεύουν την ειρήνη και την ανθεκτικότητα του έθνους.",
  },
  {
    id: "5c",
    status: "Guess",
    word: "ΒΑΡΣΟΒΙΑ",
    country: "Πολωνία",
    num: 6,
    letters: "ΠΕΡΙΑΜΝΣΟΒΛΚ",
    img: require("../../../assets/Flags/poland.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Βραζιλία",
    image: require("../../../assets/Flags/brazil.png"),
    options: [
      {
        id: "0",
        capital: "Μπραζίλια",
        country: "Βραζιλία",
      },
      {
        id: "1",
        capital: "Σάο Πάολο",
        country: "Βραζιλία",
      },
      {
        id: "2",
        capital: "Ρίο ντε\nΤζανέιρο",
        country: "Βραζιλία",
      },
      {
        id: "3",
        capital: "Mοντεβιδέο",
        country: "Ουρουγουάη",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Η πρωτεύουσα της Βραζιλίας είναι μια πόλη γνωστή για τη μοναδική της σύγχρονη αρχιτεκτονική. Δεν είναι η μεγαλύτερη πόλη, όπως το Σάο Πάολο ή το Ρίο, αλλά είναι ένα πολιτικό κέντρο.",
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Βραζιλία",
    country: "Μπραζίλια",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/argentina.png"),
        country: "Aργεντινή",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/brazil.png"),
        country: "Βραζιλιά",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/mexico.png"),
        country: "Mεξικό",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/peru.png"),
        country: "Περού",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Αυτή η σημαία έχει ένα πράσινο φόντο με μια μεγάλη κίτρινη διαμαντένια μορφή στο κέντρο, η οποία περιέχει μια μπλε σφαίρα με 27 λευκά αστέρια και μια λευκή ταινία.",
  },
  {
    id: "6c",
    status: "Guess",
    word: "ΜΠΡΑΖΙΛΙΑ",
    country: "Βραζιλία",
    num: 7,
    letters: "ΤΕΙΑΠΜΡΝΛΚΧΖ",
    img: require("../../../assets/Flags/brazil.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Ρουμανία",
    image: require("../../../assets/Flags/romania.png"),
    options: [
      {
        id: "0",
        capital: "Κίεβο",
        country: "Ουκρανία",
      },
      {
        id: "1",
        capital: "Βουδαπέστη",
        country: "Ουγγαρία",
      },
      {
        id: "2",
        capital: "Βουκουρέστι",
        country: "Ρουμανία",
      },
      {
        id: "3",
        capital: "Σόφια",
        country: "Βουλγαρία",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Η πρωτεύουσα της Ρουμανίας συχνά αποκαλείται 'Μικρό Παρίσι' της Ανατολικής Ευρώπης, και το όνομά της ξεκινά με ένα 'Β'!",
  },
  {
    id: "7b",
    status: "Flags",
    capital: "Ρουμανία",
    country: "Bουκουρέστι",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Moldova.png"),
        country: "Μολδαβία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/armenia.png"),
        country: "Aρμενία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/romania.png"),
        country: "Ρουμανία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/lithuania.png"),
        country: "Λιθουανία",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Αυτή η σημαία αποτελείται από τρεις κάθετες λωρίδες, που αντιπροσωπεύουν την ιστορία της χώρας, την ελευθερία και την ομορφιά των τοπίων της.",
  },
  {
    id: "7c",
    status: "Guess",
    word: "ΒΟΥΚΟΥΡΕΣΤΙ",
    country: "Ρουμανία",
    num: 9,
    letters: "ΒΚΡΕΥΑΟΠΚΣΙΤ",
    img: require("../../../assets/Flags/romania.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Iράν",
    image: require("../../../assets/Flags/iran.png"),
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
        capital: "Bαγδάτη",
        country: "Ιράκ",
      },
      {
        id: "3",
        capital: "Τεχεράνη",
        country: "Iράν",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Η πρωτεύουσα του Ιράν είναι μια πολυσύχναστη μητρόπολη που περιβάλλεται από βουνά. Γνωστή για τα ζωντανά παζάρια και τα πολιτιστικά της αξιοθέατα, το όνομά της ξεκινά με ένα 'Τ'!",
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Ιράν",
    country: "Tεχεράνη",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/jordan.png"),
        country: "Ιορδανία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/hungary.png"),
        country: "Ουγγαρία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/syria.png"),
        country: "Συρία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/iran.png"),
        country: "Iράν",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "This flag features three horizontal stripes, no black, with an emblem of a stylized tulip in the center, symbolizing peace, courage, and the nation's Islamic heritage.",
  },
  {
    id: "8c",
    status: "Guess",
    word: "ΤΕΧΕΡΑΝΗ",
    country: "Iράν",
    num: 7,
    letters: "ΡΑΜΕΝΛΠΗΙΟΧΤ",
    img: require("../../../assets/Flags/iran.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Aλβανία",
    image: require("../../../assets/Flags/albania.png"),
    options: [
      {
        id: "0",
        capital: "Ζάγκρεπ",
        country: "Κροατία",
      },
      {
        id: "1",
        capital: "Tίρανα",
        country: "Aλβανία",
      },
      {
        id: "2",
        capital: "Σοφία",
        country: "Bουλγαρία",
      },
      {
        id: "3",
        capital: "Bελιγράδι",
        country: "Σερβία",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Η πρωτεύουσα της Αλβανίας είναι μια πολύχρωμη πόλη, γνωστή για τα ζωντανά της κτίρια και τη ζωντανή ατμόσφαιρα. Βρίσκεται κοντά στο κέντρο της χώρας, και το όνομά της ξεκινά με ένα 'Τ'!",
  },
  {
    id: "9b",
    status: "Flags",
    capital: "Αλβανία",
    country: "Tίρανα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/portugal.png"),
        country: "Πορτογαλία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/albania.png"),
        country: "Aλβανία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/tunisia.png"),
        country: "Tυνησία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/turkey.png"),
        country: "Tουρκία",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Αυτή η σημαία είναι έντονο κόκκινο με έναν μαύρο δικέφαλο αετό στο κέντρο, που συμβολίζει τη δύναμη, την ελευθερία και την ανεξαρτησία της χώρας.",
  },
  {
    id: "9c",
    status: "Guess",
    country: "Αλβανία",
    word: "ΤΙΡΑΝΑ",
    num: 5,
    letters: "ΦΚΛΤΕΙΑΠΝΜΡΥ",
    img: require("../../../assets/Flags/albania.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Κροατία",
    image: require("../../../assets/Flags/croatia.png"),
    options: [
      {
        id: "0",
        capital: "Βελιγράδι",
        country: "Σερβία",
      },
      {
        id: "1",
        capital: "Ζάγκρεπ",
        country: "Κροατία",
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
      "Χμμ... δεν είμαι σίγουρος, αλλά σίγουρα δεν είναι ούτε η Λιουμπλιάνα ούτε η Μπρατισλάβα.",
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Κροατία",
    country: "Zάγκρεπ",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/slovenia.png"),
        country: "Σλοβενία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/slovakia.png"),
        country: "Σλοβακία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/serbia.png"),
        country: "Σερβία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/croatia.png"),
        country: "Κροατία",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Αυτή η σημαία διαθέτει τρεις οριζόντιες λωρίδες με το εθνόσημο της Κροατίας στο κέντρο.",
  },
  {
    id: "10c",
    status: "Guess",
    word: "ΖΑΓΚΡΕΠ",
    country: "Κροατία",
    num: 7,
    letters: "ΠΡΛΕΚΑΓΖΙΟΥΜ",
    img: require("../../../assets/Flags/croatia.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question4El;
