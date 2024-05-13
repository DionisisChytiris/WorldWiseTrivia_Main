const questions1El = [
    {
      id: "1",
      monument: "Πύργος του Άιφελ",
      country: "Γαλλία",
      options: [
        {
          id: "0",
          name: "Ακρόπολη\nΕλλάδα",
          img: require("../../../assets/WorldMonuments/Europe/Acropolis.png"),
        },
        {
          id: "1",
          name: "Αψίδα του Θριάμβου\nΓαλλία",
          img: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.png"),
        },
        {
          id: "2",
          name: "Πύργος του Άιφελ\nΓαλλία",
          img: require("../../../assets/WorldMonuments/Europe/eiffelTower.png"),
        },
        {
          id: "3",
          name: "Πύργος της Πίζας\nΙταλία",
          img: require("../../../assets/WorldMonuments/Europe/TowerPisa.png"),
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "2",
      monument: "Άγαλμα της Ελευθερίας",
      country: "USA",
      options: [
        {
          id: "0",
          name: "Κοιλάδα των Βασιλέων\nΑίγυπτος",
          img: require("../../../assets/WorldMonuments/Africa/Luxor-Valley-of-the-Kings.png"),
        },
        {
          id: "1",
          name: "Άγαλμα της Ελευθερίας\nΗΠΑ",
          img: require("../../../assets/WorldMonuments/USA/statue-of-liberty.png"),
        },
        {
          id: "2",
          name: "Το Άγαλμα του Χριστού Λυτρωτή\nΒραζιλία",
          img: require("../../../assets/WorldMonuments/America/Jesus-Christ-The-Redeemer.png"),
        },
        {
          id: "3",
          name: "Καπιτώλιο των Ηνωμένων Πολιτειών\nΗΠΑ",
          img: require("../../../assets/WorldMonuments/USA/capitol-building.png"),
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "3",
      monument: "Πυραμίδες της Γκίζας",
      country: "Αίγυπτος",
      options: [
        {
          id: "0",
          name: "Πύργος της Πίζας\nΙταλία",
          img: require("../../../assets/WorldMonuments/Europe/TowerPisa.png"),
        },
        {
          id: "1",
          name: "Κολοσσαίο\nΙταλία",
          img: require("../../../assets/WorldMonuments/Europe/colosseum.jpg"),
        },
        {
          id: "2",
          name: "Μεγάλη Σφίγγα της Γκίζας\nΑίγυπτος",
          img: require("../../../assets/WorldMonuments/Africa/sphinx.png"),
        },
        {
          id: "3",
          name: "Πυραμίδες της Γκίζας\nΑίγυπτος",
          img: require("../../../assets/WorldMonuments/Africa/Pyramids.png"),
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "4",
      monument: "Ταζ Μαζάλ",
      country: "Ινδία",
      options: [
        {
          id: "0",
          name: "Ταζ Μαζάλ\nIνδία",
          img: require("../../../assets/WorldMonuments/Asia/TajMajal.png"),
        },
        {
          id: "1",
          name: "Κάστρο Μπραν\nΡουμανία",
          img: require("../../../assets/WorldMonuments/Europe/Bran-CastleDracula.png"),
        },
        {
          id: "2",
          name: "Καθεδρικός Ναός Πόλης Μεξικού\nMεξικό",
          img: require("../../../assets/WorldMonuments/America/Metropolitan-Cathedral_Mexico.png"),
        },
        {
          id: "3",
          name: "Καρκασσόν\nΓαλλία",
          img: require("../../../assets/WorldMonuments/Europe/CitédeCarcassonne.png"),
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "5",
      monument: "Όπερα του Σίδνεϊ",
      country: "Αυστραλία",
      options: [
        {
          id: "0",
          name: "Καθεδρικός ναός Φλωρεντίας\nΙταλία",
          img: require("../../../assets/WorldMonuments/Europe/duomo-florence.png"),
        },
        {
          id: "1",
          name: "Μεγάλο Τζαμί της Ντζενέ\nΜάλι",
          img: require("../../../assets/WorldMonuments/Africa/mosque-of-djenne.png"),
        },
        {
          id: "2",
          name: "Όπερα του Σίδνεϊ\nΑυστραλία",
          img: require("../../../assets/WorldMonuments/Oceania/SydneyOperaHouse.jpg"),
        },
        {
          id: "3",
          name: "Ατόμιουμ\nΒέλγιο",
          img: require("../../../assets/WorldMonuments/Europe/Atomium.png"),
        },
      ],
      correctAnswerIndex: 2,
    },
    {
      id: "6",
      monument: "Αψίδα του Θριάμβου",
      country: "Γαλλία",
      options: [
        {
          id: "0",
          name: "Πύλη του Βρανδεμβούργου\nΓερμανία",
          img: require("../../../assets/WorldMonuments/Europe/Brandenburg-Gate-Berlin.png"),
        },
        {
          id: "1",
          name: "Αψίδα του Θριάμβου\nΓαλλία",
          img: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.png"),
        },
        {
          id: "2",
          name: "Πύργος του Άιφελ\nΓαλλία",
          img: require("../../../assets/WorldMonuments/Europe/eiffelTower.png"),
        },
        {
          id: "3",
          name: "Γέφυρα του Ριάλτο\nΙταλία",
          img: require("../../../assets/WorldMonuments/Europe/Rialto-Bridge.jpg"),
        },
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "7",
      monument: "Ακρόπολη",
      country: "Ελλάδα",
      options: [
        {
          id: "0",
          name: "Ακρόπολη\nΕλλάδα",
          img: require("../../../assets/WorldMonuments/Europe/Acropolis.png"),
        },
        {
          id: "1",
          name: "Έφεσος\nTουρκία",
          img: require("../../../assets/WorldMonuments/Asia/ephesos.png"),
        },
        {
          id: "2",
          name: "Περσέπολη\nΙράν",
          img: require("../../../assets/WorldMonuments/Asia/persepolis.png"),
        },
        {
          id: "3",
          name: "Αμφιθέατρο της Αρλ\nΓαλλία",
          img: require("../../../assets/WorldMonuments/Europe/AmpitheatreofArles.png"),
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "8",
      monument: "Μάτσου Πίτσου",
      country: "Περού",
      options: [
        {
          id: "0",
          name: "Μάτσου Πίτσου\nΠερού",
          img: require("../../../assets/WorldMonuments/America/MachuPicchu.png"),
        },
        {
          id: "1",
          name: "Τουλούμ\nMεξικό",
          img: require("../../../assets/WorldMonuments/America/TulumMexico.png"),
        },
        {
          id: "2",
          name: "Tικάλ\nΓουατεμάλα",
          img: require("../../../assets/WorldMonuments/America/TikalGuatemala.jpg"),
        },
        {
          id: "3",
          name: "Τσιτσέν Ιτζά\nΜεξικό",
          img: require("../../../assets/WorldMonuments/America/chichen-itza_mexico.png"),
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      id: "9",
      monument: "Κολοσσαίο",
      country: "Ιταλία",
      options: [
        {
          id: "0",
          name: "Ανάκτορο των Βερσαλλιών\nΓαλλία",
          img: require("../../../assets/WorldMonuments/Europe/Palace-of-Versailles-France.png"),
        },
        {
          id: "1",
          name: "Κνωσός\nΕλλάδα",
          img: require("../../../assets/WorldMonuments/Europe/knossos.png"),
        },
        {
          id: "2",
          name: "Αψίδα του Θριάμβου\nΓαλλία",
          img: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.png"),
        },
        {
          id: "3",
          name: "Κολοσσαίο\nΙταλία",
          img: require("../../../assets/WorldMonuments/Europe/colosseum.jpg"),
        },
      ],
      correctAnswerIndex: 3,
    },
    {
      id: "10",
      monument: "Σινικό Τείχος",
      country: "Κίνα",
      options: [
        {
          id: "0",
          name: "Σινικό Τείχος\nΚίνα",
          img: require("../../../assets/WorldMonuments/Asia/theGreatWallChina.png"),
        },
        {
          id: "1",
          name: "Ο μεγάλος δρόμος του ωκεανού\nΑυστραλία",
          img: require("../../../assets/WorldMonuments/Oceania/greatoceanroad.png"),
        },
        {
          id: "2",
          name: "Απαγορευμένη Πόλη\nΚίνα",
          img: require("../../../assets/WorldMonuments/Asia/forbidden-city.jpg"),
        },
        {
          id: "3",
          name: "Ναός του Ουρανού\nΚίνα",
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
  
  export default questions1El;
  