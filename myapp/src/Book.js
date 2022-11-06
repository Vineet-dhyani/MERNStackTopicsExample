import React from 'react'

const displayTitle=(e)=>{
    console.log(e.target);
    }
    const Book=(props)=>{
            console.log(props);
            const {image,author,title}=props;
            return ( 
            <div className='book' onClick={(e)=>{displayTitle(e)}}>
              <img src={image}/>
              <h3 onMouseOver={(e)=>{displayTitle(e)}}>{title}</h3>
              <h3>{author}</h3>
              {/* <h3>{props.children}</h3> */}
            </div>
            )
    }

export default Book;
