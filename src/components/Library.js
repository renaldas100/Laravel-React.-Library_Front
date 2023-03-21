import {useEffect, useState} from "react";
import BooksList from "./books/BooksList";

function Library(){



    return(
        <div className="row mt-5">

            <div className="col-md-8">
                <BooksList></BooksList>
            </div>

            <div className="col-md-4">

            </div>

        </div>


    )

}

export default Library;