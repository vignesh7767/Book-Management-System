const sortBooksByTitle = (books)=>{
    books.sort((a, b)=>{
        if(a.bookName>b.bookName) return 1;
        else return -1;
    })
    return books;
}

const sortBooksByAuthor = (books)=>{
    books.sort((a, b)=>{
        if(a.author>b.author) return 1;
        else return -1;
    })
    return books
}

const sortBooksBySubject = (books)=>{
    books.sort((a, b)=>{
        if(a.subject.length>b.subject.length) return 1;
        else return -1;
    })
    return books
}

const sortBooksByPublishDate = (books)=>{
    books.sort((a, b)=>{
        if(a.publishedYear>b.publishedYear) return 1;
        else return -1;
    })
    return books
}

const sortAllBooks = (index, books)=>{
    switch(index) {
        case 0:return sortBooksByTitle(books);
        case 1:return sortBooksByAuthor(books);
        case 2:return sortBooksBySubject(books);
        case 3:return sortBooksByPublishDate(books);
    }
}

export {sortAllBooks, 
    sortBooksByAuthor, 
    sortBooksByPublishDate, 
    sortBooksBySubject, 
    sortBooksByTitle
};