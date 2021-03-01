// sorts batting average and chooses the highest batting ave
// accounts for ties in high batting average.
const battingAverages = (state) => {
  let batAveSort = [];
  let highBatAve = [];

  let batAve = state.sort(function (a, b) {
    const aAve = parseFloat(a.battingAve);
    const bAve = parseFloat(b.battingAve);
    return bAve - aAve;
  });

  batAve.map((batter) => {
    if (batAve[0].battingAve === batter.battingAve) {
      return batAveSort.push(batter);
    }
  });

  if (batAveSort.length > 1) {
    let randomNumber = Math.floor(Math.random() * batAveSort.length);
    highBatAve.push(batAveSort[randomNumber]);
  }

  return highBatAve;
};

const getOverallPlayer = (state) => {
  let evalStats = [];
  let evalSort;

  state.map((player) => {
    evalStats.push({
      firstName: player.firstName,
      lastName: player.lastName,
      number: player.number,

      evalScore:
        parseFloat(player.hits) +
        parseFloat(player.rbi) +
        parseFloat(player.runs) +
        parseFloat(player.onBasePercent).toFixed() -
        parseFloat(player.strikeouts),
    });
  });

  let sort = evalStats.sort(function (a, b) {
    const evalA = a.evalScore;
    const evalB = b.evalScore;
    return evalB - evalA;
  });

  evalSort = sort;
  return evalSort;
};

const getPitcher = (state) => {
  let eraSort = [];
  let lowEra = [];

  let eras = state.sort(function (a, b) {
    const aEra = parseFloat(a.era);
    const bEra = parseFloat(b.era);
    return aEra - bEra;
  });

  console.log(eras[0]);

  eras.map((pitcher) => {
    if (eras[0] === pitcher.era) {
      eraSort.push(pitcher);
      if (eraSort.length > 1) {
        let randomNumber = Math.floor(Math.random() * eraSort.length);
        lowEra.push(pitcher[randomNumber]);
      }
    } else {
      lowEra.push(eras[0]);
    }
  });

  return lowEra;
};

export { battingAverages, getOverallPlayer, getPitcher };
