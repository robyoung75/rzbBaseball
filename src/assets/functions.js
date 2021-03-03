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

// Overall player function for StoryReel
const getOverallPlayer = (state) => {
  let evalStats = [];
  let evalSort;

  state.map((player) => {
    evalStats.push({
      firstName: player.firstName,
      lastName: player.lastName,
      number: player.number,
      battingAve: player.battingAve,

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

// Pitcher of the week function for storyReel
const pitcherOfTheWeek = (state) => {
  let pitchersSort = [];
  let evalStats = [];
  let evalSort = [];

  state.forEach((player) => {
    if (player.era) {
      pitchersSort.push(player);
    }
  });

  pitchersSort.forEach((pitcher) => {
    evalStats.push({
      firstName: pitcher.firstName,
      lastName: pitcher.lastName,
      number: pitcher.number,
      era: pitcher.era,
      evalScore:
        parseFloat(pitcher.era) +
        parseFloat(pitcher.inningsPitched) +
        parseFloat(pitcher.gameSaves) * 5 +
        parseFloat(pitcher.ks) * 2 +
        parseFloat(pitcher.gameWins) * 10 -
        parseFloat(pitcher.hitsAllowed) -
        parseFloat(pitcher.runsAllowed) -
        parseFloat(pitcher.walksAllowed) * 2,
    });
  });

  let sortByEval = evalStats.sort((a, b) => {
    return b.evalScore - a.evalScore;
  });

  evalSort.push(sortByEval[0]);

  console.log(pitchersSort);
  console.log(evalStats);
  console.log(evalSort);
  return evalSort;
};

export { battingAverages, getOverallPlayer, pitcherOfTheWeek };
