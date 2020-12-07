import React, {useState} from 'react'
import Comments from './Comments'

export default function ImageItem({imageItem}) {
  const [likes, setLikes] = useState(imageItem.likes)

  function handleOnClick() {
    setLikes(likes + 1)
  }

  return (
    <div className="col-md-6 mb-5">
      <img
        className="img-fluid" 
        src={imageItem.imageURL} 
        alt={imageItem.description}
      />
      <strong>{imageItem.title}</strong>
      <p>
        {imageItem.description}
      </p>
      <div onClick={handleOnClick} >
        ♥️ {likes}
      </div>
      <Comments />
    </div>
  )
}
