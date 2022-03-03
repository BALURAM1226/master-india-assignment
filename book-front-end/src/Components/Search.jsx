import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "./search.css"
import {Link} from "react-router-dom"
    const Search = () => {

    const [ book, setBook]= useState([]);
    const [ saveBook, setSavebook]= useState([]);
    const [searchInput, setSearchInput] = useState('')


       const searchBooks = async ()=> {

        try{
          if(searchInput === ""){
            alert("Please Enter a Bookname");
          }else{
            const res = await axios.get(`http://localhost:5000/api/v1/books/${searchInput}`)
            console.log(res)
            setBook(res.data)
          }
     
        }
        catch(err){
         console.log(err)
        }

       }

  
      async function fetchbooks(){
        const res = await axios.get('http://localhost:5000/api/v1/books').catch(err => console.log(err));
        console.log(res)
        setBook(res.data)
      }


      const handleBookSave = (bookname,publisher,time,id)=> {
       const  bookData={
          id:id,
          bookname:bookname,
          publisher:publisher,
          time:time,
        }
        setSavebook([...saveBook,bookData])

        localStorage.setItem("book", JSON.stringify([...saveBook,bookData]))
      }
    
    
      useEffect(()=>{
          fetchbooks();
          const getbooks = JSON.parse(localStorage.getItem("book"));
          if(getbooks == null){
            return;
          }else{
          setSavebook(JSON.parse(localStorage.getItem("book")))
            
          }
        
      },[])
 
    return (
        <div align="center">
           <input className="search-input" type="search" placeholder="Search" 
           onChange={(e) => setSearchInput(e.target.value)}
           />   
             <button onClick={searchBooks} className="find-btn">find book</button>
            <Link to="/userbooks">Your saved books</Link>
            <h1 align="center">All books</h1>
       <div className="book-container">
     {
            book === [] || book.length === 0|| "" ? <div className="">No Books found</div>:
        
            (book?.map((book,index)=>{
              return (
             <>
               <div className="book-items" key={index}>
                   <h4>Book Name: {book.bookname}</h4>
                   <p> by {book.publisher}</p>
                   <p> by {book.time}</p>
                   <button onClick={()=> handleBookSave(book.bookname,book.publisher,book.time,book._id)}>save book</button>
                 </div>
             </>
           )
         })
         )
       }
       </div>
 
        </div>
    );
}

export default Search;
