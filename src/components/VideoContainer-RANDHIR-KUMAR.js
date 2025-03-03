import React, { useEffect, useState } from "react";
import { YOUTUTBE_VEDIO_API } from "../utils/contants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import axios from "axios";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUTBE_VEDIO_API);
      const json = await data.json();
      setVideos(json.items);
      console.log(YOUTUTBE_VEDIO_API, data, json);
    } catch (error) {
      console.log(error);
    }
  };

  // const getVideos = async () => {
  //   try {
  //     const res = await axios.get(YOUTUTBE_VEDIO_API);
  //     setVideos(res.items);
  //     console.log(res.items);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // console.log()

  return (
    <div className="flex flex-wrap">
      <AdVideoCard info={videos[0]} />
      {videos?.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          {/* {console.log(video)} */}
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
