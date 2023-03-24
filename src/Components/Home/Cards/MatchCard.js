import React from "react";
import "./Cards.css";
import { useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';
import get from 'lodash/get';
const MatchCard = (props) => {
    const { matchesArr } = props;
    const navigate = useNavigate();
    let matchDesc = get(matchesArr, 'matchInfo.matchDesc');
    let matchId = get(matchesArr, 'matchInfo.matchId');
    let matchStatus = get(matchesArr, 'matchInfo.status');
    let seriesName = get(matchesArr, 'matchInfo.seriesName');
    let team1Name = get(matchesArr, 'matchInfo.team1.teamSName');
    let team2Name = get(matchesArr, 'matchInfo.team2.teamSName');
    let team1ScoreKey = get(matchesArr, 'matchScore.team1Score');
    let team2ScoreKey = get(matchesArr, 'matchScore.team2Score');
    let team1Score;
    let team2Score;
    let team1Wkts = 0;
    let team2Wkts = 0;

    // Because the Api does not return wicket key if wickets are 0.
    if (team1ScoreKey) {
        if (team1ScoreKey?.inngs1?.wickets) {
            team1Wkts = team1ScoreKey.inngs1.wickets;
        }
        if (team1ScoreKey?.inngs2?.wickets) {
            team1Wkts = team1ScoreKey.inngs2.wickets;
        }
    }

    if (team2ScoreKey) {
        if (team2ScoreKey?.inngs1?.wickets) {
            team2Wkts = team2ScoreKey.inngs1.wickets;
        }
        if (team2ScoreKey?.inngs2?.wickets) {
            team2Wkts = team2ScoreKey.inngs2.wickets;
        }
    }

    //API does not return the teamScore object if the team hasn't batted yet.
    if (team1ScoreKey) {
        team1Score = `${team1ScoreKey?.inngs1?.runs}/${team1Wkts} (${team1ScoreKey?.inngs1?.overs} ov)`

        if (team1ScoreKey?.inngs2) {
            team1Score = `${team1ScoreKey?.inngs1?.runs} & ${team1ScoreKey?.inngs2?.runs}/${team1Wkts}`
        }
    }

    if (team2ScoreKey && Object.keys(team2ScoreKey).length !== 0) {
        team2Score = `${team2ScoreKey?.inngs1?.runs}/${team2Wkts} (${team2ScoreKey?.inngs1?.overs} ov)`

        if (team2ScoreKey?.inngs2) {
            team2Score = `${team2ScoreKey?.inngs1?.runs} &${team2ScoreKey?.inngs2?.runs}/${team2Wkts}`
        }
    }

    const handleOnClick = () => {
        navigate(`/match/${matchId}`);
    }
    return (
        <div onClick={handleOnClick} className=' live-card'>
            <span>{seriesName} - {matchDesc}</span>
            <div className="match-details">
                <div className="score">
                    <p>{team1Name}</p>
                    <p>{team1Score}</p>
                </div>
                <div className="score">
                    <p>{team2Name}</p>
                    <p>{team2Score}</p>
                </div>
            </div>
            <div className="live-card-footer">
                <p>{matchStatus}</p>
            </div>
        </div>
    )
}

export default MatchCard;