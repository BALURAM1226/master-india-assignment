import React,{useEffect,useState} from 'react';

const Userbooks = () => {

    const [userbook, setUserBook]= useState([])

    useEffect(() =>{
     const bookdata = JSON.parse(localStorage.getItem("book"));

        setUserBook(bookdata)
    },[])
     console.log('iudkbakbak',userbook)

    return (
        <>
        <div align="center">
          <h1>Your Books</h1>  
          {
        userbook === null || "" ? <div className="">No Books found</div>:
        
        (userbook?.map((book,index)=>{
           return (
             <>
               <div className="book-items" key={index}>
                   <h4>Book Name: {book.bookname}</h4>
                   <p> by {book.publisher}</p>
                   <p> by {book.time}</p>
                 </div>
             </>
           )
         })
         )
       }
        </div>
        </>
    );
}

export default Userbooks;
