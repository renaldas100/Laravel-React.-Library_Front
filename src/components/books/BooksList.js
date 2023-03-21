import {useEffect, useState} from "react";
import Book from "./Book";

function BooksList(){

    const [books,setBooks] = useState([]);


    const load=()=>{
        fetch('http://localhost:8000/api/books')
            .then((response)=>{
                return response.json()
            }).then((data)=>{
            setBooks(data);
            // data.forEach((book)=>{
            //     books.push(<li>{book.name})</li>);
            // });

            // console.log(data);
        });
    }
    useEffect(()=>{
        load();
    },[]);

    const booksList = [];
    books.forEach((book)=>{
        booksList.push(
                <Book key={book.id} book={book}></Book>
            );
    });



    return (
        <div className="card">
            <div className="card-header">Knygų sąrašas</div>
            <div className="card-body">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Pavadinimas</th>
                        <th>Autorius</th>
                        <th>ISBN</th>
                        <th>Puslapių sk.</th>
                        <th>Knygos kodas</th>
                    </tr>
                    </thead>
                    <tbody>
                    {booksList}
                    </tbody>

                </table>
            </div>

        </div>
    );
}

export default BooksList;