import React, { useState, useEffect } from "react";
import SearchBar from './SearchBar'
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('buildings');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]); //any time a videos gets changed, any time we get a new list of videos , we are going to select a very first video in the list 

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            onVideoSelect={setSelectedVideo} // video => {setSelectedVideo(video)} isti efekat kao i kad napisemo samo setSelectedVideo
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App;