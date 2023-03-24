import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLiveData } from "../../redux/Reducers/liveMatchesSlice";
import { fetchRecentData } from "../../redux/Reducers/recentMatchesSlice";
import { fetchNewsList } from '../../redux/Reducers/newsListSlice';
import { fetchImage } from '../../redux/Reducers/imageSlice'
import { fetchNewsDetail } from '../../redux/Reducers/newsDetailSlice';
import leftArrow from "./../../images/leftArrow.png"
import rightArrow from "./../../images/rightArrow.png"
import Loader from '../Loader/Loader';
import MatchCard from './Cards/MatchCard';
import NewsCard from './Cards/NewsCard';
import get from 'lodash/get';
import Error from "./../Error/Error";
import './Home.css';

const Home = () => {
    const { liveMatches, loading, liveRejected } = useSelector((state) => state.liveMatches);
    const { recentMatches, recentRejected } = useSelector((state) => state.recentMatches);
    const { newsList, newsLoading, newsRejected } = useSelector((state) => state.newsList);
    const { newsDetail } = useSelector((state) => state.newsDetail);
    const { image, imageLoading } = useSelector((state) => state.imageUrl);
    let newsId = newsList?.storyList?.[0]?.story?.id;
    let imageId = newsDetail?.coverImage?.id;

    const dispatch = useDispatch();
    const typeMatchesLive = liveMatches.typeMatches;
    const typeMatchesRecent = recentMatches.typeMatches;

    // flatMap function because the data is in multiple nested arrays
    let liveMatchesArr = typeMatchesLive?.flatMap(match => {
        return match?.seriesMatches?.flatMap(seriesMatch => {
            return seriesMatch?.seriesAdWrapper?.matches ?? [];
        });
    });
    let recentMatchesArr = typeMatchesRecent?.flatMap(match => {
        return match?.seriesMatches?.flatMap(seriesMatch => {
            return seriesMatch?.seriesAdWrapper?.matches ?? [];
        });
    });
    let newsArr = []
    newsArr = get(newsList, 'storyList');

    // for card scrolling
    const liveCardRef = useRef(null);
    const recentCardRef = useRef(null);
    const handleScrollLeftLive = () => {
        liveCardRef.current.scrollLeft -= 800;
    };
    const handleScrollRightLive = () => {
        liveCardRef.current.scrollLeft += 800;
    };
    const handleScrollLeftRecent = () => {
        recentCardRef.current.scrollLeft -= 800;
    };
    const handleScrollRightRecent = () => {
        recentCardRef.current.scrollLeft += 800;
    };

    useEffect(() => {
        dispatch(fetchLiveData());
        dispatch(fetchRecentData());
        dispatch(fetchNewsList());
    }, [dispatch]);

    useEffect(() => {
        // setTimeout to avoid being rate Limited by the API .
        setTimeout(() => {
            if (!newsLoading) {
                dispatch(fetchImage(imageId))
                dispatch(fetchNewsDetail(newsId));
            }
        }, 1000);
    }, [newsLoading, dispatch, newsId, imageId]);


    return (
        <>
            {loading ? <Loader /> :
                <>
                    {
                        liveRejected && recentRejected && newsRejected ? <Error />
                            :
                            <div className="home-container">
                                <div className="match-wrapper">
                                    <a className="card-heading" href="/">Live Matches</a>
                                    <div>

                                        {
                                            liveMatchesArr?.filter(x => x !== undefined).length >= 4 ? <button onClick={handleScrollLeftLive} className='scrollBtn'><img src={leftArrow} alt="<" /></button>
                                                : ""
                                        }
                                        {
                                            //For the situation When api limit is reached and all the elements in the array are undefined.
                                            liveMatchesArr?.every(element => typeof element === 'undefined') ?
                                                <div className='no-matches'><p>No matches to show right now</p></div> :
                                                <div ref={liveCardRef} className="card-container">
                                                    {
                                                        liveMatchesArr && liveMatchesArr?.filter(x => x !== undefined).slice(0, 12).map((liveMatchesArr, index) => (
                                                            <MatchCard key={index} matchesArr={liveMatchesArr} />
                                                        ))
                                                    }
                                                </div>
                                        }
                                        {
                                            liveMatchesArr?.filter(x => x !== undefined).length >= 4 ?
                                                <button onClick={handleScrollRightLive} className='scrollBtn'><img src={rightArrow} alt=">" /></button>
                                                : ""
                                        }
                                    </div>

                                </div>
                                <div className="match-wrapper">
                                    <a className="card-heading" href="/match">Recent Matches</a>
                                    <div>
                                        {
                                            recentMatchesArr?.filter(x => x !== undefined).length >= 4 ?
                                                <button onClick={handleScrollLeftRecent} className='scrollBtn'><img src={leftArrow} alt="<" /></button>
                                                : ""
                                        }
                                        {
                                            //For the situation When api limit is reached and all the elements in the array are undefined.
                                            recentMatchesArr?.every(element => typeof element === 'undefined') ?
                                                <div className='no-matches'><p>No matches to show right now</p></div>
                                                : <div ref={recentCardRef} className="card-container">
                                                    {
                                                        recentMatchesArr && recentMatchesArr?.filter(x => x !== undefined).slice(0, 12).map((recentMatchesArr, index) => (
                                                            <MatchCard key={index} matchesArr={recentMatchesArr} />
                                                        ))
                                                    }
                                                </div>

                                        }
                                        {
                                            recentMatchesArr?.filter(x => x !== undefined).length >= 4 ?
                                                <button onClick={handleScrollRightRecent} className='scrollBtn'><img src={rightArrow} alt=">" /></button>
                                                : ""
                                        }

                                    </div>
                                </div>

                                <div className="match-wrapper3">
                                    <>
                                        {
                                            imageLoading ? <Loader />
                                                :
                                                <>
                                                    {
                                                        newsArr?.every(element => typeof element === 'undefined') ?
                                                            <div className='no-matches'><p>It's quiet for now</p></div> :
                                                            <div className="featured-news">
                                                                <p>{newsDetail?.context}</p>
                                                                <div className="featured-news-headline">
                                                                    <p>{newsDetail.headline}</p>
                                                                    <p>by {newsDetail?.authors?.[0].name} </p>
                                                                </div>
                                                                <div className="featured-news-wrapper">
                                                                    <div className="news-image">
                                                                        <img src={image} alt="failed to fetch " />
                                                                    </div>
                                                                    <div className="news-content">
                                                                        <p>{newsDetail?.content?.[0]?.content?.contentValue}</p>
                                                                        <p>
                                                                            {newsDetail?.content?.[1]?.content?.contentValue}
                                                                            <Link id='readMore' to={`/news/${newsDetail?.id}`} > ...Read More</Link>
                                                                        </p>
                                                                    </div>
                                                                    <p>Source : {newsDetail?.source}</p>
                                                                </div>
                                                            </div>

                                                    }
                                                </>
                                        }
                                    </>
                                </div>

                                <div className="news-list">
                                    <h2>Latest News</h2>
                                    {
                                        newsArr?.every(element => typeof element === 'undefined') ?
                                            <div className='no-matches'><p>No News to show right now</p></div> :
                                            <div className="news-wrapper">
                                                {
                                                    newsArr && newsArr.filter((x, index) => x !== undefined && index !== 1 && index !== 6).map((newsArr, index) => (
                                                        <NewsCard key={index} newsArr={newsArr} />
                                                    ))
                                                }
                                            </div>

                                    }
                                </div>

                            </div>
                    }
                </>
            }
        </>
    )
}

export default Home;