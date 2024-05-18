const questions4El = [
  {
    id: "1a",
    status: "Capitals",
    img: 'L',
    country: "Ιταλία",
    image: require("../../../assets/WorldMonuments/Europe/trevi-fontein-rome.png"),
    options: [
      {
        id: "0",
        capital: "Ισπανικά Σκαλιά",
        country: "Ιταλία",
      },
      {
        id: "1",
        capital: "Γέφυρα του Ριάλτο",
        country: "Ιταλία",
      },
      {
        id: "2",
        capital: "Μουσείο Γκούγκενχάιμ",
        country: "Ισπανία",
      },
      {
        id: "3",
        capital: "Φοντάνα\nντι Τρέβι",
        country: "Ιταλία",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "1b",
    status: "Flags",
    country: "Φοντάνα ντι Τρέβι",
    capital: "Ιταλία",
    options: [
      {
        id: "0",
        country: "Ισπανικά Σκαλιά\nΙταλία",
        img: require("../../../assets/WorldMonuments/Europe/spanish-steps-rome.png"),
      },
      {
        id: "1",
        country: "Γέφυρα του Ριάλτο\nΙταλία",
        img: require("../../../assets/WorldMonuments/Europe/Rialto-Bridge.png"),
      },
      {
        id: "2",
        country: "Μουσείο Γκούγκενχάιμ\nSΙσπανία",
        img: require("../../../assets/WorldMonuments/Europe/GuggenheimBilbao.png"),
      },
      {
        id: "3",
        country: "Φοντάνα ντι Τρέβι\nΙταλία",
        img: require("../../../assets/WorldMonuments/Europe/trevi-fontein-rome.png"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2a",
    status: "Capitals",
    img: 'L',
    country: "Ηνωμένο Βασίλειο",
    image: require("../../../assets/WorldMonuments/Europe/bigBen.png"),
    options: [
      {
        id: "0",
        capital: "Αββαείο\nτου Γουεσμίνστερ",
        country: "Ηνωμένο Βασίλειο",
      },
      {
        id: "1",
        capital: "Ανάκτορα Μπάκιγχαμ",
        country: "Ηνωμένο Βασίλειο",
      },
      {
        id: "2",
        capital: "Μπιγκ Μπεν",
        country: "Ηνωμένο Βασίλειο",
      },
      {
        id: "3",
        capital: "Γέφυρα του Πύργου",
        country: "Ηνωμένο Βασίλειο",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "2b",
    status: "Flags",
    country: "Μπιγκ Μπεν",
    capital: "Ηνωμένο Βασίλειο",
    options: [
      {
        id: "0",
        country: "Ανάκτορα του Μπάκιγχαμ\nΗνωμένο Βασίλειο",
        img: require("../../../assets/WorldMonuments/Europe/buckinghampalace.png"),
      },
      {
        id: "1",
        country: "Αββαείο του Γουεσμίνστερ\nΗνωμένο Βασίλειο",
        img: require("../../../assets/WorldMonuments/Europe/westminster-abbey.png"),
      },
      {
        id: "2",
        country: "Μπιγκ Μπεν\nΗνωμένο Βασίλειο",
        img: require("../../../assets/WorldMonuments/Europe/bigBen.png"),
      },
      {
        id: "3",
        country: "Γέφυρα του Πύργου\nΗνωμένο Βασίλειο",
        img: require("../../../assets/WorldMonuments/Europe/TowerBridge.png"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "Αυστραλία",
    image: require("../../../assets/WorldMonuments/Oceania/harbour-bridge.png"),
    options: [
      {
        id: "0",
        capital: 'Sydney\nHarbour Bridge',
        country: 'Αυστραλία'
      },
      {
        id: "1",
        capital: 'Brooklyn\nBridge',
        country: 'ΗΠΑ'
      },
      {
        id: "2",
        capital: 'Γέφυρα του Πύργου',
        country: 'Ηνωμένο Βασίλειο'
      },
      {
        id: "3",
        capital: 'Golden\nGate Bridge',
        country: 'ΗΠΑ'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "3b",
    status: "Flags",
    country: "Γέφυρα του Σίδνεϊ",
    capital: "Αυστραλία",
    options: [
      {
        id: "0",
        country: "Γέφυρα του Σίδνεϊ\nΑυστραλία",
        img: require("../../../assets/WorldMonuments/Oceania/harbour-bridge.png"),
      },
      {
        id: "1",
        country: "Γέφυρα του Μπρούκλιν\nΗΠΑ",
        img: require("../../../assets/WorldMonuments/USA/brooklyn-bridge.png"),
      },
      {
        id: "2",
        country: "Γέφυρα Γκόλντεν Γκέιτ\nΗΠΑ",
        img: require("../../../assets/WorldMonuments/USA/Golden-Gate-San-Francisco.png"),
      },
      {
        id: "3",
        country: "Γέφυρα του Πύργου\nΗνωμένο Βασίλειο",
        img: require("../../../assets/WorldMonuments/Europe/TowerBridge.png"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "4a",
    status: "Capitals",
    img: 'L',
    country: "Θιβέτ",
    image: require("../../../assets/WorldMonuments/Asia/potalaPalaceTibet.png"),
    options: [
      {
        id: "0",
        capital: 'Tiger\'s nest',
        country: 'Bhutan'
      },
      {
        id: "1",
        capital: 'Άνγκορ Βατ',
        country: 'Καμπότζη'
      },
      {
        id: "2",
        capital: 'Ανάκτορο Ποτάλα',
        country: 'Θιβέτ'
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
    country: "Ανάκτορο Ποτάλα",
    capital: "Θιβέτ",
    options: [
      {
        id: "0",
        country: "Sigiriya\nΣρι Λάνκα",
        img: require("../../../assets/WorldMonuments/Asia/Sigiriya__Sri_Lanka.png"),
      },
      {
        id: "1",
        country: "Άνγκορ Βατ\nCambodia",
        img: require("../../../assets/WorldMonuments/Asia/AngkorWat.png"),
      },
      {
        id: "2",
        country: "Ανάκτορο Ποτάλα\nΘιβέτ",
        img: require("../../../assets/WorldMonuments/Asia/potalaPalaceTibet.png"),
      },
      {
        id: "3",
        country: "Tiger's Nest\nBhutan",
        img: require("../../../assets/WorldMonuments/Asia/TigersNestBhutan.png"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "5a",
    status: "Capitals",
    img: 'L',
    country: "Γαλλία",
    image: require("../../../assets/WorldMonuments/Europe/notreDame.png"),
    options: [
      {
        id: "0",
        capital: 'Ακρόπολη',
        country: 'Ελλάδα'
      },
      {
        id: "1",
        capital: 'Παναγία των Παρισίων',
        country: 'Γαλλία'
      },
      {
        id: "2",
        capital: 'Καθεδρικός ναός του Μιλάνου',
        country: 'Ιταλία'
      },
      {
        id: "3",
        capital: 'Καπέλα Σιστίνα',
        country: 'Βατικανό'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "5b",
    status: "Flags",
    country: "Παναγία των Παρισίων",
    capital: "Γαλλία",
    options: [
      {
        id: "0",
        country: "Ακρόπολη\nΕλλάδα",
        img: require("../../../assets/WorldMonuments/Europe/Acropolis.png"),
      },
      {
        id: "1",
        country: "Παναγία των Παρισίων\nΓαλλία",
        img: require("../../../assets/WorldMonuments/Europe/notreDame.png"),
      },
      {
        id: "2",
        country: "Κάστρο Μπραν\nRomania",
        img: require("../../../assets/WorldMonuments/Europe/Bran-CastleDracula.png"),
      },
      {
        id: "3",
        country: "Ξύλινη εκκλησία Μπόργουντ\nNorway",
        img: require("../../../assets/WorldMonuments/Europe/borgund-stave-church-Norway.png"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "Ηνωμένο Βασίλειο",
    image: require("../../../assets/WorldMonuments/Europe/buckinghampalace.png"),
    options: [
      {
        id: "0",
        capital: 'Royal Palace\nof Madrid',
        country: 'Ισπανία'
      },
      {
        id: "1",
        capital: 'The Grand\nPalace',
        country: 'Thailand'
      },
      {
        id: "2",
        capital: 'Buckingham\nPalace',
        country: 'Ηνωμένο Βασίλειο'
      },
      {
        id: "3",
        capital: 'Palace of\nWestminster',
        country: 'Ηνωμένο Βασίλειο'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "6b",
    status: "Flags",
    country: "Buckingham Palace",
    capital: "Ηνωμένο Βασίλειο",
    options: [
      {
        id: "0",
        country: "The Grand Palace\nThailand",
        img: require("../../../assets/WorldMonuments/Asia/the-grand-palace.png"),
      },
      {
        id: "1",
        country: "Royal Palace of Madrid\nSpain",
        img: require("../../../assets/WorldMonuments/Europe/RoyalPalaceMadrid.png"),
      },
      {
        id: "2",
        country: "Buckingham Palace\nΗνωμένο Βασίλειο",
        img: require("../../../assets/WorldMonuments/Europe/buckinghampalace.png"),
      },
      {
        id: "3",
        country: "Palace of Westminster\nΗνωμένο Βασίλειο",
        img: require("../../../assets/WorldMonuments/Europe/palace-of-westminster_main.png"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7a",
    status: "Capitals",
    img: 'L',
    country: "ΗΠΑ",
    image: require("../../../assets/WorldMonuments/USA/alcatraz.jpg"),
    options: [
      {
        id: "0",
        capital: 'Alcatraz\nIsland',
        country: 'ΗΠΑ'
      },
      {
        id: "1",
        capital: 'Ellis\nIsland',
        country: 'ΗΠΑ'
      },
      {
        id: "2",
        capital: 'Mont\nSaint Michel',
        country: 'Γαλλία'
      },
      {
        id: "3",
        capital: 'Alhambra',
        country: 'Ισπανία'
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "7b",
    status: "Flags",
    country: "Alcatraz Island",
    capital: "ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Alcatraz Island\nΗΠΑ",
        img: require("../../../assets/WorldMonuments/USA/alcatraz.png"),
      },
      {
        id: "1",
        country: "Ellis Island\nΗΠΑ",
        img: require("../../../assets/WorldMonuments/USA/ellis-island.png"),
      },
      {
        id: "2",
        country: "Mont Saint Michel\nΓαλλία",
        img: require("../../../assets/WorldMonuments/Europe/Mont-Saint-MichelNormandy.png"),
      },
      {
        id: "3",
        country: "Alhambra\nSpain",
        img: require("../../../assets/WorldMonuments/Europe/TheAlambraGranada.png"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "Ιαπωνία",
    image: require("../../../assets/WorldMonuments/Asia/hiroshima_peace_memorial_park.png"),
    options: [
      {
        id: "0",
        capital: 'Imperial\nPalace',
        country: 'Ιαπωνία'
      },
      {
        id: "1",
        capital: 'Himeji\nCastle',
        country: 'Ιαπωνία'
      },
      {
        id: "2",
        capital: 'Hiroshima\nPeace\nMemorial',
        country: 'Ιαπωνία'
      },
      {
        id: "3",
        capital: 'Fushimi\nInari Shrine',
        country: 'Ιαπωνία'
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "8b",
    status: "Flags",
    country: "Hiroshima Peace Memorial",
    capital: "Ιαπωνία",
    options: [
      {
        id: "0",
        country: "Himeji Castle\nΙαπωνία",
        img: require("../../../assets/WorldMonuments/Asia/HimejiCastle.png"),
      },
      {
        id: "1",
        country: "Fushimi Inari Shrine\nΙαπωνία",
        img: require("../../../assets/WorldMonuments/Asia/FushimiInari-taishaShrineKyoto.png"),
      },
      {
        id: "2",
        country: "Hiroshima Peace Memorial Park\nJapan",
        img: require("../../../assets/WorldMonuments/Asia/hiroshima_peace_memorial_park.png"),
      },
      {
        id: "3",
        country: "Imperial Palace\nΙαπωνία",
        img: require("../../../assets/WorldMonuments/Asia/ImperialPalaceTokyo.png"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "Ιταλία",
    image: require("../../../assets/WorldMonuments/Europe/TowerPisa.png"),
    options: [
      {
        id: "0",
        capital: 'Κολοσσαίο',
        country: 'Ιταλία'
      },
      {
        id: "1",
        capital: 'Πύργος του Άιφελ',
        country: 'Γαλλία'
      },
      {
        id: "2",
        capital: 'Cité de\nCarcassonne',
        country: 'Γαλλία'
      },
      {
        id: "3",
        capital: 'Leaning\nTower of Pisa',
        country: 'Ιταλία'
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "9b",
    status: "Flags",
    country: "Κεκλιμένος Πύργος της Πίζας",
    capital: "Ιταλία",
    options: [
      {
        id: "0",
        country: "Cité de Carcassonne\nΓαλλία",
        img: require("../../../assets/WorldMonuments/Europe/CitédeCarcassonne.png"),
      },
      {
        id: "1",
        country: "Κολοσσαίο\nΙταλία",
        img: require("../../../assets/WorldMonuments/Europe/colosseum.png"),
      },
      {
        id: "2",
        country: "Πύργος του Άιφελ\nΓαλλία",
        img: require("../../../assets/WorldMonuments/Europe/eiffelTower.png"),
      },
      {
        id: "3",
        country: "Κεκλιμένος Πύργος της Πίζας\nΙταλία",
        img: require("../../../assets/WorldMonuments/Europe/TowerPisa.png"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "10a",
    status: "Capitals",
    img: 'L',
    country: "ΗΠΑ",
    image: require("../../../assets/WorldMonuments/USA/Empire-State-Building.jpg"),
    options: [
      {
        id: "0",
        capital: 'Σαρντ',
        country: 'Ηνωμένο Βασίλειο'
      },
      {
        id: "1",
        capital: 'Empire\nState Building',
        country: 'ΗΠΑ'
      },
      {
        id: "2",
        capital: 'Petronas\nTowers',
        country: 'Malaysia'
      },
      {
        id: "3",
        capital: 'Tokyo Tower',
        country: 'Ιαπωνία'
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "10b",
    status: "Flags",
    country: "Empire State Building",
    capital: "ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Σαρντ\nΗνωμένο Βασίλειο",
        img: require("../../../assets/WorldMonuments/Europe/TheShard.png"),
      },
      {
        id: "1",
        country: "Empire State Building\nΗΠΑ",
        img: require("../../../assets/WorldMonuments/USA/Empire-State-Building.png"),
      },
      {
        id: "2",
        country: "Petronas Towers\nMalaysia",
        img: require("../../../assets/WorldMonuments/Asia/PetronasTwinTowers.png"),
      },
      {
        id: "3",
        country: "Tokyo Tower\nΙαπωνία",
        img: require("../../../assets/WorldMonuments/Asia/TokyoTower.png"),
      },
    ],
    correctAnswerIndex: 1,
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
];

export default questions4El;
