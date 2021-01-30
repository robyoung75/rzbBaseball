// let fs = require("fs");

import brighton from "../Images/brightonWhite.jpg";
import tyson from "../Images/tysonWhite.jpg";
import blakec from "../Images/blakecWhite.jpg";
import blakey from "../Images/blakeyWhite.jpg";
import bowen from "../Images/bowenWhite.jpg";
import carson from "../Images/CarsonWhite.jpg";
import kalen from "../Images/KalenWhite.jpg";
import kamden from "../Images/kamdenWhite.jpg";
import ryker from "../Images/RykerWhite.jpg";
import spencer from "../Images/SpencerWhite.jpg";
import austin from "../Images/AustinWhite.jpg";
import razorbackface from "../Images/razorbackLogoFace.jpg";

let teamData = [
  {
    id: "8",
    number: "8",
    average: ".400",
    name: "Brighton Y",
    position: "1B, SS, P, OF",
    era: "28.34",
    gamesPitched: "5",
    wins: "1",
    saves: "4",
    image: brighton,
  },
  {
    id: "23",
    number: "23",
    average: ".435",
    name: "Tyson T",
    position: "1B, 2B, OF",
    era: "0",
    gamesPitched: "1",
    wins: "0",
    saves: "0",
    image: tyson,
  },
  {
    id: "5",
    number: "5",
    average: ".600",
    name: "Blake C",
    position: "3B, P, OF",
    era: "15.4",
    gamesPitched: "3",
    wins: "1",
    saves: "1",
    image: blakec,
  },
  {
    id: "3",
    number: "3",
    average: ".600",
    name: "Ryker K",
    position: "3B, SS, P",
    era: "9.22",
    gamesPitched: "7",
    wins: "1",
    saves: "5",
    image: ryker,
  },
  {
    id: "10",
    number: "10",
    average: ".444",
    name: "Carson J",
    position: "SS, OF, P",
    era: "4.66",
    gamesPitched: "3",
    wins: "0",
    saves: "0",
    image: carson,
  },
  {
    id: "26",
    number: "26",
    average: ".429",
    name: "Kamden L",
    position: "1B, OF, P",
    era: "2.74",
    gamesPitched: "5",
    wins: "0",
    saves: "2",
    image: kamden,
  },
  {
    id: "7",
    number: "7",
    average: ".417",
    name: "Delton C",
    position: "3B, SS, P, OF",
    era: "7.19",
    gamesPitched: "6",
    wins: "0",
    saves: "2",
    image: razorbackface,
  },
  {
    id: "47",
    number: "47",
    average: ".417",
    name: "Bowen K",
    position: "C, 2B, OF",
    image: bowen,
  },
  {
    id: "21",
    number: "21",
    average: ".333",
    name: "Austin M",
    position: "3B, P",
    image: austin,
  },
  {
    id: "80",
    number: "80",
    average: ".250",
    name: "Spencer R",
    position: "OF",
    image: spencer,
  },
  {
    id: "12",
    number: "12",
    average: ".250",
    name: "Blake Y",
    position: "2B, SS, OF, C",
    image: blakey,
  },
  {
    id: "42",
    number: "42",
    average: ".182",
    name: "Kalen C",
    position: "2B, 3B, OF",
    era: "2.63",
    gamesPitched: "3",
    wins: "0",
    saves: "0",
    image: kalen,
  },
];

let coachesData = [
  {
    id: "2",
    number: "50",
    name: "Tyler B",
    position: "Head Coach",
    image: kalen,
  },

  {
    id: "1",
    number: "24",
    name: "Rob Y",
    position: "Hitting Coach",
    image: kalen,
  },

  {
    id: "3",
    number: "75",
    name: "Jerod L",
    position: "Pitching Coach",
    image: kalen,
  },

  {
    id: "4",
    number: "45",
    name: "Mike K",
    position: "Skills Coach",
    image: kalen,
  },
];

let schedule = [
  {
    id: Math.random(),
    opponent: "Olympus Titans",
    date: "Mon, Aug 17",
    time: "5:00pm",
    arrival: "4:15pm",
    address: "5059 2200W",
    city: "Taylorsville",
    uniform: "grey",
    team: "away",
  },

  {
    id: Math.random(),
    opponent: "WC Eagles",
    date: "Mon, Aug 20",
    time: "5:00pm",
    arrival: "4:15pm",
    address: "5059 2200W",
    city: "Taylorsville",
    uniform: "White",
    team: "home",
  },
  {
    id: Math.random(),
    opponent: "Lawson",
    date: "Mon, Aug 24",
    time: "7:00pm",
    arrival: "6:15pm",
    address: "5059 2200W",
    city: "Taylorsville",
    uniform: "grey",
    team: "away",
  },
  {
    id: Math.random(),
    opponent: "Wheeler",
    date: "Mon, Aug 25",
    time: "5:00pm",
    arrival: "4:15pm",
    address: "5059 2200W",
    city: "Taylorsville",
    uniform: "White",
    team: "home",
  },
  {
    id: Math.random(),
    opponent: "Kraken",
    date: "Mon, Aug 26",
    time: "5:00pm",
    arrival: "4:15pm",
    address: "5059 2200W",
    city: "Taylorsville",
    uniform: "grey",
    team: "home",
  },
  {
    id: Math.random(),
    opponent: "UT Crushers",
    date: "Mon, Sep 3",
    time: "5:00pm",
    arrival: "4:15pm",
    address: "5059 2200W",
    city: "Taylorsville",
    uniform: "White",
    team: "away",
  },
];







export { teamData, coachesData, schedule, brighton};
// export default teamData;

// let razorBacks = {
//   players: [
//     { name: "Brighton Y", number: "8", average: ".422" },
//     { name: "Tyson B", number: "23", average: ".430" },
//   ],
// };

// var data = JSON.stringify(razorBacks);

// fs.writeFile("./config.json", data, function (err) {
//   if (err) {
//     console.log("There has been an error saving your configuration data.");
//     console.log(err.message);
//     return;
//   }
//   console.log("Configuratoin saved successfully.");
// });
