import {useEffect, useState} from "react";

function Authors(){

    const [authors,setAuthors] = useState([]);


    const load=()=>{
        fetch('http://localhost:8000/api/authors')
            .then((response)=>{
                return response.json()
            }).then((data)=>{
            setAuthors(data);

        });
    }
    useEffect(()=>{
        load();
    },[]);

    const authorsList = [];
    authors.forEach((author)=>{
        authorsList.push(
            <tr key={author.id}>
                <td>{author.name}</td>
                <td>{author.surname}</td>
            </tr>
        );
    });



    return(
        <div className="row col-md-4 mt-5">
            <div className="card">
                <div className="card-header">Autorių sąrašas</div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Vardas</th>
                            <th>Pavardė</th>
                        </tr>
                        </thead>
                        <tbody>
                        {authorsList}
                        </tbody>

                    </table>
                </div>

            </div>
        </div>

    );
}

export default Authors;