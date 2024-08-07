import React from 'react'
import "./model.css"

const Model = ({show,item,onClose}) => {
    if(!show){
        return null;
    }
    let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
        <div className='overlay'>
            <div className='overlay-inner'>
                <button className='close' onClick={onClose}>
                    <i className='fas fa-times'></i>
                </button>
                <div className='inner-box'>
                    <img src={thumbnail} alt='book'/>
                    <div className='info'>
                        <h1>{item.volumeInfo.title}</h1>
                        <h3>{item.volumeInfo.authors}</h3>
                        <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4> <a href={item.volumeInfo.previewLink}><button>More</button></a>
                    </div>
                </div>
                <p className='description'>{item.volumeInfo.description}</p>
            </div>
        </div>
    </>
  )
}

export default Model