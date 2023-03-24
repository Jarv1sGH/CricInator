import { configureStore } from '@reduxjs/toolkit';
import liveMatchesReducer from './Reducers/liveMatchesSlice';
import recentMatchesReducer from './Reducers/recentMatchesSlice';
import newsListReducer from './Reducers/newsListSlice';
import commentaryReducer from './Reducers/commentarySlice';
import scorecardReducer from './Reducers/scorecardSlice';
import matchInfoReducer from './Reducers/matchInfoSlice';
import playerInfoReducer from './Reducers/playerDetails/playerInfoSlice';
import playerCareerReducer from './Reducers/playerDetails/playerCareerSlice';
import playerBattingReducer from './Reducers/playerDetails/playerBattingInfoSlice';
import playerBowlingReducer from './Reducers/playerDetails/playerBowlingInfoSlice';
import newsDetailReducer from './Reducers/newsDetailSlice';
import scheduleReducer from './Reducers/scheduleSlice';
import imageReducer from './Reducers/imageSlice';

const store = configureStore({
  reducer: {
    liveMatches: liveMatchesReducer,
    recentMatches: recentMatchesReducer,
    newsList: newsListReducer,
    commentary: commentaryReducer,
    scorecard: scorecardReducer,
    matchInfo: matchInfoReducer,
    playerInfo: playerInfoReducer,
    playerCareer: playerCareerReducer,
    playerBatting: playerBattingReducer,
    playerBowling: playerBowlingReducer,
    newsDetail: newsDetailReducer,
    schedule: scheduleReducer,
    imageUrl: imageReducer,
  },
})






export default store;