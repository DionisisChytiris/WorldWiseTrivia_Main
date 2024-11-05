const questions7El = [
  {
    id: "1a",
    status: "Capitals",
    img: 'L',
    country: "Γερμανία",
    image: require("../../../assets/WorldMonuments/Europe/NeuschwansteinCastle.jpg"),
    options: [
      {
        id: "0",
        capital: 'Κάστρο Μπραν',
        country: 'Ρουμανία'
      },
      {
        id: "1",
        capital: 'Κολοσσαίο',
        country: 'Ιταλία'
      },
      {
        id: "2",
        capital: 'Απαγορευμένη\nΠόλη',
        country: 'Κίνα'
      },
      {
        id: "3",
        capital: 'Κάστρο Nόισβανσταϊν',
        country: 'Γερμανία'
      },
    ],
    correctAnswerIndex: 3,
  },
    {
        id: "1b",
        status: "Flags",
        country: "Κάστρο Nόισβανσταϊν",
        capital: "Γερμανία",
        options: [
          {
            id: "0",
            country: "Κάστρο Μπραν\nΡουμανία",
            img: require("../../../assets/WorldMonuments/Europe/Bran-CastleDracula.webp"),
          },
          {
            id: "1",
            country: "Κολοσσαίο\nΙταλία",
            img: require("../../../assets/WorldMonuments/Europe/colosseum.webp"),
          },
          {
            id: "2",
            country: "Απαγορευμένη Πόλη\nΚίνα",
            img: require("../../../assets/WorldMonuments/Asia/forbidden-city.jpg"),
          },
          {
            id: "3",
            country: "Κάστρο Nόισβανσταϊν\nΓερμανία",
            img: require("../../../assets/WorldMonuments/Europe/NeuschwansteinCastle.jpg"),
          },
        ],
        correctAnswerIndex: 3,
      },
      {
        id: "2a",
        status: "Capitals",
        img: 'L',
        country: "Ηνωμένο Βασίλειο",
        image: require("../../../assets/WorldMonuments/Europe/palace-of-westminster_main.webp"),
        options: [
          {
            id: "0",
            capital: 'Γέφυρα του Ριάλτο',
            country: 'Ιταλία'
          },
          {
            id: "1",
            capital: 'Αυτοκρατορικό Παλάτι της Μαδρίτης',
            country: 'Ισπανία'
          },
          {
            id: "2",
            capital: 'Παλάτι του Γουεσμίνστερ',
            country: 'Ηνωμένο Βασίλειο'
          },
          {
            id: "3",
            capital: 'Παναγία των Παρισίων',
            country: 'Γαλλία'
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "2b",
        status: "Flags",
        country: "Παλάτι του Γουεσμίνστερ",
        capital: "Ηνωμένο Βασίλειο",
        options: [
          {
            id: "0",
            country: "Αυτοκρατορικό παλάτι της Μαδρίτης\nΙσπανία",
            img: require("../../../assets/WorldMonuments/Europe/RoyalPalaceMadrid.webp"),
          },
          {
            id: "1",
            country: "Γέφυρα του Ριάλτο\nΙταλία",
            img: require("../../../assets/WorldMonuments/Europe/Rialto-bridge.webp"),
          },
          {
            id: "2",
            country: "Παλάτι του Γουεσμίνστερ\nΗνωμένο Βασίλειο",
            img: require("../../../assets/WorldMonuments/Europe/palace-of-westminster_main.webp"),
          },
          {
            id: "3",
            country: "Παναγία των Παρισίων\nΓαλλία",
            img: require("../../../assets/WorldMonuments/Europe/notreDame.webp"),
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "3a",
        status: "Capitals",
        img: 'L',
        country: "Ελλάδα",
        image: require("../../../assets/WorldMonuments/Europe/meteora.webp"),
        options: [
          {
            id: "0",
            capital: 'Μετέωρα',
            country: 'Ελλάδα'
          },
          {
            id: "1",
            capital: 'Αλάμπρα',
            country: 'Ισπανία'
          },
          {
            id: "2",
            capital: 'Κνωσός',
            country: 'Ελλάδα'
          },
          {
            id: "3",
            capital: 'Η Φωλιά της Τίγρης',
            country: 'Μπουτάν'
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "3b",
        status: "Flags",
        country: "Μετέωρα",
        capital: "Ελλάδα",
        options: [
          {
            id: "0",
            country: "Μετέωρα\nΕλλάδα",
            img: require("../../../assets/WorldMonuments/Europe/meteora.webp"),
          },
          {
            id: "1",
            country: "Αλάμπρα\nΙσπανία",
            img: require("../../../assets/WorldMonuments/Europe/alhambra.jpg"),
          },
          {
            id: "2",
            country: "Η Φωλιά της Τίγρης\nΜπουτάν",
            img: require("../../../assets/WorldMonuments/Asia/TigersNestBhutan.webp"),
          },
          {
            id: "3",
            country: "Σιγκιρίγια\nΣρι Λάνκα",
            img: require("../../../assets/WorldMonuments/Asia/Sigiriya__Sri_Lanka.webp"),
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "4a",
        status: "Capitals",
        img: 'L',
        country: "Αιθιοπία",
        image: require("../../../assets/WorldMonuments/Africa/lalibela.webp"),
        options: [
          {
            id: "0",
            capital: 'Καθεδρικός ναός πόλης του Μεξικού',
            country: 'Mεξικό'
          },
          {
            id: "1",
            capital: 'Παναγία των Παρισίων',
            country: 'Γαλλία'
          },
          {
            id: "2",
            capital: 'Ναός Αγίου Γεωργίου',
            country: 'Αιθιοπία'
          },
          {
            id: "3",
            capital: 'Μεγάλο Τζαμί του Τζενέ',
            country: 'Mαλί'
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "4b",
        status: "Flags",
        country: "Ναός Αγίου Γεωργίου",
        capital: "Αιθιοπία",
        options: [
          {
            id: "0",
            country: "Καθεδρικός ναός πόλης του Μεξικού\nMεξικό",
            img: require("../../../assets/WorldMonuments/America/Metropolitan-Cathedral_Mexico.webp"),
          },
          {
            id: "1",
            country: "Παναγία των Παρισίων\nΓαλλία",
            img: require("../../../assets/WorldMonuments/Europe/notreDame.webp"),
          },
          {
            id: "2",
            country: "Ναός Αγίου Γεωργίου\nΑιθιοπία",
            img: require("../../../assets/WorldMonuments/Africa/lalibela.webp"),
          },
          {
            id: "3",
            country: "Μεγάλο Τζαμί του Τζενέ\nMαλί",
            img: require("../../../assets/WorldMonuments/Africa/mosque-of-djenne.webp"),
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "5a",
        status: "Capitals",
        img: 'L',
        country: "Παλιά πόλη Ιερουσαλήμ",
        image: require("../../../assets/WorldMonuments/Asia/edicule-church-holy-sepulchre-jerusalem.png"),
        options: [
          {
            id: "0",
            capital: 'Πέτρα',
            country: 'Ιορδανία'
          },
          {
            id: "1",
            capital: 'Ναός της Αναστάσεως',
            country: 'Παλιά πόλη Ιερουσαλήμ'
          },
          {
            id: "2",
            capital: 'Καθεδρικός ναός της Φλωρεντίας',
            country: 'Ιταλία'
          },
          {
            id: "3",
            capital: 'Μονή Αγίας Αικατερίνης',
            country: 'Αίγυπτος'
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "5b",
        status: "Flags",
        country: "Ναός της Αναστάσεως",
        capital: "Παλιά πόλη Ιερουσαλήμ",
        options: [
          {
            id: "0",
            country: "Πέτρα\nΙορδανία",
            img: require("../../../assets/WorldMonuments/Asia/jordanPetra.webp"),
          },
          {
            id: "1",
            country: "Ναός της Αναστάσεως\nΙερουσαλήμ",
            img: require("../../../assets/WorldMonuments/Asia/edicule-church-holy-sepulchre-jerusalem.png"),
          },
          {
            id: "2",
            country: "Καθεδρικός ναός της Φλωρεντίας\nΙταλία",
            img: require("../../../assets/WorldMonuments/Europe/duomo-florence.webp"),
          },
          {
            id: "3",
            country: "Μονή Αγίας Αικατερίνης\nΑίγυπτος",
            img: require("../../../assets/WorldMonuments/Africa/mountsinai.webp"),
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "6a",
        status: "Capitals",
        img: 'L',
        country: "Νορβηγία",
        image: require("../../../assets/WorldMonuments/Europe/borgund-stave-church-Norway.webp"),
        options: [
          {
            id: "0",
            capital: 'Ξύλινη εκκλησία Μπόργουντ',
            country: 'Nορβηγία'
          },
          {
            id: "1",
            capital: 'Τουλούμ',
            country: 'Mεξικό'
          },
          {
            id: "2",
            capital: 'Ναός Καϊλάσα',
            country: 'Ινδία'
          },
          {
            id: "3",
            capital: 'Τσιτσέν Ιτζά',
            country: 'Mεξικό'
          },
        ],
        correctAnswerIndex: 3,
      },
      {
        id: "6b",
        status: "Flags",
        country: "Τσιτσέν Ιτζά",
        capital: "Mεξικό",
        options: [
          {
            id: "0",
            country: "Τουλούμ\nMεξικό",
            img: require("../../../assets/WorldMonuments/America/Tulum.jpg"),
          },
          {
            id: "1",
            country: "Ξύλινη εκκλησία Μπόργουντ\nΝορβηγία",
            img: require("../../../assets/WorldMonuments/Europe/borgund-stave-church-Norway.webp"),
          },
          {
            id: "2",
            country: "Ναός Καϊλάσα\nΙνδία",
            img: require("../../../assets/WorldMonuments/Asia/kailasa-temple-india.webp"),
          },
          {
            id: "3",
            country: "Τσιτσέν Ιτζά\nMεξικό",
            img: require("../../../assets/WorldMonuments/America/chichen-itza_mexico.png"),
          },
        ],
        correctAnswerIndex: 3,
      },
      {
        id: "7a",
        status: "Capitals",
        img: 'L',
        country: "Ιαπωνία",
        image: require("../../../assets/WorldMonuments/Asia/Osaka-Castle.png"),
        options: [
          {
            id: "0",
            capital: 'Κνωσός',
            country: 'Ελλάδα'
          },
          {
            id: "1",
            capital: 'Κάστρο της Οσάκα',
            country: 'Ιαπωνία'
          },
          {
            id: "2",
            capital: 'Κάστρο του Χιμέτζι',
            country: 'Ιαπωνία'
          },
          {
            id: "3",
            capital: 'Αμπού Σιμπέλ',
            country: 'Αίγυπτος'
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "7b",
        status: "Flags",
        country: "Κάστρο της Οσάκα",
        capital: "Ιαπωνία",
        options: [
          {
            id: "0",
            country: "Κνωσός\nΕλλάδα",
            img: require("../../../assets/WorldMonuments/Europe/knossos.jpg"),
          },
          {
            id: "1",
            country: "Κάστρο της Οσάκα\nΙαπωνία",
            img: require("../../../assets/WorldMonuments/Asia/Osaka-Castle.png"),
          },
          {
            id: "2",
            country: "Αμπού Σιμπέλ\nΑίγυπτος",
            img: require("../../../assets/WorldMonuments/Africa/abulShimbel.webp"),
          },
          {
            id: "3",
            country: "Μουσείο Γκούγκενχάιμ\nΙσπανία",
            img: require("../../../assets/WorldMonuments/Europe/GuggenheimMuseumBilbao.webp"),
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "8a",
        status: "Capitals",
        img: 'L',
        country: "Ιταλία",
        image: require("../../../assets/WorldMonuments/Europe/Rialto-bridge.webp"),
        options: [
          {
            id: "0",
            capital: 'Γέφυρα του Ριάλτο',
            country: 'Ιταλία'
          },
          {
            id: "1",
            capital: 'Γέφυρα του Πύργου',
            country: 'Ηνωμένο Βασίλειο'
          },
          {
            id: "2",
            capital: 'Γέφυρα του\nΜπρούκλιν',
            country: 'ΗΠΑ'
          },
          {
            id: "3",
            capital: 'Γέφυρα του\nΣίδνεϊ',
            country: 'Αυστραλία'
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "8b",
        status: "Flags",
        country: "Γέφυρα του Ριάλτο",
        capital: "Ιταλία",
        options: [
          {
            id: "0",
            country: "Γέφυρα του Ριάλτο\nΙταλία",
            img: require("../../../assets/WorldMonuments/Europe/Rialto-bridge.webp"),
          },
          {
            id: "1",
            country: "Γέφυρα Dom Luís I\nΠορτογαλία",
            img: require("../../../assets/WorldMonuments/Europe/DomLuisBridgePorto.webp"),
          },
          {
            id: "2",
            country: "Γέφυρα του Μπρούκλιν\nΗΠΑ",
            img: require("../../../assets/WorldMonuments/USA/brooklyn-bridge.webp"),
          },
          {
            id: "3",
            country: "Γέφυρα του Σίδνεϊ\nΑυστραλία",
            img: require("../../../assets/WorldMonuments/Oceania/harbour-bridge.webp"),
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "9a",
        status: "Capitals",
        img: 'L',
        country: "Βατικανό",
        image: require("../../../assets/WorldMonuments/Europe/Sistine-Chapel.jpg"),
        options: [
          {
            id: "0",
            capital: 'Παναγία των Παρισίων',
            country: 'Γαλλία'
          },
          {
            id: "1",
            capital: 'Bασιλική του Αγίου Πέτρου',
            country: 'Βατικανό'
          },
          {
            id: "2",
            capital: 'Καπέλα Σιστίνα',
            country: 'Βατικανό'
          },
          {
            id: "3",
            capital: 'Σαιντ-Σαπέλ',
            country: 'Γαλλία'
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "9b",
        status: "Flags",
        country: "Καπέλα Σιστίνα",
        capital: "Βατικανό",
        options: [
          {
            id: "0",
            country: "Παναγία των Παρισίων\nΓαλλία",
            img: require("../../../assets/WorldMonuments/Europe/notreDame.webp"),
          },
          {
            id: "1",
            country: "Σαιν Σαπέλ\nΓαλλία",
            img: require("../../../assets/WorldMonuments/Europe/sainte-Chapelle.webp"),
          },
          {
            id: "2",
            country: "Καπέλα Σιστίνα\nΒατικανό",
            img: require("../../../assets/WorldMonuments/Europe/Sistine-Chapel.jpg"),
          },
          {
            id: "3",
            country: "Bασιλική του Αγίου Πέτρου\nΒατικανό",
            img: require("../../../assets/WorldMonuments/Europe/St.-Peters-Basilica-Vatican.webp"),
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "10a",
        status: "Capitals",
        img: 'L',
        country: "Ισπανία",
        image: require("../../../assets/WorldMonuments/Europe/RoyalPalaceMadrid.webp"),
        options: [
          {
            id: "0",
            capital: 'Βασιλικό Ανάκτορο\nτης Μαδρίτης',
            country: 'Ισπανία'
          },
          {
            id: "1",
            capital: 'Αυτοκρατορικό\nΠαλάτι',
            country: 'Ιαπωνία'
          },
          {
            id: "2",
            capital: 'Ανάκτορο των\nΒερσαλλιών',
            country: 'Γαλλία'
          },
          {
            id: "3",
            capital: 'Tο Μεγάλο\nΠαλάτι',
            country: 'Ταϊλάνδη'
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "10b",
        status: "Flags",
        country: "Βασιλικό Ανάκτορο της Μαδρίτης",
        capital: "Ισπανία",
        options: [
          {
            id: "0",
            country: "Βασιλικό Ανάκτορο\nτης Μαδρίτης\nΙσπανία",
            img: require("../../../assets/WorldMonuments/Europe/RoyalPalaceMadrid.webp"),
          },
          {
            id: "1",
            country: "Αυτοκρατορικό Παλάτι\nΙαπωνία",
            img: require("../../../assets/WorldMonuments/Asia/ImperialPalaceTokyo.webp"),
          },
          {
            id: "2",
            country: "Ανάκτορο των\nΒερσαλλιών\nΓαλλία",
            img: require("../../../assets/WorldMonuments/Europe/Palace-of-Versailles-France.jpg"),
          },
          {
            id: "3",
            country: "Tο Μεγάλο Παλάτι\nΤαϊλάνδη",
            img: require("../../../assets/WorldMonuments/Asia/the-grand-palace.webp"),
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "11",
        monument: "",
        country: "",
      },
      {
        id: "11a",
        monument: "",
        country: "",
      },
      {
        id: "11s",
        monument: "",
        country: "",
      },
      {
        id: "11d",
        monument: "",
        country: "",
      },
      {
        id: "11f",
        monument: "",
        country: "",
      },
      {
        id: "11g",
        monument: "",
        country: "",
      },
      {
        id: "11h",
        monument: "",
        country: "",
      },
      {
        id: "11j",
        monument: "",
        country: "",
      },
      {
        id: "11k",
        monument: "",
        country: "",
      },
      {
        id: "11l",
        monument: "",
        country: "",
      },
      {
        id: "11m",
        monument: "",
        country: "",
      },
]

export default questions7El