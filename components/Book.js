import React from 'react'
import "../stylesheets/Book.css"

const Book = (props)=>{
    const style = {
        width: '100px',
        textAlign : 'center'
    }
    const img = {
        width: '450px',
        height: '300px',
        objectFit: 'scale-down'
    }
    return (
        <div className='Book'>
            <img src={props.url} style={img}/>
            <h1>📖{props.bookName}</h1>
            <h2>Author : {props.author}✍️</h2>
            <h3 className='genre'>Genre : {props.genre}</h3>
            <h3>Published In : {props.year}</h3>
            <p>{props.subject}</p>
            <button onClick={props.delete}>Delete Book📕</button>
            <input style={style} type="text" onChange={props.inputName} placeholder="Update Title"/>
        </div>
    )
}

export default Book