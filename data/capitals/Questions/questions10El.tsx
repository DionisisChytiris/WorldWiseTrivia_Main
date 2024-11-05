const question10El = [
  {
    id: "1a",
    status: "Capitals",
    country: "Λιθουανία",
    image: require("../../../assets/Flags/lithuania.png"),
    options: [
      {
        id: "0",
        capital: "Ρίγα",
        country: "Λετονία",
      },
      {
        id: "1",
        capital: "Tάλιν",
        country: "Eστονία",
      },
      {
        id: "2",
        capital: "Mινσκ",
        country: "Λευκορωσία",
      },
      {
        id: "3",
        capital: "Βίλνιους",
        country: "Λιθουανία",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
      "Λοιπόν, δεν είμαι σίγουρος για την απάντηση, αλλά είμαι μεταξύ του Βίλνιους και του Μινσκ.",
  },
  {
    id: "1b",
    status: "Flags",
    capital: "Λιθουανία",
    country: "Βίλνιους",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/armenia.png"),
        country: "Αρμενία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/bulgaria.png"),
        country: "Βουλγαρία",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/hungary.png"),
        country: "Ουγγαρία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/lithuania.png"),
        country: "Λιθουανία",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
     "Αυτή η σημαία έχει παρόμοια χρώματα με τη σημαία της Βουλγαρίας, αλλά η επάνω λωρίδα είναι κίτρινη αντί για λευκή.",
  },
  {
    id: "1c",
    status: "Guess",
    word: "ΒΙΛΝΙΟΥΣ",
    country: "Λιθουανία",
    num: 7,
    letters: "ΠΛΑΙΤΝΜΕΡΘΟΥ",
    img: require("../../../assets/Flags/lithuania.png"),
  },
  {
    id: "2a",
    status: "Capitals",
    country: "Μπαχάμες",
    image: require("../../../assets/Flags/Bahamas.png"),
    options: [
      {
        id: "0",
        capital: "Κίνγκστον",
        country: "Τζαμάικα",
      },
      {
        id: "1",
        capital: "Νασσάου",
        country: "Μπαχάμες",
      },
      {
        id: "2",
        capital: "Σαν Χουαν",
        country: "Πουέρτο Ρίκο",
      },
      {
        id: "3",
        capital: "Σαν Χοσέ",
        country: "Κόστα Ρίκα",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp: "Νομίζω ότι η σωστή απάντηση είναι η Νασσάου.",
  },
  {
    id: "2b",
    status: "Flags",
    capital: "Μπαχάμες",
    country: "Nασσάου",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: "Aζερμπαϊτζάν",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Bahamas.png"),
        country: "Μπαχάμες",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Palau.png"),
        country: "Παλάου",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Fiji.png"),
        country: "Φίτζι",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Αυτή σημαία έχει τρεις οριζόντιες λωρίδες με ένα τρίγωνο στην αριστερή πλευρά.",
  },
  {
    id: "2c",
    status: "Guess",
    word: "ΝΑΣΣΑΟΥ",
    country: "Μπαχάμες",
    num: 5,
    letters: "ΤΕΥΑΠΛΜΣΝΧΙΟ",
    img: require("../../../assets/Flags/Bahamas.png"),
  },
  {
    id: "3a",
    status: "Capitals",
    country: "Μπαχρέιν",
    image: require("../../../assets/Flags/Bahrain.png"),
    options: [
      {
        id: "0",
        capital: "Μουσκάτ",
        country: "Ομάν",
      },
      {
        id: "1",
        capital: "Αμμάν",
        country: "Ιορδανία",
      },
      {
        id: "2",
        capital: "Μανάμα",
        country: "Νικαράγουα",
      },
      {
        id: "3",
        capital: "Ντόχα",
        country: "Κατάρ",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: "Είμαι λίγο αβέβαιος, αλλά είναι είτε η Μανάμα είτε το Κουβέιτ για μένα.",
  },
  {
    id: "3b",
    status: "Flags",
    capital: "Μπαχρέιν",
    country: "Mανάμα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/qatar.png"),
        country: "Κατάρ",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Oman.png"),
        country: "Oμάν",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Bahrain.png"),
        country: "Μπαχρέιν",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/jordan.png"),
        country: "Ιορδανία",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Αυτή η σημαία έχει ένα κόκκινο πεδίο στη δεξιά πλευρά με πέντε λευκά οδοντωτά άκρα που δημιουργούν ένα σχέδιο ζιγκ ζαγκ.",
  },

  {
    id: "3c",
    status: "Guess",
    word: "MANAMA",
    country: "Μπαχρέιν",
    num: 3,
    letters: "ΠΑΜΤΧΡΕΙΝΛΚΟ",
    img: require("../../../assets/Flags/Bahrain.png"),
  },
  {
    id: "4a",
    status: "Capitals",
    country: "Mοζαμβίκη",
    image: require("../../../assets/Flags/Mozambique.png"),
    options: [
      {
        id: "0",
        capital: "Μαπούτο",
        country: "Moζαμβίκη",
      },
      {
        id: "1",
        capital: "Χαράρε",
        country: "Zιμπάμπουε",
      },
      {
        id: "2",
        capital: "Γκαμπορόνε",
        country: "Μποτσουάνα",
      },
      {
        id: "3",
        capital: "Βίντχουκ",
        country: "Nαμίμπια",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Δεν είμαι σίγουρος, αλλά τείνω προς την Χαράρε ή το Μαπούτο.",
  },
  {
    id: "4b",
    status: "Flags",
    capital: "Moζαμβίκη",
    country: "Mαπούτο",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Mozambique.png"),
        country: "Moζαμβίκη",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Zimbabwe.png"),
        country: "Zιμπάμπουε",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Zambia.png"),
        country: "Zάμπια",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/safrica.png"),
        country: "Νότια Αφρική",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "Σε αυτή τη σημαία στην αριστερή πλευρά, υπάρχει ένα κόκκινο τρίγωνο που περιέχει ένα βιβλίο, ένα τουφέκι και μια φτυάρι, συμβολίζοντας την εκπαίδευση, την άμυνα και τη γεωργία.",
  },
  {
    id: "4c",
    status: "Guess",
    word: "ΜΑΠΟΥΤΟ",
    country: "Moζαμβίκη",
    num: 6,
    letters: "ΤΑΠΟΥΜΛΕΟΝΒΡ",
    img: require("../../../assets/Flags/Mozambique.png"),
  },
  {
    id: "5a",
    status: "Capitals",
    country: "Zάμπια",
    image: require("../../../assets/Flags/Zambia.png"),
    options: [
      {
        id: "0",
        capital: "Λουσάκα",
        country: "Zάμπια",
      },
      {
        id: "1",
        capital: "Γκαμπορόνε",
        country: "Μποτσουάνα",
      },
      {
        id: "2",
        capital: "Βίντχουκ",
        country: "Ναμίμπια",
      },
      {
        id: "3",
        capital: "Χαράρε",
        country: "Zιμπάμπουε",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Λοιπόν, δεν είμαι σίγουρος για την απάντηση, αλλά είμαι μεταξύ της Γκαμπορόνε και της Χαράρε.",
  },
  {
    id: "5b",
    status: "Flags",
    capital: "Zάμπια",
    country: "Λουσάκα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Mozambique.png"),
        country: "Moζαμβίκη",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Zambia.png"),
        country: "Zάμπια",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/kenya.png"),
        country: "Kένυα",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Ethiopia.png"),
        country: "Αιθιοπία",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
     "Η σημαία της Ζάμπια έχει έναν πορτοκαλί αετό στην επάνω δεξιά γωνία. Ο αετός συμβολίζει την ελευθερία και την ικανότητα της χώρας να ξεπερνά τις προκλήσεις.",
  },
  {
    id: "5c",
    status: "Guess",
    word: "ΛΟΥΣΑΚΑ",
    country: "Zάμπια",
    num: 6,
    letters: "ΠΑΝΜΤΧΣΚΕΙΟΥ",
    img: require("../../../assets/Flags/Zambia.png"),
  },
  {
    id: "6a",
    status: "Capitals",
    country: "Ζιμπάμπουε",
    image: require("../../../assets/Flags/Zimbabwe.png"),
    options: [
      {
        id: "0",
        capital: "Λουσάκα",
        country: "Ζάμπια",
      },
      {
        id: "1",
        capital: "Γκαμπορόνε",
        country: "Μποτσουάνα",
      },
      {
        id: "2",
        capital: "Βίντχουκ",
        country: "Ναμίμπια",
      },
      {
        id: "3",
        capital: "Χαράρε",
        country: "Ζιμπάμπουε",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
     "Δεν είμαι σίγουρος για την απάντηση, αλλά είμαι μεταξύ Χαράρε και Ντοδόμα."
  },
  {
    id: "6b",
    status: "Flags",
    capital: "Zιμπάμπουε",
    country: "Χαράρε",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Ethiopia.png"),
        country: "Αιθιοπία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/kenya.png"),
        country: "Kένυα",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Cameroon.png"),
        country: "Καμερούν",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Zimbabwe.png"),
        country: "Zιμπάμπουε",
      },
    ],
    correctAnswerIndex: 3,
    phoneHelp:
    "Η σημαία της Ζιμπάμπουε έχει επτά οριζόντιες λωρίδες με ένα λευκό τρίγωνο στην αριστερή πλευρά που περιέχει ένα κόκκινο πεντάκτινο αστέρι και το πουλί της Ζιμπάμπουε.",
  },
  {
    id: "6c",
    status: "Guess",
    word: "ΧΑΡΑΡΕ",
    country: "Zιμπάμπουε",
    num: 4,
    letters: "ΝΜΑΠΕΟΡΘΚΛΧΙ",
    img: require("../../../assets/Flags/Zimbabwe.png"),
  },
  {
    id: "7a",
    status: "Capitals",
    country: "Καμπότζη",
    image: require("../../../assets/Flags/Cambodia.png"),
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
        capital: "Kατμαντού",
        country: "Νεπάλ",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: "Είμαι σχεδόν σίγουρος ότι η σωστή απάντηση είναι η Πνομ Πενχ.",
  },
  {
    id: "7b",
    status: "Flags",
    capital: "Καμπότζη",
    country: "Πνομ Πεν",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/thailand.png"),
        country: "Ταϊλάνδη",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/vietnam.png"),
        country: "Βιετνάμ",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Cambodia.png"),
        country: "Καμπότζη",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/malaysia.png"),
        country: "Μαλαισία",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Στο κέντρο αυτής της σημαίας υπάρχει μια εικόνα του Άνγκορ Βατ, ενός διάσημου ναού, που συμβολίζει την κληρονομιά και την περηφάνια της χώρας.",
  },
  {
    id: "7c",
    status: "Guess",
    word: "ΠΝΟΜΠΕΝ",
    country: "Καμπότζη",
    num: 5,
    letters: "ΠΑΟΤΕΥΝΣΜΓΛΙ",
    img: require("../../../assets/Flags/Cambodia.png"),
  },
  {
    id: "8a",
    status: "Capitals",
    country: "Ταϊλάνδη",
    image: require("../../../assets/Flags/thailand.png"),
    options: [
      {
        id: "0",
        capital: "Μπανγκόκ",
        country: "Tαϊλάνδη",
      },
      {
        id: "1",
        capital: "Βιεντιάν",
        country: "Λάος",
      },
      {
        id: "2",
        capital: "Κατμαντού",
        country: "Nεπάλ",
      },
      {
        id: "3",
        capital: "Ουλάν Μπατόρ",
        country: "Μογγολία",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
    "Αυτό είναι εύκολο. Η πρωτεύουσα της Ταϊλάνδης είναι η Μπανγκόκ. Οι κύριες ατραξιόν περιλαμβάνουν το Μεγάλο Παλάτι, το Βατ Αρούν και τις πολυσύχναστες αγορές όπως η Τσατουτσάκ.",
  },
  {
    id: "8b",
    status: "Flags",
    capital: "Ταϊλάνδη",
    country: "Μπανγκόκ",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/thailand.png"),
        country: "Tαϊλάνδη",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/costaRica.png"),
        country: "Κόστα Ρίκα",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Indonesia.png"),
        country: "Ινδονησία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Cambodia.png"),
        country: "Καμπότζη",
      },
    ],
    correctAnswerIndex: 0,
    phoneHelp:
      "H σημαία της Ταϊλάνδης έχει πέντε οριζόντιες λωρίδες. Η μπλε λωρίδα είναι η πιο πλατιά και αντιπροσωπεύει τη μοναρχία, ενώ η κόκκινη συμβολίζει τον λαό και η λευκή την ειρήνη.",
  },
  {
    id: "8c",
    status: "Guess",
    word: "ΜΠΑΝΓΚΟΚ",
    country: "Tαϊλάνδη",
    num: 7,
    letters: "ΠΤΟΥΑΗΕΚΛΜΝΓ",
    img: require("../../../assets/Flags/thailand.png"),
  },
  {
    id: "9a",
    status: "Capitals",
    country: "Γεωργία",
    image: require("../../../assets/Flags/georgia.png"),
    options: [
      {
        id: "0",
        capital: "Γερεβάν",
        country: "Aρμενία",
      },
      {
        id: "1",
        capital: "Μπακού",
        country: "Aζερμπαϊτζάν",
      },
      {
        id: "2",
        capital: "Tιφλίδα",
        country: "Γεωργία",
      },
      {
        id: "3",
        capital: "Tεχεράνη",
        country: "Iράν",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp: "Αυτό είναι δύσκολο. Είναι είτε η Τιφλίδα είτε το Μπακού.",
  },
  {
    id: "9b",
    status: "Flags",
    capital: "Γεωργία",
    country: "Tιφλίδα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/england.jpg"),
        country: "Αγγλία",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/uk.png"),
        country: "Ηνωμένο Βασίλειο",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/georgia.png"),
        country: "Γεωργία",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/azerbaijan.png"),
        country: "Aζερμπαϊτζάν",
      },
    ],
    correctAnswerIndex: 2,
    phoneHelp:
      "Η σημαία της Γεωργίας έχει άσπρο φόντο με κόκκινους σταυρούς. Ο σχεδιασμός συμβολίζει τον Χριστιανισμό και την πλούσια πολιτιστική κληρονομιά της χώρας.",
  },
  {
    id: "9c",
    status: "Guess",
    word: "TΙΦΛΙΔΑ",
    country: "Γεωργία",
    num: 6,
    letters: "ΤΦΡΕΑΙΨΔΛΠΟΥ",
    img: require("../../../assets/Flags/georgia.png"),
  },
  {
    id: "10a",
    status: "Capitals",
    country: "Νήσοι Σολομώντα",
    image: require("../../../assets/Flags/Solomon-Islands.png"),
    options: [
      {
        id: "0",
        capital: "Ταράουα",
        country: "Kιριμπάτι",
      },
      {
        id: "1",
        capital: "Χονιάρα",
        country: "Νήσοι Σολομώντα",
      },
      {
        id: "2",
        capital: "Σούβα",
        country: "Φίτζι",
      },
      {
        id: "3",
        capital: "Πορτ Μόρεσμπι",
        country: "Παπούα Νέα \nΓουινέα",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Λυπάμαι, αλλά δεν έχω ιδέα ποια είναι η πρωτεύουσα των Νήσων Σολομώντα.",
  },
  {
    id: "10b",
    status: "Flags",
    capital: "Νήσοι Σολομώντα",
    country: "Χονιάρα",
    options: [
      {
        id: "0",
        img: require("../../../assets/Flags/Kiribati.png"),
        country: "Kιριμπάτι",
      },
      {
        id: "1",
        img: require("../../../assets/Flags/Solomon-Islands.png"),
        country: "Νήσοι Σολομώντα",
      },
      {
        id: "2",
        img: require("../../../assets/Flags/Papua-New-Guinea.png"),
        country: "Παπούα Νέα \nΓουινέα",
      },
      {
        id: "3",
        img: require("../../../assets/Flags/Fiji.png"),
        country: "Φίτζι",
      },
    ],
    correctAnswerIndex: 1,
    phoneHelp:
      "Δες τη σημαία των Νήσων Σολομώντα! Στην επάνω αριστερή γωνία υπάρχουν πέντε λευκά αστέρια που αντιπροσωπεύουν τα νησιά.",
  },
  {
    id: "10c",
    status: "Guess",
    word: "ΧΟΝΙΑΡΑ",
    country: "Νήσοι Σολομώντα",
    num: 6,
    letters: "ΨΤΑΙΟΠΧΜΛΝΡΕ",
    img: require("../../../assets/Flags/Solomon-Islands.png"),
  },
  {
    id: "11",
    status: "Flags",
    capital: "",
    country: "",
  },
];
export default question10El;
