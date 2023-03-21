function Book(props){


    return (
        <tr key={props.book.id}>
            <td>{props.book.name}</td>
            <td>{props.book.author.name} {props.book.author.surname}</td>
            <td>{props.book.isbn}</td>
            <td>{props.book.pages}</td>
            <td>{props.book.book_code}</td>
        </tr>
    );
}

export default Book;