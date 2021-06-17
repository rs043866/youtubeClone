import React from 'react'
import VideoCard from './VideoCard'
import './RecommendedVideos.css'

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos" >

                <VideoCard 
                    title="Big Companies vs Startups | Which one you should select?"
                    views = "75k views"
                    timestamp = "2 days ago"
                    channel = "Apna College"
                    image = ""
                    channelImage = ""
                />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />

            </div>
        </div>
    )
}

export default RecommendedVideos
