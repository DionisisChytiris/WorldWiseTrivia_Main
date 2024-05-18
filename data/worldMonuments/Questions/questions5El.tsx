const questions5El = [
  {
    id: "1a",
    status: "Capitals",
    img: 'L',
    country: "Ηνωμένο Βασίλειο",
    image: require("../../../assets/WorldMonuments/Europe/TowerBridge.png"),
    options: [
      {
        id: "0",
        capital: 'Brooklyn\nBridge',
        country: 'ΗΠΑ'
      },
      {
        id: "1",
        capital: 'Γέφυρα του Πύργου',
        country: 'Ηνωμένο Βασίλειο'
      },
      {
        id: "2",
        capital: 'Golden\nGate Bridge',
        country: 'ΗΠΑ'
      },
      {
        id: "3",
        capital: 'Sydney\nHarbour Bridge',
        country: 'Αυστραλία'
      },
    ],
    correctAnswerIndex: 1,
  },
    {
        id: "1b",
        status: "Flags",
        country: "Γέφυρα του Πύργου",
        capital: "Ηνωμένο Βασίλειο",
        options: [
          {
            id: "0",
            country: "Ακρόπολη\nΕλλάδα",
            img: require("../../../assets/WorldMonuments/Europe/Acropolis.png"),
          },
          {
            id: "1",
            country: "Γέφυρα του Πύργου\nΗνωμένο Βασίλειο",
            img: require("../../../assets/WorldMonuments/Europe/TowerBridge.png"),
          },
          {
            id: "2",
            country: "Cité de Carcassonne\nΓαλλία",
            img: require("../../../assets/WorldMonuments/Europe/CitédeCarcassonne.png"),
          },
          {
            id: "3",
            country: "Κεκλιμένος Πύργος της Πίζας\nΙταλία",
            img: require("../../../assets/WorldMonuments/Europe/TowerPisa.png"),
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "2a",
        status: "Capitals",
        img: 'L',
        country: "ΗΠΑ",
        image: require("../../../assets/WorldMonuments/USA/washingtonMonument.png"),
        options: [
          {
            id: "0",
            capital: 'Στόουνχεντζ',
            country: 'Ηνωμένο Βασίλειο'
          },
          {
            id: "1",
            capital: 'Burj Khalifa',
            country: 'United Arab Emirates'
          },
          {
            id: "2",
            capital: 'Washington\nMonument',
            country: 'ΗΠΑ'
          },
          {
            id: "3",
            capital: 'Arc de\nTriumph',
            country: 'Γαλλία'
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "2b",
        status: "Flags",
        country: "Washington Monument",
        capital: "ΗΠΑ",
        options: [
          {
            id: "0",
            country: "Hollywood Sign\nΗΠΑ",
            img: require("../../../assets/WorldMonuments/USA/Hollywood.png"),
          },
          {
            id: "1",
            country: "Burj Khalifa\nUnited Arab Emirates",
            img: require("../../../assets/WorldMonuments/Asia/burj-khalifa.png"),
          },
          {
            id: "2",
            country: "Washington Monument\nΗΠΑ",
            img: require("../../../assets/WorldMonuments/USA/washingtonMonument.png"),
          },
          {
            id: "3",
            country: "Lincoln Memorial\nΗΠΑ",
            img: require("../../../assets/WorldMonuments/USA/lincolnMonument.jpg"),
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "3a",
        status: "Capitals",
        img: 'L',
        country: "Thailand",
        image: require("../../../assets/WorldMonuments/Asia/the-grand-palace.png"),
        options: [
          {
            id: "0",
            capital: 'Taj Mahal',
            country: 'Ινδία'
          },
          {
            id: "1",
            capital: 'Άνγκορ Βατ',
            country: 'Καμπότζη'
          },
          {
            id: "2",
            capital: 'Akshardham\nTemple',
            country: 'Ινδία'
          },
          {
            id: "3",
            capital: 'The Grand\nPalace',
            country: 'Thailand'
          },
        ],
        correctAnswerIndex: 3,
      },
      {
        id: "3b",
        status: "Flags",
        country: " The Grand Palace",
        capital: "Thailand",
        options: [
          {
            id: "0",
            country: "Akshardham Temple\nΙνδία",
            img: require("../../../assets/WorldMonuments/Asia/AkshardhamTempleIndia.png"),
          },
          {
            id: "1",
            country: "Άνγκορ Βατ\nCambodia",
            img: require("../../../assets/WorldMonuments/Asia/AngkorWat.png"),
          },
          {
            id: "2",
            country: "Taj Mahal\nΙνδία",
            img: require("../../../assets/WorldMonuments/Asia/TajMajal.png"),
          },
          {
            id: "3",
            country: "The grand Palace\nThailand",
            img: require("../../../assets/WorldMonuments/Asia/the-grand-palace.png"),
          },
        ],
        correctAnswerIndex: 3,
      },
      {
        id: "4a",
        status: "Capitals",
        img: 'L',
        country: "Καμπότζη",
        image: require("../../../assets/WorldMonuments/Asia/AngkorWat.png"),
        options: [
          {
            id: "0",
            capital: 'Kailasa\nTemple',
            country: 'Ινδία'
          },
          {
            id: "1",
            capital: 'Taj Mahal',
            country: 'Ινδία'
          },
          {
            id: "2",
            capital: 'Angkor wat',
            country: 'Καμπότζη'
          },
          {
            id: "3",
            capital: 'Sigiriya',
            country: 'Σρι Λάνκα'
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "4b",
        status: "Flags",
        country: "Άνγκορ Βατ",
        capital: "Καμπότζη",
        options: [
          {
            id: "0",
            country: "Sigiriya\nΣρι Λάνκα",
            img: require("../../../assets/WorldMonuments/Asia/Sigiriya__Sri_Lanka.png"),
          },
          {
            id: "1",
            country: "Ναός Καϊλάσα\nΙνδία",
            img: require("../../../assets/WorldMonuments/Asia/kailasa-temple-india.png"),
          },
          {
            id: "2",
            country: "Άνγκορ Βατ\nCambodia",
            img: require("../../../assets/WorldMonuments/Asia/AngkorWat.png"),
          },
          {
            id: "3",
            country: "Jetavanaramaya\nΣρι Λάνκα",
            img: require("../../../assets/WorldMonuments/Asia/JetavanaramayaSriLanka.png"),
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "5a",
        status: "Capitals",
        img: 'L',
        country: "Ισπανία",
        image: require("../../../assets/WorldMonuments/Europe/TheAlambraGranada.png"),
        options: [
          {
            id: "0",
            capital: 'Μετέωρα',
            country: 'Ελλάδα'
          },
          {
            id: "1",
            capital: 'Alhambra',
            country: 'Ισπανία'
          },
          {
            id: "2",
            capital: 'Mont\nSaint Michel',
            country: 'Γαλλία'
          },
          {
            id: "3",
            capital: 'Cité de\nCarcassonne',
            country: 'Γαλλία'
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "5b",
        status: "Flags",
        country: "Alhambra",
        capital: "Ισπανία",
        options: [
          {
            id: "0",
            country: "Μετέωρα\nΕλλάδα",
            img: require("../../../assets/WorldMonuments/Europe/meteora.png"),
          },
          {
            id: "1",
            country: "Mont Saint Michel\nΓαλλία",
            img: require("../../../assets/WorldMonuments/Europe/Mont-Saint-MichelNormandy.png"),
          },
          {
            id: "2",
            country: "Alhambra\nSpain",
            img: require("../../../assets/WorldMonuments/Europe/TheAlambraGranada.png"),
          },
          {
            id: "3",
            country: "Cité de Carcassonne\nΓαλλία",
            img: require("../../../assets/WorldMonuments/Europe/CitédeCarcassonne.png"),
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "6a",
        status: "Capitals",
        img: 'L',
        country: "Malaysia",
        image: require("../../../assets/WorldMonuments/Asia/PetronasTwinTowers.png"),
        options: [
          {
            id: "0",
            capital: 'Petronas\nTowers',
            country: 'Malaysia'
          },
          {
            id: "1",
            capital: 'Πύργος του Άιφελ',
            country: 'Γαλλία'
          },
          {
            id: "2",
            capital: 'Burl Khalifa',
            country: 'United Arab Emirates'
          },
          {
            id: "3",
            capital: 'Σαρντ',
            country: 'Ηνωμένο Βασίλειο'
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "6b",
        status: "Flags",
        country: "Petronas Towers",
        capital: "Malaysia",
        options: [
          {
            id: "0",
            country: "Petronas Towers\nMalaysia",
            img: require("../../../assets/WorldMonuments/Asia/PetronasTwinTowers.png"),
          },
          {
            id: "1",
            country: "Πύργος του Άιφελ\nΓαλλία",
            img: require("../../../assets/WorldMonuments/Europe/eiffelTower.png"),
          },
          {
            id: "2",
            country: "Burj Khalifa\nUnited Arab Emirates",
            img: require("../../../assets/WorldMonuments/Asia/burj-khalifa.png"),
          },
          {
            id: "3",
            country: "Σαρντ\nΗνωμένο Βασίλειο",
            img: require("../../../assets/WorldMonuments/Europe/TheShard.png"),
          },
        ],
        correctAnswerIndex: 0
      },
      {
        id: "7a",
        status: "Capitals",
        img: 'L',
        country: "Γαλλία",
        image: require("../../../assets/WorldMonuments/Europe/Mont-Saint-MichelNormandy.png"),
        options: [
          {
            id: "0",
            capital: 'Alcatraz\nIsland',
            country: 'ΗΠΑ'
          },
          {
            id: "1",
            capital: 'Mont\nSaint Michel',
            country: 'Γαλλία'
          },
          {
            id: "2",
            capital: 'Ellis Island',
            country: 'ΗΠΑ'
          },
          {
            id: "3",
            capital: 'Παναγία των Παρισίων',
            country: 'Γαλλία'
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "7b",
        status: "Flags",
        country: "Mont Saint Michel",
        capital: "Γαλλία",
        options: [
          {
            id: "0",
            country: "Alcatraz Island\nΗΠΑ",
            img: require("../../../assets/WorldMonuments/USA/alcatraz.png"),
          },
          {
            id: "1",
            country: "Mont Saint Michel\nΗΠΑ",
            img: require("../../../assets/WorldMonuments/Europe/Mont-Saint-MichelNormandy.png"),
          },
          {
            id: "2",
            country: "Ellis Island\nΗΠΑ",
            img: require("../../../assets/WorldMonuments/USA/ellis-island.png"),
          },
          {
            id: "3",
            country: "Παναγία των Παρισίων\nΓαλλία",
            img: require("../../../assets/WorldMonuments/Europe/notreDame.png"),
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "8a",
        status: "Capitals",
        img: 'L',
        country: "ΗΠΑ",
        image: require("../../../assets/WorldMonuments/USA/Mount_Rushmore.png"),
        options: [
          {
            id: "0",
            capital: 'Στόουνχεντζ',
            country: 'Ηνωμένο Βασίλειο'
          },
          {
            id: "1",
            capital: 'Ατόμιουμ',
            country: 'Βέλγιο'
          },
          {
            id: "2",
            capital: 'St Joseph\'s \nOratory',
            country: 'Canada'
          },
          {
            id: "3",
            capital: 'Όρος Ράσμορ',
            country: 'ΗΠΑ'
          },
        ],
        correctAnswerIndex: 3,
      },
      {
        id: "8b",
        status: "Flags",
        country: "Όρος Ράσμορ",
        capital: "ΗΠΑ",
        options: [
          {
            id: "0",
            country: "St.Joseph's Oratory\nCanada",
            img: require("../../../assets/WorldMonuments/America/St.-Joseph's-Oratory_Montreal.png"),
          },
          {
            id: "1",
            country: "Στόουνχεντζ\nΗνωμένο Βασίλειο",
            img: require("../../../assets/WorldMonuments/Europe/stonehenge.png"),
          },
          {
            id: "2",
            country: "Ατόμιουμ\nBelgium",
            img: require("../../../assets/WorldMonuments/Europe/Atomium.png"),
          },
          {
            id: "3",
            country: "Όρος Ράσμορ\nΗΠΑ",
            img: require("../../../assets/WorldMonuments/USA/Mount_Rushmore.png"),
          },
        ],
        correctAnswerIndex: 3,
      },
      {
        id: "9a",
        status: "Capitals",
        img: 'L',
        country: "Ιαπωνία",
        image: require("../../../assets/WorldMonuments/Asia/FushimiInari-taishaShrineKyoto.png"),
        options: [
          {
            id: "0",
            capital: 'Fushimi\nInari Shrine',
            country: 'Ιαπωνία'
          },
          {
            id: "1",
            capital: 'Osaka Castle',
            country: 'Ιαπωνία'
          },
          {
            id: "2",
            capital: 'Imperial\nCastle',
            country: 'Ιαπωνία'
          },
          {
            id: "3",
            capital: 'Himeji Castle',
            country: 'Ιαπωνία'
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "9b",
        status: "Flags",
        country: "Fushimi Inari Shrine",
        capital: "Ιαπωνία",
        options: [
          {
            id: "0",
            country: "Fushimi Inari Shrine\nΙαπωνία",
            img: require("../../../assets/WorldMonuments/Asia/FushimiInari-taishaShrineKyoto.png"),
          },
          {
            id: "1",
            country: "Osaka Castle\nΙαπωνία",
            img: require("../../../assets/WorldMonuments/Asia/Osaka-Castle.png"),
          },
          {
            id: "2",
            country: "Himeji Castle\nΙαπωνία",
            img: require("../../../assets/WorldMonuments/Asia/HimejiCastle.png"),
          },
          {
            id: "3",
            country: "Imperial Palace\nΙαπωνία",
            img: require("../../../assets/WorldMonuments/Asia/ImperialPalaceTokyo.png"),
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "10a",
        status: "Capitals",
        img: 'L',
        country: "Singapore",
        image: require("../../../assets/WorldMonuments/Asia/Gardens-by-the-Bay.jpg"),
        options: [
          {
            id: "0",
            capital: 'Merlion\nSingapore',
            country: 'Singapore'
          },
          {
            id: "1",
            capital: 'Palace of\nVersailles',
            country: 'Γαλλία'
          },
          {
            id: "2",
            capital: 'Gardens\nby the Bay',
            country: 'Singapore'
          },
          {
            id: "3",
            capital: 'Sydney\nOpera House',
            country: 'Αυστραλία'
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "10b",
        status: "Flags",
        country: "Gardens by the Bay",
        capital: "Singapore",
        options: [
          {
            id: "0",
            country: "Όπερα του Σίδνεϊ\nΑυστραλία",
            img: require("../../../assets/WorldMonuments/Oceania/SydneyOperaHouse.png"),
          },
          {
            id: "1",
            country: "Palace of Versailles\nΓαλλία",
            img: require("../../../assets/WorldMonuments/Europe/Palace-of-Versailles-France.png"),
          },
          {
            id: "2",
            country: "Gardens by the Bay\nSingapore",
            img: require("../../../assets/WorldMonuments/Asia/Gardens-by-the-Bay.png"),
          },
          {
            id: "3",
            country: "Merlion Singapore\nSingapore",
            img: require("../../../assets/WorldMonuments/Asia/merlion_singapore.png"),
          },
        ],
        correctAnswerIndex: 2,
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

export default questions5El