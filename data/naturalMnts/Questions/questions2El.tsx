const questions2El = [
  {
    id: "1a",
    status: "Capitals",
    img: 'L',
    country: "Διάφορες Νότιοαμερικανικές Χώρες",
    image: require("../../../assets/NaturalMnt/America/amazonRainforest.webp"),
    options: [
      {
        id: "0",
        capital: "Εθνικό Πάρκο Μπανφ",
        country: "Καναδάς",
      },
      {
        id: "1",
        capital: "Όρος Ρενιέρ",
        country: "ΗΠΑ",
      },
      {
        id: "2",
        capital: "Βουνό των Επτά Χρωμάτων",
        country: "Περού",
      },
      {
        id: "3",
        capital: "Δάσος Αμαζονίου",
        country: "Διάφορες Νότιοαμερικανικές Χώρες",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "1b",
    status: "Flags",
    country: "Δάσος Αμαζονίου",
    capital: "Διάφορες Νότιοαμερικανικές Χώρες",
    options: [
      {
        id: "0",
        country: "Εθνικό Πάρκο Μπανφ\nΚαναδάς",
        img: require("../../../assets/NaturalMnt/America/BanffNationalPark.webp"),
      },
      {
        id: "1",
        country: "Όρος Ρενιέρ\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/mount rainier.webp"),
      },
      {
        id: "2",
        country: "Βουνό των Επτά Χρωμάτων\nΠερού",
        img: require("../../../assets/NaturalMnt/America/rainbowMountain.webp"),
      },
      {
        id: "3",
        country: "Δάσος Αμαζονίου\nΔιάφορες Νότιοαμερικανικές Χώρες",
        img: require("../../../assets/NaturalMnt/America/amazonRainforest.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "2a",
    status: "Capitals",
    img: 'L',
    country: "ΗΠΑ",
    image: require("../../../assets/NaturalMnt/America/Sequoia-National-Park.webp"),
    options: [
      {
        id: "0",
        capital: "Βελόνες",
        country: "ΗΠΑ",
      },
      {
        id: "1",
        capital: "Μαύρο Δάσος",
        country: "Γερμανία",
      },
      {
        id: "2",
        capital: "Εθνικό Πάρκο Σεκόγιας",
        country: "ΗΠΑ",
      },
      {
        id: "3",
        capital: "Εθνικό Πάρκο Κακαντού",
        country: "Αυστραλία",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "2b",
    status: "Flags",
    country: "Εθνικό Πάρκο Σεκόγιας",
    capital: "ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Βελόνες\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/TheNeedles.webp"),
      },
      {
        id: "1",
        country: "Μαύρο Δάσος\nΓερμανία",
        img: require("../../../assets/NaturalMnt/Europe/blackForest.webp"),
      },
      {
        id: "2",
        country: "Εθνικό Πάρκο Σεκόγιας\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/Sequoia-National-Park.webp"),
      },
      {
        id: "3",
        country: "Εθνικό Πάρκο Κακαντού\nAυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/kakadu.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "3a",
    status: "Capitals",
    img: 'L',
    country: "Βιετνάμ",
    image: require("../../../assets/NaturalMnt/Asia/halongbay-0.png"),
    options: [
      {
        id: "0",
        capital: "Κόλπος του Χα Λονγκ",
        country: "Βιετνάμ",
      },
      {
        id: "1",
        capital: "Όρος Μπρόμο",
        country: "Ινδονησία",
      },
      {
        id: "2",
        capital: "Όρος Οτεμανού",
        country: "Γαλλική Πολυνησία",
      },
      {
        id: "3",
        capital: "Μπόρα Μπόρα",
        country: "Γαλλική Πολυνησία",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "3b",
    status: "Flags",
    country: "Κόλπος του Χα Λονγκ",
    capital: "Βιετνάμ",
    options: [
      {
        id: "0",
        country: "Κόλπος του Χα Λονγκ\nΒιετνάμ",
        img: require("../../../assets/NaturalMnt/Asia/halongbay-0.png"),
      },
      {
        id: "1",
        country: "Όρος Μπρόμο\nΙνδονησία",
        img: require("../../../assets/NaturalMnt/Asia/mountBromo.webp"),
      },
      {
        id: "2",
        country: "Όρος Οτεμανού\nΓαλλική Πολυνησία",
        img: require("../../../assets/NaturalMnt/Asia/mountOtemanu.png"),
      },
      {
        id: "3",
        country: "Μπόρα Μπόρα\nΓαλλική Πολυνησία",
        img: require("../../../assets/NaturalMnt/Asia/bora_bora.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "4a",
    status: "Capitals",
    img: 'L',
    country: "Νότια Αφρική",
    image: require("../../../assets/NaturalMnt/Africa/table-mountain.webp"),
    options: [
      {
        id: "0",
        capital: "Ακρωτήριο της Καλής Ελπίδας",
        country: "Νότια Αφρική",
      },
      {
        id: "1",
        capital: "Ουάντι Ραμ",
        country: "Ιορδανία",
      },
      {
        id: "2",
        capital: "Εθνικό Πάρκο Όρος Τέιμπλ",
        country: "Νότια Αφρική",
      },
      {
        id: "3",
        capital: "Έρημος Γκόμπι",
        country: "Κίνα/Μογγολία",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "4b",
    status: "Flags",
    country: "Εθνικό Πάρκο Όρος Τέιμπλ",
    capital: "Νότια Αφρική",
    options: [
      {
        id: "0",
        country: "Ακρωτήριο της Καλής Ελπίδας\nΝότια Αφρική",
        img: require("../../../assets/NaturalMnt/Africa/CapeofGoodHope.webp"),
      },
      {
        id: "1",
        country: "Ουάντι Ραμ\nΙορδανία",
        img: require("../../../assets/NaturalMnt/Asia/wadi-rum.webp"),
      },
      {
        id: "2",
        country: "Εθνικό Πάρκο Όρος Τέιμπλ\nΝότια Αφρική",
        img: require("../../../assets/NaturalMnt/Africa/table-mountain.webp"),
      },
      {
        id: "3",
        country: "Έρημος Γκόμπι\nΚίνα/Μογγολία",
        img: require("../../../assets/NaturalMnt/Asia/Winter-GobiDesert.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "5a",
    status: "Capitals",
    img: 'L',
    country: "Τανζανία",
    image: require("../../../assets/NaturalMnt/Africa/Kilimanjaro.webp"),
    options: [
      {
        id: "0",
        capital: "Mount Κένυα",
        country: "Κένυα",
      },
      {
        id: "1",
        capital: "Όρος Σινά",
        country: "Αίγυπτος",
      },
      {
        id: "2",
        capital: "Ζανγκτσιάτζιε",
        country: "Κίνα",
      },
      {
        id: "3",
        capital: "Όρος Κιλιμάντζαρο",
        country: "Τανζανία",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "5b",
    status: "Flags",
    country: "Όρος Κιλιμάντζαρο",
    capital: "Τανζανία",
    options: [
      {
        id: "0",
        country: "Όρος Κένυα\nΚένυα",
        img: require("../../../assets/NaturalMnt/Africa/mountKenya.webp"),
      },
      {
        id: "1",
        country: "Όρος Σινά\nΑίγυπτος",
        img: require("../../../assets/NaturalMnt/Africa/mountSinai.webp"),
      },
      {
        id: "2",
        country: "Ζανγκτσιάτζιε\nΚίνα",
        img: require("../../../assets/NaturalMnt/Asia/zhangjiajie-national-forest-park-china.png"),
      },
      {
        id: "3",
        country: "Όρος Κιλιμάντζαρο\nΤανζανία",
        img: require("../../../assets/NaturalMnt/Africa/Kilimanjaro.webp"),
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "6a",
    status: "Capitals",
    img: 'L',
    country: "Περού",
    image: require("../../../assets/NaturalMnt/America/rainbowMountain.webp"),
    options: [
      {
        id: "0",
        capital: "Βουνό των Επτά Χρωμάτων",
        country: "Περού",
      },
      {
        id: "1",
        capital: "Σαλάρ ντε Ουγιούνι",
        country: "Βολιβία",
      },
      {
        id: "2",
        capital: "Πύργοι του Πάινε",
        country: "Χιλή",
      },
      {
        id: "3",
        capital: "Κοιλάδα Τζιουτζαϊγκού",
        country: "Κίνα",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "6b",
    status: "Flags",
    country: "Βουνό των Επτά Χρωμάτων",
    capital: "Περού",
    options: [
      {
        id: "0",
        country: "Βουνό των Επτά Χρωμάτων\nΠερού",
        img: require("../../../assets/NaturalMnt/America/rainbowMountain.webp"),
      },
      {
        id: "1",
        country: "Σαλάρ ντε Ουγιούνι\nΒολιβία",
        img: require("../../../assets/NaturalMnt/America/SalardeUyuni.webp"),
      },
      {
        id: "2",
        country: "Πύργοι του Πάινε\nΧιλή",
        img: require("../../../assets/NaturalMnt/America/torres-del-paine.webp"),
      },
      {
        id: "3",
        country: "Τζιουτζαϊγκού\nΚίνα",
        img: require("../../../assets/NaturalMnt/Asia/Jiuzhaigou-Valley.webp"),
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "7a",
    status: "Capitals",
    img: 'L',
    country: "ΗΠΑ",
    image: require("../../../assets/NaturalMnt/America/Arches-National-Park.webp"),
    options: [
      {
        id: "0",
        capital: "Γκραν Κάνιον",
        country: "ΗΠΑ",
      },
      {
        id: "1",
        capital: "Μαρμάρινες Σπηλιές",
        country: "Χιλή",
      },
      {
        id: "2",
        capital: "Εθνικό Πάρκο Αψίδων",
        country: "ΗΠΑ",
      },
      {
        id: "3",
        capital: "Λόφοι Μίτεν",
        country: "ΗΠΑ",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7b",
    status: "Flags",
    country: "Εθνικό Πάρκο Αψίδων",
    capital: "ΗΠΑ",
    options: [
      {
        id: "0",
        country: "Γκραν Κάνιον\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/grandcanyon.webp"),
      },
      {
        id: "1",
        country: "Μαρμάρινες Σπηλιές\nΧιλή",
        img: require("../../../assets/NaturalMnt/America/marble-caves-chile.png"),
      },
      {
        id: "2",
        country: "Εθνικό Πάρκο Αψίδων\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/Arches-National-Park.webp"),
      },
      {
        id: "3",
        country: "Λόφοι Μίτεν\nΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/mitten-butte.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "8a",
    status: "Capitals",
    img: 'L',
    country: "Ισλανδία",
    image: require("../../../assets/NaturalMnt/Europe/BlueLagoon.webp"),
    options: [
      {
        id: "0",
        capital: "Καταρράκτης Ντέτιφος",
        country: "Ισλανδία",
      },
      {
        id: "1",
        capital: "Μπλε Λιμνοθάλασσα",
        country: "Ισλανδία",
      },
      {
        id: "2",
        capital: "Λίμνη Μπλεντ",
        country: "Σλοβενία",
      },
      {
        id: "3",
        capital: "Όρος Ελμπρούς",
        country: "Ρωσία",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "8b",
    status: "Flags",
    country: "Μπλε Λιμνοθάλασσα",
    capital: "Ισλανδία",
    options: [
      {
        id: "0",
        country: "Καταρράκτης Ντέτιφος\nΙσλανδία",
        img: require("../../../assets/NaturalMnt/Europe/dettifoss.jpg"),
      },
      {
        id: "1",
        country: "Μπλε Λιμνοθάλασσα\nΙσλανδία",
        img: require("../../../assets/NaturalMnt/Europe/BlueLagoon.webp"),
      },
      {
        id: "2",
        country: "Λίμνη Μπλεντ\nΣλοβενία",
        img: require("../../../assets/NaturalMnt/Europe/lake-bled.webp"),
      },
      {
        id: "3",
        country: "Όρος Ελμπρούς\nΡωσία",
        img: require("../../../assets/NaturalMnt/Europe/mount-elbrus.webp"),
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "9a",
    status: "Capitals",
    img: 'L',
    country: "Γερμανία",
    image: require("../../../assets/NaturalMnt/Europe/blackForest.webp"),
    options: [
      {
        id: "0",
        capital: "Λίμνη Μορέιν",
        country: "Καναδάς",
      },
      {
        id: "1",
        capital: "Καταρράκτες του Νιαγάρα",
        country: "ΗΠΑ/Καναδάς",
      },
      {
        id: "2",
        capital: "Μαύρο Δάσος",
        country: "Γερμανία",
      },
      {
        id: "3",
        capital: "Εθνικό Πάρκο Κακαντού",
        country: "Αυστραλία",
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "9b",
    status: "Flags",
    country: "Μαύρο Δάσος",
    capital: "Γερμανία",
    options: [
      {
        id: "0",
        country: "Λίμνη Μορέιν\nΚαναδάς",
        img: require("../../../assets/NaturalMnt/America/Moraine-Lake.webp"),
      },
      {
        id: "1",
        country: "Καταρράκτες του Νιαγάρα\nΚαναδάς/ΗΠΑ",
        img: require("../../../assets/NaturalMnt/America/NiagaraFalls.webp"),
      },
      {
        id: "2",
        country: "Μαύρο Δάσος\nΓερμανία",
        img: require("../../../assets/NaturalMnt/Europe/blackForest.webp"),
      },
      {
        id: "3",
        country: "Εθνικό Πάρκο Κακαντού\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/kakadu.webp"),
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "10a",
    status: "Capitals",
    img: 'L',
    country: "Αυστραλία",
    image: require("../../../assets/NaturalMnt/Oceania/oceanroad.webp"),
    options: [
      {
        id: "0",
        capital: "Οι Δώδεκα Απόστολοι",
        country: "Αυστραλία",
      },
      {
        id: "1",
        capital: "Δέλτα Οκαβάνγκο",
        country: "Μποτσουάνα",
      },
      {
        id: "2",
        capital: "Καταρράκτες Καλαντούλα",
        country: "Ανγκόλα",
      },
      {
        id: "3",
        capital: "Ο Δρόμος του Μεγάλου Ωκεανού",
        country: "Αυστραλία",
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    id: "10b",
    status: "Flags",
    country: "Ο Δρόμος του Μεγάλου Ωκεανού",
    capital: "Αυστραλία",
    options: [
      {
        id: "0",
        country: "Οι Δώδεκα Απόστολοι\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/12-apostels.webp"),
      },
      {
        id: "1",
        country: "Δέλτα Οκαβάνγκο\nΜποτσουάνα",
        img: require("../../../assets/NaturalMnt/Africa/Botswana_Okavango_Delta.webp"),
      },
      {
        id: "2",
        country: "Καταρράκτες Καλαντούλα\nΑνγκόλα",
        img: require("../../../assets/NaturalMnt/Africa/kalandula-falls-angola.webp"),
      },
      {
        id: "3",
        country: "Ο Δρόμος του Μεγάλου Ωκεανού\nΑυστραλία",
        img: require("../../../assets/NaturalMnt/Oceania/oceanroad.webp"),
      },
    ],
    correctAnswerIndex: 3,
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
  {
    id: "11",
    monument: "",
    country: "",
  },
];

export default questions2El;
