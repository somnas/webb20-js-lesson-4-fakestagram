import React, {useState} from 'react'
import ImageItem from '../components/ImageItem'


export default function ImageListPage() {
  
  const [imageList, setImageList] = useState([]);
 
  console.log(imageList);
 
  return (
    <>
      <h2>Instagram</h2>      
      <div className="row">
        {imageList.map( imageItem => {
          return <ImageItem 
            key={imageItem.id} 
            imageItem={imageItem} 
          />
        } )}
      </div>
    </>
  )
}
