import React, { useState, useEffect } from 'react';
import "./Schedule.css";
import { fetchSchedule } from "./../../redux/Reducers/scheduleSlice"
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import Error from "./../Error/Error";
const Schedule = () => {

    const [internationalActive, setInternationalActive] = useState(true);
    const [womenActive, setWomenActive] = useState(false);
    const [leagueActive, setLeagueActive] = useState(false);
    const [domesticActive, setDomesticActive] = useState(false);
    const dispatch = useDispatch();
    const { schedule, loading, rejected } = useSelector((state) => state.schedule);
    let matchesArr = schedule?.matchScheduleMap;

    const activeOptionsHandlerIntl = () => {
        dispatch(fetchSchedule("international"));
        setInternationalActive(true);
        setWomenActive(false);
        setLeagueActive(false);
        setDomesticActive(false);
    }
    const activeOptionsHandlerWomen = () => {
        dispatch(fetchSchedule("women"));
        setInternationalActive(false);
        setWomenActive(true);
        setLeagueActive(false);
        setDomesticActive(false);
    }
    const activeOptionsHandlerLeague = () => {
        dispatch(fetchSchedule("league"));
        setInternationalActive(false);
        setWomenActive(false);
        setLeagueActive(true);
        setDomesticActive(false);
    }
    const activeOptionsHandlerDomestic = () => {
        dispatch(fetchSchedule("domestic"));
        setInternationalActive(false);
        setWomenActive(false);
        setLeagueActive(false);
        setDomesticActive(true);
    }
    useEffect(() => {
        dispatch(fetchSchedule("international"));
    }, [dispatch])

    const testFunction = (item) => {
        let startDate = new Date();
        if (item?.matchInfo?.[0]?.startDate && !isNaN(Date.parse(item?.matchInfo?.[0]?.startDate))) {
            startDate = new Date(item?.matchInfo?.[0]?.startDate);
        }
        return startDate;
    }

    return (
        <div className='scheduleContainer'>
            <div className="scheduleHeader">
                <div><h1>Cricket Matches Schedule</h1></div>
                <div className='scheduleOptions'>
                    <span onClick={activeOptionsHandlerIntl} className={internationalActive === true ? 'active' : ''} >International</span>
                    <span onClick={activeOptionsHandlerWomen} className={womenActive === true ? 'active' : ''} >Women</span>
                    <span onClick={activeOptionsHandlerLeague} className={leagueActive === true ? 'active' : ''} >League</span>
                    <span onClick={activeOptionsHandlerDomestic} className={domesticActive === true ? 'active' : ''} >Domestic</span>
                </div>
            </div>

            {

                internationalActive === true ?
                    <>
                        {
                            loading ? <Loader />
                                :
                                <>
                                    {
                                        rejected ? <Error />
                                            :
                                            <>
                                                {
                                                    matchesArr && matchesArr?.filter(x => x.scheduleAdWrapper?.date !== undefined).map((item, index) => (
                                                        <div key={index} className="scheduledMatches">
                                                            <div className="scheduledMatchDate">
                                                                <p>{item?.scheduleAdWrapper?.date}</p>
                                                            </div>
                                                            {
                                                                item.scheduleAdWrapper.matchScheduleList && item.scheduleAdWrapper.matchScheduleList.map((item, index) => (
                                                                    <div key={index} className="scheduledMatchInfo">
                                                                        <div className="seriesName">
                                                                            <p>{item.seriesName}</p>
                                                                        </div>
                                                                        <div className="teamsInfo">
                                                                            <p>{item?.matchInfo?.[0]?.team1?.teamName} vs {item?.matchInfo?.[0]?.team2?.teamName}, {item?.matchInfo?.[0]?.matchDesc}</p>
                                                                            <p>{item?.matchInfo?.[0]?.venueInfo?.ground}, {item?.matchInfo?.[0]?.venueInfo?.city} </p>
                                                                        </div>
                                                                        <div className="scheduledMatchTime">
                                                                            <p>{`${testFunction(item)}`}</p>
                                                                        </div>
                                                                    </div>
                                                                ))

                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </>
                                    }
                                </>
                        }
                    </>
                    : ""
            }
            {

                womenActive === true ?
                    <>
                        {
                            loading ? <Loader />
                                :
                                <>
                                    {
                                        rejected ? <Error />
                                            :
                                            <>
                                                {
                                                    matchesArr && matchesArr?.filter(x => x.scheduleAdWrapper?.date !== undefined).map((item, index) => (
                                                        <div key={index} className="scheduledMatches">
                                                            <div className="scheduledMatchDate">
                                                                <p>{item?.scheduleAdWrapper?.date}</p>
                                                            </div>
                                                            {
                                                                item.scheduleAdWrapper.matchScheduleList && item.scheduleAdWrapper.matchScheduleList.map((item, index) => (
                                                                    <div key={index} className="scheduledMatchInfo">
                                                                        <div className="seriesName">
                                                                            <p>{item.seriesName}</p>
                                                                        </div>
                                                                        <div className="teamsInfo">
                                                                            <p>{item?.matchInfo?.[0]?.team1?.teamName} vs {item?.matchInfo?.[0]?.team2?.teamName}, {item?.matchInfo?.[0]?.matchDesc}</p>
                                                                            <p>{item?.matchInfo?.[0]?.venueInfo?.ground}, {item?.matchInfo?.[0]?.venueInfo?.city} </p>
                                                                        </div>
                                                                        <div className="scheduledMatchTime">
                                                                            <p>{`${testFunction(item)}`}</p>
                                                                        </div>
                                                                    </div>
                                                                ))

                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </>
                                    }
                                </>
                        }
                    </>
                    : ""
            }
            {

                leagueActive === true ?
                    <>
                        {
                            loading ? <Loader />
                                :
                                <>
                                    {
                                        rejected ? <Error />
                                            :
                                            <>
                                                {
                                                    matchesArr && matchesArr?.filter(x => x.scheduleAdWrapper?.date !== undefined).map((item, index) => (
                                                        <div key={index} className="scheduledMatches">
                                                            <div className="scheduledMatchDate">
                                                                <p>{item?.scheduleAdWrapper?.date}</p>
                                                            </div>
                                                            {
                                                                item.scheduleAdWrapper.matchScheduleList && item.scheduleAdWrapper.matchScheduleList.map((item, index) => (
                                                                    <div key={index} className="scheduledMatchInfo">
                                                                        <div className="seriesName">
                                                                            <p>{item.seriesName}</p>
                                                                        </div>
                                                                        <div className="teamsInfo">
                                                                            <p>{item?.matchInfo?.[0]?.team1?.teamName} vs {item?.matchInfo?.[0]?.team2?.teamName}, {item?.matchInfo?.[0]?.matchDesc}</p>
                                                                            <p>{item?.matchInfo?.[0]?.venueInfo?.ground}, {item?.matchInfo?.[0]?.venueInfo?.city} </p>
                                                                        </div>
                                                                        <div className="scheduledMatchTime">
                                                                            <p>{`${testFunction(item)}`}</p>
                                                                        </div>
                                                                    </div>
                                                                ))

                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </>
                                    }
                                </>
                        }
                    </>
                    : ""
            }
            {

                domesticActive === true ?
                    <>
                        {
                            loading ? <Loader />
                                :
                                <>
                                    {
                                        rejected ? <Error />
                                            :
                                            <>
                                                {
                                                    matchesArr && matchesArr?.filter(x => x.scheduleAdWrapper?.date !== undefined).map((item, index) => (
                                                        <div key={index} className="scheduledMatches">
                                                            <div className="scheduledMatchDate">
                                                                <p>{item?.scheduleAdWrapper?.date}</p>
                                                            </div>
                                                            {
                                                                item.scheduleAdWrapper.matchScheduleList && item.scheduleAdWrapper.matchScheduleList.map((item, index) => (
                                                                    <div key={index} className="scheduledMatchInfo">
                                                                        <div className="seriesName">
                                                                            <p>{item.seriesName}</p>
                                                                        </div>
                                                                        <div className="teamsInfo">
                                                                            <p>{item?.matchInfo?.[0]?.team1?.teamName} vs {item?.matchInfo?.[0]?.team2?.teamName}, {item?.matchInfo?.[0]?.matchDesc}</p>
                                                                            <p>{item?.matchInfo?.[0]?.venueInfo?.ground}, {item?.matchInfo?.[0]?.venueInfo?.city} </p>
                                                                        </div>
                                                                        <div className="scheduledMatchTime">
                                                                            <p>{`${testFunction(item)}`}</p>
                                                                        </div>
                                                                    </div>
                                                                ))

                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </>
                                    }
                                </>
                        }
                    </>
                    : ""
            }









        </div>
    )
}

export default Schedule;