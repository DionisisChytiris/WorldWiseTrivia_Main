const question1En = [
  {
    id: "1a",
    status: "Capitals",
    country: "Italy",
    image: require("../../../assets/Flags/italy.png"),
    options: [
      {
        id: "0",
        capital: "Paris",
        country: "France",
      },
      {
        id: "1",
        capital: "Rome",
        country: "Italy",
      },
      {
        id: "2",
        capital: "Madrid",
        country: "Spain",
      },
      {
        id: "3",
        capital: "Milan",
        country: "Italian city",
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "1b",
    status: "Flags",
    country: "Eiffel Tower",
    capital: "France",
    options: [
      {
        id: "0",
        country: "Acropolis\nGreece",
        img: require("../../../assets/WorldMonuments/Europe/Acropolis.png"),
      },
      {
        id: "1",
        country: "Arc de Triumph\nFrance",
        img: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.png"),
      },
      {
        id: "2",
        country: "Eiffel Tower\nFrance",
        img: require("../../../assets/WorldMonuments/Europe/eiffelTower.png"),
      },
      {
        id: "3",
        country: "Pisa Tower\nItaly",
        img: require("../../../assets/WorldMonuments/Europe/TowerPisa.png"),
      },
    ],
    correctAnswerIndex: 2,
  },
];

export default question1En;
