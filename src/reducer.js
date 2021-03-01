import { coachesData, schedule } from "./assets/teamData";
import { myPlayerData } from "./assets/gcData";

export const initialState = {
  coachesData: coachesData,
  schedule: schedule,
  posts: [],
  userData: [],
  myPlayerData: myPlayerData,
};

// Create a reducer that takes a state and action.
const reducer = (state, action) => {
  switch (action.type) {
    case "BATTING_AVE":
      let battingAverageSort = state.myPlayerData.sort(function (a, b) {
        const aAverage = parseFloat(a.battingAve);
        const bAverage = parseFloat(b.battingAve);

        let batComparison = 0;

        if (aAverage > bAverage) {
          batComparison = -1;
        } else if (aAverage < bAverage) {
          batComparison = 1;
        }
        return batComparison;
      });

      console.log("BATTING_AVERAGE >>>>", battingAverageSort);
      return { ...state, myPlayerData: battingAverageSort };

    case "PITCHING_ERA":
      let eraSort = state.myPlayerData.sort(function (a, b) {
        if ((a.era !== null) & (b.era !== null)) {
          const aEra = a.era;
          const bEra = b.era;

          return aEra - bEra;
        }
      });

      console.log("ERA_SORT >>>> ", eraSort);

      return { ...state, myPlayerData: eraSort };

    case "SET_USER":
      return {
        ...state,

        userData: action.user,
        // user: action.userData,
      };

    case "MYTEAM_DATA":
      return {
        ...state,
        myPlayerData: action.myPlayerData,
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
