const questions10El = [
  {
    id: "1a",
    status: "Capitals",
    img: 'L',
    country: "Ελλάδα",
    image: require("../../../assets/WorldMonuments/Europe/meteora.jpg"),
    options: [
      {
        id: "0",
        capital: "Ακρωτήριο της Καλής Ελπίδας",
        country: "Νότια Αφρική",
      },
      {
        id: "1",
        capital: "Νείλος",
        country: "Αίγυπτος",
      },
      {
        id: "2",
        capital: "Mετέωρα",
        country: "Ελλάδα",
      },
      {
        id: "3",
        capital: "Όρος Σινά\nΑίγυπτος",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "1b",
    status: "Flags",
    country: "Mετέωρα",
    capital: "Ελλάδα",
    options: [
      {
        id: "0",
        country: "Ακρωτήριο της Καλής Ελπίδας\nΝότια Αφρική",
        img: require("../../../assets/NaturalMnt/Africa/CapeofGoodHope.webp"),
      },
      {
        id: "1",
        country: "Νείλος\nΑίγυπτος",
        img: require("../../../assets/NaturalMnt/Africa/RiverNile.webp"),
      },
      {
        id: "2",
        country: "Mετέωρα\nΕλλάδα",
        img: require("../../../assets/WorldMonuments/Europe/meteora.jpg"),
      },
      {
        id: "3",
        country: "Όρος Σινά\nΑίγυπτος",
        img: require("../../../assets/NaturalMnt/Africa/mountSinai.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "2a",
    status: "Capitals",
    img: 'L',
    country: "Κόστα Ρίκα",
    image: require("../../../assets/NaturalMnt/America/Monteverde-cloud-forest-Costa-Rica.webp"),
    options: [
      {
        id: "0",
        capital: "Νεφελώδες Δάσος Μοντεβέρδε",
        country: "Κόστα Ρίκα",
      },
      {
        id: "1",
        capital: "Παμούκαλε",
        country: "Τουρκία",
      },
      {
        id: "2",
        capital: "Ουάντι Ραμ",
        country: "Ιορδανία",
      },
      {
        id: "3",
        capital: "Όρος Κένυα",
        country: "Κένυα",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "2b",
    status: "Flags",
    country: "Νεφελώδες Δάσος Μοντεβέρδε",
    capital: "Κόστα Ρίκα",
    options: [
      {
        id: "0",
        country: "Νεφελώδες Δάσος Μοντεβέρδε\nΚόστα Ρίκα",
        img: require("../../../assets/NaturalMnt/America/Monteverde-cloud-forest-Costa-Rica.webp"),
      },
      {
        id: "1",
        country: "Ουάντι Ραμ\nΙορδανία",
        img: require("../../../assets/NaturalMnt/Asia/wadi-rum.webp"),
      },
      {
        id: "2",
        country: "Όρος Κένυα\nΚένυα",
        img: require("../../../assets/NaturalMnt/Africa/mountKenya.webp"),
      },
      {
        id: "3",
        country: "Παμούκαλε\nΤουρκία",
        img: require("../../../assets/NaturalMnt/Asia/Pamukkale.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "Τανζανία",
    image: require("../../../assets/NaturalMnt/Africa/ngorongo.jpg"),
    options: [
      {
        id: "0",
        capital: "Καταρράκτες Έιντζελ",
        country: "Βενεζουέλα",
      },
      {
        id: "1",
        capital: "Μάτι της Γης",
        country: "Κροατία",
      },
      {
        id: "2",
        capital: "Κρατήρας Νγκορονγκόρο",
        country: "Τανζανία",
      },
      {
        id: "3",
        capital: "Μετέωρα",
        country: "Ελλάδα",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "3b",
    status: "Flags",
    country: "Κρατήρας Νγκορονγκόρο",
    capital: "Τανζανία",
    options: [
      {
        id: "0",
        country: "Καταρράκτες Έιντζελ\nΒενεζουέλα",
        img: require("../../../assets/NaturalMnt/America/Angel-Falls.webp"),
      },
      {
        id: "1",
        country: "Μάτι της Γης\nΚροατία",
        img: require("../../../assets/NaturalMnt/Europe/eyelake.jpg"),
      },
      {
        id: "2",
        country: "Κρατήρας Νγκορονγκόρο\nΤανζανία",
        img: require("../../../assets/NaturalMnt/Africa/ngorongo.jpg"),
      },
      {
        id: "3",
        country: "Μετέωρα\nΕλλάδα",
        img: require("../../../assets/WorldMonuments/Europe/meteora.png"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "4a",
    status: "Capitals",
    img: 'L',
    country: "Μποτσουάνα",
    image: require("../../../assets/NaturalMnt/Africa/Botswana_Okavango_Delta.webp"),
    options: [
      {
        id: "0",
        capital: "Δέλτα Οκαβάνγκο",
        country: "Μποτσουάνα",
      },
      {
        id: "1",
        capital: "Πύλη του Ουρανού",
        country: "Κίνα",
      },
      {
        id: "2",
        capital: "Όρος Μπρόμο",
        country: "Ινδονησία",
      },
      {
        id: "3",
        capital: "Σπηλιά του Φίνγκαλ",
        country: "Σκωτία",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "4b",
    status: "Flags",
    country: "Δέλτα Οκαβάνγκο",
    capital: "Μποτσουάνα",
    options: [
      {
        id: "0",
        country: "Δέλτα Οκαβάνγκο\nΜποτσουάνα",
        img: require("../../../assets/NaturalMnt/Africa/Botswana_Okavango_Delta.webp"),
      },
      {
        id: "1",
        country: "Πύλη του Ουρανού\nΚίνα",
        img: require("../../../assets/NaturalMnt/Asia/heavensgate.jpg"),
      },
      {
        id: "2",
        country: "Όρος Μπρόμο\nΙνδονησία",
        img: require("../../../assets/NaturalMnt/Asia/mountBromo.webp"),
      },
      {
        id: "3",
        country: "Σπηλιά του Φίνγκαλ\nΣκωτία",
        img: require("../../../assets/NaturalMnt/Europe/Fingalscave.jpg"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "5a",
    status: "Capitals",
    img: 'L',
    country: "Κροατία",
    image: require("../../../assets/NaturalMnt/Europe/eyelake.jpg"),
    options: [
      {
        id: "0",
        capital: "Ακτή του Γίγαντα",
        country: "Ιρλανδία",
      },
      {
        id: "1",
        capital: "Σοσουσβλέι",
        country: "Ναμίμπια",
      },
      {
        id: "2",
        capital: "Βελόνες",
        country: "ΗΠΑ",
      },
      {
        id: "3",
        capital: "Μάτι της Γης",
        country: "Κροατία",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "5b",
    status: "Flags",
    country: "Μάτι της Γης",
    capital: "Κροατία",
    options: [
      {
        id: "0",
        country: "Ακτή του Γίγαντα\nΙρλανδία",
        img: require("../../../assets/NaturalMnt/Europe/GiantsCauseway.webp"),
      },
      {
        id: "1",
        country: "Βελόνες\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/TheNeedles.webp"),
      },
      {
        id: "2",
        country: "Σοσουσβλέι\nΝαμίμπια",
        img: require("../../../assets/NaturalMnt/Africa/Sossusvlei-Dunes.webp"),
      },
      {
        id: "3",
        country: "Μάτι της Γης\nΚροατία",
        img: require("../../../assets/NaturalMnt/Europe/eyelake.jpg"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "Κίνα",
    image: require("../../../assets/NaturalMnt/Asia/heavensgate.jpg"),
    options: [
      {
        id: "0",
        capital: "Λίμνες Πλίτβιτσε",
        country: "Κροατία",
      },
      {
        id: "1",
        capital: "Όρος Βεζούβιος",
        country: "Ιταλία",
      },
      {
        id: "2",
        capital: "Πύλη του Ουρανού",
        country: "Κίνα",
      },
      {
        id: "3",
        capital: "Ουλουρού",
        country: "Αυστραλία",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "6b",
    status: "Flags",
    country: "Πύλη του Ουρανού",
    capital: "Κίνα",
    options: [
      {
        id: "0",
        country: "Όρος Βεζούβιος\nΙταλία",
        img: require("../../../assets/NaturalMnt/Europe/mount-vesuvius.webp"),
      },
      {
        id: "1",
        country: "Λίμνες Πλίτβιτσε\nΚροατία",
        img: require("../../../assets/NaturalMnt/Europe/Plitvice-lakes.webp"),
      },
      {
        id: "2",
        country: "Πύλη του Ουρανού\nΚίνα",
        img: require("../../../assets/NaturalMnt/Asia/heavensgate.jpg"),
      },
      {
        id: "3",
        country: "Ουλουρού\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/Ayers-Rock.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7a",
    status: "Capitals",
    img: 'L',
    country: "Σκωτία",
    image: require("../../../assets/NaturalMnt/Europe/Fingalscave.jpg"),
    options: [
      {
        id: "0",
        capital: "Σπηλιά του Φίνγκαλ",
        country: "Σκωτία",
      },
      {
        id: "1",
        capital: "Νήσος Σκάι",
        country: "Σκωτία",
      },
      {
        id: "2",
        capital: "Μαύρο Δάσος",
        country: "Γερμανία",
      },
      {
        id: "3",
        capital: "Λίμνη Χίλιερ",
        country: "Αυστραλία",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "7b",
    status: "Flags",
    country: "Σπηλιά του Φίνγκαλ",
    capital: "Σκωτία",
    options: [
      {
        id: "0",
        country: "Σπηλιά του Φίνγκαλ\nΣκωτία",
        img: require("../../../assets/NaturalMnt/Europe/Fingalscave.jpg"),
      },
      {
        id: "1",
        country: "Νήσος Σκάι\nΣκωτία",
        img: require("../../../assets/NaturalMnt/Europe/isleofSkye.webp"),
      },
      {
        id: "2",
        country: "Λίμνη Χίλιερ\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/lakehillier.webp"),
      },
      {
        id: "3",
        country: "Μαύρο Δάσος\nΓερμανία",
        img: require("../../../assets/NaturalMnt/Europe/blackForest.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "Αζερμπαϊτζάν",
    image: require("../../../assets/NaturalMnt/Asia/mud-volcanoes-in-gobustan.jpg"),
    options: [
      {
        id: "0",
        capital: "Μετέωρα",
        country: "Ελλάδα",
      },
      {
        id: "1",
        capital: "Όρος Τέιδε",
        country: "Ισπανία",
      },
      {
        id: "2",
        capital: "Λασποηφαίστεια",
        country: "Αζερμπαϊτζάν",
      },
      {
        id: "3",
        capital: "Πίκος ντε Εουρόπα",
        country: "Ισπανία",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "8b",
    status: "Flags",
    country: "Λασποηφαίστεια",
    capital: "Αζερμπαϊτζάν",
    options: [
      {
        id: "0",
        country: "Μετέωρα\nΕλλάδα",
        img: require("../../../assets/WorldMonuments/Europe/meteora.jpg"),
      },
      {
        id: "1",
        country: "Όρος Τέιδε\nΙσπανία",
        img: require("../../../assets/NaturalMnt/Europe/mountTeide.webp"),
      },
      {
        id: "2",
        country: "Λασποηφαίστεια\nΑζερμπαϊτζάν",
        img: require("../../../assets/NaturalMnt/Asia/mud-volcanoes-in-gobustan.jpg"),
      },
      {
        id: "3",
        country: "Πίκος ντε Εουρόπα\nΙσπανία",
        img: require("../../../assets/NaturalMnt/Europe/PicosdeEuropa.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "Νέα Ζηλανδία",
    image: require("../../../assets/NaturalMnt/Oceania/fox-glacier.jpg"),
    options: [
      {
        id: "0",
        capital: "Φαράγγι Αντίλοπα",
        country: "ΗΠΑ",
      },
      {
        id: "1",
        capital: "Παγετώνας Φοξ",
        country: "Νέα Ζηλανδία",
      },
      {
        id: "2",
        capital: "Μεγάλη Μπλε Τρύπα",
        country: "Μπελίζ",
      },
      {
        id: "3",
        capital: "Λόφοι Μίτεν",
        country: "ΗΠΑ",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "9b",
    status: "Flags",
    country: "Παγετώνας Φοξ",
    capital: "Νέα Ζηλανδία",
    options: [
      {
        id: "0",
        country: "Φαράγγι Αντίλοπα\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/Antelope-Canyon.webp"),
      },
      {
        id: "1",
        country: "Παγετώνας Φοξ\nΝέα Ζηλανδία",
        img: require("../../../assets/NaturalMnt/Oceania/fox-glacier.jpg"),
      },
      {
        id: "2",
        country: "Μεγάλη Μπλε Τρύπα\nΜπελίζ",
        img: require("../../../assets/NaturalMnt/America/Great-Blue-Hole.webp"),
      },
      {
        id: "3",
        country: "Λόφοι Μίτεν\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/mitten-butte.webp"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "10a",
    status: "Capitals",
    img: 'L',
    country: "Νέα Ζηλανδία",
    image: require("../../../assets/NaturalMnt/Oceania/NinetyMileBeach.jpg"),
    options: [
      {
        id: "0",
        capital: "Λεωφόρος των Μπαομπάμπ",
        country: "Μαδαγασκάρη",
      },
      {
        id: "1",
        capital: "Καταρράκτες του Νιαγάρα",
        country: "Καναδάς/ΗΠΑ",
      },
      {
        id: "2",
        capital: "Παραλία Ενενήντα Μιλίων",
        country: "Νέα Ζηλανδία",
      },
      {
        id: "3",
        capital: "Βουνό των Επτά Χρωμάτων",
        country: "Περού",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "10b",
    status: "Flags",
    country: "Παραλία Ενενήντα Μιλίων",
    capital: "Νέα Ζηλανδία",
    options: [
      {
        id: "0",
        country: "Λεωφόρος των Μπαομπάμπ\nΜαδαγασκάρη",
        img: require("../../../assets/NaturalMnt/Africa/avenueofboababs.webp"),
      },
      {
        id: "1",
        country: "Καταρράκτες του Νιαγάρα\nΚαναδάς/ΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/NiagaraFalls.webp"),
      },
      {
        id: "2",
        country: "Παραλία Ενενήντα Μιλίων\nΝέα Ζηλανδία",
        img: require("../../../assets/NaturalMnt/Oceania/NinetyMileBeach.jpg"),
      },
      {
        id: "3",
        country: "Βουνό των Επτά Χρωμάτων\nPeru",
        img: require("../../../assets/NaturalMnt/America/rainbowMountain.webp"),
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
];

export default questions10El;
