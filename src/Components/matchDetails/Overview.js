import React from 'react'
import "./matchDetails.css"
const Overview = (props) => {
    const {  commentary, scorecard, team1ScoreObj, team2ScoreObj } = props;
    let miniScore = commentary?.miniscore;

    let team1Score = '';
    let team2Score = '';

    if(scorecard?.scoreCard?.[0]){
        team1Score = `${team1ScoreObj?.teamShortName} ${team1ScoreObj?.innings1Runs}/${team1ScoreObj?.innings1Wickets} (${team1ScoreObj?.innings1Overs} overs)`;
    }
    if(scorecard?.scoreCard?.[1]){
        team2Score = `${team2ScoreObj?.teamShortName} ${team2ScoreObj?.innings1Runs}/${team2ScoreObj?.innings1Wickets} (${team2ScoreObj?.innings1Overs} overs)`;
    }

    if (typeof team1ScoreObj?.innings2Runs !== 'undefined') {
        team1Score = `${team1ScoreObj?.teamShortName} - ${team1ScoreObj?.innings1Runs} & ${team1ScoreObj?.innings2Runs}/${team1ScoreObj?.innings2Wickets} (${team1ScoreObj?.innings2Overs} overs) `
    }
    if (typeof team2ScoreObj?.innings2Runs !== 'undefined') {
        team2Score = `${team2ScoreObj?.teamShortName} - ${team2ScoreObj?.innings1Runs} & ${team2ScoreObj?.innings2Runs}/${team2ScoreObj?.innings2Wickets} (${team2ScoreObj?.innings2Overs} overs) `
    }
    const refreshHandler = () => {
        window.location.reload();
      }

    return (
        <>
            <div className="scorecard-overview-1" >
                <h2>{team1Score}</h2>
                <h2>{team2Score}</h2>
               <div className='refresh'>
               <p> {miniScore?.status}</p>
               <button onClick ={refreshHandler}>⟳ Refresh</button>
               </div>
            </div>
            <div className="scorecard-overview-2">
                <div className='current-score'>
                    <div className=" batting">
                        <div className="player-name player">
                            <div ><p>Batter</p></div>
                            <div>
                                <p>R</p>
                                <p>B</p>
                                <p>4s</p>
                                <p>6s</p>
                                <p>SR</p>
                            </div>
                        </div>

                        <div className="player-name batter">
                            <div><p>{miniScore?.batsmanStriker?.batName}</p></div>
                            <div>
                                <p>{miniScore?.batsmanStriker?.batRuns}</p>
                                <p>{miniScore?.batsmanStriker?.batBalls}</p>
                                <p>{miniScore?.batsmanStriker?.batFours}</p>
                                <p>{miniScore?.batsmanStriker?.batSixes}</p>
                                <p>{miniScore?.batsmanStriker?.batStrikeRate}</p>
                            </div>
                        </div>

                        <div className="player-name batter">
                            <div><p>{miniScore?.batsmanNonStriker?.batName}</p></div>
                            <div>
                                <p>{miniScore?.batsmanNonStriker?.batRuns}</p>
                                <p>{miniScore?.batsmanNonStriker?.batBalls}</p>
                                <p>{miniScore?.batsmanNonStriker?.batFours}</p>
                                <p>{miniScore?.batsmanNonStriker?.batSixes}</p>
                                <p>{miniScore?.batsmanNonStriker?.batStrikeRate}</p>
                            </div>
                        </div>
                    </div>

                    <div className=" bowling">
                        <div className="player-name player">
                            <div ><p>Bowler</p></div>
                            <div>
                                <p>O</p>
                                <p>M</p>
                                <p>R</p>
                                <p>W</p>
                                <p>Eco</p>
                            </div>
                        </div>

                        <div className="player-name">
                            <div><p>{miniScore?.bowlerStriker?.bowlName}</p></div>
                            <div>
                                <p>{miniScore?.bowlerStriker?.bowlOvs}</p>
                                <p>{miniScore?.bowlerStriker?.bowlMaidens}</p>
                                <p>{miniScore?.bowlerStriker?.bowlRuns}</p>
                                <p>{miniScore?.bowlerStriker?.bowlWkts}</p>
                                <p>{miniScore?.bowlerStriker?.bowlEcon}</p>
                            </div>
                        </div>

                        <div className="player-name">
                            <div><p>{miniScore?.bowlerNonStriker?.bowlName}</p></div>
                            <div>
                                <p>{miniScore?.bowlerNonStriker?.bowlOvs}</p>
                                <p>{miniScore?.bowlerNonStriker?.bowlMaidens}</p>
                                <p>{miniScore?.bowlerNonStriker?.bowlRuns}</p>
                                <p>{miniScore?.bowlerNonStriker?.bowlWkts}</p>
                                <p>{miniScore?.bowlerNonStriker?.bowlEcon}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p><span>Recent</span> {miniScore?.recentOvsStats} </p>
            </div>

            <div className="key-stats">
                <div><p>Key Stats</p></div>
                <p>Partnership : {miniScore?.partnerShip?.runs}({miniScore?.partnerShip?.balls})</p>
                {miniScore?.lastWicket && <p>Last Wicket  : {miniScore?.lastWicket}</p>}
                <p>Current Run Rate : {miniScore?.currentRunRate}</p>
                {miniScore?.latestPerformance && <p>Last 10 Overs : {miniScore?.latestPerformance[0]?.runs} runs & {miniScore?.latestPerformance[0]?.wkts} wkts</p>}
                <p>Toss : {commentary?.matchHeader?.tossResults?.tossWinnerName} ({commentary?.matchHeader?.tossResults?.decision})</p>
            </div>
        </>
    )
}

export default Overview