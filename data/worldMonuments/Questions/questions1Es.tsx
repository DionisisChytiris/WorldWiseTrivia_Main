const questions1Es = [
    {
      id: "1",
      monument: "Eiffel Tower",
      country: "France",
      options: [
        {
          id: "0",
          name: "Acropolis\nGreece",
          img: require("../../../assets/WorldMonuments/Europe/Acropolis.png"),
        },
        {
          id: "1",
          name: "Arc de Triumph\nFrance",
          img: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.png"),
        },
        {
          id: "2",
          name: "Eiffel Tower\nFrance",
          img: require("../../../assets/WorldMonuments/Europe/eiffelTower.png"),
        },
        {
          id: "3",
          name: "Pisa Tower\nItaly",
          img: require("../../../assets/WorldMonuments/Europe/TowerPisa.png"),
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "2",
      monument: "Statue of Liberty",
      country: "USA",
      options: [
        {
          id: "0",
          name: "Valley of the Kings\nEgypt",
          img: require("../../../assets/WorldMonuments/Africa/Luxor-Valley-of-the-Kings.png"),
        },
        {
          id: "1",
          name: "Statue of Liberty\nUSA",
          img: require("../../../assets/WorldMonuments/USA/statue-of-liberty.png"),
        },
        {
          id: "2",
          name: "Christ the Redeemer\nBrazil",
          img: require("../../../assets/WorldMonuments/America/Jesus-Christ-The-Redeemer.png"),
        },
        {
          id: "3",
          name: "United States Capitol\nUSA",
          img: require("../../../assets/WorldMonuments/USA/capitol-building.png"),
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "3",
      monument: "Great Pyramid of Giza",
      country: "Egypt",
      options: [
        {
          id: "0",
          name: "Leaning Tower of Pisa\nItaly",
          img: require("../../../assets/WorldMonuments/Europe/TowerPisa.png"),
        },
        {
          id: "1",
          name: "Colosseum\nItaly",
          img: require("../../../assets/WorldMonuments/Europe/colosseum.jpg"),
        },
        {
          id: "2",
          name: "Great Sphinx of Giza\nEgypt",
          img: require("../../../assets/WorldMonuments/Africa/sphinx.png"),
        },
        {
          id: "3",
          name: "Great Pyramid of Giza\nEgypt",
          img: require("../../../assets/WorldMonuments/Africa/Pyramids.png"),
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "4",
      monument: "Taj Mahal",
      country: "India",
      options: [
        {
          id: "0",
          name: "Taj Mahal\nIndia",
          img: require("../../../assets/WorldMonuments/Asia/TajMajal.png"),
        },
        {
          id: "1",
          name: "Bran Castle\nRomania",
          img: require("../../../assets/WorldMonuments/Europe/Bran-CastleDracula.png"),
        },
        {
          id: "2",
          name: "Mexico City Cathedral\nMexico",
          img: require("../../../assets/WorldMonuments/America/Metropolitan-Cathedral_Mexico.png"),
        },
        {
          id: "3",
          name: "Cité de Carcassonne\nFrance",
          img: require("../../../assets/WorldMonuments/Europe/CitédeCarcassonne.png"),
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "5",
      monument: "Sydney Opera House",
      country: "Australia",
      options: [
        {
          id: "0",
          name: "Florence Cathedral\nItaly",
          img: require("../../../assets/WorldMonuments/Europe/duomo-florence.png"),
        },
        {
          id: "1",
          name: "Mosque of Djenné\nMali",
          img: require("../../../assets/WorldMonuments/Africa/mosque-of-djenne.png"),
        },
        {
          id: "2",
          name: "Sydney Opera House\nAustralia",
          img: require("../../../assets/WorldMonuments/Oceania/SydneyOperaHouse.jpg"),
        },
        {
          id: "3",
          name: "Atomium\nBelgium",
          img: require("../../../assets/WorldMonuments/Europe/Atomium.png"),
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "6",
      monument: "Arc de Triomphe",
      country: "France",
      options: [
        {
          id: "0",
          name: "Brandenburg Gate\nGermany",
          img: require("../../../assets/WorldMonuments/Europe/Brandenburg-Gate-Berlin.png"),
        },
        {
          id: "1",
          name: "Arc de Triomphe\nFrance",
          img: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.png"),
        },
        {
          id: "2",
          name: "Eiffel Tower\nFrance",
          img: require("../../../assets/WorldMonuments/Europe/eiffelTower.png"),
        },
        {
          id: "3",
          name: "Rialto Bridge\nItaly",
          img: require("../../../assets/WorldMonuments/Europe/Rialto-Bridge.jpg"),
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "7",
      monument: "Acropolis",
      country: "Greece",
      options: [
        {
          id: "0",
          name: "Acropolis\nGreece",
          img: require("../../../assets/WorldMonuments/Europe/Acropolis.png"),
        },
        {
          id: "1",
          name: "Ephesus\nTurkey",
          img: require("../../../assets/WorldMonuments/Asia/ephesos.png"),
        },
        {
          id: "2",
          name: "Persepolis\nIran",
          img: require("../../../assets/WorldMonuments/Asia/persepolis.png"),
        },
        {
          id: "3",
          name: "Arles Amphitheatre\nFrance",
          img: require("../../../assets/WorldMonuments/Europe/AmpitheatreofArles.png"),
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "8",
      monument: "Machu Picchu",
      country: "Peru",
      options: [
        {
          id: "0",
          name: "Machu Picchu\nMexico",
          img: require("../../../assets/WorldMonuments/America/MachuPicchu.png"),
        },
        {
          id: "1",
          name: "Tulum\nMexico",
          img: require("../../../assets/WorldMonuments/America/TulumMexico.png"),
        },
        {
          id: "2",
          name: "Tikal\nGuatemala",
          img: require("../../../assets/WorldMonuments/America/TikalGuatemala.jpg"),
        },
        {
          id: "3",
          name: "Chichen Itza\nMexico",
          img: require("../../../assets/WorldMonuments/America/chichen-itza_mexico.png"),
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "9",
      monument: "Colosseum",
      country: "Italy",
      options: [
        {
          id: "0",
          name: "Palace of Versailles\nFrance",
          img: require("../../../assets/WorldMonuments/Europe/Palace-of-Versailles-France.png"),
        },
        {
          id: "1",
          name: "Knossos\nGreece",
          img: require("../../../assets/WorldMonuments/Europe/knossos.png"),
        },
        {
          id: "2",
          name: "Arc de Triomphe\nFrance",
          img: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.png"),
        },
        {
          id: "3",
          name: "Colosseum\nItaly",
          img: require("../../../assets/WorldMonuments/Europe/colosseum.jpg"),
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "10",
      monument: "The Great Wall of China",
      country: "China",
      options: [
        {
          id: "0",
          name: "Great Wall of China\nChina",
          img: require("../../../assets/WorldMonuments/Asia/theGreatWallChina.png"),
        },
        {
          id: "1",
          name: "Great Ocean Road\nAustralia",
          img: require("../../../assets/WorldMonuments/Oceania/greatoceanroad.png"),
        },
        {
          id: "2",
          name: "Forbidden City\nChina",
          img: require("../../../assets/WorldMonuments/Asia/forbidden-city.jpg"),
        },
        {
          id: "3",
          name: "Temple of Heaven\nChina",
          img: require("../../../assets/WorldMonuments/Asia/temple-of-heaven-in-beijing.png"),
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "11",
      monument: "",
      country: "",
    },
  ];
  
  export default questions1Es;
  