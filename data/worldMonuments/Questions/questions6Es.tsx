const questions6Es = [
    {
        id: "1",
        monument: "Bran Castle",
        country: "Romania",
        options: [
          {
            id: "0",
            name: "Eltz Castle\nGermany",
            img: require("../../../assets/WorldMonuments/Europe/eltz-castle-muenstermaifeld-germany.png"),
          },
          {
            id: "1",
            name: "Neuschwanstein Castle\nGermany",
            img: require("../../../assets/WorldMonuments/Europe/NeuschwansteinCastle.png"),
          },
          {
            id: "2",
            name: "Bran Castle\nRomania",
            img: require("../../../assets/WorldMonuments/Europe/Bran-CastleDracula.png"),
          },
          {
            id: "3",
            name: "Himeji Castle\nJapan",
            img: require("../../../assets/WorldMonuments/Asia/HimejiCastle.png"),
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "2",
        monument: "Duomo di Milano",
        country: "Italy",
        options: [
          {
            id: "0",
            name: "Borgund Stave Church\nNorway",
            img: require("../../../assets/WorldMonuments/Europe/borgund-stave-church-Norway.png"),
          },
          {
            id: "1",
            name: "Florence Cathedral\nItaly",
            img: require("../../../assets/WorldMonuments/Europe/duomo-florence.png"),
          },
          {
            id: "2",
            name: "Sagrada Familia\nSpain",
            img: require("../../../assets/WorldMonuments/Europe/sagradaFamilia.png"),
          },
          {
            id: "3",
            name: "Duomo di Milan\nItaly",
            img: require("../../../assets/WorldMonuments/Europe/cathedralMilan.png"),
          },
        ],
        correctAnswerIndex: 3,
      },
      {
        id: "3",
        monument: "Lincoln Memorial",
        country: "USA",
        options: [
          {
            id: "0",
            name: "Brandenburg Gate\nGermany",
            img: require("../../../assets/WorldMonuments/Europe/Brandenburg-Gate-Berlin.png"),
          },
          {
            id: "1",
            name: "Lincoln Memorial\nUSA",
            img: require("../../../assets/WorldMonuments/USA/lincolnMonument.jpg"),
          },
          {
            id: "2",
            name: "Knossos\nGreece",
            img: require("../../../assets/WorldMonuments/Europe/knossos.png"),
          },
          {
            id: "3",
            name: "Guggenheim Museum\nSpain",
            img: require("../../../assets/WorldMonuments/Europe/GuggenheimBilbao.png"),
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "4",
        monument: "Aït Benhaddou",
        country: "Morocco",
        options: [
          {
            id: "0",
            name: "Alhambra\nSpain",
            img: require("../../../assets/WorldMonuments/Europe/TheAlambraGranada.png"),
          },
          {
            id: "1",
            name: "Temples of Bagan\nMyanmar",
            img: require("../../../assets/WorldMonuments/Asia/Bangan-Temples.png"),
          },
          {
            id: "2",
            name: "Aït Benhaddou\nMorocco",
            img: require("../../../assets/WorldMonuments/Africa/AïtBenhaddou.png"),
          },
          {
            id: "3",
            name: "Kailasa Temple\nIndia",
            img: require("../../../assets/WorldMonuments/Asia/kailasa-temple-india.png"),
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "5",
        monument: "Sirigiya",
        country: "Sri Lanka",
        options: [
          {
            id: "0",
            name: "Sigiriya\nSri Lanka",
            img: require("../../../assets/WorldMonuments/Asia/Sigiriya__Sri_Lanka.png"),
          },
          {
            id: "1",
            name: "Borgund Stave Church\nNorway",
            img: require("../../../assets/WorldMonuments/Europe/borgund-stave-church-Norway.png"),
          },
          {
            id: "2",
            name: "Church of Saint George\nEthiopia",
            img: require("../../../assets/WorldMonuments/Africa/ChurchStGeorgeEthiopia.png"),
          },
          {
            id: "3",
            name: "Meteora\nGreece",
            img: require("../../../assets/WorldMonuments/Europe/meteora.png"),
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "6",
        monument: "Knossos",
        country: "Greece",
        options: [
          {
            id: "0",
            name: "Tiger's Nest\nBhutan",
            img: require("../../../assets/WorldMonuments/Asia/TigersNestBhutan.png"),
          },
          {
            id: "1",
            name: "Acropolis\nGreece",
            img: require("../../../assets/WorldMonuments/Europe/Acropolis.png"),
          },
          {
            id: "2",
            name: "Ruins of Pompeii\nItaly",
            img: require("../../../assets/WorldMonuments/Europe/Ruins-of-Pompeii-Italy.png"),
          },
          {
            id: "3",
            name: "Knossos\nGreece",
            img: require("../../../assets/WorldMonuments/Europe/knossos.png"),
          },
        ],
        correctAnswerIndex: 3,
      },
      {
        id: "7",
        monument: "Louvre Museum",
        country: "France",
        options: [
          {
            id: "0",
            name: "Palace of Versailles\nFrance",
            img: require("../../../assets/WorldMonuments/Europe/Palace-of-Versailles-France.png"),
          },
          {
            id: "1",
            name: "Guggenheim Museum\nSpain",
            img: require("../../../assets/WorldMonuments/Europe/GuggenheimBilbao.png"),
          },
          {
            id: "2",
            name: "Louvre Museum\nFrance",
            img: require("../../../assets/WorldMonuments/Europe/LouvreMuseum.png"),
          },
          {
            id: "3",
            name: "St.Joseph's Oratory\nCanada",
            img: require("../../../assets/WorldMonuments/America/St.-Joseph's-Oratory_Montreal.png"),
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "8",
        monument: "Borobudur",
        country: "Indonesia",
        options: [
          {
            id: "0",
            name: "Borobudur\nIndonesia",
            img: require("../../../assets/WorldMonuments/Asia/borobudur-temple-Indonesia.png"),
          },
          {
            id: "1",
            name: "Potala Palace\nTibet",
            img: require("../../../assets/WorldMonuments/Asia/potalaPalaceTibet.png"),
          },
          {
            id: "2",
            name: "Taj Mahal\nIndia",
            img: require("../../../assets/WorldMonuments/Asia/TajMajal.png"),
          },
          {
            id: "3",
            name: "Jetavanaramaya\nSri Lanka",
            img: require("../../../assets/WorldMonuments/Asia/JetavanaramayaSriLanka.png"),
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "9",
        monument: "Westminster Abbey",
        country: "UK",
        options: [
          {
            id: "0",
            name: "Sagrada Familia\nSpain",
            img: require("../../../assets/WorldMonuments/Europe/sagradaFamilia.png"),
          },
          {
            id: "1",
            name: "Buckingham Palace\nUK",
            img: require("../../../assets/WorldMonuments/Europe/buckinghampalace.png"),
          },
          {
            id: "2",
            name: "Palace of Westminster\nUK",
            img: require("../../../assets/WorldMonuments/Europe/palace-of-westminster_main.png"),
          },
          {
            id: "3",
            name: "Westminster Abbey\nUK",
            img: require("../../../assets/WorldMonuments/Europe/westminster-abbey.png"),
          },
        ],
        correctAnswerIndex: 3,
      },
      {
        id: "10",
        monument: "Borgund Stave Church",
        country: "Norway",
        options: [
          {
            id: "0",
            name: "Stonehedge\nUK",
            img: require("../../../assets/WorldMonuments/Europe/stonehenge.png"),
          },
          {
            id: "1",
            name: "Borgund Stave Church\nNorway",
            img: require("../../../assets/WorldMonuments/Europe/borgund-stave-church-Norway.png"),
          },
          {
            id: "2",
            name: "Church of Saint George\nEthiopia",
            img: require("../../../assets/WorldMonuments/Africa/ChurchStGeorgeEthiopia.png"),
          },
          {
            id: "3",
            name: "Tikal\nGuatemala",
            img: require("../../../assets/WorldMonuments/America/TikalGuatemala.png"),
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "11",
        monument: "",
        country: "",
      },
]

export default questions6Es