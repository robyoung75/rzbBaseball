import { coachesData, teamData, schedule } from "./assets/teamData";

export const initialState = {
  playerData: teamData,
  coachesData: coachesData,
  schedule: schedule,
  posts: [],
  userData: [],
  user: null,
};

// Create a reducer that takes a state and action.
const reducer = (state, action) => {
  switch (action.type) {
    case "BATTING_AVE":
      let battingAverageSort = state.playerData.sort(function (a, b) {
        const aAverage = parseFloat(a.average);
        const bAverage = parseFloat(b.average);

        let batComparison = 0;

        if (aAverage > bAverage) {
          batComparison = -1;
        } else if (aAverage < bAverage) {
          batComparison = 1;
        }
        return batComparison;
      });

      console.log("BATTING_AVERAGE >>>>", battingAverageSort);
      return { ...state, playerData: battingAverageSort };

    case "PITCHING_ERA":
      let eraSort = state.playerData.sort(function (a, b) {
        const aEra = parseInt(a.era);
        const bEra = parseInt(b.era);

        let eraComparison = 0;

        if (aEra > bEra) {
          eraComparison = 1;
        } else if (aEra < bEra) {
          eraComparison = -1;
        }
        return eraComparison;
      });

      console.log("ERA_SORT >>>> ", eraSort);

      return { ...state, playerData: eraSort };

    case "SET_USER":
      return {
        ...state,

        userData: action.user,
        user: action.userData,
      };

    case "TEAM_DATA":
      return {
        ...state,
        playerData: action.playerData,
      };

    case "COACHES_DATA":
      return {
        ...state,
        coachesData: action.coachesData,
      };

    case "SCHEDULE_DATA":
      return {
        ...state,
        schedule: action.schedule,
      };

    case "POST_DATA":
      return {
        ...state,
        posts: action.post,
      };

    default:
      return state;
  }
};

export default reducer;
