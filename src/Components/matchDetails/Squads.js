import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Squads.css"
import { Link } from 'react-router-dom';

const Squads = (props) => {
  const { matchInfo } = props;
  const navigate = useNavigate();

  let team1Squad = matchInfo?.team1?.playerDetails
  let team2Squad = matchInfo?.team2?.playerDetails
  // const playerDetailsRedirect = (item) => {
  //   navigate(`player/${item?.id}`)
  // }
  return (
    <div className='squad-container'>
      <div className='team-name-header'>
        <span>{matchInfo?.team1?.name}</span>
        <span>{matchInfo?.team2?.name}</span>
      </div>
      <div className='playing11'><p>Playing XI</p></div>
      <div className="squads">

        {/* team1 players */}
        <div>
          {
            team1Squad && team1Squad.slice(0, 11).map((item) =>
              <span style={item?.playingXIChange === "IN" ? { "backgroundColor": "#daf1ebb0" } : {}} key={item.id} >
                <Link to={`/player/${item?.id}`}>
                  <p className='teamPlayerName'> {item?.fullName}  {item?.captain === true ? "(C)" : ""}  {item?.keeper === true ? "(WK)" : ""}  {item?.playingXIChange === "IN" ? "▲" : ""}</p>
                  <p className='teamPlayerRole'>{item?.role}</p>
                </Link>
              </span>
            )
          }

        </div>


        {/* team2 players */}
        <div>
          {
            team2Squad && team2Squad.slice(0, 11).map((item) =>
              // <span key={item?.id} >
              <span style={item?.playingXIChange === "IN" ? { "backgroundColor": "#daf1ebb0" } : {}} key={item.id} >
                <Link to={`/player/${item?.id}`}>
                  <p className='teamPlayerName' > {item?.playingXIChange === "IN" ? "▲" : ""} {item?.captain === true ? "(C)" : ""} {item?.keeper === true ? "(WK)" : ""} {item?.fullName}</p>
                  <p className='teamPlayerRole' >{item?.role}</p>
                </Link>
              </span>
            )
          }

        </div>

      </div>


      <div className='playing11'><p>Bench</p></div>

      <div className="squads">
        <div>
          {
            team1Squad && team1Squad.slice(11, team1Squad?.length).map((item) =>
              <span style={item?.playingXIChange === "OUT" ? { "backgroundColor": "#fff4f4" } : {}} key={item.id} >
                <Link to={`/player/${item?.id}`}>
                  <p className='teamPlayerName'>{item?.fullName} {item?.playingXIChange === "OUT" ? "▼" : ""} </p>
                  <p className='teamPlayerRole' >{item?.role}</p>
                </Link>
              </span>
            )
          }
        </div>
        <div>
          {
            team2Squad && team2Squad.slice(11, team2Squad?.length).map((item) =>
              <span style={item?.playingXIChange === "OUT" ? { "backgroundColor": "#fff4f4" } : {}} key={item.id} >
                <Link to={`/player/${item?.id}`}>
                  <p className='teamPlayerName'> {item?.playingXIChange === "OUT" ? "▼" : ""} {item?.fullName}</p>
                  <p className='teamPlayerRole'>{item?.role}</p>
                </Link>
              </span>
            )
          }
        </div>

      </div>


    </div >
  )
}

export default Squads