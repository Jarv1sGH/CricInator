import React from 'react';
import "./PlayerDetails.css";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayerInfo } from "../../redux/Reducers/playerDetails/playerInfoSlice";
import { fetchPlayerCareer } from "../../redux/Reducers/playerDetails/playerCareerSlice";
import { fetchPlayerBatting } from "../../redux/Reducers/playerDetails/playerBattingInfoSlice";
import { fetchPlayerBowling } from "../../redux/Reducers/playerDetails/playerBowlingInfoSlice";
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
const PlayerDetails = () => {
    const dispatch = useDispatch()
    const { playerId } = useParams();
    const { playerInfo, playerInfoLoading } = useSelector((state) => state.playerInfo);
    const { playerCareer, playerCareerLoading } = useSelector((state) => state.playerCareer);
    const { playerBatting, playerBatLoading } = useSelector((state) => state.playerBatting)
    const { playerBowling, playerBowlLoading } = useSelector((state) => state.playerBowling);

    let playerBatArr = []
    // playerBatArr = playerBatting?.values;
    if (Array.isArray(playerBatting?.values)) {
        playerBatArr = playerBatting.values;
    }
    let playerBowlArr = []
    if (Array.isArray(playerBowling?.values)) {
        playerBowlArr = playerBowling?.values;
    }
    let playerCareerArr = []
    if (Array.isArray(playerCareer?.values)) {
        playerCareerArr = playerCareer?.values;
    }
    useEffect(() => {
        dispatch(fetchPlayerInfo(playerId));
        dispatch(fetchPlayerCareer(playerId));
        dispatch(fetchPlayerBatting(playerId));
        dispatch(fetchPlayerBowling(playerId));
    }, [dispatch, playerId])

    return (
        <div className='playerDetailsContainer'>
            <div>
                <div className='profile'>
                    <div className="profileImage">
                        <img src={playerInfo?.image} alt="" />
                    </div>
                    <div className="profileDetail">
                        <h1>{playerInfo?.name}</h1>
                        <h2>{playerInfo?.intlTeam}</h2>
                    </div>
                </div>

                <div className='careerWrapper'>
                    {

                        playerInfoLoading ? <Loader />
                            :
                            <div className="personalInfo">
                                <div>
                                    <h3>Personal Information</h3>
                                    <div><p><b>Born</b> </p> <p> {playerInfo?.DoB}</p></div>
                                    <div><p><b>Birth Place</b> </p> <p> {playerInfo?.birthPlace}</p></div>
                                    <div><p><b>Role</b></p> <p> {playerInfo?.role}</p></div>
                                    <div><p><b>Batting Style </b> </p> <p> {playerInfo?.bat}</p></div>
                                    <div><p><b>Batting Style </b> </p> <p> {playerInfo?.bowl} </p></div>
                                </div>
                                <div className="rankings">
                                    <h3>ICC Rankings</h3>
                                    <div className='matchFormats'>
                                        <p><b>Format </b></p>
                                        <p><b>Test</b></p>
                                        <p><b>ODI</b></p>
                                        <p><b>T20</b></p>
                                    </div>
                                    <div>
                                        <p><b>Batting</b></p>
                                        <p>{playerInfo?.rankings?.bat?.[0]?.testRank ? playerInfo?.rankings?.bat?.[0]?.testRank : "-"}</p>
                                        <p>{playerInfo?.rankings?.bat?.[0]?.odiRank ? playerInfo?.rankings?.bat?.[0]?.odiRank : "-"}</p>
                                        <p>{playerInfo?.rankings?.bat?.[0]?.t20Rank ? playerInfo?.rankings?.bat?.[0]?.t20Rank : "-"}</p>
                                    </div>
                                    <div>
                                        <p><b>Bowling</b></p>
                                        <p>{playerInfo?.rankings?.bowl?.[0]?.testRank ? playerInfo?.rankings?.bowl?.[0]?.testRank : "-"}</p>
                                        <p>{playerInfo?.rankings?.bowl?.[0]?.odiRank ? playerInfo?.rankings?.bowl?.[0]?.odiRank : "-"}</p>
                                        <p>{playerInfo?.rankings?.bowl?.[0]?.t20Rank ? playerInfo?.rankings?.bowl?.[0]?.t20Rank : "-"}</p>
                                    </div>
                                </div>
                                <div className="teams">
                                    <h3>Teams</h3>
                                    <p>{playerInfo?.teams}</p>
                                </div>
                            </div>
                    }



                    <div className="summary">
                            <h3>Batting Career Summary</h3>
                        <div>
                            {
                                playerBatLoading ? ""
                                    :
                                    <div className="battingSummary">
                                        <div className='batSummaryHeader'>
                                            <p>  </p>
                                            {
                                                playerBatArr && playerBatArr?.map((item, index) => (
                                                    <p key={index}>{item?.values[0]}</p>
                                                ))
                                            }
                                        </div>
                                        <div className='batSummary'>
                                            <p><b>Test</b></p>
                                            {
                                                playerBatArr && playerBatArr?.map((item, index) => (
                                                    <p key={index}>{item?.values[1]}</p>
                                                ))
                                            }
                                        </div>
                                        <div className='batSummary'>
                                            <p><b>ODI</b> </p>
                                            {
                                                playerBatArr && playerBatArr?.map((item, index) => (
                                                    <p key={index}>{item?.values[2]}</p>
                                                ))
                                            }
                                        </div>
                                        <div className='batSummary'>
                                            <p><b>T20I</b></p>
                                            {
                                                playerBatArr && playerBatArr?.map((item, index) => (
                                                    <p key={index}>{item?.values[3]}</p>
                                                ))
                                            }
                                        </div>
                                        <div className='batSummary'>
                                            <p><b>IPL</b></p>
                                            {
                                                playerBatArr && playerBatArr?.map((item, index) => (
                                                    <p key={index}>{item?.values[4]}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                            }
                        </div>
                            <h3>Bowling Career Summary</h3>
                        <div>
                            {
                                playerBowlLoading ? ""
                                    :
                                    <div className="bowlingSummary">
                                        <div className='batSummaryHeader'>
                                            <p> </p>
                                            {
                                                playerBowlArr && playerBowlArr?.map((item, index) => (
                                                    <p key={index}>{item?.values[0]}</p>
                                                ))
                                            }
                                        </div>
                                        <div className='batSummary'>
                                            <p><b>Test</b></p>
                                            {
                                                playerBowlArr && playerBowlArr?.map((item, index) => (
                                                    <p key={index}>{item?.values[1]}</p>
                                                ))
                                            }
                                        </div>
                                        <div className='batSummary'>
                                            <p><b>ODI</b></p>
                                            {
                                                playerBowlArr && playerBowlArr?.map((item, index) => (
                                                    <p key={index}>{item?.values[2]}</p>
                                                ))
                                            }
                                        </div>
                                        <div className='batSummary'>
                                            <p><b>T20</b></p>
                                            {
                                                playerBowlArr && playerBowlArr?.map((item, index) => (
                                                    <p key={index}>{item?.values[3]}</p>
                                                ))
                                            }
                                        </div>
                                        <div className='batSummary'>
                                            <p><b>IPL</b></p>
                                            {
                                                playerBowlArr && playerBowlArr?.map((item, index) => (
                                                    <p key={index}>{item?.values[4]}</p>
                                                ))
                                            }
                                        </div>

                                    </div>
                            }
                        </div>



                        {
                            playerCareerLoading ? ""
                                :
                                <div className='careerInfo'>
                                    <h3>Career Information</h3>
                                    {
                                        playerCareerArr && playerCareerArr?.map((item) => (
                                            <div key={item.name}>
                                                <div>
                                                    <p>{item?.name} Debut</p>
                                                    <p>{item?.debut}</p>
                                                </div>
                                                <div>
                                                    <p>Last {item?.name} </p>
                                                    <p>{item?.lastPlayed}</p>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PlayerDetails;