import React from 'react'
import { useState } from 'react'
import Book from "./Book"
import {sortAllBooks, sortBooksByAuthor, sortBooksByPublishDate, sortBooksBySubject, sortBooksByTitle} from "../utilities/Sort"
import { getGenre } from "../utilities/Filter"

function BookList() {
    const [books, setBooks] = useState([
        {id:1, bookName:"The Vampire Dairies", author:"Damon Salvatore", publishedYear: 2001, subject: "The series is set in the fictional town of Mystic Falls, Virginia, a town charged with supernatural history. It follows the life of Elena Gilbert (Nina Dobrev), a teenage girl who has just lost both parents in a car accident, as she falls in love with a 162-year-old vampire named Stefan Salvatore (Paul Wesley).", url: "https://ntvb.tmsimg.com/assets/p10700229_b_h10_aa.jpg?w=1280&h=720", genre: "Scifi/Fantasy/Supernatural"},
        {id:2, bookName:"The Originals", author:"Elijah Mikaelson", publishedYear: 2011, subject: "The Originals centers on the Mikealson siblings. The Mikealsons return to New Orleans to get back the city they helped build. When Klaus founds out that Hayley is expecting a child, he will do anything to protect his unborn child against his enemies.", url: "https://w0.peakpx.com/wallpaper/181/735/HD-wallpaper-the-originals-tv-series-2013-poster-the-vampire-diaries-joseph-morgan-the-originals-daniel-gillies-fantasy-trio-phoebe-tonkin-tv-series-werewolf-vampire.jpg", genre: "Scifi/Fantasy/Supernatural"},
        {id:3, bookName:"Legacies", author:"Hope Mikaelson", publishedYear: 2015, subject: "Two years after the events of The Originals, 17-year-old Hope attends the Salvatore School for the Young and Gifted. The school provides a haven where supernatural beings can learn to control their abilities and impulses.", url: "https://wallpaperaccess.com/full/2308395.jpg", genre: "Scifi/Fantasy/Supernatural"},
        {id:4, bookName:"Harry Potter", author: "JK Rowling", subject: "The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).",publishedYear: 2002, url:"https://wallpaperaccess.com/full/541374.jpg", genre: "Scifi/Fantasy"},
        {id:5, bookName: "Dark", author:"Baran bo Odar", subject:"The story follows characters from the fictional village of Winden, Germany, as they pursue the truth in the aftermath of a child's disappearance. They follow connections between four estranged families to unravel a sinister time travel conspiracy which spans several generations.", publishedYear: 2017, url: "https://wallpaperaccess.com/full/3340215.png", genre: "Scifi/Thriller/Mystery/Tragedy"},
        {id:6, bookName: "Stranger Things", author:"Duffer Brothers", subject:"In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.", publishedYear: 2017, url: "https://images3.alphacoders.com/882/882548.jpg", genre: "Thriller/Drama/Supernatural/Horror"},
    ])
    const [showBooks, toggleBooks] = useState(true);
    const [showSortingCriteria, sortBooks] = useState(false);
    const [showFilter, toggleFilter] = useState(false);
    const [showGenre, toggleGenre] = useState(false);
    
    const updateBooks = ()=>{
        const newBooks = books;
        newBooks.map(book=>{
            if(!book.bookName.includes("updated"))
            book.bookName = book.bookName + " updated";
            return book;
        })
        setBooks([...newBooks])
    }

    const changeInput = (event, index)=>{
        const newBooks = books;
        if(event.target.value)
        newBooks[index].bookName = event.target.value;
        else
        newBooks[index].bookName = "default"
        setBooks([...newBooks]);
    }

    const deleteBook = (index)=>{
        const newBooks = books;
        newBooks.splice(index, 1);
        setBooks([...newBooks]);
    }

    const style = {
        color: 'white',
        fontSize: '21px',
        padding: '2px',
        border: '1px solid red',
        borderRadius: '5px',
        backgroundColor: 'Red',
        margin: '5px',
        fontFamily: 'Verdana'
    }

    let bookList = null;
    if(showBooks) {
        bookList = books.map((book, index)=>{
            return (
                <Book 
                bookName={book.bookName} 
                author={book.author}
                year={book.publishedYear}
                subject={book.subject}
                delete={()=>deleteBook(index)}
                key={book.id}
                inputName={(event)=>changeInput(event, index)}
                url={book.url}
                genre={book.genre}
                />
            )
        })
    }

    let sortingCriteria = ["Title", "Author", "Subject", " PublishedOn"];
    let sortingList = null;
    if(showSortingCriteria) {
        sortingList = sortingCriteria.map((item, index)=>{
            const style = {
                width: "100px",
                padding: "3px",
                backgroundColor: "orange",
                margin: "auto",
                cursor: "pointer"
            }
            return (
                <button className='sortButtons' style={style} 
                onClick={()=>{
                    let newBooks = sortAllBooks(index, books);
                    setBooks([...newBooks])
                }}>
                    {item}
                </button>
            )
        })
    }

    let filterList = ['Genre', 'Author', 'Published'];
    let filterDiv = null;
    if(showFilter) {
        let style = {
            cursor: "pointer",
            width: "100px",
            margin: "auto",
            color: 'white',
            backgroundColor: "teal",
            padding: "3px"
        }
        filterDiv = filterList.map((item, index)=>{
            return <button style={style}>{item}</button>
        })
    }

    return (
        <div className='App'>
            <h1 style={style}>Black Friday Sale- 30% Discount available</h1>
            <button onClick={updateBooks}>Update Books</button>
            <button onClick={()=>toggleBooks(!showBooks)}>Toggle Books</button>
            <button onClick={()=>sortBooks(!showSortingCriteria)}>Sort Books</button>
            <button onClick={()=>{toggleFilter(!showFilter)}}>Filter Books</button>
            <br/>
            {sortingList}
            {filterDiv}
            {bookList}
        </div>
    )
}

export default BookList