import React, { useEffect, useState } from 'react'
import './matchDetails.css'
import { useParams } from 'react-router-dom';
import { fetchCommentary } from "../../redux/Reducers/commentarySlice"
import { fetchScorecard } from "../../redux/Reducers/scorecardSlice"
import { fetchMatchInfo } from "../../redux/Reducers/matchInfoSlice"
import Overview from './Overview';
import Scorecard from './Scorecard';
import { useDispatch, useSelector } from 'react-redux';
import Squads from './Squads';
import Commentary from './Commentary';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';


const MatchDetails = () => {
  const [overview, setOverview] = useState(true)
  const [scorecardActive, setScorecardActive] = useState(false)
  const [squad, setSquad] = useState(false)
  let { matchId } = useParams();
  const { commentary, loading, rejected } = useSelector((state) => state?.commentary);
  const { scorecard } = useSelector((state) => state?.scorecard);
  const { matchInfo } = useSelector((state) => state?.matchInfo?.matchInfo);
  const { venueInfo } = useSelector((state) => state?.matchInfo?.matchInfo);
  const dispatch = useDispatch();
  let commentaryList = commentary.commentaryList;

  let matchStartTimeDateEpoch = commentary?.matchHeader?.matchStartTimestamp;
  let matchStartTimeDate = new Date(matchStartTimeDateEpoch);

  let team1ScoreObj = {
    teamName: scorecard?.scoreCard?.[0]?.batTeamDetails?.batTeamName,
    teamShortName: scorecard?.scoreCard?.[0]?.batTeamDetails?.batTeamShortName,
    innings1Runs: scorecard?.scoreCard?.[0]?.scoreDetails?.runs,
    innings1Wickets: scorecard?.scoreCard?.[0]?.scoreDetails?.wickets,
    innings1Overs: scorecard?.scoreCard?.[0]?.scoreDetails?.overs
  }
  let team2ScoreObj = {
    teamName: scorecard?.scoreCard?.[1]?.batTeamDetails?.batTeamName,
    teamShortName: scorecard?.scoreCard?.[1]?.batTeamDetails?.batTeamShortName,
    innings1Runs: scorecard?.scoreCard?.[1]?.scoreDetails?.runs,
    innings1Wickets: scorecard?.scoreCard?.[1]?.scoreDetails?.wickets,
    innings1Overs: scorecard?.scoreCard?.[1]?.scoreDetails?.overs
  }

  // if match is a test match then there are going to be total 4 inings and the 3rd and 4th innings can be interchanged in case of a follow on
  // hence checking if team name of 1st innings matches to innings 3 or 4   
  if (scorecard?.scoreCard?.[0]?.batTeamDetails?.batTeamShortName === scorecard?.scoreCard?.[2]?.batTeamDetails?.batTeamShortName) {
    team1ScoreObj = {
      ...team1ScoreObj,
      innings2Runs: scorecard?.scoreCard?.[2]?.scoreDetails?.runs,
      innings2Wickets: scorecard?.scoreCard?.[2]?.scoreDetails?.wickets,
      innings2Overs: scorecard?.scoreCard?.[2]?.scoreDetails?.overs,
    }
  }
  if (scorecard?.scoreCard?.[0]?.batTeamDetails?.batTeamShortName === scorecard?.scoreCard?.[3]?.batTeamDetails?.batTeamShortName) {
    team1ScoreObj = {
      ...team1ScoreObj,
      innings2Runs: scorecard?.scoreCard?.[3]?.scoreDetails?.runs,
      innings2Wickets: scorecard?.scoreCard?.[3]?.scoreDetails?.wickets,
      innings2Overs: scorecard?.scoreCard?.[3]?.scoreDetails?.overs,
    }
  }

  if (scorecard?.scoreCard?.[1]?.batTeamDetails?.batTeamId === scorecard?.scoreCard?.[2]?.batTeamDetails?.batTeamId) {
    team2ScoreObj = {
      ...team2ScoreObj,
      innings2Runs: scorecard?.scoreCard?.[2]?.scoreDetails?.runs,
      innings2Wickets: scorecard?.scoreCard?.[2]?.scoreDetails?.wickets,
      innings2Overs: scorecard?.scoreCard?.[2]?.scoreDetails?.overs,
    }
  }
  if (scorecard?.scoreCard?.[1]?.batTeamDetails?.batTeamId === scorecard?.scoreCard?.[3]?.batTeamDetails?.batTeamId) {
    team2ScoreObj = {
      ...team2ScoreObj,
      innings2Runs: scorecard?.scoreCard?.[3]?.scoreDetails?.runs,
      innings2Wickets: scorecard?.scoreCard?.[3]?.scoreDetails?.wickets,
      innings2Overs: scorecard?.scoreCard?.[3]?.scoreDetails?.overs,
    }
  }



  useEffect(() => {
    dispatch(fetchCommentary(matchId));
    dispatch(fetchScorecard(matchId));
    dispatch(fetchMatchInfo(matchId));

  }, [dispatch, matchId])

  const activeOption1 = () => {
    setOverview(true);
    setScorecardActive(false);
    setSquad(false);
  }

  const activeOption2 = () => {
    setOverview(false);
    setScorecardActive(true);
    setSquad(false);
  }

  const activeOption3 = () => {
    setOverview(false);
    setScorecardActive(false);
    setSquad(true);
  }


  return (
    <>
      {
        loading ? <Loader />
          :
          <>
            {
              rejected ? <Error />
                :
                <div className='match-details-container'>
                  <div className="scorecard-header" >
                    <h1>{commentary?.matchHeader?.team1?.name} vs {commentary?.matchHeader?.team2?.name}, {commentary?.matchHeader?.matchDescription}
                      {commentary?.matchHeader?.complete === false ? <span > - Live Score</span> : <span> Scorecard</span>}
                    </h1>

                    <div>
                      <p>Series: {commentary?.matchHeader?.seriesName}</p>
                      <p>Venue: {venueInfo?.ground}, {venueInfo?.city} </p>
                      <p>Date & Time : {`${matchStartTimeDate.toLocaleString()}`}</p>
                    </div>
                  </div>
                  <div className="container">
                    <div className="scorecard">

                      <div className="options">
                        <span onClick={activeOption1} className={overview === true ? 'active' : ''}><p>Overview</p></span>
                        <span onClick={activeOption2} className={scorecardActive === true ? 'active' : ''}><p>Scorecard</p></span>
                        <span onClick={activeOption3} className={squad === true ? 'active' : ''}><p>Squads</p></span>
                      </div>

                      {overview && <Overview commentary={commentary} scorecard={scorecard} team1ScoreObj={team1ScoreObj} team2ScoreObj={team2ScoreObj} />}
                      {scorecardActive && <Scorecard scorecard={scorecard} />}
                      {squad && <Squads matchInfo={matchInfo} />}

                    </div>


                    <div className="commentary">
                      <h1>Commentary</h1>
                      {
                        commentaryList && commentaryList.map((commentaryList) => (
                          <Commentary key={commentaryList?.timestamp} commentaryList={commentaryList} />
                        ))
                      }
                    </div>
                  </div>

                </div>
            }
          </>

      }
    </>
  )
}

export default MatchDetails;