import React from 'react';
import './Scorecard.css';
const Scorecard = (props) => {
  const { scorecard } = props;

  let innings1extras = scorecard?.scoreCard?.[0]?.extrasData;
  let innings2extras = scorecard?.scoreCard?.[1]?.extrasData;
  let innings3extras = scorecard?.scoreCard?.[2]?.extrasData;
  let innings4extras = scorecard?.scoreCard?.[3]?.extrasData;


  let innings1Score = `${scorecard?.scoreCard?.[0]?.scoreDetails?.runs}/${scorecard?.scoreCard?.[0]?.scoreDetails?.wickets} (${scorecard?.scoreCard?.[0]?.scoreDetails?.overs} overs)`;
  let innings2Score = `${scorecard?.scoreCard?.[2]?.scoreDetails?.runs}/${scorecard?.scoreCard?.[2]?.scoreDetails?.wickets} (${scorecard?.scoreCard?.[2]?.scoreDetails?.overs} overs)`;
  let innings3Score = `${scorecard?.scoreCard?.[1]?.scoreDetails?.runs}/${scorecard?.scoreCard?.[1]?.scoreDetails?.wickets} (${scorecard?.scoreCard?.[1]?.scoreDetails?.overs} overs)`;
  let innings4Score = `${scorecard?.scoreCard?.[3]?.scoreDetails?.runs}/${scorecard?.scoreCard?.[3]?.scoreDetails?.wickets} (${scorecard?.scoreCard?.[3]?.scoreDetails?.overs} overs)`;

  //Batsmen data
  const innings1batsmenDataObj = scorecard?.scoreCard?.[0]?.batTeamDetails?.batsmenData;
  const innings2batsmenDataObj = scorecard?.scoreCard?.[1]?.batTeamDetails?.batsmenData;
  const innings3batsmenDataObj = scorecard?.scoreCard?.[2]?.batTeamDetails?.batsmenData;
  const innings4batsmenDataObj = scorecard?.scoreCard?.[3]?.batTeamDetails?.batsmenData;

  // Bowler Data
  const innings1bowlerDataObj = scorecard?.scoreCard?.[0]?.bowlTeamDetails?.bowlersData;
  const innings2bowlerDataObj = scorecard?.scoreCard?.[1]?.bowlTeamDetails?.bowlersData;
  const innings3bowlerDataObj = scorecard?.scoreCard?.[2]?.bowlTeamDetails?.bowlersData;
  const innings4bowlerDataObj = scorecard?.scoreCard?.[3]?.bowlTeamDetails?.bowlersData;

  //Wickets Data
  const innings1WicketDataObj = scorecard?.scoreCard?.[0]?.wicketsData;
  const innings2WicketDataObj = scorecard?.scoreCard?.[1]?.wicketsData;
  const innings3WicketDataObj = scorecard?.scoreCard?.[2]?.wicketsData;
  const innings4WicketDataObj = scorecard?.scoreCard?.[3]?.wicketsData;

  // converting to array for mapping 
  const innings1batsmenDataArr = innings1batsmenDataObj ? Object.entries(innings1batsmenDataObj) : null; // this returns a 2D array
  const innings2batsmenDataArr = innings2batsmenDataObj ? Object.entries(innings2batsmenDataObj) : null;
  const innings3batsmenDataArr = innings3batsmenDataObj ? Object.entries(innings3batsmenDataObj) : null;
  const innings4batsmenDataArr = innings4batsmenDataObj ? Object.entries(innings4batsmenDataObj) : null;


  const innings1bowlersDataArr = innings1bowlerDataObj ? Object.entries(innings1bowlerDataObj) : null;
  const innings2bowlersDataArr = innings2bowlerDataObj ? Object.entries(innings2bowlerDataObj) : null;
  const innings3bowlersDataArr = innings3bowlerDataObj ? Object.entries(innings3bowlerDataObj) : null;
  const innings4bowlersDataArr = innings4bowlerDataObj ? Object.entries(innings4bowlerDataObj) : null;

  const innings1WicketsDataArr = innings1WicketDataObj ? Object.entries(innings1WicketDataObj) : null;
  const innings2WicketsDataArr = innings2WicketDataObj ? Object.entries(innings2WicketDataObj) : null;
  const innings3WicketsDataArr = innings3WicketDataObj ? Object.entries(innings3WicketDataObj) : null;
  const innings4WicketsDataArr = innings4WicketDataObj ? Object.entries(innings4WicketDataObj) : null;

  // Sorting the batsmen array based on the numeric value of the "bat_" property
  innings1batsmenDataArr?.sort(function (a, b) {
    // extracting the numeric value from the bat_ property
    let batA = parseInt(a[0].replace("bat_", ""));
    let batB = parseInt(b[0].replace("bat_", ""));
    if (batA < batB) {
      return -1;
    }
    if (batA > batB) {
      return 1;
    }
    return 0;
  });

  innings2batsmenDataArr?.sort(function (a, b) {
    // extracting the numeric value from the bat_ property
    let batA = parseInt(a[0].replace("bat_", ""));
    let batB = parseInt(b[0].replace("bat_", ""));
    if (batA < batB) {
      return -1;
    }
    if (batA > batB) {
      return 1;
    }
    return 0;
  });
  innings3batsmenDataArr?.sort(function (a, b) {
    // extracting the numeric value from the bat_ property
    let batA = parseInt(a[0].replace("bat_", ""));
    let batB = parseInt(b[0].replace("bat_", ""));
    if (batA < batB) {
      return -1;
    }
    if (batA > batB) {
      return 1;
    }
    return 0;
  });
  innings4batsmenDataArr?.sort(function (a, b) {
    // extracting the numeric value from the bat_ property
    let batA = parseInt(a[0].replace("bat_", ""));
    let batB = parseInt(b[0].replace("bat_", ""));
    if (batA < batB) {
      return -1;
    }
    if (batA > batB) {
      return 1;
    }
    return 0;
  });


  // Sorting the wicket array based on the numeric value of the "wkt_" property
  innings1WicketsDataArr?.sort(function (a, b) {
    // extracting the numeric value from the bat_ property
    let wktA = parseInt(a[0].replace("wkt_", ""));
    let wktB = parseInt(b[0].replace("wkt_", ""));
    if (wktA < wktB) {
      return -1;
    }
    if (wktA > wktB) {
      return 1;
    }
    return 0;
  });
  innings2WicketsDataArr?.sort(function (a, b) {
    // extracting the numeric value from the bat_ property
    let wktA = parseInt(a[0].replace("wkt_", ""));
    let wktB = parseInt(b[0].replace("wkt_", ""));
    if (wktA < wktB) {
      return -1;
    }
    if (wktA > wktB) {
      return 1;
    }
    return 0;
  });
  innings3WicketsDataArr?.sort(function (a, b) {
    // extracting the numeric value from the bat_ property
    let wktA = parseInt(a[0].replace("wkt_", ""));
    let wktB = parseInt(b[0].replace("wkt_", ""));
    if (wktA < wktB) {
      return -1;
    }
    if (wktA > wktB) {
      return 1;
    }
    return 0;
  });
  innings4WicketsDataArr?.sort(function (a, b) {
    // extracting the numeric value from the bat_ property
    let wktA = parseInt(a[0].replace("wkt_", ""));
    let wktB = parseInt(b[0].replace("wkt_", ""));
    if (wktA < wktB) {
      return -1;
    }
    if (wktA > wktB) {
      return 1;
    }
    return 0;
  });
  return (
    <div>
      <div className="innings-container">
        <p>{scorecard?.status}</p>
        {/*  1st Innings ScoreCard */}
        {
          scorecard?.scoreCard?.[0] ?
            <div>
              <div className="team-name">
                <p>{scorecard.scoreCard?.[0]?.batTeamDetails?.batTeamName} -  Ininngs</p>
                <p>{innings1Score}</p>
              </div>
              <div className="batters">
                <div><p>Batter</p></div>
                <div>
                  <p>R</p>
                  <p>B</p>
                  <p>4s</p>
                  <p>6s</p>
                  <p>SR</p>
                </div>
              </div>

              {
                innings1batsmenDataArr && innings1batsmenDataArr.filter((item) => item?.[1].outDesc !== "").map((item) => (
                  <div className="players" key={item[1]?.batId}>
                    <div>
                      <div className='batter-name'><p>{item[1]?.batName}</p></div>
                      <div className='player-status'><p>{item[1]?.outDesc}</p></div>
                    </div>
                    <div>
                      <p>{item[1]?.runs}</p>
                      <p>{item[1]?.balls}</p>
                      <p>{item[1]?.fours}</p>
                      <p>{item[1]?.sixes}</p>
                      <p>{item[1]?.strikeRate}</p>
                    </div>
                  </div>
                ))
              }

              <div className="players extras">
                <div>
                  <div className='batter-name'><p>Extras </p></div>
                </div>
                <div>
                  <p>{innings1extras?.total} (b {innings1extras?.byes}, lb {innings1extras?.legByes}, w {innings1extras?.wides}, nb {innings1extras?.noBalls}, p {innings1extras?.penalty})</p>
                </div>
              </div>
              <div className="players extras">
                <div>
                  <div className='batter-name'><p>Total </p></div>
                </div>
                <div>
                  <p>{innings1Score}</p>
                </div>
              </div>

              {
                // if All the batsmen got the chance to bat then no need to show this, thats why adding this check
                innings1batsmenDataArr?.filter((item) => item[1]?.outDesc === "").length === 0 ? ""
                  :
                  <div className="players yetToBat">
                    <div className='didNotBat'>
                      <div className='batter-name'>
                        <p>{scorecard?.scoreCard?.[1] ? "Did not bat" : "Yet to bat"}</p>
                      </div>
                      <div className='player-status yetToBatNames'>
                        {
                          innings1batsmenDataArr && innings1batsmenDataArr.filter((item) => item[1]?.outDesc === "").map((item) => (
                            <p key={item[1]?.batId}> {item[1]?.batName} </p>
                          ))}
                      </div>
                    </div>
                  </div>
              }

              <div className="batters">
                <div><p>Fall of wickets</p></div>
              </div>
              <div className='fowContainer' >
                <div className='fallOfWickets'>
                  <div className='batter-name wicketFall'>
                    {
                      innings1WicketsDataArr && innings1WicketsDataArr.map((item) => (
                        <span key={item[1].batId}> <p> {item[1]?.wktRuns}-{item[1]?.wktNbr}</p> <p>{item[1]?.batName}</p></span>
                      ))
                    }
                  </div>
                </div>
              </div>




              <div className="bowlers" style={{ "backgroundColor": "#ecebeb" }}>
                <div><p>Bowler</p></div>
                <div>
                  <p>O</p>
                  <p>M</p>
                  <p>R</p>
                  <p>W</p>
                  <p>NB</p>
                  <p>WD</p>
                  <p>ECO</p>
                </div>
              </div>

              {
                innings1bowlersDataArr && innings1bowlersDataArr.map((item) => (
                  <div key={item[1]?.bowlerId} className="bowlers">
                    <div>
                      <p style={{ "color": "rgb(27, 86, 138)" }}> {item?.[1]?.bowlName}</p>
                    </div>
                    <div>
                      <p>{item?.[1]?.overs}</p>
                      <p>{item?.[1]?.maidens}</p>
                      <p>{item?.[1]?.runs}</p>
                      <p>{item?.[1]?.wickets}</p>
                      <p>{item?.[1]?.no_balls}</p>
                      <p>{item?.[1]?.wides}</p>
                      <p>{item?.[1]?.economy}</p>
                    </div>
                  </div>
                ))

              }
            </div>
            :
            <div className='NoScorecard'><p>Match is Starting Soon...</p></div>
        }


        {/* 2nd Innings ScoreCard */}
        {
          scorecard?.scoreCard?.[1] ?
            <div>
              <div className="team-name">
                <p>{scorecard.scoreCard?.[1]?.batTeamDetails?.batTeamName} -  Ininngs</p>
                <p>{innings3Score}</p>
              </div>
              <div className="batters">
                <div><p>Batter</p></div>
                <div>
                  <p>R</p>
                  <p>B</p>
                  <p>4s</p>
                  <p>6s</p>
                  <p>SR</p>
                </div>
              </div>
              {
                innings2batsmenDataArr && innings2batsmenDataArr.map((item) => (
                  <div className="players" key={item[1]?.batId}>
                    <div>
                      <div className='batter-name'><p>{item[1]?.batName}</p></div>
                      <div className='player-status'><p>{item[1]?.outDesc}</p></div>
                    </div>
                    <div>
                      <p>{item[1]?.runs}</p>
                      <p>{item[1]?.balls}</p>
                      <p>{item[1]?.fours}</p>
                      <p>{item[1]?.sixes}</p>
                      <p>{item[1]?.strikeRate}</p>
                    </div>
                  </div>
                ))
              }
              <div className="players extras">
                <div>
                  <div className='batter-name'><p>Extras </p></div>
                </div>
                <div>
                  <p>{innings2extras?.total} (b {innings2extras?.byes}, lb {innings2extras?.legByes}, w {innings2extras?.wides}, nb {innings2extras?.noBalls}, p {innings2extras?.penalty})</p>
                </div>
              </div>
              <div className="players extras">
                <div>
                  <div className='batter-name'><p>Total </p></div>
                </div>
                <div>
                  <p>{innings3Score}</p>
                </div>
              </div>

              {
                // if All the batsmen got the chance to bat then no need to show this, thats why adding this check
                innings2batsmenDataArr?.filter((item) => item[1]?.outDesc === "").length === 0 ? ""
                  :
                  <div className="players yetToBat">
                    <div className='didNotBat'>
                      <div className='batter-name'>
                        <p>{scorecard?.isMatchComplete === true ? "Did not bat" : "Yet to bat"}</p>
                      </div>
                      <div className='player-status yetToBatNames'>
                        {
                          innings2batsmenDataArr && innings2batsmenDataArr.filter((item) => item[1]?.outDesc === "").map((item) => (
                            <p key={item[1].batId}>{item[1]?.batName}</p>
                          ))}
                      </div>
                    </div>
                  </div>
              }

              <div className="batters">
                <div><p>Fall of wickets</p></div>
              </div>
              <div className='fowContainer'>
                <div className='fallOfWickets'>
                  <div className='batter-name wicketFall'>
                    {
                      innings2WicketsDataArr && innings2WicketsDataArr.map((item) => (
                        <span key={item[1].batId}> <p> {item[1]?.wktRuns}-{item[1]?.wktNbr}</p> <p>{item[1]?.batName}</p></span>
                      ))
                    }
                  </div>
                </div>
              </div>

              <div className="bowlers" style={{ "backgroundColor": "#ecebeb" }}>
                <div><p>Bowler</p></div>
                <div>
                  <p>O</p>
                  <p>M</p>
                  <p>R</p>
                  <p>W</p>
                  <p>NB</p>
                  <p>WD</p>
                  <p>ECO</p>
                </div>
              </div>

              {
                innings2bowlersDataArr && innings2bowlersDataArr.map((item) => (
                  <div key={item[1]?.bowlerId} className="bowlers">
                    <div>
                      <p style={{ "color": "rgb(27, 86, 138)" }}> {item[1].bowlName}</p>
                    </div>
                    <div>
                      <p>{item[1]?.overs}</p>
                      <p>{item[1]?.maidens}</p>
                      <p>{item[1]?.runs}</p>
                      <p>{item[1]?.wickets}</p>
                      <p>{item[1]?.no_balls}</p>
                      <p>{item[1]?.wides}</p>
                      <p>{item[1]?.economy}</p>
                    </div>
                  </div>
                ))

              }
            </div>
            : ""
        }


        {/*  3rd Innings ScoreCard */}
        {
          scorecard?.scoreCard?.[2] ?
            <div>
              <div className="team-name">
                <p>{scorecard.scoreCard?.[2]?.batTeamDetails?.batTeamName} -  Ininngs</p>
                <p>{innings2Score}</p>
              </div>
              <div className="batters">
                <div><p>Batter</p></div>
                <div>
                  <p>R</p>
                  <p>B</p>
                  <p>4s</p>
                  <p>6s</p>
                  <p>SR</p>
                </div>
              </div>

              {
                innings3batsmenDataArr && innings3batsmenDataArr.filter((item) => item[1]?.outDesc !== "").map((item) => (
                  <div key={item[1]?.batId} className="players" >
                    <div>
                      <div className='batter-name'><p>{item[1]?.batName}</p></div>
                      <div className='player-status'><p>{item[1]?.outDesc}</p></div>
                    </div>
                    <div>
                      <p>{item[1]?.runs}</p>
                      <p>{item[1]?.balls}</p>
                      <p>{item[1]?.fours}</p>
                      <p>{item[1]?.sixes}</p>
                      <p>{item[1]?.strikeRate}</p>
                    </div>
                  </div>
                ))
              }



              <div className="players extras">
                <div>
                  <div className='batter-name'><p>Extras </p></div>
                </div>
                <div>
                  <p>{innings3extras?.total} (b {innings3extras?.byes}, lb {innings3extras?.legByes}, w {innings3extras?.wides}, nb {innings3extras?.noBalls}, p {innings3extras?.penalty})</p>
                </div>
              </div>
              <div className="players extras">
                <div>
                  <div className='batter-name'><p>Total </p></div>
                </div>
                <div>
                  <p>{innings2Score}</p>
                </div>
              </div>

              {
                // if All the batsmen got the chance to bat then no need to show this, thats why adding this check
                innings3batsmenDataArr?.filter((item) => item[1]?.outDesc === "").length === 0 ? ""
                  :
                  <div className="players yetToBat">
                    <div className='didNotBat'>
                      <div className='batter-name'>
                        <p>{scorecard?.isMatchComplete === true ? "Did not bat" : "Yet to bat"}</p>
                      </div>
                      <div className='player-status yetToBatNames'>
                        {
                          innings3batsmenDataArr && innings3batsmenDataArr.filter((item) => item[1]?.outDesc === "").map((item) => (
                            <p key={item[1]?.batId} >{item[1]?.batName}</p>
                          ))}

                      </div>
                    </div>
                  </div>
              }

              <div className="batters">
                <div><p>Fall of wickets</p></div>
              </div>
              <div className='fowContainer' >
                <div className='fallOfWickets'>
                  <div className='batter-name wicketFall'>
                    {
                      innings3WicketsDataArr && innings3WicketsDataArr.map((item) => (
                        <span key={item[1]?.batId}> <p> {item[1]?.wktRuns}-{item[1]?.wktNbr}</p> <p>{item[1]?.batName}</p></span>
                      ))
                    }
                  </div>
                </div>
              </div>




              <div className="bowlers" style={{ "backgroundColor": "#ecebeb" }}>
                <div><p>Bowler</p></div>
                <div>
                  <p>O</p>
                  <p>M</p>
                  <p>R</p>
                  <p>W</p>
                  <p>NB</p>
                  <p>WD</p>
                  <p>ECO</p>
                </div>
              </div>

              {
                innings3bowlersDataArr && innings3bowlersDataArr.map((item) => (
                  <div key={item[1]?.batId} className="bowlers">
                    <div>
                      <p style={{ "color": "rgb(27, 86, 138)" }}> {item[1].bowlName}</p>
                    </div>
                    <div>
                      <p>{item[1]?.overs}</p>
                      <p>{item[1]?.maidens}</p>
                      <p>{item[1]?.runs}</p>
                      <p>{item[1]?.wickets}</p>
                      <p>{item[1]?.no_balls}</p>
                      <p>{item[1]?.wides}</p>
                      <p>{item[1]?.economy}</p>
                    </div>
                  </div>
                ))

              }
            </div>
            : ""
        }

        {/* 4th Innings ScoreCard */}
        {
          scorecard?.scoreCard?.[3] ?
            <div>
              <div className="team-name">
                <p>{scorecard.scoreCard?.[3]?.batTeamDetails?.batTeamName} -  Ininngs</p>
                <p>{innings4Score}</p>
              </div>
              <div className="batters">
                <div><p>Batter</p></div>
                <div>
                  <p>R</p>
                  <p>B</p>
                  <p>4s</p>
                  <p>6s</p>
                  <p>SR</p>
                </div>
              </div>
              {
                innings4batsmenDataArr && innings4batsmenDataArr.filter((item) => item[1]?.outDesc !== "").map((item) => (
                  <div className="players" key={item[1]?.batId}>
                    <div>
                      <div className='batter-name'><p>{item[1]?.batName}</p></div>
                      <div className='player-status'><p>{item[1]?.outDesc}</p></div>
                    </div>
                    <div>
                      <p>{item[1]?.runs}</p>
                      <p>{item[1]?.balls}</p>
                      <p>{item[1]?.fours}</p>
                      <p>{item[1]?.sixes}</p>
                      <p>{item[1]?.strikeRate}</p>
                    </div>
                  </div>
                ))
              }
              <div className="players ">
                <div>
                  <div className='batter-name'><p>Extras </p></div>
                </div>
                <div>
                  <p>{innings4extras?.total} (b {innings4extras?.byes}, lb {innings4extras?.legByes}, w {innings4extras?.wides}, nb {innings4extras?.noBalls}, p {innings4extras?.penalty})</p>
                </div>
              </div>
              <div className="players extras">
                <div>
                  <div className='batter-name'><p>Total </p></div>
                </div>
                <div>
                  <p>{innings4Score}</p>
                </div>
              </div>

              {
                // if All the batsmen got the chance to bat then no need to show this, thats why adding this check
                innings4batsmenDataArr?.filter((item) => item[1]?.outDesc === "").length === 0 ? ""
                  :
                  <div className="players yetToBat">
                    <div className='didNotBat'>
                      <div className='batter-name'>
                        <p>{scorecard?.isMatchComplete === true ? "Did not bat" : "Yet to bat"}</p>
                      </div>
                      <div className='player-status yetToBatNames'>
                        {
                          innings4batsmenDataArr && innings4batsmenDataArr.filter((item) => item[1]?.outDesc === "").map((item) => (
                            <p key={item[1]?.batId} >{item[1]?.batName}</p>
                          ))}
                      </div>
                    </div>
                  </div>
              }

              <div className="batters">
                <div><p>Fall of wickets</p></div>
              </div>
              <div className='fowContainer'>
                <div className='fallOfWickets'>
                  <div className='batter-name wicketFall'>
                    {
                      innings4WicketsDataArr && innings4WicketsDataArr.map((item) => (
                        <span key={item[1]?.batId}> <p> {item[1]?.wktRuns}-{item[1]?.wktNbr}</p> <p>{item[1]?.batName}</p></span>
                      ))
                    }
                  </div>
                </div>
              </div>




              <div className="bowlers" style={{ "backgroundColor": "#ecebeb" }}>
                <div><p>Bowler</p></div>
                <div>
                  <p>O</p>
                  <p>M</p>
                  <p>R</p>
                  <p>W</p>
                  <p>NB</p>
                  <p>WD</p>
                  <p>ECO</p>
                </div>
              </div>

              {
                innings4bowlersDataArr && innings4bowlersDataArr.map((item) => (
                  <div key={item[1]?.batId} className="bowlers">
                    <div>
                      <p style={{ "color": "rgb(27, 86, 138)" }}> {item[1].bowlName}</p>
                    </div>
                    <div>
                      <p>{item[1]?.overs}</p>
                      <p>{item[1]?.maidens}</p>
                      <p>{item[1]?.runs}</p>
                      <p>{item[1]?.wickets}</p>
                      <p>{item[1]?.no_balls}</p>
                      <p>{item[1]?.wides}</p>
                      <p>{item[1]?.economy}</p>
                    </div>
                  </div>
                ))

              }
            </div>
            : ""
        }




      </div>

    </div>
  )
}

export default Scorecard;