const questions2El = [
    {
        id: "1",
        monument: "Αγία Σοφία",
        country: "Τουρκία",
        options: [
          {
            id: "0",
            name: "Χαλέπι\nΣυρία",
            img: require("../../../assets/WorldMonuments/Asia/CitadelofAleppoSyria.jpg"),
          },
          {
            id: "1",
            name: "Mετέωρα\nΕλλάδα",
            img: require("../../../assets/WorldMonuments/Europe/meteora.jpg"),
          },
          {
            id: "2",
            name: "Ιερά Μονή Αγίας Αικατερίνης Όρους Σινά\nΑίγυπτος",
            img: require("../../../assets/WorldMonuments/Africa/mountsinai.jpg"),
          },
          {
            id: "3",
            name: "Αγία Σοφία\nΤουρκία",
            img: require("../../../assets/WorldMonuments/Asia/AgiaSofia.png"),
          },
        ],
        correctAnswerIndex: 3,
      },
      {
        id: "2",
        monument: "Πέτρα",
        country: "Ιορδανία",
        options: [
          {
            id: "0",
            name: "Ναός του Λούξορ\nΑίγυπτος",
            img: require("../../../assets/WorldMonuments/Africa/Entrance-of-Luxor-Temple-Egypt.jpg"),
          },
          {
            id: "1",
            name: "Αΐτ-Μπεν-Χαντού\nMαρόκο",
            img: require("../../../assets/WorldMonuments/Africa/AïtBenhaddou.png"),
          },
          {
            id: "2",
            name: "Πέτρα\nΙορδανία",
            img: require("../../../assets/WorldMonuments/Asia/jordanPetra.png"),
          },
          {
            id: "3",
            name: "Ναός Kailasa\nIνδία",
            img: require("../../../assets/WorldMonuments/Asia/kailasa-temple-india.png"),
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "3",
        monument: "Πύλη του Βρανδεμβούργου",
        country: "Γερμανία",
        options: [
          {
            id: "0",
            name: "Πύλη του Βρανδεμβούργου\nΓερμανία",
            img: require("../../../assets/WorldMonuments/Europe/Brandenburg-Gate-Berlin.png"),
          },
          {
            id: "1",
            name: "Γέφυρα Ponte D. Luis\nΠορτογαλία",
            img: require("../../../assets/WorldMonuments/Europe/DomLuisBridgePorto.png"),
          },
          {
            id: "2",
            name: "Πύργος του Άιφελ\nΓαλλία",
            img: require("../../../assets/WorldMonuments/Europe/eiffelTower.png"),
          },
          {
            id: "3",
            name: "Μπιγκ Μπεν\nΗνωμένο Βασίλειο",
            img: require("../../../assets/WorldMonuments/Europe/bigBen.png"),
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "4",
        monument: "Καθεδρικός ναός Φλωρεντίας",
        country: "Ιταλία",
        options: [
          {
            id: "0",
            name: "Καθεδρικός ναός του Μιλάνου\nΙταλία",
            img: require("../../../assets/WorldMonuments/Europe/cathedralMilan.png"),
          },
          {
            id: "1",
            name: "Καθεδρικός ναός της πόλης του Μεξικού\nMεξικό",
            img: require("../../../assets/WorldMonuments/America/Metropolitan-Cathedral_Mexico.png"),
          },
          {
            id: "2",
            name: "Καθεδρικός ναός της Φλωρεντίας\nΙταλία",
            img: require("../../../assets/WorldMonuments/Europe/duomo-florence.png"),
          },
          {
            id: "3",
            name: "Αγία Σοφία\nTουρκία",
            img: require("../../../assets/WorldMonuments/Asia/AgiaSofia.png"),
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "5",
        monument: "United States Capitol",
        country: "USA",
        options: [
          {
            id: "0",
            name: "Lincoln Memorial\nUSA",
            img: require("../../../assets/WorldMonuments/USA/lincolnMonument.jpg"),
          },
          {
            id: "1",
            name: "Arc de Triomphe\nFrance",
            img: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.png"),
          },
          {
            id: "2",
            name: "Washington Monument\nUSA",
            img: require("../../../assets/WorldMonuments/USA/washingtonMonument.png"),
          },
          {
            id: "3",
            name: "United States Capitol\nUSA",
            img: require("../../../assets/WorldMonuments/USA/capitol-building.png"),
          },
        ],
        correctAnswerIndex: 3,
      },
      {
        id: "6",
        monument: "Great Sphinx of Giza",
        country: "Egypt",
        options: [
          {
            id: "0",
            name: "Great Sphinx of Giza\nEgypt",
            img: require("../../../assets/WorldMonuments/Africa/sphinx.png"),
          },
          {
            id: "1",
            name: "Entrance of Luxor Temple\nEgypt",
            img: require("../../../assets/WorldMonuments/Africa/Entrance-of-Luxor-Temple-Egypt.jpg"),
          },
          {
            id: "2",
            name: "Temple of Isis\nEgypt",
            img: require("../../../assets/WorldMonuments/Africa/temple_isis-Aswan.png"),
          },
          {
            id: "3",
            name: "Great Pyramid of Giza\nEgypt",
            img: require("../../../assets/WorldMonuments/Africa/Pyramids.png"),
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "7",
        monument: "Burj Khalifa",
        country: "United Arab Emirates",
        options: [
          {
            id: "0",
            name: "Washington Monument\nUSA",
            img: require("../../../assets/WorldMonuments/USA/washingtonMonument.png"),
          },
          {
            id: "1",
            name: "The Shard\nUK",
            img: require("../../../assets/WorldMonuments/Europe/TheShard.png"),
          },
          {
            id: "2",
            name: "Burj Khalifa\nUnited Arab Emirates",
            img: require("../../../assets/WorldMonuments/Asia/burj-khalifa.png"),
          },
          {
            id: "3",
            name: "Empire State Building\nUSA",
            img: require("../../../assets/WorldMonuments/USA/Empire-State-Building.png"),
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "8",
        monument: "Forbidden City",
        country: "China",
        options: [
          {
            id: "0",
            name: "Hiroshima Peace Memorial Park\nJapan",
            img: require("../../../assets/WorldMonuments/Asia/hiroshima_peace_memorial_park.png"),
          },
          {
            id: "1",
            name: "Forbidden City\nChina",
            img: require("../../../assets/WorldMonuments/Asia/forbidden-city.jpg"),
          },
          {
            id: "2",
            name: "Temple of Heaven\nChina",
            img: require("../../../assets/WorldMonuments/Asia/temple-of-heaven-in-beijing.png"),
          },
          {
            id: "3",
            name: "The Grand Palace\nThailand",
            img: require("../../../assets/WorldMonuments/Asia/the-grand-palace.png"),
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "9",
        monument: "Sagrada Familia",
        country: "Spain",
        options: [
          {
            id: "0",
            name: "Mexico City Cathedral\nMexico",
            img: require("../../../assets/WorldMonuments/America/Metropolitan-Cathedral_Mexico.png"),
          },
          {
            id: "1",
            name: "Notre Dame\nFrance",
            img: require("../../../assets/WorldMonuments/Europe/notreDame.png"),
          },
          {
            id: "2",
            name: "Sagrada Familia\nSpain",
            img: require("../../../assets/WorldMonuments/Europe/sagradaFamilia.png"),
          },
          {
            id: "3",
            name: "Church on the Savior \non Blood\nRussia",
            img: require("../../../assets/WorldMonuments/Europe/stPetersburg.png"),
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "10",
        monument: "Saint Basil's Cathedral",
        country: "Russia",
        options: [
          {
            id: "0",
            name: "St. Peter's Basilica\nVatican City",
            img: require("../../../assets/WorldMonuments/Europe/St.-Peters-Basilica-Vatican.png"),
          },
          {
            id: "1",
            name: "Louvre Museum\nFrance",
            img: require("../../../assets/WorldMonuments/Europe/LouvreMuseum.png"),
          },
          {
            id: "2",
            name: "Borgund Stave Church\nNorway",
            img: require("../../../assets/WorldMonuments/Europe/borgund-stave-church-Norway.png"),
          },
          {
            id: "3",
            name: "Saint Basil's Cathedral\nRussia",
            img: require("../../../assets/WorldMonuments/Europe/saint_basils_cathedral.png"),
          },
        ],
        correctAnswerIndex: 3,
      },
      {
        id: "11",
        monument: "",
        country: "",
      },
]

export default questions2El