import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./NewsDetail.css";
import { useDispatch, useSelector } from 'react-redux';
import NewsCard from '../Home/Cards/NewsCard';
import get from 'lodash/get';
import { fetchNewsList } from '../../redux/Reducers/newsListSlice';
import { fetchNewsDetail } from '../../redux/Reducers/newsDetailSlice';
import { fetchImage } from '../../redux/Reducers/imageSlice';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
const NewsDetail = () => {
    const { newsId } = useParams();
    const { newsList } = useSelector((state) => state.newsList);
    const { newsDetail, loading, rejected } = useSelector((state) => state.newsDetail);
    const { image } = useSelector((state) => state.imageUrl);
    const dispatch = useDispatch();
    let imageId = newsDetail?.coverImage?.id;
    let newsArr = [];
    newsArr = get(newsList, 'storyList');

    useEffect(() => {
        dispatch(fetchNewsList());
        dispatch(fetchNewsDetail(newsId));
        setTimeout(() => {
            dispatch(fetchImage(imageId));
        }, 100);
    }, [dispatch, newsId, imageId]);

    //Converting Unix timestamp to human readable format
    let publishTime = new Date();
    // if isNaN returns false then only the code inside the if condition runs.
    if (newsDetail?.publishTime && !isNaN(Date.parse(newsDetail?.publishTime))) {
        publishTime = new Date(newsDetail.publishTime);
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
                                <div className='newsPageContainer'>
                                    <div className='newsDetailContainer'>
                                        <div className="newsHeading">
                                            <p id="newsContext">{newsDetail?.context}</p>
                                            <p id="headline"> {newsDetail?.headline} </p>
                                            <p> {newsDetail?.authors?.[0]?.name} </p>
                                            <p>Published on {`${publishTime}`}</p>
                                        </div>
                                        <div className="newsDetailImage">
                                            <img src={image} alt="" />
                                            <p>{newsDetail?.coverImage?.caption}  © {newsDetail?.coverImage?.source}</p>
                                        </div>
                                        <div className="newsDetailContent">
                                            {
                                                newsDetail?.content && newsDetail?.content.filter((item) => item.content !== undefined).map((item, index) => (
                                                    <p key={index} > {item?.content?.contentValue}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="news-List">
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

export default NewsDetail