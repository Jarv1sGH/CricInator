import React from 'react'
import { useNavigate } from "react-router-dom";
const NewsCard = ({ newsArr }) => {

  const navigate = useNavigate();
  let newsId=newsArr?.story?.id;
  let pubTime = newsArr?.story?.pubTime;
  let published;
  let currentTime = Date.now();
  let difference = currentTime - pubTime;
  let seconds = difference / 1000;
  let minutes = seconds / 60;
  let hours = minutes / 60
  let days = hours / 24


  if (minutes < 60) {
    published = Math.floor(minutes) + " minutes";
  }
  if (hours < 24) {
    published = Math.floor(hours) + " hours";
  }
  if (days >= 1) {
    published = Math.floor(days) + " days";
  }
  const handleOnClick = () => {
    navigate(`/news/${newsId}`);
  }
  return (
    <div onClick={handleOnClick} className='news-card'>
      <p>{newsArr?.story?.hline}</p>
      <p>{published} ago</p>
    </div>
  )
}

export default NewsCard;