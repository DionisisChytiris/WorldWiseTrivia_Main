const questions4Es = [
    {
        id: "1",
        monument: "Trevi Fountain",
        country: "Italy",
        options: [
          {
            id: "0",
            name: "Spanish Steps\nItaly",
            img: require("../../../assets/WorldMonuments/Europe/spanish-steps-rome.png"),
          },
          {
            id: "1",
            name: "Rialto Bridge\nItaly",
            img: require("../../../assets/WorldMonuments/Europe/Rialto-Bridge.png"),
          },
          {
            id: "2",
            name: "Guggenheim Museum\nSpain",
            img: require("../../../assets/WorldMonuments/Europe/GuggenheimBilbao.png"),
          },
          {
            id: "3",
            name: "Trevi Fountain\nItaly",
            img: require("../../../assets/WorldMonuments/Europe/trevi-fontein-rome.png"),
          },
        ],
        correctAnswerIndex: 3,
      },
      {
        id: "2",
        monument: "Big Ben",
        country: "UK",
        options: [
          {
            id: "0",
            name: "Buckingham Palace\nUK",
            img: require("../../../assets/WorldMonuments/Europe/buckinghampalace.png"),
          },
          {
            id: "1",
            name: "Westminster Abbey\nUK",
            img: require("../../../assets/WorldMonuments/Europe/westminster-abbey.png"),
          },
          {
            id: "2",
            name: "Big Ben\nUK",
            img: require("../../../assets/WorldMonuments/Europe/bigBen.png"),
          },
          {
            id: "3",
            name: "Tower Bridge\nUK",
            img: require("../../../assets/WorldMonuments/Europe/TowerBridge.png"),
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "3",
        monument: "Sydney Harbour Bridge",
        country: "Australia",
        options: [
          {
            id: "0",
            name: "Sydney Harbour Bridge\nAustralia",
            img: require("../../../assets/WorldMonuments/Oceania/harbour-bridge.png"),
          },
          {
            id: "1",
            name: "Brooklyn Bridge\nUSA",
            img: require("../../../assets/WorldMonuments/USA/brooklyn-bridge.png"),
          },
          {
            id: "2",
            name: "Golden Gate Bridge\nUSA",
            img: require("../../../assets/WorldMonuments/USA/Golden-Gate-San-Francisco.png"),
          },
          {
            id: "3",
            name: "Tower Bridge\nUK",
            img: require("../../../assets/WorldMonuments/Europe/TowerBridge.png"),
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "4",
        monument: "Potala Palace",
        country: "Tibet",
        options: [
          {
            id: "0",
            name: "Sigiriya\nSri Lanka",
            img: require("../../../assets/WorldMonuments/Asia/Sigiriya__Sri_Lanka.png"),
          },
          {
            id: "1",
            name: "Angkor Wat\nCambodia",
            img: require("../../../assets/WorldMonuments/Asia/AngkorWat.png"),
          },
          {
            id: "2",
            name: "Potala Palace\nTibet",
            img: require("../../../assets/WorldMonuments/Asia/potalaPalaceTibet.png"),
          },
          {
            id: "3",
            name: "Tiger's Nest\nBhutan",
            img: require("../../../assets/WorldMonuments/Asia/TigersNestBhutan.png"),
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "5",
        monument: "Notre Dame",
        country: "France",
        options: [
          {
            id: "0",
            name: "Acropolis\nGreece",
            img: require("../../../assets/WorldMonuments/Europe/Acropolis.png"),
          },
          {
            id: "1",
            name: "Notre Dame\nFrance",
            img: require("../../../assets/WorldMonuments/Europe/notreDame.png"),
          },
          {
            id: "2",
            name: "Bran Castle\nRomania",
            img: require("../../../assets/WorldMonuments/Europe/Bran-CastleDracula.png"),
          },
          {
            id: "3",
            name: "Borgund Stave Church\nNorway",
            img: require("../../../assets/WorldMonuments/Europe/borgund-stave-church-Norway.png"),
          },
        ],
        correctAnswerIndex: 1,
      },
      {
        id: "6",
        monument: "Buckingham Palace",
        country: "UK",
        options: [
          {
            id: "0",
            name: "The Grand Palace\nThailand",
            img: require("../../../assets/WorldMonuments/Asia/the-grand-palace.png"),
          },
          {
            id: "1",
            name: "Royal Palace of Madrid\nSpain",
            img: require("../../../assets/WorldMonuments/Europe/RoyalPalaceMadrid.png"),
          },
          {
            id: "2",
            name: "Buckingham Palace\nUK",
            img: require("../../../assets/WorldMonuments/Europe/buckinghampalace.png"),
          },
          {
            id: "3",
            name: "Palace of Westminster\nUK",
            img: require("../../../assets/WorldMonuments/Europe/palace-of-westminster_main.png"),
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "7",
        monument: "Alcatraz Island",
        country: "USA",
        options: [
          {
            id: "0",
            name: "Alcatraz Island\nUSA",
            img: require("../../../assets/WorldMonuments/USA/alcatraz.png"),
          },
          {
            id: "1",
            name: "Ellis Island\nUSA",
            img: require("../../../assets/WorldMonuments/USA/ellis-island.png"),
          },
          {
            id: "2",
            name: "Mont Saint Michel\nFrance",
            img: require("../../../assets/WorldMonuments/Europe/Mont-Saint-MichelNormandy.png"),
          },
          {
            id: "3",
            name: "Alhambra\nSpain",
            img: require("../../../assets/WorldMonuments/Europe/TheAlambraGranada.png"),
          },
        ],
        correctAnswerIndex: 0,
      },
      {
        id: "8",
        monument: "Hiroshima Peace Memorial ",
        country: "Japan",
        options: [
          {
            id: "0",
            name: "Himeji Castle\nJapan",
            img: require("../../../assets/WorldMonuments/Asia/HimejiCastle.png"),
          },
          {
            id: "1",
            name: "Fushimi Inari Shrine\nJapan",
            img: require("../../../assets/WorldMonuments/Asia/FushimiInari-taishaShrineKyoto.png"),
          },
          {
            id: "2",
            name: "Hiroshima Peace Memorial Park\nJapan",
            img: require("../../../assets/WorldMonuments/Asia/hiroshima_peace_memorial_park.png"),
          },
          {
            id: "3",
            name: "Imperial Palace\nJapan",
            img: require("../../../assets/WorldMonuments/Asia/ImperialPalaceTokyo.png"),
          },
        ],
        correctAnswerIndex: 2,
      },
      {
        id: "9",
        monument: "Leaning Tower of Pisa",
        country: "Italy",
        options: [
          {
            id: "0",
            name: "Cité de Carcassonne\nFrance",
            img: require("../../../assets/WorldMonuments/Europe/CitédeCarcassonne.png"),
          },
          {
            id: "1",
            name: "Colosseum\nItaly",
            img: require("../../../assets/WorldMonuments/Europe/colosseum.png"),
          },
          {
            id: "2",
            name: "Eiffel Tower\nFrance",
            img: require("../../../assets/WorldMonuments/Europe/eiffelTower.png"),
          },
          {
            id: "3",
            name: "Leaning Tower of Pisa\nItaly",
            img: require("../../../assets/WorldMonuments/Europe/TowerPisa.png"),
          },
        ],
        correctAnswerIndex: 3,
      },
      {
        id: "10",
        monument: "Empire State Building",
        country: "USA",
        options: [
          {
            id: "0",
            name: "The Shard\nUK",
            img: require("../../../assets/WorldMonuments/Europe/TheShard.png"),
          },
          {
            id: "1",
            name: "Empire State Building\nUSA",
            img: require("../../../assets/WorldMonuments/USA/Empire-State-Building.png"),
          },
          {
            id: "2",
            name: "Petronas Towers\nMalaysia",
            img: require("../../../assets/WorldMonuments/Asia/PetronasTwinTowers.png"),
          },
          {
            id: "3",
            name: "Tokyo Tower\nJapan",
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
]

export default questions4Es