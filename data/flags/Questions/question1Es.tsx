const question1Es = [
    {
      id: "1a",
      status: "Capitals",
      country: "Berlín",
      image: require("../../../assets/Flags/germany.png"),
      options: [
        {
          id: "0",
          capital: 'Bélgica',
          country: 'Bruselas'
        },
        {
          id: "1",
          capital: 'Alemania',
          country: 'Berlín'
        },
        {
          id: "2",
          capital: 'Rumanía',
          country: 'Bucarest'
        },
        {
          id: "3",
          capital: 'Francia',
          country: 'París'
        },
      ],
      correctAnswerIndex: 1,
      phoneHelp:""
    },
    {
      id: "1b",
      status: "Flags",
      capital: "Berlín",
      country: "Alemania",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/belgium.png"),
          country: "Bélgica",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/germany.png"),
          country: "Alemania",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/romania.png"),
          country: "Rumanía",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/france.png"),
          country: "Francia",
        },
      ],
      correctAnswerIndex: 1,
      phoneHelp:
      "La bandera de Alemania tiene tres franjas horizontales, de diferentes colores. Estos colores simbolizan la unidad, la libertad y la democracia. Definitivamente, no hay verde en ella.",
    },
    {
      id: "1c",
      status: "Guess",
      word: "GERMANY",
      country: "Berlín",
      num: 7,
      letters: "ILUEANORGPMY",
      img: require("../../../assets/Flags/germany.png"),
    },
    {
      id: "2a",
      status: "Capitals",
      country: "Dublín",
      image: require("../../../assets/Flags/ireland.png"),
      options: [
        {
          id: "0",
          capital: 'Italia',
          country: 'Roma'
        },
        {
          id: "1",
          capital: 'India',
          country: 'Nueva Delhi'
        },
        {
          id: "2",
          capital: 'Irlanda',
          country: 'Dublín'
        },
        {
          id: "3",
          capital: 'Francia',
          country: 'París'
        },
      ],
      correctAnswerIndex: 2,
      phoneHelp:""
    },
    {
      id: "2b",
      status: "Flags" ,
      capital: "Dublín",
      country: "Irlanda",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/italy.png"),
          country: 'Italia'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/india.png"),
          country: 'India'
        },
        {
          id: "2",
          img: require("../../../assets/Flags//ireland.png"),
          country: 'Irlanda'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/france.png"),
          country: 'Francia'
        },
      ],
      correctAnswerIndex: 2,
      phoneHelp:
      "La bandera de Irlanda tiene los mismos colores que la bandera de India, sin el emblema, y las franjas están colocadas verticalmente.",
    },
    {
      id: "2c",
      status: "Guess",
      word: "IRELAND",
      country: "Dublín",
      num: 7,
      letters: "ILREANODJOPC",
      img: require("../../../assets/Flags/ireland.png"),
    },
    {
      id: "3a",
      status: "Capitals",
      country: "Madrid",
      image: require("../../../assets/Flags/spain.png"),
      options: [
        {
          id: "0",
          capital: 'España',
          country: 'Madrid'
        },
        {
          id: "1",
          capital: 'Portugal',
          country: 'Lisboa'
        },
        {
          id: "2",
          capital: 'Francia',
          country: 'París'
        },
        {
          id: "3",
          capital: 'Italia',
          country: 'Roma'
        },
      ],
      correctAnswerIndex: 0,
      phoneHelp:""
    },
  
    {
      id: "3b",
      status: "Flags",
      capital: "Madrid",
      country: "España",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/portugal.png"),
          country: "Portugal",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/bolivia.png"),
          country: "Bolivia",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/spain.png"),
          country: "España",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/lithuania.png"),
          country: "Lituania",
        },
      ],
      correctAnswerIndex: 2,
      phoneHelp:
      "La bandera de España contiene un emblema ubicado en la franja central. Estoy bastante seguro de que uno de sus colores es el rojo.",
    },
    {
      id: "3c",
      status: "Guess",
      word: "SPAIN",
      country: "Madrid",
      num: 5,
      letters: "ILUEANORJPMS",
      img: require("../../../assets/Flags/spain.png"),
    },
    {
      id: "4a",
      status: "Capitals",
      country: "Atenas",
      image: require("../../../assets/Flags/greece.png"),
      options: [
        {
          id: "0",
          capital: 'Chipre',
          country: 'Nicosia'
        },
        {
          id: "1",
          capital: 'Grecia',
          country: 'Atenas'
        },
        {
          id: "2",
          capital: 'Italia',
          country: 'Roma'
        },
        {
          id: "3",
          capital: 'Bulgaria',
          country: 'Sofía'
        },
      ],
      correctAnswerIndex: 1,
      phoneHelp:""
    },
  
    {
      id: "4b",
      status: "Flags",
      capital: "Atenas",
      country: "Grecia",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/elSalvador.png"),
          country: "El Salvador",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/greece.png"),
          country: "Grecia",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/uruguay.png"),
          country: "Uruguay",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/finland.png"),
          country: "Finlandia",
        },
      ],
      correctAnswerIndex: 1,
      phoneHelp:
      "El diseño de esta bandera refleja la herencia marítima de Grecia, con franjas azules y blancas y una cruz en la esquina superior.",
    },
    {
      id: "4c",
      status: "Guess",
      word: "GREECE",
      country: "Atenas",
      num: 4,
      letters: "ILUEANORGPMC",
      img: require("../../../assets/Flags/greece.png"),
    },
    {
      id: "5a",
      status: "Capitals",
      country: "París",
      image: require("../../../assets/Flags/france.png"),
      options: [
        {
          id: "0",
          capital: 'España',
          country: 'Madrid'
        },
        {
          id: "1",
          capital: 'Bélgica',
          country: 'Bruselas'
        },
        {
          id: "2",
          capital: 'Suiza',
          country: 'Berna'
        },
        {
          id: "3",
          capital: 'Francia',
          country: 'París'
        },
      ],
      correctAnswerIndex: 3,
      phoneHelp:""
    },
  
    {
      id: "5b",
      status: "Flags",
      capital: "París",
      country: "Francia",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/costaRica.png"),
          country: "Costa Rica",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/paraguay.png"),
          country: "Paraguay",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/netherlands.png"),
          country: "Países Bajos",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/france.png"),
          country: "Francia",
        },
      ],
      correctAnswerIndex: 3,
      phoneHelp: 'La bandera de Francia, conocida como la Tricolor, consiste en tres franjas verticales de azul, blanco y rojo.'
    },
    {
      id: "5c",
      status: "Guess",
      word: "FRANCE",
      country: "París",
      num: 6,
      letters: "ILUEANORFPMC",
      img: require("../../../assets/Flags/france.png"),
    },
    {
      id: "6a",
      status: "Capitals",
      country: "Roma",
      image: require("../../../assets/Flags/italy.png"),
      options: [
        {
          id: "0",
          capital: 'Italia',
          country: 'Roma'
        },
        {
          id: "1",
          capital: 'Hungría',
          country: 'Budapest'
        },
        {
          id: "2",
          capital: 'México',
          country: 'México city'
        },
        {
          id: "3",
          capital: 'Francia',
          country: 'París'
        },
      ],
      correctAnswerIndex: 0,
      phoneHelp:""
    },
    {
      id: "6b",
      status: "Flags",
      capital: "Roma",
      country: "Italia",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/italy.png"),
          country: "Italia",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/mexico.png"),
          country: "México",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/hungary.png"),
          country: "Hungría",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/iran.png"),
          country: "Irán",
        },
      ],
      correctAnswerIndex: 0,
      phoneHelp:
      "Mmm... No estoy seguro, pero creo que la bandera italiana tiene franjas verdes y rojas. ",
    },
    {
      id: "6c",
      status: "Guess",
      word: "ITALY",
      country: "Roma",
      num: 5,
      letters: "ILUEATORYPMC",
      img: require("../../../assets/Flags/italy.png"),
    },
    {
      id: "7a",
      status: "Capitals",
      country: "Pekín",
      image: require("../../../assets/Flags/china.png"),
      options: [
        {
          id: "0",
          capital: 'Vietnam',
          country: 'Hanói'
        },
        {
          id: "1",
          capital: 'Camboya',
          country: 'Nom Pen'
        },
        {
          id: "2",
          capital: 'China',
          country: 'Pekín'
        },
        {
          id: "3",
          capital: 'Malasia',
          country: 'Kuala Lumpur'
        },
      ],
      correctAnswerIndex: 2,
      phoneHelp:""
    },
    {
      id: "7b",
      status: "Flags" ,
      capital: "Pekín",
      country: "China",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/vietnam.png"),
          country: 'Vietnam'
        },
        {
          id: "1",
          img: require("../../../assets/Flags/Cambodia.png"),
          country: 'Camboya'
        },
        {
          id: "2",
          img: require("../../../assets/Flags/china.png"),
          country: 'China'
        },
        {
          id: "3",
          img: require("../../../assets/Flags/malaysia.png"),
          country: 'Malasia'
        },
      ],
      correctAnswerIndex: 2,
       phoneHelp:
      'La bandera de China es conocida como la "Bandera Roja de las Cinco Estrellas". Tiene una gran estrella amarilla y cuatro más pequeñas en un semicírculo.',
    },
    {
      id: "7c",
      status: "Guess",
      word: "CHINA",
      num: 5,
      letters: "ILRHANODJOPC",
      img: require("../../../assets/Flags/china.png"),
    },
    {
      id: "8a",
      status: "Capitals",
      country: "México City",
      image: require("../../../assets/Flags/mexico.png"),
      options: [
        {
          id: "0",
          capital: 'Italia',
          country: 'Roma'
        },
        {
          id: "1",
          capital: 'México',
          country: 'México city'
        },
        {
          id: "2",
          capital: 'India',
          country: 'Nueva Delhi'
        },
        {
          id: "3",
          capital: 'Hungría',
          country: 'Budapest'
        },
      ],
      correctAnswerIndex: 1,
      phoneHelp:""
    },
    {
      id: "8b",
      status: "Flags",
      capital: "México City",
      country: "México",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/italy.png"),
          country: "Italia",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/mexico.png"),
          country: "México",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/hungary.png"),
          country: "Hungría",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/iran.png"),
          country: "Irán",
        },
      ],
      correctAnswerIndex: 1,
      phoneHelp:
      "Oh, ¿la bandera de México? Tiene tres franjas verticales: verde, blanca y roja, y hay un impresionante emblema de un águila justo en el centro.",
    },
    {
      id: "8c",
      status: "Guess",
      word: "MEXICO",
      country: "México City",
      num: 6,
      letters: "ILUEANORXPMC",
      img: require("../../../assets/Flags/mexico.png"),
    },
    {
      id: "9a",
      status: "Capitals",
      country: "Washington DC",
      image: require("../../../assets/Flags/usa.png"),
      options: [
        {
          id: "0",
          capital: 'Canadá',
          country: 'Ottawa'
        },
        {
          id: "1",
          capital: 'Cuba',
          country: 'Havana'
        },
        {
          id: "2",
          capital: 'Liberia',
          country: 'Monrovia'
        },
        {
          id: "3",
          capital: 'Estados Unidos',
          country: 'Washington DC'
        },
      ],
      correctAnswerIndex: 3,
      phoneHelp:""
    },
    {
      id: "9b",
      status: "Flags",
      capital: "Washington, D.C",
      country: "United States \nof America",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/usa.png"),
          country: "Estados Unidos",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/Liberia.png"),
          country: "Liberia",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/malaysia.png"),
          country: "Malasia",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/Cuba.png"),
          country: "Cuba",
        },
      ],
      correctAnswerIndex: 0,
      phoneHelp:
      "Solo recuerda: franjas rojas y blancas con una esquina azul llena de estrellas. ¡Es una bandera clásica que todos conocen!",
    },
    {
      id: "9c",
      status: "Guess",
      word: "UNITEDSTATES",
      country: "Washington DC",
      num: 8,
      letters: "ILUEANODTPSC",
      img: require("../../../assets/Flags/usa.png"),
    },
    {
      id: "10a",
      status: "Capitals",
      country: "Londres",
      image: require("../../../assets/Flags/uk.png"),
      options: [
        {
          id: "0",
          capital: 'Nueva Zelanda',
          country: 'Wellington'
        },
        {
          id: "1",
          capital: 'Australia',
          country: 'Canberra'
        },
        {
          id: "2",
          capital: 'UK',
          country: 'Londres'
        },
        {
          id: "3",
          capital: 'Estados Unidos',
          country: 'Washington DC'
        },
      ],
      correctAnswerIndex: 2,
      phoneHelp:""
    },
    {
      id: "10b",
      status: "Flags",
      capital: "Londres",
      country: "Reino Unido",
      options: [
        {
          id: "0",
          img: require("../../../assets/Flags/newZealand.png"),
          country: "Nueva Zelanda",
        },
        {
          id: "1",
          img: require("../../../assets/Flags/australia.png"),
          country: "Australia",
        },
        {
          id: "2",
          img: require("../../../assets/Flags/uk.png"),
          country: "UK",
        },
        {
          id: "3",
          img: require("../../../assets/Flags/Fiji.png"),
          country: "Fiji",
        },
      ],
      correctAnswerIndex: 2,
      phoneHelp:
      "La bandera del Reino Unido combina las cruces de Inglaterra, Escocia e Irlanda. No recuerdo los colores exactos, pero sé que tiene un fondo azul.",
    },
    {
      id: "10c",
      status: "Guess",
      word: "UNITEDKINGDOM",
      country: "Londres",
      num: 10,
      letters: "ILUEANODKTMG",
      img: require("../../../assets/Flags/uk.png"),
    },
    {
      id: "11",
      status: "Flags",
      capital: "",
      country: "",
    },
  ];
  export default question1Es;
  