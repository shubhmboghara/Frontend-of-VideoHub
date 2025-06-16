import React from 'react'
import Likedvideo from '../components/Likedvideo'

function LikedVideos({ showPopup }) {
  return (
    <div> 
        <Likedvideo showPopup={showPopup} />
    </div>
  )
}

export default LikedVideos