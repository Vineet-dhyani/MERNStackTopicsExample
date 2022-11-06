import React from 'react'
import {books} from "./data";
import Book from "./Book";
function Booklist(){
    return  <div className='booklist'>
          {/* <Book img={firstBook.image} Author={firstBook.author} Title={firstBook.title}/>
          <Book img={secondBook.image} Author={secondBook.author} Title={firstBook.title}>50%</Book> */}
          {books.map((book)=>{
            return <Book key={book.id} {...book}/>
          })}
          </div>
          ;
  }

export default Booklist;
